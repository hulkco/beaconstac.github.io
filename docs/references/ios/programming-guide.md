---
layout: post
title: Programming Guide for iOS
---

###Programming Guide for iOS

To integrate Beaconstac with in iOS app, you need to download the Beaconstac SDK and ensure that you have developer token and organization id. This guide will walk you through the steps to integrate the SDK in your Objective-C app and use the SDK api to detect beacons and show messages to user. With some modification, it can also be used in Swift app. For more information, see http://devblog.beaconstac.com/integrating-beaconstac-into-your-swift-project.

####Step 1: Get Xcode
To build a project using the Beaconstac SDK for iOS, you need version 6.3 or later of Xcode.

####Step 2: Get Beaconstac SDK using CocoaPods
The iOS SDK is available on [CocoaPods](https://cocoapods.org/pods/Beaconstac). CocoaPods is an open source dependency manager for Swift and Objective-C Cocoa projects.
If you don't already have the CocoaPods tool, install it on OS X by running the following command from the terminal. For details, see the [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).
		$ sudo gem install cocoapods
Once Cocoapods is installed, you can install Beaconstac SDK in your Xcode project.

1. Open a terminal, cd into your project directory and run pod init.

		$ cd path_to_project
		$ pod init

2. This will create a  file named Podfile in the directory. Open this file in a text editor and add the following line before the end:

		$ pod 'Beaconstac

3. Save the Podfile
4. Run the pod install command. This will install the APIs specified in the Podspec, along with any dependencies they may have.

		$ pod install

5. The above step will also create a Workspace file for your project in the same directory. Open (double-click) your <project name>.xcworkspace file to launch the project. From now on, make sure you open the project using .xcworkspace file.

####Step 3: Grab the developer token and organization ID
1. Go to the Beaconstac Admin Console.
2. Click on your username on top right, then click on Account from drop-down.
3. Copy your organization id and developer token (to be used in the code)

    ![find the organization id and developer token](http://i.imgur.com/WGzSkkF.png)

####Step 4: Add the API key to app and initialize SDK
Add the following import statement in your class:
		#import <Beaconstac/Beaconstac.h>

Beaconstac class is a single point of entry into SDK. It gives access to all the useful methods and properties. Initialise the Beaconstac shared instance in your class using:

		[Beaconstac sharedInstanceWithOrganizationId:323 developerToken:@"d4cc0a80667eff689537916a01bcd51620458966"];

Make sure you replace the organization id and developer token with the values from #3. All the method calls and properties of Beaconstac class can be accessed from anywhere in the app using a shared instance of the class. For example:

		[[Beaconstac sharedInstance] rangedBeacons]

To detect beacons, your app needs to request for authorization for location services. Beaconstac SDK takes care of making the relevant calls in the background. However, you need to add a new field in your Target’s Info.plist, NSLocationAlwaysUsageDescription with relevant reason for using beacons and location services - this would be shown to the user to request permission. [This is mandatory for users on iOS 8 and above.]

   ![Field for Location Usage in Info.plist](http://i.imgur.com/gTQkvGD.png)

####Step 5: Start Ranging beacons 
Ranging is the process of discovering all beacons in the vicinity of phone with a given UUID. To begin ranging beacons, call the following method and pass the UUID of the beacon. Make sure to enter exact UUID with ‘-’ signs, else ranging will fail to start. The second parameter is an identifier string which is used by iOS to identify which callback is for which UUID

		[beaconstac startRangingBeaconsWithUUIDString:@"F94DBB23-2266-7822-3782-57BEAC0952AC" beaconIdentifier:@"MobstacRegion" filterOptions:nil];

The SDK will start monitoring the beacon region associated with the UUID. It will range for the beacons only if you are inside the region. This is done to optimise battery usage. The ranging automatically stops as soon as the user moves out of the beacon region.
You should set the beaconstac delegate before starting ranging to receive callbacks:

		[beaconstac setDelegate:self];

At any point, you can stop ranging beacons by calling:

		[beaconstac stopRangingBeacons]

**Beacon detection in background:**

If you want to continue scanning for beacons in the background, you need to set the allowRangingInBackground property to True. Also, make sure to enable BackgroundLocationUpdate mode in Capabilities section of your Target

		[[Beaconstac sharedInstance] setAllowRangingInBackground:@YES];

####Step 6: Implement delegate methods to receive callbacks

Make sure your class conforms to the BeaconstacDelegate protocol:

		@interface UIViewController ()<BeaconstacDelegate>

**Beacon ranging:** 
If this delegate is implemented the SDK will call it every second with a dictionary of ranged beacons:

		- (void)beaconstac:(Beaconstac*)beaconstac rangedBeacons:(NSDictionary*)beaconsDictionary
		{
			NSLog (@"Ranged beacons: %@",beaconsDictionary); 
		}


**Beacon CampOn:**
Once the user comes close to a beacon and it satisfies the campOn criteria, the app will receive this callback, passing reference to MSBeacon object which is camped on and a dictionary of all the beacons in range.

		- (void)beaconstac:(Beaconstac*)beaconstac campedOnBeacon:(MSBeacon*)beacon amongstAvailableBeacons:(NSDictionary*)beaconsDictionary
		{
			NSLog (@"Camped on beacon: %@",beacon); 
		}


**Rule trigger:**
If there is a rule associated with the campOn beacon on [Admin Console](https://manage.beaconstac.com), the following callback is triggered with the rule name and array of `MSAction` attached to the rule:

		- (void)beaconstac:(Beaconstac*)beaconstac triggeredRuleWithRuleName:(NSString*)ruleName actionArray:(NSArray*)actionArray
		{
			NSLog(@"Rule triggered with name %@",ruleName);
			MSAction *action = [actionArray firstObject];
		}


Note that the first campOn to a beacon automatically syncs all the rules from your account to the device. If you want to explicitly sync rules before campon, you should call the following method. It triggers a completionBlock once the syncing is complete. Any changes made to the rules in the admin console is not automatically synced either. You should call this everytime or wait for app relaunch.

		[beaconstac.ruleProcessor syncWithServerWithCompletionBlock:^(NSNumber *statusCode, NSDictionary *responseJson, NSError *error) {       
			if (error) {
				NSLog(@"Error syncing rule %@",error);
			}
		}]


An `MSAction` could be one of the following object type. This contains action data configured on the Rules page on the Admin Console. The type could be inferred from `type` property in `MSAction` class. The `message` property in `MSAction` refers to the action object which contains data associated with the action. Type cast the `message` property according to the mapping given below and use them as required to create the User Interface for the cards.

1. MSActionTypePopup -  The `action.message` property is type of `NSString` containing text message to be shown in an popup

		NSString *text = action.message;
	
2. MSActionTypeWebpage  -  The action.message property is a NSString URL
3. MSActionTypeCard -  The action.message property is a MSCard object
	
		MSCard *card = action.message;
		NSString *title = card.title;
		MSMedia *image =  [card.mediaArray firstObject];

You should create your own card UI or copy from the example app. Use the above property to show media/text to the user. See example app for more details.

4. MSActionTypeWebhook -  The `action.message` property is a `MSWebhook` object. The webhook as configured on the Admin Console gets executed automatically by the SDK when the rule is triggered. If you want to selectively prevent them from executing, or add additional payloads, you should implement the following delegate methods:

		MSWebhook *webhook = action.message;
		webhook.delegate = self;	

		- (BOOL)webhookShouldExecute:(MSWebhook*)webhook
		{
			return NO;   // This will prevent webhook from executing
		}

		- (NSDictionary*)addPayloadToWebhook:(MSWebhook*)webhook
		{
			return @{@”loyalityPoints”:@200};
		}

		- (void)webhook:(MSWebhook*)webhook executedWithResponse:(NSURLResponse*)response error:(NSError*)error
		{
			if (error) {
				// Show alert to user
			}
		}

5. MSActionTypeCustom -  The `action.message` property is a `NSDictionary` object

6. MSActionTypeNotification - The `action.message` property is an `MSNotification` object with button titles and actions as configured on the Admin Console.
		MSNotification *notify = action.message;
		[notify showInApplication:[UIApplication sharedApplication]];

If you setup Call-to-Action buttons for the notification, implement the following in your `AppDelegate`.	

		- (void)application:(UIApplication *)application handleActionWithIdentifier:(nullable NSString *)identifier forLocalNotification:(UILocalNotification *)notification completionHandler:(void(^)())completionHandler
		{
			[Beaconstac handleNotification:notification forApplication:application];
			completionHandler();
		}

For exact implementation and code snippets, please refer to the Example app on the Github page.


**Beacon Exit:**
If the user moves away from the camped On beacon, the following callback is issued with reference to the MSBeacon object which just got exited.

		- (void)beaconstac:(Beaconstac*)beaconstac exitedBeacon:(MSBeacon*)beacon;


**Beacon Region Enter:**

		- (void)beaconstac:(Beaconstac*)beaconstac didEnterBeaconRegion:(CLBeaconRegion*)region;


**Beacon Region Exit:**

		- (void)beaconstac:(Beaconstac*)beaconstac didExitBeaconRegion:(CLBeaconRegion*)region;


**User location change:**

		- (void)beaconstac:(Beaconstac*)beaconstac didUpdateToLocation:(CLLocation *)newLocation fromLocation:(CLLocation *)oldLocation;


**Server Sync rule sync Failure:**

		- (void)beaconstac:(Beaconstac*)beaconstac failedToSyncRulesWithError:(NSError *)error;


**Server Sync Rule callback**

		- (void)beaconstac:(Beaconstac*)beaconstac didSyncRules:(NSDictionary*)ruleDict withError:(NSError *)error;

