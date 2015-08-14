---
layout: default
title: Using tags to manage your beacons and campaigns
---
# Using tags to manage your beacons and campaigns

One of the larger challenges in a beacon deployment is managing a large fleet of beacons, spread across multiple physical locations, grouped into different departments, and having different proximity messages attached to each group.

One way to address the problem of identifying groups of beacons is to allocate a set of major numbers to each location and use the designated major number to manage a given group of beacons. For e.g., a retailer may designate major number “87221” to the store location “West Village” and use that major number for every beacon in that store. To have a set of beacons trigger the same campaign, one could use the “UUID + Major number” in combination to define a “region” in iOS and trigger campaigns based on that region.

However, the above method has some limitations:

In iOS, an app can only monitor a maximum of twenty regions; so if you leave the UUID alone, and you save a few for a rainy day, you are left with about 10-12 regions to work with.
Using regions to trigger campaigns takes away the fine-grained control you can have from being able to run campaigns off specific beacons.
Using major numbers to define the scope of a campaign allows you to use only one dimension – physical location – while you may want to use more than one dimension for your campaigns. For example, you may want to run campaigns based on location, say “London”, and department, say “shoes” worldwide. You can use the major numbers only for location or for department, not both.
To address these challenges, Beaconstac supports the notion of “tags” that you can attach to different entities: Beacons, Rules, and Cards. Tags are very flexible and give you much more control than using a simple major number.

####Using Tags in Beaconstac

As you deploy each beacon, you can “tag” it with some properties, say, “London”, and “shoes”:

![Using Tags](http://i.imgur.com/S97NvBR.png)

Tag your beacons to easily identify and manage groups of beacons

When you create your campaigns using Beaconstac Rules, you can apply it to relevant beacons. Now, if you’d like to target your campaign for shoes at all your locations, you’d configure the rule using tags:

![Tag Beacons](http://i.imgur.com/Jb8vbsd.png)

Use tags to apply the scope of a rule to a group of beacons

If you’d like the particular shoes campaign to be targeted only at your London stores, all you have to do is add both the tags, “shoes” and “London”, and only the beacons with both the tags are used for triggering the rule:

![Rules using Tags](http://i.imgur.com/4gIBHD8.png)

Adding more than one tag applies the rule on beacons that have all the tags

You can manage all your tags and beacons on the “Tags” page:

![All Tags](http://i.imgur.com/hAolR1I.png)

Managing tags in beaconstac

Of course, you can always still have a single beacon trigger multiple campaigns based on dwell time, custom attributes, and on entry or exit, so your options on creating and delivering campaigns are huge.
