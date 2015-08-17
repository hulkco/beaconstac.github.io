---
layout: default
title: How to segment customers to target campaigns
---
# How to segment customers to target campaigns

Beacons and beacon-enabled apps allow you to naturally target people present in a certain area, like a store or an airport or a museum. But what if you want to further segment the users for targeted messaging?

One option is to feed the back-end with segmentation parameters – like age or gender or membership – and have the back-end push the targeted message. This introduces two issues: one of congestion, capacity and elasticity of scale; and, the previous problem combined with network QoS leading to latency resulting in an inappropriate or irrelevant message.

Another option is to write app code for all combinations of user segment parameters and pop-up the right messages. For example, you might have to write code for “Female below 35 with platinum membership” and so on.

####Using Custom Attributes in Beaconstac

Let’s say that you want to show one message to the ladies and another to the gentlemen.

#####In the console

<img src="http://i.imgur.com/lpLhVYK.png" alt="Custom Attributes" title="Custom Attributes" class="screenshot" />

Beaconstac allows you to define ‘custom attributes’ which are user segmentation parameters in the platform via the console. You define the name of the parameter and the kind of value it takes (string/number/time).


The Custom Attributes page lets you define segmentation parameters to target your messages.

First, create two cards: one for the ladies and another for the gentlemen. See post on ‘Cards’ to create and manage content.

Next, create one rule for the ladies, expand the custom attribute box and open the ‘Create a new attribute’ link in a new tab or window.

To add custom attributes, you must start from the Rules page. Expand the 'Set Custom Attributes' box and open the link 'create a new custom attribute' in a new tab/window

Define a custom attribute called ‘gender’ and make it of the type ‘String’.

<img src="http://i.imgur.com/1iQKH28.png" alt="Define Custom Attributes" title="Define Custom Attributes" class="screenshot" />

Type in the name of your attribute and choose what type of attribute it is.

Return to the ‘Rule’ window and use the ‘gender’ custom attribute ‘Matches’ ‘female’ as an additional condition to trigger the rule. Choose the card you want to send to the ladies as the action.


<img src="http://i.imgur.com/yE3v6E3.png" alt="Set Filters with Custom Attributes" title="Set Filters with Custom Attributes" class="screenshot" />

Select the attribute you want to use and select the operator and the value for the segmenting

Create another similar rule and use the previously created ‘Gender’ attribute with the appropriate custom attribute match for the gentlemen. When you want to use a previously created attribute, like in our example, the ‘Attribute’ drop-down will show all previously defined attributes. Choose the card you want to send the gentlemen as the action.

#####In the app code

The Beaconstac SDK syncs the rule with server along with the custom attributes. Whenever, the user comes close to a beacon, the rule engine checks the user info to match the custom attributes.

The SDK provides an api to update user info for custom attributes. e.g. to update gender = male,

Use the following code:

    [beaconstac updateFact:@"female" forKey:@“gender”];

A lady would see this:

<img src="http://i.imgur.com/SQUhBPE.png" alt="Lady Card" title="Lady Card" class="screenshot" />

A gentleman would see this:

<img src="http://i.imgur.com/GV6vpXi.jpg" alt="Cowboy Boots" title="Cowboy Boots" class="screenshot" />

We’ve made it that easy!
