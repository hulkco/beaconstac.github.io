---
layout: default
title: Developer - Handling cards
---
# Developer: Handling cards

Location-based content management is a key task in proximity-based messaging that marketers and product managers are often faced with. The challenge is when small bits of content like coupons, offers, promotions, multimedia files, etc., that change regularly and are extremely targeted (based on say, age, gender, membership, and so on), have to be managed and delivered flawlessly to mobile devices from a central system.

There are a number of different ways in which this can be achieved:

Sync content into the app and use triggers to show specific content
Use content already developed in HTML and display it in a WebView
Use simple messaging paradigms such as text alerts

These methods are already supported by Beaconstac: you can use the “Custom JSON” or “Webhook” action types for triggering content residing within the app, or the “Webpage” action type to render a web page inside a WebView, or the “Text alert” action type to deliver a simple text message.

While these methods are useful in certain scenarios, they prevent the app developer from crafting a delightful experience. For instance, in-app content may not be available, HTML content in a WebView may not be rendered perfectly (or fast enough) for a given device, and a text alert is too basic to allow insertion of multimedia.

To address these apparent limitations, Beaconstac has a great way to manage and deliver rich content to your beacon-enabled app: Cards.


Content Management using Beaconstac Cards

Cards are a great and well-understood UI paradigm for delivering content to apps, made popular initially by Twitter (for content) and later by Google Now (for timely actionable items).

Now, with Beaconstac Cards, you can send rich content such as images, images and text, and multimedia, as part of your proximity-based messages and content.

To create a card, click on the “Cards” item in the left navigation menu and click the “Add a new card” button.

![Add a Card](http://i.imgur.com/W37WKeb.png)

You will be offered a choice of card types:

Summary Card: allows for a title, a small image and a little blurb of text
Photo Card: allows for a title and a set of images
Media Card: allows for a title and cloud-hosted media, say from from your own channels in YouTube, Vimeo, or SoundCloud
Page: allows you to deliver a lot more textual content in a looser structure
The photo card allows you to have a title, and add an image or multiple images. 

![Create Photo Card](http://i.imgur.com/268bhC6.png)

Attaching Cards to Campaign Rules

Cards are used in campaigns and messaging through the “Set actions” tab in “Rules”. When you define a new rule for a new campaign, define the conditions to be satisfied in the “Compose Rule” tab, select “Cards” as the action type and choose the relevant card (that you already created) from the drop-down.

![Set Actiona](http://i.imgur.com/R14bqUg.png)

To attach a card to a campaign, select "Cards" from the Action Type drop-down and choose the card you'd like to send by its title

For the curious developer, here is how cards work: when a rule is satisfied and an action is triggered, the back-end sends the card contents as a JSON blob to the app via the Beaconstac SDK.

Here is the JSON that you will receive for the card defined earlier:

```

{  
  "card_detail":{  
    "body":"",
    "card_type":2,
    "created":"2015-02-24T10:19:43.412Z",
    "id":136,
    "media":[  
      76,
      77,
      78
    ],
    "media_urls":[  
      {  
        "content_type":"image/png",
        "created":"2015-02-07T16:49:15.872Z",
        "id":76,
        "md5_hash":"",
        "modified":"2015-02-24T10:19:43.487Z",
        "name":"demo media ",
        "organization":213,
        "source":"mobstac",
        "status":"Active",
        "tags":[  

        ],
        "url":"http://beaconstac-public.s3-website-us-east-1.amazonaws.com/demo/Shoe1.png"
      },
      {  
        "content_type":"image/png",
        "created":"2015-02-07T16:49:15.960Z",
        "id":77,
        "md5_hash":"",
        "modified":"2015-02-24T10:19:43.523Z",
        "name":"demo media ",
        "organization":213,
        "source":"mobstac",
        "status":"Active",
        "tags":[  

        ],
        "url":"http://beaconstac-public.s3-website-us-east-1.amazonaws.com/demo/Shoe2.png"
      },
      {  
        "content_type":"image/png",
        "created":"2015-02-07T16:49:16.051Z",
        "id":78,
        "md5_hash":"",
        "modified":"2015-02-24T10:19:43.560Z",
        "name":"demo media ",
        "organization":213,
        "source":"mobstac",
        "status":"Active",
        "tags":[  

        ],
        "url":"http://beaconstac-public.s3-website-us-east-1.amazonaws.com/demo/Shoe3.png"
      }
    ],
    "meta":{  

    },
    "modified":"2015-02-24T10:19:43.412Z",
    "organization":213,
    "tags":[  

    ],
    "title":"Make a statement with the latest trends"
  }
}

```

The app developer needs to consume this JSON and present it as a card using their own template. In the Beaconstac demo app, you can see this in action:

