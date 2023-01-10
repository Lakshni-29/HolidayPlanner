<?php
error_reporting(E_ALL ^ E_WARNING);
$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://test.api.amadeus.com/v2/shopping/hotel-offers?cityCode=SEL&checkInDate=2022-02-25&checkOutDate=2022-03-06',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'GET',
  CURLOPT_HTTPHEADER => array(
    'Authorization: Bearer yFKwyfgPptzUjTLTNH7KbJ4Hnu6A'
  ),
));

$response = curl_exec($curl);
curl_close($curl);
$decoded = json_decode($response);
$path=[];

$name = [];
$rating = [];
$distance = [];
$address = [];
$phone =[];
$description = [];
$category = [];
$bed = [];
$price = [];

for($i=0;$i

<sizeof($decoded->data);$i++)
{

$name[$i] = $decoded->data[$i]->hotel->name;
$rating[$i] = $decoded->data[$i]->hotel->rating;
$distance[$i] = $decoded->data[$i]->hotel->hotelDistance->distance;
$address[$i] = $decoded->data[$i]->hotel->address->lines[0];
$phone[$i] = $decoded->data[$i]->hotel->contact->phone;
// $description[$i] = $decoded->data[$i]->hotel->description->text;
$category[$i] = $decoded->data[$i]->offers[0]->room->typeEstimated->category;
$bed[$i] = $decoded->data[$i]->offers[0]->room->typeEstimated->beds;
$price[$i] = $decoded->data[$i]->offers[0]->price->total;

}
?>

<!DOCTYPE html>
<head>
    <link rel="stylesheet" href="hotel.css" />
</head>
<body>
  <meta charset="utf-8" />
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
      <title>Find hotels • WWT</title>
      <meta name="description" content="Visit South Korea. Best things to do in Seoul, Busan, and Jeju are: Gyeongbokgung Palace, Myeongdong Shopping Street, N Seoul Tower, and Insadong. Travel Feb 25 - Mar 06. Created by a user from India. • Inspirock" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <meta name="keywords" content="footer, address, phone, icons" />
      <script src="main.js"></script>
      <link rel="shortcut icon" href="icons8-world-98.png" type="image/x-icon" sizes="32x32" />
      <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css">
      <link href="http://fonts.googleapis.com/css?family=Cookie" rel="stylesheet" type="text/css">
      <link rel="stylesheet" href="style.css">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
      <link rel="preload" href="https://s.inspirockcdn.com/4.31.0/res/css/commoncss.css" as="style">
      <link rel="preload" href="https://s.inspirockcdn.com/4.31.0/res/css/resultpage.css" as="style">
      <link rel="preload" href="https://s.inspirockcdn.com/fonts/Lato-regular/Lato-regular.woff2" as="font" type="font/woff2" crossorigin>
      <link rel="preload" href="https://s.inspirockcdn.com/fonts/Lato-italic/Lato-italic.woff2" as="font" type="font/woff2" crossorigin>
      <link rel="preload" href="https://s.inspirockcdn.com/fonts/Lato-700/Lato-700.woff2" as="font" type="font/woff2" crossorigin>
      <link rel="preload" href="https://s.inspirockcdn.com/fonts/FontAwesome/fontawesome-webfont-subset.woff2" as="font" type="font/woff2" crossorigin>
      <link rel="preload" href="https://s.inspirockcdn.com/4.31.0/res/js/common.js" as="script">
      <link rel="preload" href="https://s.inspirockcdn.com/4.31.0/res/js/plan.js" as="script">
      <link rel="preload" href="https://s.inspirockcdn.com/4.31.0/res/loc/en/js/messages.json" as="fetch" crossorigin>
      <link rel="preload" href="https://s.inspirockcdn.com/4.31.0/res/js/icons.js" as="script">
      <link rel="preconnect" href="https://www.google-analytics.com">
      <link rel="dns-prefetch" href="https://www.google-analytics.com">
      <link rel="preconnect" href="//pagead2.googlesyndication.com" crossorigin>
      <link rel="dns-prefetch" href="//pagead2.googlesyndication.com">
      <style>
         @font-face {
            font-family: 'Lato';
            font-weight: 400;
            font-style: normal;
            font-display: swap;
            src: local('Lato Regular'), local('Lato-regular'), url('https://s.inspirockcdn.com/fonts/Lato-regular/Lato-regular.woff2') format('woff2'), url('https://s.inspirockcdn.com/fonts/Lato-regular/Lato-regular.woff') format('woff'), url('https://s.inspirockcdn.com/fonts/Lato-regular/Lato-regular.ttf') format('truetype');
         }

         @font-face {
            font-family: 'Lato';
            font-weight: 400;
            font-style: italic;
            font-display: swap;
            src: local('Lato Italic'), local('Lato-italic'), url('https://s.inspirockcdn.com/fonts/Lato-italic/Lato-italic.woff2') format('woff2'), url('https://s.inspirockcdn.com/fonts/Lato-italic/Lato-italic.woff') format('woff'), url('https://s.inspirockcdn.com/fonts/Lato-italic/Lato-italic.ttf') format('truetype');
         }

         @font-face {
            font-family: 'Lato';
            font-weight: 700;
            font-style: normal;
            font-display: swap;
            src: local('Lato Bold'), local('Lato-700'), url('https://s.inspirockcdn.com/fonts/Lato-700/Lato-700.woff2') format('woff2'), url('https://s.inspirockcdn.com/fonts/Lato-700/Lato-700.woff') format('woff'), url('https://s.inspirockcdn.com/fonts/Lato-700/Lato-700.ttf') format('truetype');
         }

         @import url('http://fonts.googleapis.com/css?family=Open+Sans:400,700');

         /**{
  padding:0;
  margin:0;
}

html{
  background-color: #eaf0f2;
}

body{
  font:16px/1.6 Arial,  sans-serif;
}*/
         /*header{
  text-align: center;
  padding-top: 100px;
  margin-bottom:190px;
}

header h1{
  font: normal 32px/1.5 'Open Sans', sans-serif;
  color: #3F71AE;
  padding-bottom: 16px;
}

header h2{
  color: #F05283;
}

header span{
  color: #3F71EA;
}
*/
         /* The footer is fixed to the bottom of the page */
         footer {
            position: relative;
            bottom: 600%;
         }

         @media (max-height:800px) {
            footer {
               position: static;
            }

            header {
               padding-top: 40px;
            }
         }

         .footer-distributed {
            background-color: #2c292f;
            box-sizing: border-box;
            width: 100%;
            text-align: left;
            font: bold 16px sans-serif;
            padding: 50px 50px 60px 50px;
            margin-top: 80px;
         }

         .footer-distributed .footer-left,
         .footer-distributed .footer-center,
         .footer-distributed .footer-right {
            display: inline-block;
            vertical-align: top;
         }

         /* Footer left */
         .footer-distributed .footer-left {
            width: 30%;
         }

         .footer-distributed h3 {
            color: #ffffff;
            font: normal 36px 'Cookie', cursive;
            margin: 0;
         }

         /* The company logo */
         .footer-distributed .footer-left img {
            width: 30%;
         }

         .footer-distributed h3 span {
            color: #e0ac1c;
         }

         /* Footer links */
         .footer-distributed .footer-links {
            color: #ffffff;
            margin: 20px 0 12px;
         }

         .footer-distributed .footer-links a {
            display: inline-block;
            line-height: 1.8;
            text-decoration: none;
            color: inherit;
         }

         .footer-distributed .footer-company-name {
            color: #8f9296;
            font-size: 14px;
            font-weight: normal;
            margin: 0;
         }

         /* Footer Center */
         .footer-distributed .footer-center {
            width: 35%;
         }

         .footer-distributed .footer-center i {
            background-color: #33383b;
            color: #ffffff;
            font-size: 25px;
            width: 38px;
            height: 38px;
            border-radius: 50%;
            text-align: center;
            line-height: 42px;
            margin: 10px 15px;
            vertical-align: middle;
         }

         .footer-distributed .footer-center i.fa-envelope {
            font-size: 17px;
            line-height: 38px;
         }

         .footer-distributed .footer-center p {
            display: inline-block;
            color: #ffffff;
            vertical-align: middle;
            margin: 0;
         }

         .footer-distributed .footer-center p span {
            display: block;
            font-weight: normal;
            font-size: 14px;
            line-height: 2;
         }

         .footer-distributed .footer-center p a {
            color: #e0ac1c;
            text-decoration: none;
            ;
         }

         /* Footer Right */
         .footer-distributed .footer-right {
            width: 30%;
         }

         .footer-distributed .footer-company-about {
            line-height: 20px;
            color: #92999f;
            font-size: 13px;
            font-weight: normal;
            margin: 0;
         }

         .footer-distributed .footer-company-about span {
            display: block;
            color: #ffffff;
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 20px;
         }

         .footer-distributed .footer-icons {
            margin-top: 25px;
         }

         .footer-distributed .footer-icons a {
            display: inline-block;
            width: 35px;
            height: 35px;
            cursor: pointer;
            background-color: #33383b;
            border-radius: 2px;
            font-size: 20px;
            color: #ffffff;
            text-align: center;
            line-height: 35px;
            margin-right: 3px;
            margin-bottom: 5px;
         }

         /* Here is the code for Responsive Footer */
         /* You can remove below code if you don't want Footer to be responsive */
         @media (max-width: 880px) {

            .footer-distributed .footer-left,
            .footer-distributed .footer-center,
            .footer-distributed .footer-right {
               display: block;
               width: 100%;
               margin-bottom: 40px;
               text-align: center;
            }

            .footer-distributed .footer-center i {
               margin-left: 0;
            }

            .plan-header-wrap {
               bottom: 900px;
            }
         }
      </style>
      <link rel="stylesheet" type="text/css" href='https://s.inspirockcdn.com/4.31.0/res/css/commoncss.css'>
      <link rel="stylesheet" type="text/css" href='https://s.inspirockcdn.com/4.31.0/res/css/resultpage.css'>
      <link rel="canonical" href="https://www.inspirock.com/trip/10-days-in-south-korea-itinerary-in-february-ff600c16-e46c-4611-9f28-00d363b3a589">
      <link rel="alternate" hreflang="ar" href="https://www.inspirock.com/ar/trip/10-days-in-south-korea-itinerary-in-february-ff600c16-e46c-4611-9f28-00d363b3a589" />
      <link rel="alternate" hreflang="nl" href="https://www.inspirock.com/nl/trip/10-days-in-south-korea-itinerary-in-february-ff600c16-e46c-4611-9f28-00d363b3a589" />
      <link rel="alternate" hreflang="en" href="https://www.inspirock.com/trip/10-days-in-south-korea-itinerary-in-february-ff600c16-e46c-4611-9f28-00d363b3a589" />
      <link rel="alternate" hreflang="x-default" href="https://www.inspirock.com/trip/10-days-in-south-korea-itinerary-in-february-ff600c16-e46c-4611-9f28-00d363b3a589" />
      <meta name="robots" content="noindex,follow" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="_csrf_parameter" content="_csrf" />
      <meta name="_csrf_header" content="X-CSRF-TOKEN" />
      <meta name="_csrf" content="f0e246b3-aa3a-47fa-bea6-165209759cb5" />
      <meta name="msapplication-TileColor" content="#000000">
      <meta name="msapplication-config" content="https://s.inspirockcdn.com/images/meta/browserconfig.xml">
      <meta name="theme-color" content="#000000">
      <meta name="apple-mobile-web-app-capable" content="yes">
      <meta name="mobile-web-app-capable" content="yes">
      <link rel="preload" href="https://s.inspirockcdn.com/images/heroes/f/south-korea-seoul.jpg" as="image">
      <meta property="og:url" content="https://www.inspirock.com/trip/10-days-in-south-korea-itinerary-in-february-ff600c16-e46c-4611-9f28-00d363b3a589?utm_source=plan-share-link&utm_medium=facebook&utm_content=shareplanlink&utm_campaign=plan-share-link" />
      <meta property="og:type" content="article" />
      <meta property="og:title" content="10 days in South Korea Itinerary in February" />
      <meta property="og:site_name" content="Inspirock" />
      <meta property="og:description" content="Created on Inspirock." />
      <meta property="og:image" content="https://s.inspirockcdn.com/images/heroes/f/south-korea-seoul.jpg" />
      <meta property="fb:app_id" content="1521465254745882" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="10 days in South Korea Itinerary in February" />
      <meta name="twitter:site" content="@InspirockTravel" />
      <meta name="twitter:description" content="Created on Inspirock." />
      <meta name="twitter:image" content="https://s.inspirockcdn.com/images/heroes/f/south-korea-seoul.jpg" />
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-42855545-3"></script>
      <script type="text/javascript">
         window.__primaryGATrackingId = 'UA-42855545-3';
         window.dataLayer = window.dataLayer || [];

         function gtag() {
            dataLayer.push(arguments);
         }
         gtag('js', new Date());
         var gaConfig = {
            'send_page_view': false,
            'transport_type': 'beacon'
         };
         gaConfig['user_id'] = '61bf315e41fa7532a15f5fce'; {
            let experiments = [];
            experiments.push({
               id: "EfUnySjaQ7mnpCbCWI43SA",
               variant: "1"
            });
            if (experiments.length) {
               gaConfig['experiments'] = experiments;
            }
         }
         gtag('config', 'UA-42855545-3', gaConfig);
         gtag('config', 'G-Y9NDEE6T5Y', gaConfig);
      </script>
   </head>
   <body class="resultspage  edit-enabled    new-wts normal   header-visible" data-browser-lang-code="en" data-browser-lang-name="english" data-prompt-msg="false" data-on-error-image="https://s.inspirockcdn.com/images/defaults/no-image.jpg">
      <div id="icon-container" class="svg-icon-container"></div>
      <script src="https://s.inspirockcdn.com/4.31.0/res/js/icons.js" type="text/javascript" defer></script>
      <div id="fb-root"></div>
      <div id="pageWrapper" class="page-wrapper ">
         <!--mobile specific-->
         <header class="page-header    " id="pageHeader" data-show-contact-us="true">
            <div class="header-contents">
               <div class="menu-button menu-button-container mobile-only">
                  <div class="top"></div>
                  <div class="bottom"></div>
               </div>
               <div class="header-wrap mobile-only closed">
                  <div class="header-wrap-content">
                     <div class="home">
                        <div class="username "> Hi <span class="notranslate">Shilbha</span>
                        </div>
                        <div class="menu-option login-button hidden">Login</div>
                        <a class="menu-option" href="/">Home</a>
                        <div class="menu-option myplans-button" data-loggedin="true">My trips (4)</div>
                        <a class="menu-option newplan-link" rel="nofollow" href="/trip-planner?src=">+ Create new trip</a>
                        <div class="menu-option account-button ">My account</div>
                     </div>
                     <div class="currency-language-settings">
                        <div class="title">SETTINGS</div>
                        <div class="currency" class="menu-option" data-currency-url="/currencyOptions"> Currency <i class="fa fa-angle-right"></i>
                           <div class="selected-currency-info">
                              <span class="symbol">₹</span>
                              <span class="name">Indian Rupee</span>
                           </div>
                        </div>
                        <div class="menu-option language" data-language-url="/languageOptions"> Language <i class="fa fa-angle-right"></i>
                           <span class="selected-language notranslate">english</span>
                        </div>
                     </div>
                     <div class="help">
                        <div class="title">HELP</div>
                        <a id="faq" class="menu-option" href="/faq">FAQ</a>
                        <div class="menu-option" id="feedback">Give feedback</div>
                     </div>
                     <div class="menu-option logout-button ">Logout</div>
                     <form id="logoutForm" action="/logout" method="POST">
                        <div>
                           <input type="hidden" name="_csrf" value="f0e246b3-aa3a-47fa-bea6-165209759cb5" />
                        </div>
                     </form>
                  </div>
               </div>
               <div class="header-logo logo">
                        <a href="/" title="WorldWideTravel" class=logo>
                            <!-- <svg class=icon-logo> -->
                                <img src="../images/WWT.jpg" style="width:110px;height: 40px;margin-left:-10%">
                            <!-- </svg> -->
                        </a>
                        <span class="tagline mobile-hide">Take a break,You deserve it</span>
                    </div>
               <div class="search-wrap mobile-hide">
                  <div class="search plan-search-pane">
                     <div class="bg"></div>
                     <input id="searchField" class="plan-search-field" data-placeholder="Search places & activities" spellcheck="false" autocomplete="off" name="search-field" value="" />
                     <div class="icon-search">
                        <svg class="icon search">
                           <use xlink:href="#icon-search-new"></use>
                        </svg>
                     </div>
                  </div>
               </div>
               <div class="header-icon-wrap mobile-hide">
                  <a id="newplan" class="notranslate" rel="nofollow" href="/trip-planner">+</a>
               </div>
               <div id="myPlans" class="header-icon-wrap mobile-hide" data-dropdown-url="/myPlansDropdown" data-has-plans="true">
                  <a rel="nofollow" href="/myPlans">
                     <svg class="my-plans header-icon">
                        <use xlink:href="#icon-my-plans"></use>
                     </svg>
                  </a>
               </div>
               <div id="help-container" class="header-icon-wrap mobile-hide" data-faq-url="/faq">
                  <a href="javascript:void(0)" class="help-tips notranslate">
                     <svg class="header-icon">
                        <use xlink:href="#icon-help-icon"></use>
                     </svg>
                  </a>
               </div>
               <div id="userOptions" class="header-icon-wrap mobile-hide ">
                  <a rel="nofollow" href="javascript:void(0);">
                     <span class="profile-small-screen">
                        <svg class="header-icon">
                           <use xlink:href="#icon-profile"></use>
                        </svg>
                     </span>
                     <span class="name notranslate">Shilbha</span>
                     <span class="dropdown"></span>
                  </a>
                  <div class="hidden">
                     <div id="userDropdown">
                        <ul>
                           <li class="account-button" onclick="window.location.href='index.html'">Home</li>
                           <li class="logout-button"onclick="window.location.href='../login.html'">Log out</li>
                        </ul>
                     </div>
                     <form id="logoutForm" action="/logout" method="POST">
                        <div>
                           <input type="hidden" name="_csrf" value="f0e246b3-aa3a-47fa-bea6-165209759cb5" />
                        </div>
                     </form>
                  </div>
               </div>
              
            </div>
         </header>
         <div class="page-content plan-header-hidden clear  " id="pageContent">
            <div id="analytics-metadata" data-page-type="Destination Country Page" data-page-type-new="Plan" data-entity-type="Country" data-entity="South Korea (311180817)"></div>
            <div id="plan" data-registration-required="true" data-plan-id="ff600c16-e46c-4611-9f28-00d363b3a589" data-version="0" data-is-create-logged="true" data-domains="South Korea" data-domain-type="single-destination" data-is-printed="false" data-edit-enabled="true" data-show-customization-ui="true" data-can-view-customizations="true" data-plan-params="{&#034;requiredAttractions&#034;:[],&#034;numAdults&#034;:3,&#034;endDate&#034;:&#034;2022-03-06&#034;,&#034;city&#034;:false,&#034;pace&#034;:&#034;Medium&#034;,&#034;adults&#034;:true,&#034;domains&#034;:[&#034;South Korea[311180817][Country]&#034;],&#034;teens&#034;:false,&#034;numKids&#034;:0,&#034;unwind&#034;:false,&#034;startDestination&#034;:&#034;Chennai&#034;,&#034;duration&#034;:10,&#034;endDestination&#034;:&#034;Chennai&#034;,&#034;outdoors&#034;:false,&#034;romantic&#034;:false,&#034;culture&#034;:false,&#034;style&#034;:&#034;Popular&#034;,&#034;numTeens&#034;:0,&#034;categories&#034;:[],&#034;startDate&#034;:&#034;2022-02-25&#034;,&#034;kids&#034;:false}" data-intro-tips="#calendar,#explore,#exploreHide,#itinerary,#overview,#overviewOneStay,#transportation,showStartTip" data-print-options-black-list="" data-first-time-load-of-calendar-page="true" data-plan-user-role="OWNER" data-user-type="inspirock" data-notification-seen-timestamp="" data-user-id="61bf315e41fa7532a15f5fce" data-current-user-firstname="true" data-plan-owner-firstname="Shilbha" data-has-email="true" data-response-comment-id="" data-plan-name="10 days in South Korea" data-plan-start-date="2022-02-25" data-plan-end-date="2022-03-06" data-is-public="false" data-is-anonymous="false" data-coverage="Europe, Americas, Asia, South Pacific, & Africa" data-num-adults="3" data-num-teens="0" data-num-kids="0" data-travel-modes="Bus,Car,Drive,Ferry,Helicopter,Plane,Flight,Fly,Shuttle,Subway,Taxi,Train,Tram" data-travel-modes-loc="Bus,Car,Drive,Ferry,Helicopter,Plane,Flight,Fly,Shuttle,Subway,Taxi,Train,Tram" data-travel-agent-button-text="Request travel agent in South Korea" data-tour-guide-enabled="true" data-destination-names-abridged="South Korea" data-country-code="IN" data-currency="INR" data-locale="en" data-allowed-file-types="image/jpeg,image/png,image/gif,image/bmp,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.oasis.opendocument.text,application/rtf,text/plain,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-powerpoint,application/vnd.openxmlformats-officedocument.presentationml.presentation,application/vnd.google-apps.document,application/vnd.google-apps.spreadsheet,application/vnd.ms-outlook,message/rfc822,application/x-iwork-keynote-sffkey,application/x-iwork-pages-sffpages,application/x-iwork-numbers-sffnumbers,multipart/related" data-allowed-file-extension="jpg, jpeg, gif, bmp, png, pdf, doc, docx, xls, xlsx, ppt, pps, msg, mht, mhtl, odt, rtf, txt" data-max-file-upload-size="5000000" data-reservation-email="plans@inspirock.com" data-reservations-enabled="true" data-is-plan-locked="false" data-email-reservation-enabled="true" data-show-agent-notes="false" data-platform="o" data-cotraveler-enabled="true" data-has-cotravelers="false" data-has-reservation="false" data-time-format="AMPM" data-autocomplete-defaults="[{&#034;id&#034;:&#034;311180817&#034;,&#034;label&#034;:&#034;South Korea&#034;,&#034;value&#034;:&#034;South Korea&#034;,&#034;category&#034;:&#034;country&#034;,&#034;url&#034;:&#034;/south-korea-trip-planner&#034;,&#034;description&#034;:&#034;&#034;,&#034;tags&#034;:[]},{&#034;id&#034;:&#034;111321113&#034;,&#034;label&#034;:&#034;Gyeongju&#034;,&#034;value&#034;:&#034;Gyeongju&#034;,&#034;category&#034;:&#034;recommendation&#034;,&#034;url&#034;:&#034;/south-korea/gyeongju-trip-planner&#034;,&#034;description&#034;:&#034;&#034;,&#034;tags&#034;:[]},{&#034;id&#034;:&#034;312052157&#034;,&#034;label&#034;:&#034;Gangneung&#034;,&#034;value&#034;:&#034;Gangneung&#034;,&#034;category&#034;:&#034;recommendation&#034;,&#034;url&#034;:&#034;/south-korea/gangneung-trip-planner&#034;,&#034;description&#034;:&#034;&#034;,&#034;tags&#034;:[]},{&#034;id&#034;:&#034;443456079&#034;,&#034;label&#034;:&#034;Jeonju&#034;,&#034;value&#034;:&#034;Jeonju&#034;,&#034;category&#034;:&#034;recommendation&#034;,&#034;url&#034;:&#034;/south-korea/jeonju-trip-planner&#034;,&#034;description&#034;:&#034;&#034;,&#034;tags&#034;:[]},{&#034;id&#034;:&#034;211180855&#034;,&#034;label&#034;:&#034;Seoul&#034;,&#034;value&#034;:&#034;Seoul&#034;,&#034;category&#034;:&#034;destination&#034;,&#034;url&#034;:&#034;/south-korea/seoul-trip-planner&#034;,&#034;description&#034;:&#034;&#034;,&#034;tags&#034;:[]},{&#034;id&#034;:&#034;511320961&#034;,&#034;label&#034;:&#034;Busan&#034;,&#034;value&#034;:&#034;Busan&#034;,&#034;category&#034;:&#034;destination&#034;,&#034;url&#034;:&#034;/south-korea/busan-trip-planner&#034;,&#034;description&#034;:&#034;&#034;,&#034;tags&#034;:[]},{&#034;id&#034;:&#034;411320999&#034;,&#034;label&#034;:&#034;Jeju&#034;,&#034;value&#034;:&#034;Jeju&#034;,&#034;category&#034;:&#034;destination&#034;,&#034;url&#034;:&#034;/south-korea/jeju-trip-planner&#034;,&#034;description&#034;:&#034;&#034;,&#034;tags&#034;:[]}]"></div>
            <div class="plan-heading hidden">
               <div class="plan-hero hidden">
                  <div class="plan-overview-big">
                     <div class="overview-header" style="background-image:url('https://s.inspirockcdn.com/images/heroes/f/south-korea-seoul.jpg')"></div>
                     <div class="plan-title-wrapper">
                        <div class="plan-title-wrapper-2">
                           <div class="hidden-title">10 days in South Korea</div>
                           <h1 class="plan-title editable">10 days in South Korea</h1>
                           <input class='editable-plan-title h1 hidden' type='text' maxlength='140' />
                           <span class="subtitle"> 25-Feb-2022&nbsp;&nbsp;-&nbsp;&nbsp;06-Mar-2022</span>
                           <span class="edit-plan-dates-container">
                              <button class="edit-plan-dates">Edit</button>
                           </span>
                        </div>
                     </div>
                     <div class="photo-update-container  hidden" data-max-size="5242880">
                        <div class="upload-container photo-container">
                           <svg>
                              <use xlink:href="#icon-camera"></use>
                           </svg>
                           <div class="photo-text ">Update cover photo</div>
                        </div>
                        <div class="remove-container photo-container  hidden">
                           <svg>
                              <use xlink:href="#icon-delete"></use>
                           </svg>
                           <div class="restore-text">Restore original image</div>
                        </div>
                     </div>
                     <input type="file" id="photo-file" name="photo" class="hidden" accept="image/*" />
                  </div>
               </div>
            </div>
            <div class="planHeaderWrapper">
               <div class="plan-header" id="planHeader" >
                  
               </div>
            </div>
  <div class="container">
    <img src=images/h1.jpg style="width:230px;height:240px;border-radius: 15px;margin-top: 5px;">
    <div style="margin-top:-27%;position: relative;">
      
  <h5 style="position: relative;margin-left:250px;"><b><?php echo $name[0] ?></b></h5>

  <p style="position: relative;margin-left:250px;margin-top: 10px;"><b>Address : </b><?php echo $address[0] ?></p>
</div>
<div style="margin-left: 250px;">
  <p><b>Category : </b><?php echo $category[0] ?></p>
  <p><b>Bed : </b><?php echo $bed[0] ?></p>
  <p><b>Price : </b><?php echo $price[0] ?></p>
  <p><b>Contact : </b><?php echo $phone[0] ?></p>
  <p><b>Rating : </b><?php echo $rating[0] ?>/5</p>
</div>
<div style="position:absolute;margin-left: 700px;margin-top: -12%">
  <button class="btn">Book</button>
  <style type="text/css">
    .btn
{
    margin: 10px 0px;
    display: block;
    padding: 8px 30px;
    border-radius: 5px;
    background: #231f20;
    line-height: 1;
    outline: none;
    color:white;
    cursor: pointer;
    transition: all 0.3s linear;
}
.btn:hover,
.btn:focus
{
    background:white;
    color:black;
}
  </style>
</div>
  </div>
  <div class="container" style="margin-top: 30px">
    <img src="images/h4.jpg" style="width:230px;height:240px;border-radius: 15px;margin-top: 5px;">
    <div style="margin-top:-27%;position: relative;">
      
  <h5 style="position: relative;margin-left:250px;"><b><?php echo $name[1] ?></b></h5>

  <p style="position: relative;margin-left:250px;margin-top: 10px;"><b>Address : </b><?php echo $address[1] ?></p>
</div>
<div style="margin-left: 250px;">
  <p><b>Category : </b><?php echo $category[1] ?></p>
  <p><b>Bed : </b><?php echo $bed[1] ?></p>
  <p><b>Price : </b><?php echo $price[1] ?></p>
  <p><b>Contact : </b><?php echo $phone[1] ?></p>
  <p><b>Rating : </b><?php echo $rating[1] ?>/5</p>
</div>
<div style="position:absolute;margin-left: 700px;margin-top: -12%">
  <button class="btn">Book</button>
  <style type="text/css">
    .btn
{
    margin: 10px 0px;
    display: block;
    padding: 8px 30px;
    border-radius: 5px;
    background: #231f20;
    line-height: 1;
    outline: none;
    color:white;
    cursor: pointer;
    transition: all 0.3s linear;
}
.btn:hover,
.btn:focus
{
    background:white;
    color:black;
}
  </style>
</div>
  </div>
   <div class="container" style="margin-top: 30px">
    <img src="images/h3.jpg" style="width:230px;height:240px;border-radius: 15px;margin-top: 5px;">
    <div style="margin-top:-27%;position: relative;">
      
  <h5 style="position: relative;margin-left:250px;"><b><?php echo $name[2] ?></b></h5>

  <p style="position: relative;margin-left:250px;margin-top: 10px;"><b>Address : </b><?php echo $address[2] ?></p>
</div>
<div style="margin-left: 250px;">
  <p><b>Category : </b><?php echo $category[2] ?></p>
  <p><b>Bed : </b><?php echo $bed[2] ?></p>
  <p><b>Price : </b><?php echo $price[2] ?></p>
  <p><b>Contact : </b><?php echo $phone[2] ?></p>
  <p><b>Rating : </b><?php echo $rating[2] ?>/5</p>
</div>
<div style="position:absolute;margin-left: 700px;margin-top: -12%">
  <button class="btn">Book</button>
  <style type="text/css">
    .btn
{
    margin: 10px 0px;
    display: block;
    padding: 8px 30px;
    border-radius: 5px;
    background: #231f20;
    line-height: 1;
    outline: none;
    color:white;
    cursor: pointer;
    transition: all 0.3s linear;
}
.btn:hover,
.btn:focus
{
    background:white;
    color:black;
}
  </style>
</div>
  </div>
   <div class="container" style="margin-top: 30px">
    <img src="images/h2.jpg" style="width:230px;height:240px;border-radius: 15px;margin-top: 5px;">
    <div style="margin-top:-27%;position: relative;">
      
  <h5 style="position: relative;margin-left:250px;"><b><?php echo $name[4] ?></b></h5>

  <p style="position: relative;margin-left:250px;margin-top: 10px;"><b>Address : </b><?php echo $address[4] ?></p>
</div>
<div style="margin-left: 250px;">
  <p><b>Category : </b><?php echo $category[4] ?></p>
  <p><b>Bed : </b><?php echo $bed[4] ?></p>
  <p><b>Price : </b><?php echo $price[4] ?></p>
  <p><b>Contact : </b><?php echo $phone[4] ?></p>
  <p><b>Rating : </b><?php echo $rating[4] ?>/5</p>
</div>
<div style="position:absolute;margin-left: 700px;margin-top: -12%">
  <button class="btn">Book</button>
  <style type="text/css">
    .btn
{
    margin: 10px 0px;
    display: block;
    padding: 8px 30px;
    border-radius: 5px;
    background: #231f20;
    line-height: 1;
    outline: none;
    color:white;
    cursor: pointer;
    transition: all 0.3s linear;
}
.btn:hover,
.btn:focus
{
    background:white;
    color:black;
}
  </style>
</div>
  </div>
   <div class="container" style="margin-top: 30px">
    <img src="images/h5.jpg" style="width:230px;height:240px;border-radius: 15px;margin-top: 5px;">
    <div style="margin-top:-27%;position: relative;">
      
  <h5 style="position: relative;margin-left:250px;"><b><?php echo $name[5] ?></b></h5>

  <p style="position: relative;margin-left:250px;margin-top: 10px;"><b>Address : </b><?php echo $address[5] ?></p>
</div>
<div style="margin-left: 250px;">
  <p><b>Category : </b><?php echo $category[5] ?></p>
  <p><b>Bed : </b><?php echo $bed[5] ?></p>
  <p><b>Price : </b><?php echo $price[5] ?></p>
  <p><b>Contact : </b><?php echo $phone[5] ?></p>
  <p><b>Rating : </b><?php echo $rating[5] ?>/5</p>
</div>
<div style="position:absolute;margin-left: 700px;margin-top: -12%">
  <button class="btn">Book</button>
  <style type="text/css">
    .btn
{
    margin: 10px 0px;
    display: block;
    padding: 8px 30px;
    border-radius: 5px;
    background: #231f20;
    line-height: 1;
    outline: none;
    color:white;
    cursor: pointer;
    transition: all 0.3s linear;
}
.btn:hover,
.btn:focus
{
    background:white;
    color:black;
}
  </style>
</div>
  </div>
</body>
</html>
