---
layout: post
---

## Common Questions

* ### 1. [The beacon does not seem to be working?](#The beacon does not seem to be working?)

* ### 2. [Do you have any other model of beacons which are smaller in size? Do you sell USB beacons?](#Do you have any other model of beacons which are smaller in size? Do you sell USB beacons?)

* ### 3. [Can I change the UUID of the beacon?](#Can I change the UUID of the beacon?)

* ### 4. [Are Beaconstac beacons weather proof?](#Are Beaconstac beacons weather proof?)

* ### 5. [Can I detect beacons if my phone’s bluetooth is off?](#Can I detect beacons if my phone’s bluetooth is off?)

* ### 6. [How do I monitor the health of all my beacons?](#How do I monitor the health of all my beacons?)

* ### 7. [Can I change the UUID/major/minor using Android app?](#Can I change the UUID/major/minor using Android app?)

* ### 8. [What is the broadcast range and frequency (advertising interval) of the beacons?](#What is the broadcast range and frequency (advertising interval) of the beacons?)

* ### 9. [What is the optimum advertising interval that I can set?](#What is the optimum advertising interval that I can set?)

* ### 10. [Can I set different proximity range/distance for different beacons? e.g. some at 3m and some at 1m?](#Can I set different proximity range/distance for different beacons? e.g. some at 3m and some at 1m?)

* ### 11. [What is the battery life of Beaconstac beacons?](#What is the battery life of Beaconstac beacons?)

* ### 12. [How can I reset my password?](#How can I reset my password?)

* ### 13. [My app could not detect the Beaconstac Starter kit beacons?](#My app could not detect the Beaconstac Starter kit beacons?)

* ### 14. [How can I change the “Rules” icons in the Beaconstac app?](#How can I change the “Rules” icons in the Beaconstac app?)

* ### 15. [As a mall owner, can I give access to all my brands into your portal so that the brands can create their own campaigns? OR Is it possible to create sub accounts in your admin console to be shared with different members?](#As a mall owner, can I give access to all my brands into your portal so that the brands can create their own campaigns? OR Is it possible to create sub accounts in your admin console to be shared with different members?)

* ### 16. [What is a geofence, how do I enable it?](#What is a geofence, how do I enable it?)

* ### 17. [How can I customize the notification message when a geofence is entered?](#How can I customize the notification message when a geofence is entered?)

* ### 18. [How can I send a push notification to the app?](#How can I send a push notification to the app?)

* ### 19. [What is offered under Beaconstac analytics?](#What is offered under Beaconstac analytics?)

* ### 20. [What different platforms are supported by your SDK?](#What different platforms are supported by your SDK?)

* ### 21. [How can I view cards with your SDK?](#How can I view cards with your SDK?)

* ### 22. [Can we use our own dashboard and leverage your APIs or do we need to only use your dashboard?](#Can we use our own dashboard and leverage your APIs or do we need to only use your dashboard?)

* ### 23. [Can we integrate data from other enterprise backends into Beaconstac?](#Can we integrate data from other enterprise backends into Beaconstac?)

* ### 24. [Is there frequency capping on the marketing?](#Is there frequency capping on the marketing?)


* ### 25. [How to find out beacon health status and battery level?](#How to find out beacon health status and battery level?)

* ### 26. [Can I send lock-screen notifications to my users?](#Can I send lock-screen notifications to my users?)

* ### 27. [I already have an app. Can I integrate beaconstac into it?](#I already have an app. Can I integrate beaconstac into it?)

* ### 28. [Which Android devices are supported?](#Which Android devices are supported?)

---

### **<a name="The beacon does not seem to be working?"></a>The beacon does not seem to be working?**

Beaconstac beacons require 4 AA batteries to power up, but these batteries are not shipped as part of the Starter Kit. To power the beacon on, open the battery compartment and place the batteries inside. You should see a green LED blink for 2-3 seconds after inserting the batteries, which means the beacon is powered on.

### **<a name="Do you have any other model of beacons which are smaller in size? Do you sell USB beacons?"></a>Do you have any other model of beacons which are smaller in size? Do you sell USB beacons?**

Currently, these are the only models available. We will be coming out with new hardware models in the future.

### **<a name="Can I change the UUID of the beacon?"></a>Can I change the UUID of the beacon?**

Unfortunately, you cannot change the UUIDs of the beacons. However, we do allow you to change the Major and Minor for each beacon.

### **<a name="Are Beaconstac beacons weather proof?"></a>Are Beaconstac beacons weather proof?**

Our beacons are dust proof and can withstand temperatures up to 45 deg Celcius. However, they are not water proof so please avoid mounting them outdoors. 

### **<a name="Can I detect beacons if my phone’s bluetooth is off?"></a>Can I detect beacons if my phone’s bluetooth is off?**

In order to interact with the beacon, Bluetooth needs to be turned on and the customer needs to have the app downloaded on their phone.  A beacon by itself does nothing. However, you can trigger a notification reminder to “turn on the bluetooth” with our Geofence feature.

### **<a name="How do I monitor the health of all my beacons?"></a>How do I monitor the health of all my beacons?**

You can monitor parameters such as battery level, temperature, signal strength, etc. with the Beaconstac app. All of this data gets posted onto our servers. You can then log into the admin console dashboard to see the health of all your beacons.

### **<a name="Can I change the UUID/major/minor using Android app?"></a>Can I change the UUID/major/minor using Android app?**

Yes, you can change the Major and Minor numbers, but not the UUID using the Android app.

### **<a name="What is the broadcast range and frequency (advertising interval) of the beacons?"></a>What is the broadcast range and frequency (advertising interval) of the beacons?**

The broadcast power is:  -30 dBm (decibel-milli watts) to +4dBm
The broadcast range/distance: 5cm to 80m (clear line of sight)
The Advertising interval/frequency: 100ms (milliseconds) to 1250 ms OR 10Hz to 0.8Hz


### **<a name="What is the optimum advertising interval that I can set?"></a>What is the optimum advertising interval that I can set?**

Beaconstac SDK works best at an advertising interval of 200ms


### **<a name="Can I set different proximity range/distance for different beacons? e.g. some at 3m and some at 1m?"></a>Can I set different proximity range/distance for different beacons? e.g. some at 3m and some at 1m?**

Yes, you can. This can be set up changing the broadcasting power of the beacons. The default setting is: -8dBm which will trigger your configured Rules at approximately 2m. For instance, you can change the broadcasting power to -16dBm which would then trigger the Rules at a distance of 30cm. 


### **<a name="What is the battery life of Beaconstac beacons?"></a>What is the battery life of Beaconstac beacons?**

At the default broadcast range of -8dBm, the battery life is over 1 year
At the broadcast range of -16dBm, the battery life is between 2 -3 years
At the maximum broadcast range of +4dBm, the battery life is < 6 months

### **<a name="How can I reset my password?"></a>How can I reset my password?**

You can click on the “Forgot password” option either in the Beaconstac app or on our admin console. You will receive an email to your registered email id  with a link to reset/change the password.

### **<a name="My app could not detect the Beaconstac Starter kit beacons?"></a>My app could not detect the Beaconstac Starter kit beacons?**

Please ensure that your beacons are powered up with AA batteries and in working condition. In case you have reset the default broadcast power of the beacons to the lowest possible range (i.e. -30dBm), your app will detect the beacon when the device is within the range of 5 cm.

### **<a name="How can I change the “Rules” icons in the Beaconstac app?"></a>How can I change the “Rules” icons in the Beaconstac app?**

Currently it is not possible to add your own icons in the Beaconstac app. We have hardcoded 6 icons in the app: Music, Sunglasses, Shoes, Beach, Lingerie, Offers

### **<a name="As a mall owner, can I give access to all my brands into your portal so that the brands can create their own campaigns? OR Is it possible to create sub accounts in your admin console to be shared with different members?"></a> As a mall owner, can I give access to all my brands into your portal so that the brands can create their own campaigns? OR Is it possible to create sub accounts in your admin console to be shared with different members?**

Unfortunately, it is not possible at this point in time.


### **<a name="What is a geofence, how do I enable it?"></a>What is a geofence, how do I enable it?**

Geofencing is a technology to create a virtual boundary around a real world location to trigger certain actions (text, webhooks, cards etc) as soon as the boundary is crossed over. You can enable geofence with our APIs in the SDKs or from the “Places” feature in the menu option of our admin console


### **<a name="How can I customize the notification message when a geofence is entered?"></a>How can I customize the notification message when a geofence is entered?**

Currently, the customization of messages has to be handled at the app level.

### **<a name="How can I send a push notification to the app?"></a>How can I send a push notification to the app?**

Our admin console itself does not send push notifications. This has to be handled at the app level. However, we do offer web hooks (under “Rules” in our admin console) to third party systems (CRMs, Loyalty Management Systems etc) and help to trigger push notifications.

### **<a name="What is offered under Beaconstac analytics?"></a>What is offered under Beaconstac analytics?**

You can track unique footfalls, average time spent, frequency of visits, recency of visits, Rules triggered etc. All these statistics will be available on the admin console dashboard. You can generate heat maps based on average time spent, frequency of visits etc??**

### **<a name="What different platforms are supported by your SDK?"></a>What different platforms are supported by your SDK?**

We currently support iOS and Android platforms.

### **<a name="How can I view cards with your SDK?"></a>How can I view cards with your SDK?**

Our SDK will allow you to sync the content for the cards, but the card UI itself needs to be designed and handled at the app level. However, we have created preconfigured card layouts to be experienced in our Beaconstac app. To learn more about how to use these card templates in conjunction with Rules, check out this post on our developer blog. 

### **<a name="Can we use our own dashboard and leverage your APIs or do we need to only use your dashboard?"></a>Can we use our own dashboard and leverage your APIs or do we need to only use your dashboard?**

Because Beaconstac offers an end-to-end solution, currently you can only use our dashboard. 

### **<a name="Can we integrate data from other enterprise backends into Beaconstac?"></a>Can we integrate data from other enterprise backends into Beaconstac?**

Yes, this is possible by using “Custom Attributes”, in which you can use attributes such as age, gender and reward points from your enterprise system or third-party system to define rules. More information on “Custom Attributes” and how to implement them can be found on this post on our developer blog. 

### **<a name="Is there frequency capping on the marketing?"></a>Is there frequency capping on the marketing?**

Yes. Frequency capping on campaigns can be done in the app code.

### **<a name="How to find out beacon health status and battery level?"></a>How to find out beacon health status and battery level?**

It’s easy - just login to your account on the Beaconstac iPhone or Android app. Next, navigate to Home -> My Beacons; here, you need to select a Beacon whose health and battery level you would like to know. Scroll down and you will see battery level, other hardware-related info along with the last updated time.
 Also, if you would like to modify Transmit Power and Advertising Interval, you can do so by going close to a beacon and tapping ‘Edit’.

<img class="screenshot" src="http://i.imgur.com/wnrypGh.jpg" alt="Beaconstac Health Status" title="Beaconstac Health Status"/>

### **<a name="Can I send lock-screen notifications to my users?"></a>Can I send lock-screen notifications to my users?**

As long as the app is installed on your users device, you can send lock-screen notifications. Beaconstac SDK leverages iOS 8’s Core Location framework and is capable of sending notification even when the app is not running in the background.

<img class="screenshot" src="http://i.imgur.com/aOwOopT.jpg" alt="Lock Screen Notification" title="Lock Screen Notification"/>

### **<a name="I already have an app. Can I integrate beaconstac into it?"></a>I already have an app. Can I integrate beaconstac into it?**

<https://github.com/Beaconstac/iOS-SDK#integration-with-your-existing-project-in-xcode>

### **<a name="Which Android devices are supported?"></a>Which Android devices are supported?**

We support all Android phones that meet the following requirements:

Your Android phone is running Android 4.3 or later.

Your Android phone supports Bluetooth 4.0

However, there a few Android devices that are known to have beacon detection issues:
Moto X 1st Gen

Moto E 1st Gen

Micromax Canvas A10

Samsung Edge

Samsung Core

Xperia T3

Xpeira Z Ultra

Xiaomi Note

ASUS MeMO Pad 7 

Asus Zenfone 5

Sony Xperia Z3 Compact

Micromax Canvas Sliver 5

Samsung Galaxy A3

LENOVO K3 NOTE

Huawei d-Tab

TECNO-Y4

Huawei Ascend G630

Samsung Galaxy J7

Moto X Play

Samsung Galaxy Grand 2
