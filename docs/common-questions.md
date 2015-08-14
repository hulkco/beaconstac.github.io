---
layout: default
---

#Common Questions

**The beacon does not seem to be working?**

Beaconstac beacons require 4 AA batteries to power up, but these batteries are not shipped as part of the Starter Kit. To power the beacon on, open the battery compartment and place the batteries inside. You should see a green LED blink for 2-3 seconds after inserting the batteries, which means the beacon is powered on.

**Do you have any other model of beacons which are smaller in size? Do you sell USB beacons?**

Currently, these are the only models available. We will be coming out with new hardware models in the future.

**Can I change the UUID of the beacon?**

Unfortunately, you cannot change the UUIDs of the beacons because________________. However, we do allow you to change the Major and Minor for each beacon

**Are Beaconstac beacons weather proof?**

Our beacons are dust proof and can withstand temperatures up to 45 deg Celcius. However, they are not water proof so please avoid mounting them outdoors. 

**Can I detect beacons if my phone’s bluetooth is off?**

In order to interact with the beacon, Bluetooth needs to be turned on and the customer needs to have the app downloaded on their phone.  A beacon by itself does nothing. However, you can trigger a notification reminder to “turn on the bluetooth” with our Geofence feature.

**How do I monitor the health of all my beacons?**

You can monitor parameters such as battery level, temperature, signal strength, etc. with the Beaconstac app. All of this data gets posted onto our servers. You can then log into the admin console dashboard to see the health of all your beacons.

**Can I change the UUID/major/minor using Android app?**

The app is soon to be launched on Android. Once launched you can change the Major and Minor numbers, but not the UUID. 


**What is the broadcast range and frequency (advertising interval) of the beacons?**

The broadcast power is:  -30 dBm (decibel-milli watts) to +4dBm
The broadcast range/distance: 5cm to 80m (clear line of sight)
The Advertising interval/frequency: 100ms (milliseconds) to 1250 ms OR 10Hz to 0.8Hz


**What is the optimum advertising interval that I can set?**

Beaconstac SDK works best at an advertising interval of 200ms


**Can I set different proximity range/distance for different beacons? e.g. some at 3m and some at 1m?**

Yes, you can. This can be set up changing the broadcasting power of the beacons. The default setting is: -8dBm which will trigger your configured Rules at approximately 2m. For instance, you can change the broadcasting power to -16dBm which would then trigger the Rules at a distance of 30cm. 


**What is the battery life of Beaconstac beacons?**

At the default broadcast range of -8dBm, the battery life is over 1 year
At the broadcast range of -16dBm, the battery life is between 2 -3 years
At the maximum broadcast range of +4dBm, the battery life is < 6 months

**How can I reset my password?**

You can click on the “Forgot password” option either in the Beaconstac app or on our admin console. You will receive an email to your registered email id  with a link to reset/change the password.

**My app could not detect the Beaconstac Starter kit beacons?**

Please ensure that your beacons are powered up with AA batteries and in working condition. In case you have reset the default broadcast power of the beacons to the lowest possible range (i.e. -30dBm), your app will detect the beacon when the device is within the range of 5 cm.

**How can I change the “Rules” icons in the Beaconstac app?**

Currently it is not possible to add your own icons in the Beaconstac app. We have hardcoded 6 icons in the app: Music, Sunglasses, Shoes, Beach, Lingerie, Offers

**As a mall owner, can I give access to all my brands into your portal so that the brands can create their own campaigns? OR 
Is it possible to create sub accounts in your admin console to be shared with different members?**

Unfortunately, it is not possible at this point in time.


**What is a geofence, how do I enable it?**

Geofencing is a technology to create a virtual boundary around a real world location to trigger certain actions (text, webhooks, cards etc) as soon as the boundary is crossed over. You can enable geofence with our APIs in the SDKs or from the “Places” feature in the menu option of our admin console


**How can I customize the notification message when a geofence is entered?**

Currently, the customization of messages has to be handled at the app level.

**How can I send a push notification to the app?**

Our admin console itself does not send push notifications. This has to be handled at the app level. However, we do offer web hooks (under “Rules” in our admin console) to third party systems (CRMs, Loyalty Management Systems etc) and help to trigger push notifications.

**What is offered under Beaconstac analytics?**

You can track unique footfalls, average time spent, frequency of visits, recency of visits, Rules triggered etc. All these statistics will be available on the admin console dashboard. You can generate heat maps based on average time spent, frequency of visits etc??**

**What different platforms are supported by your SDK?**

We currently support iOS and Android platforms.

**How can I view cards with your SDK?**

Our SDK will allow you to sync the content for the cards, but the card UI itself needs to be designed and handled at the app level. However, we have created preconfigured card layouts to be experienced in our Beaconstac app. To learn more about how to use these card templates in conjunction with Rules, check out this post on our developer blog. 

**Can we use our own dashboard and leverage your APIs or do we need to only use your dashboard?**

Because Beaconstac offers an end-to-end solution, currently you can only use our dashboard. 

**Can we integrate data from other enterprise backends into Beaconstac?**

Yes, this is possible by using “Custom Attributes”, in which you can use attributes such as age, gender and reward points from your enterprise system or third-party system to define rules. More information on “Custom Attributes” and how to implement them can be found on this post on our developer blog. 

**Is there frequency capping on the marketing?** 

Yes. Frequency capping on campaigns can be done in the app code.

**How to find out beacon health status and battery level?**

It’s easy - just login to your account on the Beaconstac iPhone or Android app. Next, navigate to Home -> My Beacons; here, you need to select a Beacon whose health and battery level you would like to know. Scroll down and you will see battery level, other hardware-related info along with the last updated time.

Also, if you would like to modify Transmit Power and Advertising Interval, you can do so by going close to a beacon and tapping ‘Edit’.

[Requires screenshots of the app’s latest version]

**Can I send lock-screen notifications to my users?**
As long as the app is installed on your users device, you can send lock-screen notifications. Beaconstac SDK leverages iOS 8’s Core Location framework and is capable of sending notification even when the app is not running in the background.

[Screenshot of a lock screen notification with the icon at bottom-left]

**I already have an app. Can I integrate beaconstac into it?**

https://github.com/Beaconstac/iOS-SDK#integration-with-your-existing-project-in-xcode
