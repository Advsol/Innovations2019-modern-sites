# Creating Modern Website Designs in RiSE
Included in this repository are assets so you can include the Latte theme (demoed at iNNOVATIONS 2019) in your instance of iMIS. Please note this website and theme are for demonstration purposes only and have only been tested in Chrome for Windows 10 and support across multiple devices and browsers (looking at you, Internet Explorer...) are not guaranteed. Additionally, the theme was designed for iMIS Cloud Enterprise version 20.3.44 and some things may not work as expected in earlier versions of iMIS.

Slide show from the presentation is available here: <https://drive.google.com/open?id=1drBk9ZPyUxS2TFvFaD6GgHaYnDak5Tzp>

A demo of this site and theme is currently available at <https://imistour15132.imiscloud.com/EcoCauses/>.  
Note: standard Starter DB logins are active on this site. Feel free to log in, click around, and see how we accomplished these designs. However, please do not make any changes to the content on this site. Instead, follow the steps below to install the theme and site on your own instance of iMIS.

If you would like to be notified when changes are made to this repository (e.g. if we make updates or add more resources) click the "Watch" button at the top of the repository.

## Website and theme installation instructions
To install the demo website and theme follow these steps:
1. Download the contents of this repository.
2. Next you will need to zip up the contents of the "Latte" folder, which contains all theme assets.
3. Under **RiSE > Tagging > Tagged list formats** import and publish the **TaggedListFormat.xml** file.
4. Under **RiSE > Document system** select the "images" folder then import the **Images.xml** file.
5. Under **RiSE > Theme Builder > Website layouts** import the **Coffee_Layout.xml** file.
6. Under **RiSE > Theme Builder > Website templates** import and publish the **Coffee_Template.xml** file.
7. Under **RiSE > Theme Builder > Themes** select **New > Theme**. Name the theme "Latte", be sure the box is checked indicating it is responsive, then select the .zip folder you created in step 2. Save and publish the theme.
8. Go to **RiSE > Site Builder > Manage websites** and import and publish the **EcoCauses_Website.xml** file.
9. Go to **RiSE > Page Builder > Manage content**. If the content was correctly imported go ahead and publish it. If not, you can delete the content that was imported then import and publish the **EcoCauses_Content.xml** file.
10. (Optional) If you would like to see the "Follow us" navigation items in the footer you will need to add a custom navigation area. Go to **RiSE > Site Builder > Manage websites** and select your EcoCauses website. Select the **Navigation areas** tab and click the pencil icon on the tab. Add a new navigation area called "Footer2". Please note that the **Navigation Pane Code** will need to be 16 in order for the navigation to appear. If you already have a navigation area with the code 16 then you may need to update the "Follow us" navigaiton items to use the new navigation area instead.

At this point you will have a working website with the new theme.

## Helpful resources
Below are some resources that may help you create a similar theme in RiSE.

### Guides & how-tos
[CSS-Tricks: A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)  
[CSS-Tricks: A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)  
[CSS-Tricks: Basics of CSS Blend Modes](https://css-tricks.com/basics-css-blend-modes/)

### Tools
Color palette generator: [Coolors](https://coolors.co/)  
CSS gradient tool: [CSS Gradient](https://cssgradient.io/)

### Free assets
**Fonts:** [Google Fonts](https://fonts.google.com/), [Font Squirrel](https://www.fontsquirrel.com/) 

**JavaScript:** [Animate on scroll library](https://github.com/michalsnik/aos), [ScrollMagic](http://scrollmagic.io/), [Moving Letters](http://tobiasahlin.com/moving-letters/#), [Parallax.js](https://github.com/wagerfield/parallax)  
Please note: it's a best practice to use the latest _stable_ version of any JavaScript library.  

**Photos & graphics:** [Unsplash](https://unsplash.com), [Pexels](https://www.pexels.com/), [humaaans](https://www.humaaans.com/), [Iconfinder](https://www.iconfinder.com/)

### Paid assets
**Fonts:** [Adobe Fonts](https://fonts.adobe.com/)  

**Photos & graphics:** [iStockPhoto](https://www.istockphoto.com/), [CreativeMarket](https://creativemarket.com/)

## Support
Please feel free to ask questions or suggest changes but please note that ongoing support for this repository is not guaranteed. A supported version of this site and theme will be available in a future release of iMIS.
