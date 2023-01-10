<?php

$from ="MAA";
$to = "DEL";
$dep = "2022-02-25";

$curl = curl_init();
curl_setopt_array($curl, array(
  CURLOPT_URL => "https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=$from&destinationLocationCode=$to&departureDate=$dep&adults=2&max=10&currencyCode=INR&nonStop=true",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'GET',
  CURLOPT_HTTPHEADER => array(
    'Authorization: Bearer 8aCYROxxA1hhC1zn4eYY5h3uFdGl'
  ),
));

$response = curl_exec($curl);
curl_close($curl);
$decoded = json_decode($response);

$airname=[];
$path=[];
$depar=[];
$at=[];
$dur=[];
$tot=[];
$cls=[];

for($i=0;$i<sizeof($decoded->data);$i++)
{
if($decoded->data[$i]->itineraries[0]->segments[0]->carrierCode == "AI")
{
  $airname[$i]="Air India";
  $path[$i]="icons/icon2.jpeg";
}
else
{
  $airname[$i]="Vistara";
  $path[$i]="icons/icon1.jpeg";
}
$depar[$i]=chop(chop(ltrim(ltrim($decoded->data[$i]->itineraries[0]->segments[0]->departure->at,"$dep"),"T"),"00"),":");
$at[$i]=chop(chop(ltrim(ltrim($decoded->data[$i]->itineraries[0]->segments[0]->arrival->at,"$dep"),"T"),"00"),":");
$dur[$i]=ltrim($decoded->data[$i]->itineraries[0]->duration,"PT");
$tot[$i]=chop($decoded->data[$i]->price->total,".00");
$cls[$i]=$decoded->data[$i]->travelerPricings[0]->fareDetailsBySegment[0]->class;
}

?>


<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Flight Booking</title>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
      <link href="https://fastui.cltpstatic.com/raw/upload/ct-air-desktop-pwa-prod/en/static/css/11.020a2190.chunk.css" rel="stylesheet">
      <link href="https://fastui.cltpstatic.com/raw/upload/ct-air-desktop-pwa-prod/en/static/css/main.987f6eaf.chunk.css" rel="stylesheet">
      <link rel="stylesheet" type="text/css" href="https://fastui.cltpstatic.com/raw/upload/ct-air-desktop-pwa-prod/en/static/css/2.8c5f6efe.chunk.css">
      <link rel="stylesheet" type="text/css" href="https://fastui.cltpstatic.com/raw/upload/ct-air-desktop-pwa-prod/en/static/css/1.c6231af7.chunk.css">
      <link rel="stylesheet" type="text/css" href="https://fastui.cltpstatic.com/raw/upload/ct-air-desktop-pwa-prod/en/static/css/FlightsResults.9213df36.chunk.css">
      <style type="text/css">
         iframe#_hjRemoteVarsFrame {
            display: none !important;
            width: 5px !important;
            height: 1px !important;
            opacity: 0 !important;
            pointer-events: none !important;
         }
      </style>
      <link rel="stylesheet" href="book.css" />
   </head>
   <body>
      <div class="booking-content" style="position: relative;background-color: white;">
         <div class="sticky__parent" style="position: absolute;width: 900px;">
            <div class="h-8 bg-neutral-0 br-4 px-4 ow-sortbar-container">
               <div class="flex flex-middle ms-grid-column-1">
                  <a class="hover:c-secondary-500 c-neutral-700 fw-500 td-none" style="cursor: pointer;margin-left: 60px;color: #000;">
                     <span class="fs-inherit c-inherit" style="font-size: 15px;">Airlines</span>
                  </a>
               </div>
               <div class="ow-sortbar-container--time ms-grid-column-2">
                  <div class="flex flex-middle ms-grid-column-1">
                     <a class="hover:c-secondary-500 c-neutral-700 fw-500 td-none" style="cursor: pointer;margin-left: 70px;color: #000;">
                        <span class="fs-inherit c-inherit" style="font-size: 15px;">Departure</span>
                     </a>
                  </div>
                  <div class="flex flex-middle ms-grid-column-2">
                     <a class="hover:c-secondary-500 c-neutral-700 fw-500 td-none" style="cursor: pointer;margin-left: 60px;color: #000;">
                        <span class="fs-inherit c-inherit" style="font-size: 15px;">Arrival</span>
                     </a>
                  </div>
                  <div class="flex flex-middle ms-grid-column-3">
                     <a class="hover:c-secondary-500 c-neutral-700 fw-500 td-none" style="cursor: pointer;margin-left: 36px;color: #000;">
                        <span class="fs-inherit c-inherit" style="font-size: 15px;">Duration</span>
                     </a>
                  </div>
               </div>
               <p style="margin-left: 60px;margin-top: 7px;font-size: 16px;">Class &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Price</p>
            </div>
            <div class="m-0 mt-2 mb-0 ml-0 mr-0 mx-0 my-0" style="height: 1px; width: 1px;"></div>
         </div>
         <br/></br/><br/>
         <div class="ow-tuple-container__details ms-grid-row-2" data-testid="airlineBlock" style="background-color:#fff;border: 1px solid black;box-shadow: 0 3px 5px #000000;" id="mydiv">
            <div class="flex flex-start ms-grid-column-1" style="margin-top: 10px;margin-left: 20px;width: 150px;">
               <div class="flex flex-column flex-start">
                  <div class="flex flex-row nmx-1">
                     <div class="" data-tooltipped="" aria-describedby="tippy-tooltip-1" data-original-title="undefined" style="display: flex;">
                        <img src="<?php echo $path[0] ?>" alt="Air India" class="br-2 o-hidden mx-1" style="width: 60px; height: 60px;">
                        <p style="margin-top: 20px;margin-left: 10px;font-size: 20px;"><?php echo $airname[0] ?></p>
                     </div>
                  </div>
               </div>
            </div>
            <div class="ms-grid-column-2" style="margin-top: 50px;margin-left: 50px;">
               <div class="ow-tuple-container_details_time ms-grid-row-2" style="margin-top: 23px;">
                  <div class="ms-grid-column-1 ms-grid-row-1">
                     <p class="m-0 fs-5 fw-400 c-neutral-900" style="margin-left: 46px;font-size: 20px;"><?php echo $depar[0]; ?></p>
                  <!-- </div> -->
                  <!-- <div class="ms-grid-column-2 ms-grid-row-1" style="width: 100px;"> -->
                     <p class="m-0 fs-5 fw-400 c-neutral-900" style="margin-left: 25px;font-size: 20px;"><?php echo $at[0]; ?></p>
                  <!-- </div> -->
                  <!-- <div class="ms-grid-column-3 ms-grid-row-1"> -->
                     <p class="m-0 fs-5 fw-400 c-neutral-900" style="margin-right: 0px;font-size: 20px;"><?php echo $dur[0]; ?></p>
                  </div>
               </div>
            </div>
            <div class="ow-tuple-container_details_price flex ms-grid-column-3" style="margin-top: 15px;">
               <div class="flex flex-start flex-column flex-1">
                  <div class="flex flex-right flex-middle h-6">
                     <p style="margin-right: 50px;margin-top: 45px;font-size: 20px;"><?php echo $cls[0]; ?></p>
                  </div>
               </div>
               <div class="flex flex-column pl-2 flex-bottom" data-ct-handle="solutionPrice" style="min-width: 88px;">
                  <p style="margin-top: 21px;font-size: 20px;margin-right: 8px;"><?php echo "₹$tot[0]"; ?></p>
               </div>
            </div>
            <div class="flex flex-right nmt-1 ms-grid-column-4" style="margin-top: 33px;">
               <button class="px-4 bg-primary-500 hover:bg-primary-600 c-white bc-transparent c-pointer py-1 px-3 h-8 fs-3 fw-600 t-all button bs-solid tp-color td-500 bw-1 br-4 lh-solid box-border" style="margin-top: ;margin-right:30px;background-color: teal;">Book</button>
            </div>
         </div>
         <div class="m-0 mt-2 mb-0 ml-0 mr-0 mx-0 my-0" style="height: 1px; width: 1px;"></div>
         <div class="ow-tuple-container__details ms-grid-row-2" data-testid="airlineBlock" style="background-color:#fff;border: 1px solid black;box-shadow: 0 3px 5px #000000;" id="mydiv">
            <div class="flex flex-start ms-grid-column-1" style="margin-top: 10px;margin-left: 20px;width: 150px;">
               <div class="flex flex-column flex-start">
                  <div class="flex flex-row nmx-1">
                     <div class="" data-tooltipped="" aria-describedby="tippy-tooltip-1" data-original-title="undefined" style="display: flex;">
                        <img src="<?php echo $path[1] ?>" alt="Air India" class="br-2 o-hidden mx-1" style="width: 60px; height: 60px;">
                        <p style="margin-top: 20px;margin-left: 10px;font-size: 20px;"><?php echo $airname[1] ?></p>
                     </div>
                  </div>
               </div>
            </div>
            <div class="ms-grid-column-2" style="margin-top: 10px;margin-left: 50px;">
               <div class="ow-tuple-container_details_time ms-grid-row-2" style="margin-top: 23px;">
                  <div class="ms-grid-column-1 ms-grid-row-1">
                     <p class="m-0 fs-5 fw-400 c-neutral-900" style="margin-left: 46px;font-size: 20px;"><?php echo $depar[1]; ?></p>
                  </div>
                  <div class="ms-grid-column-2 ms-grid-row-1" style="width: 100px;">
                     <p class="m-0 fs-5 fw-400 c-neutral-900" style="margin-left: 25px;font-size: 20px;"><?php echo $at[1]; ?></p>
                  </div>
                  <div class="ms-grid-column-3 ms-grid-row-1">
                     <p class="m-0 fs-5 fw-400 c-neutral-900" style="margin-right: 0px;font-size: 20px;"><?php echo $dur[1]; ?></p>
                  </div>
               </div>
            </div>
            <div class="ow-tuple-container_details_price flex ms-grid-column-3" style="margin-top: 10px;">
               <div class="flex flex-start flex-column flex-1">
                  <div class="flex flex-right flex-middle h-6">
                     <p style="margin-right: 50px;margin-top: 45px;font-size: 20px;"><?php echo $cls[1]; ?></p>
                  </div>
               </div>
               <div class="flex flex-column pl-2 flex-bottom" data-ct-handle="solutionPrice" style="min-width: 88px;">
                  <p style="margin-top: 21px;font-size: 20px;margin-right: 8px;"><?php echo "₹$tot[1]"; ?></p>
               </div>
            </div>
            <div class="flex flex-right nmt-1 ms-grid-column-4" style="margin-top: 10px;">
               <button class="px-4 bg-primary-500 hover:bg-primary-600 c-white bc-transparent c-pointer py-1 px-3 h-8 fs-3 fw-600 t-all button bs-solid tp-color td-500 bw-1 br-4 lh-solid box-border" style="margin-top:18px;margin-right:30px;background-color: teal;">Book</button>
            </div>
         </div>
         <div class="m-0 mt-2 mb-0 ml-0 mr-0 mx-0 my-0" style="height: 1px; width: 1px;"></div>
         <div class="ow-tuple-container__details ms-grid-row-2" data-testid="airlineBlock"style="background-color:#fff;border: 1px solid black;box-shadow: 0 3px 5px #000000;" id="mydiv">
            <div class="flex flex-start ms-grid-column-1" style="margin-top: 10px;margin-left: 20px;width: 150px;">
               <div class="flex flex-column flex-start">
                  <div class="flex flex-row nmx-1">
                     <div class="" data-tooltipped="" aria-describedby="tippy-tooltip-1" data-original-title="undefined" style="display: flex;">
                        <img src="<?php echo $path[2] ?>" alt="Air India" class="br-2 o-hidden mx-1" style="width: 60px; height: 60px;">
                        <p style="margin-top: 20px;margin-left: 10px;font-size: 20px;"><?php echo $airname[2] ?></p>
                     </div>
                  </div>
               </div>
            </div>
            <div class="ms-grid-column-2" style="margin-top: 10px;margin-left: 50px;">
               <div class="ow-tuple-container_details_time ms-grid-row-2" style="margin-top: 23px;">
                  <div class="ms-grid-column-1 ms-grid-row-1">
                     <p class="m-0 fs-5 fw-400 c-neutral-900" style="margin-left: 46px;font-size: 20px;"><?php echo $depar[2]; ?></p>
                  </div>
                  <div class="ms-grid-column-2 ms-grid-row-1" style="width: 100px;">
                     <p class="m-0 fs-5 fw-400 c-neutral-900" style="margin-left: 25px;font-size: 20px;"><?php echo $at[2]; ?></p>
                  </div>
                  <div class="ms-grid-column-3 ms-grid-row-1">
                     <p class="m-0 fs-5 fw-400 c-neutral-900" style="margin-right: 0px;font-size: 20px;"><?php echo $dur[2]; ?></p>
                  </div>
               </div>
            </div>
            <div class="ow-tuple-container_details_price flex ms-grid-column-3" style="margin-top: 10px;">
               <div class="flex flex-start flex-column flex-1">
                  <div class="flex flex-right flex-middle h-6">
                     <p style="margin-right: 50px;margin-top: 45px;font-size: 20px;"><?php echo $cls[2]; ?></p>
                  </div>
               </div>
               <div class="flex flex-column pl-2 flex-bottom" data-ct-handle="solutionPrice" style="min-width: 88px;">
                  <p style="margin-top: 21px;font-size: 20px;margin-right: 8px;"><?php echo "₹$tot[2]"; ?></p>
               </div>
            </div>
            <div class="flex flex-right nmt-1 ms-grid-column-4" style="margin-top: 10px;">
               <button class="px-4 bg-primary-500 hover:bg-primary-600 c-white bc-transparent c-pointer py-1 px-3 h-8 fs-3 fw-600 t-all button bs-solid tp-color td-500 bw-1 br-4 lh-solid box-border" style="margin-top:18px;margin-right:30px;background-color: teal;">Book</button>
            </div>
         </div>
         <div class="m-0 mt-2 mb-0 ml-0 mr-0 mx-0 my-0" style="height: 1px; width: 1px;"></div>
         <div class="ow-tuple-container__details ms-grid-row-2" data-testid="airlineBlock" style="background-color:#fff;border: 1px solid black;box-shadow: 0 3px 5px #000000;" id="mydiv">
            <div class="flex flex-start ms-grid-column-1" style="margin-top: 10px;margin-left: 20px;width: 150px;">
               <div class="flex flex-column flex-start">
                  <div class="flex flex-row nmx-1">
                     <div class="" data-tooltipped="" aria-describedby="tippy-tooltip-1" data-original-title="undefined" style="display: flex;">
                        <img src="<?php echo $path[3] ?>" alt="Air India" class="br-2 o-hidden mx-1" style="width: 60px; height: 60px;">
                        <p style="margin-top: 20px;margin-left: 10px;font-size: 20px;"><?php echo $airname[3] ?></p>
                     </div>
                  </div>
               </div>
            </div>
            <div class="ms-grid-column-2" style="margin-top: 10px;margin-left: 50px;">
               <div class="ow-tuple-container_details_time ms-grid-row-2" style="margin-top: 23px;">
                  <div class="ms-grid-column-1 ms-grid-row-1">
                     <p class="m-0 fs-5 fw-400 c-neutral-900" style="margin-left: 46px;font-size: 20px;"><?php echo $depar[3]; ?></p>
                  </div>
                  <div class="ms-grid-column-2 ms-grid-row-1" style="width: 100px;">
                     <p class="m-0 fs-5 fw-400 c-neutral-900" style="margin-left: 25px;font-size: 20px;"><?php echo $at[3]; ?></p>
                  </div>
                  <div class="ms-grid-column-3 ms-grid-row-1">
                     <p class="m-0 fs-5 fw-400 c-neutral-900" style="margin-right: 0px;font-size: 20px;"><?php echo $dur[3]; ?></p>
                  </div>
               </div>
            </div>
            <div class="ow-tuple-container_details_price flex ms-grid-column-3" style="margin-top: 10px;">
               <div class="flex flex-start flex-column flex-1">
                  <div class="flex flex-right flex-middle h-6">
                     <p style="margin-right: 50px;margin-top: 45px;font-size: 20px;"><?php echo $cls[3]; ?></p>
                  </div>
               </div>
               <div class="flex flex-column pl-2 flex-bottom" data-ct-handle="solutionPrice" style="min-width: 88px;">
                  <p style="margin-top: 21px;font-size: 20px;margin-right: 8px;"><?php echo "₹$tot[3]"; ?></p>
               </div>
            </div>
            <div class="flex flex-right nmt-1 ms-grid-column-4" style="margin-top: 10px;">
               <button class="px-4 bg-primary-500 hover:bg-primary-600 c-white bc-transparent c-pointer py-1 px-3 h-8 fs-3 fw-600 t-all button bs-solid tp-color td-500 bw-1 br-4 lh-solid box-border" style="margin-top:18px;margin-right:30px;background-color: teal;">Book</button>
            </div>
         </div>
         <div class="m-0 mt-2 mb-0 ml-0 mr-0 mx-0 my-0" style="height: 1px; width: 1px;"></div>
         <div class="ow-tuple-container__details ms-grid-row-2" data-testid="airlineBlock" style="background-color:#fff;border: 1px solid black;box-shadow: 0 3px 5px #000000;" id="mydiv">
            <div class="flex flex-start ms-grid-column-1" style="margin-top: 10px;margin-left: 20px;width: 150px;">
               <div class="flex flex-column flex-start">
                  <div class="flex flex-row nmx-1">
                     <div class="" data-tooltipped="" aria-describedby="tippy-tooltip-1" data-original-title="undefined" style="display: flex;">
                        <img src="<?php echo $path[4] ?>" alt="Air India" class="br-2 o-hidden mx-1" style="width: 60px; height: 60px;">
                        <p style="margin-top: 20px;margin-left: 10px;font-size: 20px;"><?php echo $airname[4] ?></p>
                     </div>
                  </div>
               </div>
            </div>
            <div class="ms-grid-column-2" style="margin-top: 10px;margin-left: 50px;">
               <div class="ow-tuple-container_details_time ms-grid-row-2" style="margin-top: 23px;">
                  <div class="ms-grid-column-1 ms-grid-row-1">
                     <p class="m-0 fs-5 fw-400 c-neutral-900" style="margin-left: 46px;font-size: 20px;"><?php echo $depar[4]; ?></p>
                  </div>
                  <div class="ms-grid-column-2 ms-grid-row-1" style="width: 100px;">
                     <p class="m-0 fs-5 fw-400 c-neutral-900" style="margin-left: 25px;font-size: 20px;"><?php echo $at[4]; ?></p>
                  </div>
                  <div class="ms-grid-column-3 ms-grid-row-1">
                     <p class="m-0 fs-5 fw-400 c-neutral-900" style="margin-right: 0px;font-size: 20px;"><?php echo $dur[4]; ?></p>
                  </div>
               </div>
            </div>
            <div class="ow-tuple-container_details_price flex ms-grid-column-3" style="margin-top: 10px;">
               <div class="flex flex-start flex-column flex-1">
                  <div class="flex flex-right flex-middle h-6">
                     <p style="margin-right: 50px;margin-top: 45px;font-size: 20px;"><?php echo $cls[4]; ?></p>
                  </div>
               </div>
               <div class="flex flex-column pl-2 flex-bottom" data-ct-handle="solutionPrice" style="min-width: 88px;">
                  <p style="margin-top: 21px;font-size: 20px;margin-right: 8px;"><?php echo "₹$tot[4]"; ?></p>
               </div>
            </div>
            <div class="flex flex-right nmt-1 ms-grid-column-4" style="margin-top: 10px;">
               <button class="px-4 bg-primary-500 hover:bg-primary-600 c-white bc-transparent c-pointer py-1 px-3 h-8 fs-3 fw-600 t-all button bs-solid tp-color td-500 bw-1 br-4 lh-solid box-border" style="margin-top:18px;margin-right:30px;background-color: teal;">Book</button>
            </div>
         </div>
      </div>
      </div>
      </div>
      </div>
      <br/>
      <div style="margin-top:200px;color:white;">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </div>
      <script src="script.js"></script>
   </body>
</html>