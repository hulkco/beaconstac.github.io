As an iBeacon developer, chances are that you’ve been asked this question when you’ve demonstrated your beacon-enabled app: “Can the app notify my CRM server of the user’s beacon interactions?”

It is an important question because, in most industries, the piece of software that is the central repository of all customer data is usually a CRM system. From that standpoint, it makes sense that proximity events from a customer’s visit to a physical space should be accessible to the CRM server.

In Beaconstac, proximity-based behavior and messaging in your app is controlled through rules and actions, and one of the types of actions that we support is a Webhook, that you can use to easily push proximity events from your app to a 3rd-party server, which could be a CRM or any other system.

Configuring Webhook actions in a rule

To use the Webhook action, add an action of type “Webhook” to your rule, and specify the HTTP URL that should receive the proximity events from your app. You can add as many URLs as you like by adding multiple actions to the same rule.

Screen Shot 2015-04-09 at 4.40.14 PM

In your app, you will need to ensure the following code is present in the ruleTriggered delegate to handle Webhook actions.

// Tells the delegate that a rule is triggered with corresponding list of actions. 
- (void)ruleTriggeredWithRuleName:(NSString *)ruleName actionArray:(NSArray *)actionArray
{
    for (MSAction *action in actionArray) {
        if (action.type == MSActionTypeWebhook) {
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
Receiving a Webhook notification

Configuring your server to receive a new webhook is no different from creating any endpoint on your website. With PHP, you might create a new .php file on your server; with a framework like Django, you would add a new view with the desired URL.

Remember, with webhooks, your server is the server receiving the request, with the webhook data sent as JSON in the request’s body. Here’s an example of how you would write a webhook handler in Django:

import json
from django.http import HttpResponse

# Using Django
def my_webhook_view(request):
  # Retrieve the request's body and parse it as JSON
  event_json = json.load(request.body)

  # Do something with event_json

  return HttpResponse(status=201)
view rawgistfile1.py hosted with ❤ by GitHub
The JSON data posted to the webhook handler captures all the relevant data related to the proximity event. Here’s an example of the JSON data sent to a webhook handler:

{
  "sdk": "0.9.13",
  "timestamp": "2015-04-15 09:19:28 +0000",
  "event": {
    "type": "beaconEnter",
    "action": {
      "name": "Listen to Music when you come close to a beacon placed at the Music kiosk.",
      "id": 1301
    },
    "rule": {
      "id": 597,
      "name": "Music 09_Apr_2015_00_06_04"
    }
  },
  "location": {
    "lng": -73.984638,
    "lat": 40.759211,
    "regionIdentifier": "Mobstac1",
    "campOnBeacon": "B9407F30-F5F8-466E-AFF9-25556B57FE6D:34950:53825"
  }
}
view rawgistfile1.json hosted with ❤ by GitHub
