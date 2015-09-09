---
layout: post
---

#What is Beaconstac?

Beaconstac is a technology stack for running proximity messaging and gathering physical analytics. It includes:

1. iBeacon compliant Beacon hardware (Soon to include Eddystone capabilities with a formware upgrade)

2. iOS and Android SDKs

3. Cloud-based Manager
 
4. Beaconstac app

<img id="bs-image" src="http://i.imgur.com/oqD97x7.png?1" alt="Beaconstac" title="Beaconstac"/>

#Beaconstac

Beaconstac is like Mixpanel for indoor marketing and makes it super easy for marketers to run personalised campaigns for their target audience based on each individual's proximity to a given point of interest. Beaconstac offers everything that is needed for brands building mobile apps whether for continuous customer engagement or for bringing in more footfalls.

###Beacon Hardware

Our Beacon Starter Kit is a set of three AA-battery powered Beacons that are iBeacon compliant, password-secured and last over 4 years. Beacons are handy devices (about 2.5 inch each side) that can be placed anywhere.

A Beacon is like a lighthouse that continuously emits identifier information (major number, minor number, UUID) to nearby devices like an iPhone. It’s easy to locate a user whenever their smartphone starts receiving BLE signals.

###SDKs

Once integrated, Beaconstac SDKs make existing or new iOS and Android apps context-aware. SDKs enable proximity marketing and location analytics through an iBeacon-compliant BLE network.

If you need any help with adding Beaconstac SDK to your app, jump right into our tutorials or SDK references.

###Cloud-based Manager
Our cloud-based web solution allows marketers to manage marketing campaigns. You can easily create rules and tags to target a specific audience.

###Beaconstac App
Beaconstac App on both Android and iOS allows users to experience a beacon-enabled app with the beacons they have bought and also acts as a tool to configure their beacons [The configuration of beacons is currently available only on the iOS version; coming soon on Android]. Users can change settings like transmission power, advertising interval and read critical data like battery status, distance between them and the beacons.

##Basic Concepts

Once you start using Beaconstac, you will find certain terms that are consistent all across - be it Beaconstac App, SDKs or the cloud manager dashboard. Here are the building blocks of Beaconstac:

###Beacons
A Beacon object is an identifier for hardware beacons - you can name your beacons or use a UUID in combination with Major and Minor numbers. All Beaconstac beacons are protected by a password.

A UUID contains 36 characters including 4 hyphens and is primarily meant for finding out official device manufacturer.
A Major value defines a sub-region within a larger region defined by the UUID.
A Minor value defines a further subdivision within a larger region defined by the UUID and major values.

###Rules
A Rule allows you to send notifications to users based on a set of conditions. You can target users at a more granular level using tags, custom attributes and timing such as ‘on entry’ or ‘on exit’.

###Tags
Large beacon fleets can be managed and organised into cohesive units using Tags. Multiple beacons can be targeted at once using tags inside rules.

###Cards
Cards are standardised messaging units that contain title, description, images, and links and are commonly used for in-app notifications. Beaconstac supports four different types of cards - Summary, Photo, Media and Page.

###Places
Places are used for labelling store locations and creating geo-fences. Using Google Maps, you can easily plot your store locations and specify a geo-fence radius in meters. Once a Place has been defined, beacons can be associated with it to gather and generate reports for each place.

###Custom Attributes
You can use attributes such as age, gender, reward points from your enterprise system or third-party system to fine tune rules. Custom attributes are extremely useful when it comes to targeting a certain demographic.
