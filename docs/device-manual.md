BLE M1-AA Specification:
Bluetooth Low Energy (Bluetooth v4.0) device
iBeacon certified
Based on Nordic nRF 51822 chips
Power supply: 4 x AA battery changeable
Dual-Antenna, signal range 0.15m - 60m.
Length: 64.0 mm；Width：64.0 mm；Depth：23.5 mm.
Dual antenna covering radius down to 15cm (part of models)

Possible Tx Power:
-30 dBm (~5 cm)	//Lowest
-20 dBm (~50 cm)	//Level 1
-16 dBm (~50 cm)	//Level 2
-12 dBm (~1.5 m)	//Level 3
-30 dBm (~2 m)		//Level 4
-20 dBm (~7 m)		//Level 5
-16 dBm (~15 m)	//Level 6
-12 dBm (~20 m)	//Level 7
-8 dBm (~25 m)		//Level 8
-4 dBm (~45 m)		//Level 9
0 dBm (~70 m)		//Level 10
+4 dBm (~100 m)	//Level 11

Possible advertising interval:
100 ms
152.5 ms
211.25 ms
318.75 ms
417.5 ms
546.25 ms
760 ms
852.5 ms
1022 ms
1285 ms

Other sensors on the device:
Temperature sensor with resolution on 1 degree C
Accelerometer: For motion detection only
Battery level sensor

UUID: F94DBB23-2266-7822-3782-57BEAC0952AC
Major: 0 to 65535
Minor: 0 to 65535

Operating condition:
Dust-proof
Anti-vibration

Troubleshooting:

Q1.      I put in the batteries but cannot detect the beacon?
When you insert the battery, a green LED on the front face of the beacon blinks for 4 secs before going off. That is the first indication if the beacon has started transmitting signals.
Make sure your bluetooth is turned on
Bring your phone running Beaconstac close to the beacon and “Tap to find nearby beacons”. The beacon should show up on the screen
In some particular Tx power modes, you might need to go as close as 10 cm to the beacon
Go to Settings app on your phone and make sure Location Services are turned on
Under Privacy->Location Services, make sure Beaconstac app has “Always” permission granted.
Make sure you are signed in on the app with the account you ordered the beacons with

Q1.     How do I identify which is the beacon I am holding amongst the list of found beacons on phone screen?
Go to MyBeacons screen on Beaconstac app. If you move the beacon you are holding, corresponding item in the list on phone will change to blue background


Security and Configuring the Beacon:
Presently, the beacons can only be configured from the Beaconstac app. The beacons are password protected to prevent hijacking from unauthorised personnel.

Following Settings can be changed from the My Beacons section on the Beaconstac app:
Major number
Minor number
Tx power
Advertising interval



To change the settings, follow the steps:

Step 1: Open My Beacons page on the app. 

Step 2: From the list of beacons which are displayed here, identify the one which needs to be configured. You can identify the beacon by holding the beacon in hand and moving it slightly. The corresponding in the list will change its background color from White to Blue. Alternatively, if you know the major/minor number of the beacon, you can match it with the one displayed under the beacon name.

Step 3: Click on the beacon in the list. Beacon detail screen opens showing name of the beacon, all the configurations and sensor readings.

Step 4: Make sure the beacon is close to the phone and click the Edit button on top right of the screen. The device will connect to the beacon and enter the Editing mode.

Step 5: Once the beacon is in Edit mode, non-configurable parameters of the beacon (like the temperature reading) will get hidden. The green LED on the beacon will glow continuously. Click on the property you want to change and choose/input the new value. 

Step 6: Click the Save button once all the changes have been made. This will program the setting on the beacon and disconnect the bluetooth connection. Please note that the beacon does not transmit any iBeacon advertisement packets while it is connected to the phone.
