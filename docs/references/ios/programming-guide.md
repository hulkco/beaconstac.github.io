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

#####1. Open a terminal, cd into your project directory and run pod init.

        $ cd path_to_project
        $ pod init

#####2. This will create a  file named Podfile in the directory. Open this file in a text editor and add the following line before the end:

	    $ pod 'Beaconstac

#####3. Save the Podfile

#####4. Run the pod install command. This will install the APIs specified in the Podspec, along with any dependencies they may have.

	    $ pod install

#####5. The above step will also create a Workspace file for your project in the same directory. Open (double-click) your <project name>.xcworkspace file to launch the project. From now on, make sure you open the project using .xcworkspace file.
