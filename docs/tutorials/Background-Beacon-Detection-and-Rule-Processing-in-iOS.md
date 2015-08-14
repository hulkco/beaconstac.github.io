---
layout: default
title: Background Beacon Detection and Rule Processing in OS
---
# Background Beacon Detection and Rule Processing in OS

In iOS app development, it is common to have to deal with the app entering what is known as the background state, which occurs when your app gets interrupted by a call or some other notification that makes the user switch to another app than the one they originally were on. An app in the background state can only execute a limited range of tasks, such as download content, track a user’s location, etc.

When detecting and ranging for beacons in an iOS app, one of the problems that frequently comes up is that of ranging for beacons even when the app is the background state. While iOS guarantees that an app will be woken up when a region is entered or exited, there is no way to initiate ranging in the background state.


Background beacon monitoring in Beaconstac

One way to address this problem is to use the region entry callback to start ranging for beacons in the background so that your app’s normal processing can react to beacon proximity conditions. On exiting the region, the app stops ranging to ensure that there is no extra battery spent on ranging for beacons when outside the region.

This is essentially how Beaconstac detects beacons and performs associated rule processing even when the app is in the background. The SDK notifies the app of beacon events such as region entry, beacon camp-on, and beacon exit. It ensures that all the beacons and events defined for the app will be detected and triggered in the background just as though the app was in the foreground. In the scenario that the app is not running, Beaconstac makes iOS range for the given regions and wakes the app up for a few seconds when the relevant beacon region is discovered.

You can use these few seconds to pop a local notification up that can persuade the consumer to tap the notification thereby bringing the app to the foreground.

// Tells the delegate about the camped on beacon among available beacons.
- (void)campedOnBeacon:(MSBeacon*)beacon amongstAvailableBeacons:(NSDictionary *)beaconsDictionary
{
    NSLog(@"DemoApp:campedOnBeacon: %@, %@", beacon.beaconKey, beaconsDictionary);
    
    UILocalNotification *notification = [[UILocalNotification alloc] init];
    notification.alertBody = [NSString stringWithFormat:@"Camped on to Beacon: %@, %@", beacon.major, beacon.minor];
    [[UIApplication sharedApplication]presentLocalNotificationNow:notification];
}
view rawgistfile1.m hosted with ❤ by GitHub
 IMG_0018
In addition to beacon events, the proximity rule engine built into the SDK will evaluate all your rules and actions automatically in the background, and invoke the ruleTriggeredWithRuleName callback whenever a rule was successfully matched. You could also use this feature creatively for many other things, such as having the app post some data to a server in the background via the “Webhook” action type:
// Tells the delegate that a rule is triggered with corresponding list of actions. 
- (void)ruleTriggeredWithRuleName:(NSString *)ruleName actionArray:(NSArray *)actionArray
{
    NSLog(@"DemoApp:Action Array: %@", actionArray);
    //
    // actionArray contains the list of actions to trigger for the rule that matched.
    //
    
    for (MSAction *action in actionArray) {

        UILocalNotification *notification = [[UILocalNotification alloc] init];
        notification.alertBody = action.message;
        [[UIApplication sharedApplication]presentLocalNotificationNow:notification];
        
        if (action.type == MSActionTypePopup) {
            //
            // Show an alert
            //
            NSLog(@"DemoApp:Text Alert action type");
            NSString *message = action.message;
            [[[UIAlertView alloc] initWithTitle:ruleName message:[NSString stringWithFormat:@"%@",message] delegate:self cancelButtonTitle:@"Dismiss" otherButtonTitles:nil] show];
            
        } else if (action.type == MSActionTypeWebpage) {
            //
            // Handle webpage by popping up a WebView
            //
            NSLog(@"DemoApp:Webpage action type");
            CGRect screenRect = [[UIScreen mainScreen] bounds];
            UIWebView *webview=[[UIWebView alloc]initWithFrame:screenRect];
            
            NSURL *nsurl= action.message;
            NSURLRequest *nsrequest=[NSURLRequest requestWithURL:nsurl];
            [webview loadRequest:nsrequest];
            
            [self.view addSubview:webview];
            
            // Setting title of the current View Controller
            self.title = @"Webpage action";
            
        } else if (action.type == MSActionTypeCustom) {
            //
            // Custom JSON converted to NSDictionary - it's up to you how you want to handle it
            //
            NSDictionary *customActionDict = action.message;
            NSLog(@"DemoApp:Custom action type: %@", customActionDict);
            
        } else if (action.type == MSActionTypeWebhook) {
            //
            // Pass the POST params you want to pass and additional HTTP headers, if any.
            // Please note that timestamp and data available in factsDictionary is automatically posted.
            // Please note that HTTP headers sent from the portal are set by default
            //
            [action executeWebhookWithParams:nil headers:nil WithCompletionBlock:^(NSNumber *statusCode, NSDictionary *response, NSError *error) {
                if ([statusCode intValue] == 201) {
                    NSLog(@"Successful");
                } else {
                    NSLog(@"Error: %@", [error localizedDescription]);
                }
            }];
        }
    }
}
view rawgistfile1.m hosted with ❤ by GitHub
If you’re building an iBeacon-enabled app, download the improved Beaconstac SDK and tell us what you think.
