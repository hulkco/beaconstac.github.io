---
layout: post
title: Quick Start for Android
---

###Prerequisites:

#####1. Android Studio

#####2. Mobile device with BLE hardware and running Android 4.3+

#####3. An active Beaconstac developer account

#####4. Beaconstac starter kit (alternatively Beaconstac beacons which are added to your Beaconstac account)


####Create a new project / open your Android application project
Download the Beaconstac Android SDK from https://github.com/Beaconstac/Android-SDK.
Copy the beaconstac-release.aar file into the libs directory of your app. Refer the sample app for example.
In the build.gradle file of your project, add the following in the repositories section:
		flatDir {
    dirs 'libs'
}

![alt tag](http://snag.gy/nzryC.jpg)


#####5. In the build.gradle file of the app, add the following in the dependencies section:

            compile (name: 'beaconstac-release', ext: 'aar')
            compile 'com.mcxiaoke.volley:library:1.0.16'
            compile 'com.google.android.gms:play-services:7.5.0'
            compile 'com.crittercism:crittercism-android-agent:5.0.6'

#####6. Refresh all Gradle projects.

#####7. Create a file beaconstac.xml in the values folder containing configurations for Beaconstac SDK, or just copy it from here.

#####8. Add the following permissions to app manifest:

                <uses-permission android:name="android.permission.BLUETOOTH" />
                <uses-permission android:name="android.permission.BLUETOOTH_ADMIN" />
                <uses-permission android:name="android.permission.INTERNET" />
                <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
                <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION"/>
                <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION"/>

#####9. Add the Beaconstac BLEService to your app manifest:

                <service android:name="com.mobstac.beaconstac.core.MSBLEService" android:enabled="true"/>

#####10. Should you choose to implement your own BroadcastReceiver (required if beacon detection has to work when the app is not running), extend com.mobstac.beaconstac.core.BeaconstacReceiver class and implement methods to handle the rangedBeacons, campedOnBeacon, exitedBeacon, triggeredRule, enteredRegion and exitedRegion events. The BeaconstacExample app contains an example of each type - directly using BeaconstacReceiver in the activity (this will require registering and unregistering it to receive intents in the activity itself), and extending BeaconstacReceiver and registering it to receive actions declared in the app manifest.

#####11. Add the Beaconstac-provided actions in the app manifest that you wish to listen for, in your BroadcastReceiver. From the BeaconstacExample app manifest:

            <receiver android:name=".BeaconstacExampleReceiver" android:exported="false">
            <intent-filter>
                <action android:name="com.mobstac.beaconstac.intent.action.RANGED_BEACON" />
                <action android:name="com.mobstac.beaconstac.intent.action.CAMPED_BEACON" />
                <action android:name="com.mobstac.beaconstac.intent.action.EXITED_BEACON" />
                <action android:name="com.mobstac.beaconstac.intent.action.TRIGGERED_RULE" />
                <action android:name="com.mobstac.beaconstac.intent.action.ENTERED_REGION" />
                <action android:name="com.mobstac.beaconstac.intent.action.EXITED_REGION" />
                <action android:name="com.mobstac.beaconstac.intent.action.ENTERED_GEOFENCE" />
                <action android:name="com.mobstac.beaconstac.intent.action.EXITED_GEOFENCE" />
            </intent-filter>
            </receiver>

#####12. Add provider to the manifest. Please implement your own ContentProvider that extends com.mobstac.beaconstac.provider.MSContentProvider. From the BeaconstacExample app:

        <provider
            android:name=".MyContentProvider"
            android:authorities="@string/provider"
            android:enabled="true"
            android:exported="false"
            android:multiprocess="true"
            android:grantUriPermissions="true"
            android:syncable="true" >

#####13. To monitor beacon regions, configure the UUID and region_identifier.

        // set region parameters (UUID and unique region identifier)
        Beaconstac bstacInstance = Beaconstac.getInstance(this);
        bstacInstance.setRegionParams("F94DBB23-2266-7822-3782-57BEAC0952AC",
                "com.mobstac.beaconstacexample");

######14. Call startRangingBeacons on the Beaconstac instance after configuring the params as mentioned in the previous step.

        // start scanning
        bstacInstance.startRangingBeacons();

######15. If you want to stop scanning for beacons, call stopRangingBeacons on the Beaconstac instance.

        // stop scanning
        bstacInstance.stopRangingBeacons();

