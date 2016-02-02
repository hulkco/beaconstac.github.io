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

	`$ cd path_to_project`
	
	`$ pod init`

2. This will create a  file named Podfile in the directory. Open this file in a text editor and add the following line before the end:

	`$ pod 'Beaconstac`

3. Save the Podfile
4. Run the pod install command. This will install the APIs specified in the Podspec, along with any dependencies they may have.

	`$ pod install`

5. The above step will also create a Workspace file for your project in the same directory. Open (double-click) your <project name>.xcworkspace file to launch the project. From now on, make sure you open the project using .xcworkspace file.

####Step 3: Grab the developer token and organization ID
1. Go to the Beaconstac Admin Console.
2. Click on your username on top right, then click on Account from drop-down.
3. Copy your organization id and developer token (to be used in the code)

    ![find the organization id and developer token](http://i.imgur.com/WGzSkkF.png)

####Step 4: Add the API key to app and initialize SDK
Add the following import statement in your class:

`#import <Beaconstac/Beaconstac.h>`

Beaconstac class is a single point of entry into SDK. It gives access to all the useful methods and properties. Initialise the Beaconstac shared instance in your class using:

`[Beaconstac sharedInstanceWithOrganizationId:323 developerToken:@"d4cc0a80667eff689537916a01bcd51620458966"]`

Make sure you replace the organization id and developer token with the values from #3. All the method calls and properties of Beaconstac class can be accessed from anywhere in the app using a shared instance of the class. For example:

`[[Beaconstac sharedInstance] rangedBeacons]`

To detect beacons, your app needs to request for authorization for location services. Beaconstac SDK takes care of making the relevant calls in the background. However, you need to add a new field in your Target’s Info.plist, NSLocationAlwaysUsageDescription with relevant reason for using beacons and location services - this would be shown to the user to request permission. [This is mandatory for users on iOS 8 and above.]

   ![Field for Location Usage in Info.plist](http://i.imgur.com/gTQkvGD.png)

####Step 5: Start Ranging beacons 
Ranging is the process of discovering all beacons in the vicinity of phone with a given UUID. To begin ranging beacons, call the following method and pass the UUID of the beacon. Make sure to enter exact UUID with ‘-’ signs, else ranging will fail to start. The second parameter is an identifier string which is used by iOS to identify which callback is for which UUID

`[beaconstac startRangingBeaconsWithUUIDString:@"F94DBB23-2266-7822-3782-57BEAC0952AC" beaconIdentifier:@"MobstacRegion" filterOptions:nil];`

The SDK will start monitoring the beacon region associated with the UUID. It will range for the beacons only if you are inside the region. This is done to optimise battery usage. The ranging automatically stops as soon as the user moves out of the beacon region.
You should set the beaconstac delegate before starting ranging to receive callbacks:

`[beaconstac setDelegate:self];`

At any point, you can stop ranging beacons by calling: 

`[beaconstac stopRangingBeacons]`

**Beacon detection in background:**
If you want to continue scanning for beacons in the background, you need to set the allowRangingInBackground property to True. Also, make sure to enable BackgroundLocationUpdate mode in Capabilities

`[[Beaconstac sharedInstance] setAllowRangingInBackground:@YES];`
