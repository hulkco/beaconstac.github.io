---
layout: default
title: Developer - Creating and using geofences
---
# Developer: Creating and using geofences

One of the most frequently asked questions by marketers is ‘What can I do to ensure people with my app have bluetooth turned on?’ This is a fair question and was a big challenge till recently.

In Beaconstac, we have created a new entity called ‘Place’ around which you can define a geofence. You can add a place by choosing ‘Places’ from the navigation and clicking on ‘Add a new place’.

A ‘Place’ in Beaconstac has the following attributes: an easily identifiable name, an address, and latitude and longitude values. You can choose to set a geofence (in metres).


![Add Places](http://i.imgur.com/ZjYL2WY.png)

To use the geofence functionality, first initialize the location manager and set the delegate class for callback class

```

CLLocationManager *manager = [[CLLocationManager alloc] init];
    manager.delegate = self;  

```

This will start Location services and start monitoring Geofence crossings around all the Places created on the Beaconstac portal. When you set a geofence for a place, you will get callbacks when the fence is breached and the user enters the region or exits the region, and you can use those to show messages, like so:

```

- (void)locationManager:(CLLocationManager *)manager didEnterRegion:(CLRegion *)region
{
    /*
     *  Get this callback on entering geofence. Do whatever you want, e.g. Show local notification
     */
    UILocalNotification *notification = [[UILocalNotification alloc] init];
    notification.alertBody = [NSString stringWithFormat:@"You are entering %@ region.",region.identifier];
    [[UIApplication sharedApplication]presentLocalNotificationNow:notification];
    
    return;
}


- (void)locationManager:(CLLocationManager *)manager didExitRegion:(CLRegion *)region
{
    /*
     *  Get this call back on exiting geofence. Do whatever you want, e.g. Show local notification
     */
    UILocalNotification *notification = [[UILocalNotification alloc] init];
    notification.alertBody = [NSString stringWithFormat:@"You are exiting %@ region.",region.identifier];
    [[UIApplication sharedApplication]presentLocalNotificationNow:notification];
    return;
}

```

You can use the callbacks to show a notification, for e.g, welcoming the user to your store, or perhaps gently nudge the user to keep their bluetooth turned on.

You can also use the callbacks to trigger other functions in your app, for example, check if items in the user’s online cart are available at the store and show a message letting the user know.
