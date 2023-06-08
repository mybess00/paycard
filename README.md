# What is Paycard?

Paycard is a totally free and open source payment method unifier. It has more than 20 payment options to configure, Paycard presents a colorful and pleasant user interface with automatic dark mode.  

## Features

- +20 Payment Options.  
- +20 Social Media.
- Automatic dark mode.
- Payment options in QR.
- User information.
- Responsive.  

## How to configure?  

You should only work with the ``paycard-config.json`` file.

## paycard-config.json

### User

Within "User" you must fill in the properties to configure the presentation of the user.  

Within "social_media" you must add the link to your profile from the available social networks. You can leave blank the social networks that you do not use.  

For example:

```
"User": {
        "name": "Rafael Planas Betancourt",
        "biography": "Lorem ipsum dolor sit amet. Et suscipit eaque non debitis vero sit ipsa vitae eum quia exercitationem sit modi cupiditate hic consequatur repellendus est sint voluptas.",
        "image": "/images/rafa_profile.jpg",
        "social_media": {
            "instagram": "",
            "twitter": "https://twitter.com/RafaelAndresPB",
            "email": "mailto:betancourtrafael00@gmail.com",
            "telegram": "https://t.me/mybes00",
            "linkedin": "",
            "github": "https://github.com/mybess00",
            "reddit": "",
            "gmail": "",
            "wechat": ""
        }
    }
```

**Available social media:**  

- facebook
- instagram
- whatsapp
- twitter
- youtube
- email
- telegram
- linkedin
- github
- reddit
- gmail
- wechat
- tumblr
- snapchat
- pinterest
- spotify
- discord
- medium
- tiktok
- twitch
- link
- newsletter  
- producthunt  

### PayData

Inside "PayData" will go all the payment information you want to add. You can repeat the payment options as many times as you want.  

All payment options must follow the following structure:

```
{
    "id": "btc",
    "name": "Bitcoin",
    "content": "bitcoin address",
    "style": { "width": 1, "height": 1 }
}
```

The "id" property is very important, it must always be equal to one of the allowed options.  

In "name" you are free to choose what to put to identify the payment method. Within "content" must go the address or payment link.  

Within "style" you must set two options:
- "width" that will specify the number of grids that the card will occupy horizontally.  
- "height" that will specify the number of grids that the card will occupy vertically.  

They must be numbers between 1 and 5. We do not recommend using a number greater than 1 in "height".  

**Available payment options (id):**

- PayPal (paypal)
- Mastercard (mastercard)
- American Express (amex)
- VISA (visa)
- Zinli Card (zinli)
- Cash App (cashapp)
- Zelle (zelle)
- QvaPay (qvapay)
- A card (card)
- Bitcoin (btc)
- Ethereum (eth)
- Litecoin (ltc)
- BNB (bnb)
- USDT (usdt)
- BUSD (busd)
- TRX (trx)
- Dash (dash)
- Ton (ton)
- Solana (solana)
- Doge (doge)
- Matic Polygon (matic)  
- Bitcoin Cash (bch)
- Hive (hive)
- Zcash (zec)

You can order the payment options as you want them to appear. You only have to configure the payment options that you will use.  