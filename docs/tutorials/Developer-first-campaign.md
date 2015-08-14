---
layout: default
title: Developer - Working with your first campaign
---
# Developer: Working with your first campaign

Beaconstac works with proximity messaging around beacons on the basis of “rules” and “actions”. A rule is a set of conditions, including proximity, which will have to be satisfied for some “actions” to be triggered.

In simple terms, a rule is structured like this: if conditions are true, then perform a set of actions. An action can range from sending a simple text alert to sending multimedia and rich content to using custom actions like webhooks to call a 3rd-party server.

Beaconstac allows you to define multiple actions to be triggered with one rule. For example, in the portal, you’d define the conditions for a rule like this:

![Compose Rule](http://i.imgur.com/VJAyLvg.png)

And you’d add the actions to be triggered by the rule like this:

What the MSAction class does is to expose the action to you through the SDK in an easy to use manner. The MSAction class has the following properties:

![Set Actions](http://i.imgur.com/9iUhlca.png)

actionID: the ID of the action
name: friendly name specified for that action
type: type of action – can be text alert, webpage, webhook, custom (JSON payload), etc.
message: corresponding message tagged with the action type – can be text or URL depending on the action type
ruleID: the ID of the rule associated with this action
actionMeta: a dictionary containing all extra information related to the action
You can, for instance, write your own handler for how the text alert action should be handled in the app and how the message is displayed, like a notification or an alert. Here’s an example code snippet:

```

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

```
