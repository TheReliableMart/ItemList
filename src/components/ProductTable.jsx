import styles from './ProductTable.module.css';
import { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FaEye } from "react-icons/fa";

/*Pictures*/
//ACCESSORIES
import RingLight from './Pictures/RingLight.jpg';
import OriginalMicroCable from './Pictures/OriginalMicroCable.jpg';
import microbasic from './Pictures/microbasic.jpg';
import HDMiBasic from './Pictures/HDMiBasic.jpg';
import Acable from './Pictures/Acable.jpg';

import typeCbasic from './Pictures/typeCbasic.jpg';
import CNormal from './Pictures/CNormal.jpg';
import Lightening1500 from './Pictures/Lightening1500.jpg';
import CardReader from './Pictures/CardReader.jpg';
import COtg from './Pictures/COtg.jpg';
import WifiAlfaDongle from './Pictures/WifiAlfaDongle.jpg';
import Lighteningbasic from './Pictures/Lighteningbasic.jpg';
import PowerCable from './Pictures/PowerCable.jpg';
import VGACable from './Pictures/VGACable.jpg';
import USBHub from './Pictures/USBHub.jpg';
import HDMIcableOrg from './Pictures/HDMIcableOrg.jpg';
import MFiCable from './Pictures/MFiCable.jpg';
import ANSTYlighteningCable from './Pictures/ANSTYlighteningCable.jpg';
import Connetorpc from './Pictures/Connetorpc.jpg';
import OriginalTypeC from './Pictures/OriginalTypeC.jpg';

//USBs

import Sandisk6800 from './Pictures/Sandisk6800.jpg';
import Sandisk13500 from './Pictures/Sandisk13500.jpg';
import Sandisk3100 from './Pictures/Sandisk3100.jpg';
import Sandisk6750 from './Pictures/Sandisk6750.jpg';
import Sandisk1500 from './Pictures/Sandisk1500.jpg';
import Sandisk2400 from './Pictures/Sandisk2400.jpg';
import SandiskiXpand from './Pictures/SandiskiXpand.jpg';



//MIC 
import enrg from './Pictures/Lavalier1000.jpg';
import Gionee450 from './Pictures/Gionee450.jpg';
import CGionee from './Pictures/CGionee.jpg';
import NormalGionee from './Pictures/NormalGionee.jpg';
import Cjionee from './Pictures/Cjionee.jpg';
import Jionee from './Pictures/Jionee.jpg';
import Mark1 from './Pictures/Mark1.jpg';
import GamingHeadphone from './Pictures/GamingHeadphone.jpg';
import Boya2800 from './Pictures/Boya2800.jpg';
import GamingHandsfree from './Pictures/GamingHandsfree.jpg';
import Faster4900 from './Pictures/Faster4900.jpg';
import ZeroAura from './Pictures/ZeroAura.jpg';
import SpaceHeadphones from './Pictures/SpaceHeadphones.jpg';
import BoostGroovewirelessheadset from './Pictures/BoostGroovewirelessheadset.jpg';
import BoostSonic from './Pictures/BoostSonic.jpg';
import BoostEcho from './Pictures/BoostEcho.jpg';
import BoostPulse from './Pictures/BoostPulse.jpg';
import BoostSync from './Pictures/BoostSync.jpg';
import Boostwave from './Pictures/Boostwave.jpg';

//Mouse
import GamingMouse520 from './Pictures/GamingMouse520.jpg';
import DellWiredMouse from './Pictures/DellWiredMouse.jpg';
import DellWireLessMouse from './Pictures/DellWireLessMouse.jpg';
import gamingMouseWireless from './Pictures/gamingMouseWireless.jpg';
import gamingMouseWired from './Pictures/gamingMouseWired.jpg';
import RGBKeyboard from   './Pictures/RGBKeyboard.jpg';
//1;

import MousePad250 from './Pictures/MousePad250.jpg';
import MousePad120 from './Pictures/MousePad120.jpg';

// Electronics
import UNO from './Pictures/UNO.jpg';
import IR from './Pictures/IR.jpg';
import US from './Pictures/US.jpg';
import L298 from './Pictures/L298.jpg';
import CellCase3 from './Pictures/3CellCase.jpg';
import CellCase2 from './Pictures/2CellCase.jpg';
// Trimmer
import Phillips8000 from './Pictures/Phillips8000.jpg';
import Phillips6000 from './Pictures/Phillips6000.jpg';
import Phillips10000 from './Pictures/Phillips10000.jpg';
import Dingling from './Pictures/Dingling.jpg';

//Laptops 
import Elitebook440 from './Pictures/Elitebook440.jpg';
import ZBook from './Pictures/ZBook.jpg';



// J.
import Flames from './Pictures/J/Flames.jpg';
import Janan from './Pictures/J/Janan.jpg';
import Zarar from './Pictures/J/Zarar.jpg';
import J from './Pictures/J/J.jpg';
import J10C from './Pictures/J/J10C.jpg';
import UNS from './Pictures/J/UNS.jpg';
import Drift from './Pictures/J/Drift.jpg';
import Hemani from './Pictures/J/Hemani.jpg';

//WATCHES

import Yolo8500 from './Pictures/Yolo8500.jpg';
import Yolo12000 from './Pictures/Yolo12000.jpg';
import Yolo10000 from './Pictures/Yolo10000.jpg';
import Yolo10000Charcoal from './Pictures/Yolo10000Charcoal.jpg';
import Itel10000 from './Pictures/Itel10000.jpg';
import Astro from './Pictures/Astro.jpg';
import boostCosmic from './Pictures/boostCosmic.jpg';
import ImilabW12 from './Pictures/ImilabW12.jpg';



//POWERBANKS
import Faster5k from './Pictures/Faster5k.jpg';
import Fasterwireless from './Pictures/Fasterwireless.jpg';
import Faster20W from './Pictures/Faster20W.jpg';
import SpaceSP075 from './Pictures/SpaceSP075.jpg';
import FasterW10 from './Pictures/FasterW10.jpg';
import DanyTitan from './Pictures/DanyTitan.jpg';
import Audionicspark from './Pictures/Audionicspark.jpg';

import YonexPair from './Pictures/YonexPair.jpg';
import YonexSingle from './Pictures/YonexSingle.jpg';
import Gosan from './Pictures/Gosan.jpg';
import FGdon from './Pictures/FGdon.jpg';
import LargeBall from './Pictures/LargeBall.jpg';
import ShineBall from './Pictures/ShineBall.jpg';
import BKHard from './Pictures/BKHard.jpg';
import MZHard from './Pictures/MZHard.jpg';
import SajjadHard from './Pictures/SajjadHard.jpg';
import Trump from './Pictures/Trump.jpg';
import GS1 from './Pictures/GS1.jpg';
import Voltric from './Pictures/Voltric.jpg';
import PingPongButterfly from './Pictures/PingPongButterfly.jpg';
import PingPongDoubleCircle from './Pictures/PingPongDoubleCircle.jpg';
import PokerCards from './Pictures/PokerCards.jpg';




const products = [
  {
    category: 'Accessories',
    id: 'Accessories',
    items: [
      { id: '1', name: 'RGB RingLight', description: '20 Light Modes', price: '1200', pictureUrl: [RingLight] },
      
      { id: '2', name: 'Card Reader', description: 'SD Card Reader', price: '50', pictureUrl: [CardReader] },
      { id: '3', name: 'Type C OTG', description: 'Good Quality OTG', price: '100', pictureUrl: [COtg] },
      { id: '4', name: 'Wifi Dongle', description: 'Alfa Wifi Dongle', price: '500', pictureUrl: [WifiAlfaDongle] },
     


      { id: '5', name: '3.0 USB hub', description: 'Good Quality 4 Ports USB Hub with led indicator', price: '650', pictureUrl: [USBHub] },
      { id: '6', name: '2 in 1 3.5mm', description: 'connector for PCs', price: '280', pictureUrl: [Connetorpc] },


    ],
  },
  {
    category: 'Chargers & Cables',
    id: 'Chargers',
    items: [
      { id: '1', name: 'MicroUSB Charging Cable', description: 'Normal Quality', price: '250', pictureUrl: [microbasic] },
      { id: '2', name: 'MicroUSB Charging Cable', description: 'Original Cable', price: '350', pictureUrl: [OriginalMicroCable] },
      { id: '3', name: 'TypeC Charging Cable', description: 'High Quality Cable', price: '500', pictureUrl: [OriginalTypeC], customClass: '' },
      { id: '4', name: 'TypeC Charging Cable', description: 'Good Quality Cable || upTo 70W', price: '250', pictureUrl: [typeCbasic] },
      { id: '5', name: 'TypeC Charging Cable', description: 'Basic Quality Cable || upTo 70W', price: '150', pictureUrl: [CNormal] },
      { id: '6', name: 'Anker Lightning Cable', description: 'MFi Certified', price: '2000', pictureUrl: [MFiCable] },
      { id: '7', name: 'ANSTY Lightning Cable', description: 'Good Quality Cable', price: '450', pictureUrl: [ANSTYlighteningCable] },
      { id: '8', name: 'Lightning Cable', description: 'Basic Quality', price: '280', pictureUrl: [Lighteningbasic] },
      { id: '9', name: 'Lightning to 3.5mm Hi-Fi Cable', description: 'Braided Cable 2m Length', price: '1500', pictureUrl: [Lightening1500] },
       { id: '10', name: 'Power Cable', description: 'Good Quality 1m Length', price: '220', pictureUrl: [PowerCable] },
      { id: '11', name: 'VGA Cable', description: 'Good Quality 1m Length', price: '250', pictureUrl: [VGACable] },
      { id: '13', name: 'HDMI Cable', description: 'Good Quality 1m Length', price: '350', pictureUrl: [HDMIcableOrg] },
    

      {
        id: '13', name: 'Aux Cable', description: '1m Length', price: '200', pictureUrl: [Acable],
        // customClass: 'description',
      },

    ],
  },
  {
    category: 'USBs',
    id: 'USBs',
    items: [
      { id: '1', name: 'Sandisk OTG Drive M3.0 256GB', description: 'Compatible with OTG-enabled Android devices.', price: '6800', pictureUrl: [Sandisk6800], customClass: '' },
      { id: '2', name: 'Sandisk Otg Dual Drive Android', description: `64GB Flash || Brand Warranty`, price: '2400', pictureUrl: [Sandisk2400], customClass: '' },
      { id: '3', name: 'Sandisk iXpand Flash Drive', description: `256GB || Brand Warranty`, price: '18000', pictureUrl: [SandiskiXpand], customClass: '' },
      { id: '4', name: 'SanDisk - Ultra Fit 3.1', description: '128GB Flash', price: '3100', pictureUrl: [Sandisk3100], customClass: 'noPrice' },
      // { id: '4', name: 'SanDisk - Ultra Fit 3.1', description: '256GB Flash', price: '6750', pictureUrl: [Sandisk6750], customClass: 'noPrice' },
      { id: '5', name: 'SanDisk - Ultra Fit 3.1', description: '32GB Flash', price: '1500', pictureUrl: [Sandisk1500], customClass: 'noPrice' },
      {
        id: '6', name: 'SanDisk - Ultra Flair 3.0 ', description: '512GB Flash', price: '13500 ', pictureUrl: [Sandisk13500], customClass: 'noPrice'
      },
    ],
  },
  {
    category: 'Mic and Headphones',
    id: 'MicAndHeadphones',
    items: [
      { id: '1', name: 'BOYA mic', description: 'Original Boya Mic with 18 months warranty. NOTE: This Item has brand warranty, not to be claimed through seller.', price: '2800', pictureUrl: [Boya2800], customClass: 'description' },
      { id: '2', name: 'Lavalier XO-MKF 01 Wired Mic', description: '5m Wire', price: '920', pictureUrl: [enrg], customClass: '' },
      { id: '3', name: 'Gionee Handsfree', description: 'Normal Quality', price: '300', pictureUrl: [NormalGionee], customClass: '' },
      { id: '4', name: 'Gionee Handsfree', description: 'High Quality', price: '420', pictureUrl: [Gionee450], customClass: '' },
      { id: '5', name: 'Type C Gionee ', description: 'High Quality', price: '500', pictureUrl: [CGionee], customClass: '' },
      { id: '6', name: 'Audionic Jionee Type C', description: 'Original', price: '750', pictureUrl: [Cjionee], customClass: '' },
      { id: '7', name: 'Audionic Jionee', description: 'Original', price: '500', pictureUrl: [Jionee], customClass: '' },
      { id: '8', name: 'Audionic Mark 1', description: 'Original', price: '500', pictureUrl: [Mark1], customClass: '' },
      {
        id: '9', name: 'Zero Aura ENC Earbuds ', description: ` 1 Year Brand Warranty. ENC, Noise Reduction technology. Features of Aura:
        40 Hour Battery Life
        Aerofit Design
        HyperBass Technology
        IPX5 Water Resistance
        Instant Pairing || NOTE: This Item has brand warranty, not to be claimed through seller.`, price: '3500', pictureUrl: [ZeroAura], customClass: 'description '
      },
      { id: '10', name: 'Space wireless Headphones', description: `Driver Unit:40mm, Impedance:320 Ohms, Frequency Response:20-20KHz, Sensitivity:110dB±3dB, Electric Current:3.6V-5V DC, Voltage:≤70 mA, Rechargeable Lithium Battery:250 mAh,Operation Range:10 Meters, Charging Time:2-3 Hours, Standby Time:100 Hours, Memory Card Support: Upto 32GB, L2CAP, A2DP, AVCTP,Supports: AVDTP, AVRCP`, price: '4980', pictureUrl: [SpaceHeadphones], customClass: 'description' },

      { id: '11', name: 'K2 Gaming Headphones', description: 'Gaming Headphones with RGB lights, 50mm driver, comfortable design, ', price: '2750', pictureUrl: [GamingHeadphone], customClass: "description" },
      { id: '12', name: 'Boost Groove wireless headset', description: 'Experience seamless connectivity with Bluetooth 5.0+EDR on Boost Groove headset for enhanced performance. 5 hours play time with micro SD card supported. Enjoy immersive sound with 40mm speakers and audio jack. 1 year brand warranty. NOTE: This item has brand warranty and cannot be claimed through seller. ', price: '3000', pictureUrl: [BoostGroovewirelessheadset], customClass: "description noPrice" },

      { id: '13', name: 'Boost Sonic wireless Headset', description: 'Enjoy ultimate calling and play experience with Bluetooth 5.0+EDR and an amazing battery life. Memory card and aux cable supported.  7 color lightening with immersive 40mm speaker. 1 year brand warranty. NOTE: This item has brand warranty and cannot be claimed through seller.', price: '3500', pictureUrl: [BoostSonic], customClass: "description noPrice" },

      { id: '14', name: 'Boost Echo wired gaming Headset', description: 'Enjoy comfortable and adjustable Headband with Ergonomic earcups. Stand out in style with dynamic RGB lightening and immersive experience with 7.1 virtual sound and tangle free cable. Communicate clearly with high quality, built-in microphone. 1 year brand warranty. NOTE: This item has brand warranty and cannot be claimed through seller. ', price: '5500', pictureUrl: [BoostEcho], customClass: "description noPrice" },

      { id: '15', name: 'Boost Pulse wireless Anc Headphone', description: 'Enjoy uninterrupted listening with Bluetooth 5.3 and amazing battery life with dynamic sound. Experience Active Noise Cancellation and talk time upto 20 hours. Fast type-C charging. 1 year brand warranty. NOTE: This item has brand warranty and cannot be claimed through seller.', price: '6000', pictureUrl: [BoostPulse], customClass: "description noPrice" },

      { id: '16', name: 'Boost Sync premium ANC wireless Headset', description: ' Enjoy ultimate calling and listening with Bluetooth 5.4 and an amazing battery life upto 60 hours playing hours. Experience 27dB noise cancellation and 40mm Neodymium speakers. IPX4 resistance offering protection against splashes and sweat. Aux cable supported. Available in black and blue color. 1 year brand warranty. NOTE: This item has brand warranty and cannot be claimed through seller.', price: '8000', pictureUrl: [BoostSync], customClass: "description noPrice" },
      { id: '17', name: 'Boost Wave premium hybrid ANC headset.', description: 'Experience a quality listening upto 80 hours play time with Bluetooth 5.4 and IPX4 water resistance. Enhance gaming experience with 45MS and 35dB Hybrid noise cancellation. Travel case included. Type-C charging with aux cable supported. Available in black and blue color. 1 year brand warranty. NOTE: This item has brand warranty and cannot be claimed through seller.', price: '11000', pictureUrl: [Boostwave], customClass: "description noPrice" },
    ],
  },

  {
    category: 'Mouse and MousePads',
    id: 'MouseandMousePads',
    items: [
      // { id: '1', name: 'Wired Mouse', description: 'Good Quality mouse', price: '400', pictureUrl: [], customClass: '' },
      {
        id: '1', name: 'Wired Mouse', description: 'Normal Quality', price: '350', pictureUrl: [DellWiredMouse]
        // customClass: 'sold'
        , customClass: ''
      },
      {
        id: '2', name: 'WireLess Mouse', description: 'Normal Quality', price: '750', pictureUrl: [DellWireLessMouse]
        // customClass: 'sold'
        , customClass: ''
      },

      { id: '3', name: 'Wired Gaming Mouse', description: 'with RGB lights and 6 buttons', price: '1500', pictureUrl: [gamingMouseWired], customClass: '' },

      { id: '4', name: 'Wireless Gaming Mouse', description: 'with RGB lights and 6 buttons', price: '1600', pictureUrl: [gamingMouseWireless], customClass: '' },

      { id: '5', name: 'RGB Semi-Mechanical Keyboard ', description: 'Semi Mechanical wired Keyboard', price: '2050', pictureUrl: [RGBKeyboard], customClass: '' },

      { id: '6', name: 'MousePad', description: 'Basic Mousepad, available in orange and yellow ', price: '180', pictureUrl: [MousePad120], customClass: '' },

      { id: '7', name: 'MousePad', description: 'Good Quality Mousepad, available in black ', price: '230', pictureUrl: [MousePad250], customClass: '' },
    ],
  },
  {
    category: 'Electronics',
    id: 'Electronics',
    items: [
      {
        id: '1', name: 'Arduino UNO Microcontroller', description: `Perfect for Projects`, price: '1150 ', pictureUrl: [UNO],
        customClass: 'noPrice'
        // customClass: 'soldClass',
      },
      {
        id: '2', name: 'L298 Motor Driver', description: `Perfect for Projects`, price: '500 ', pictureUrl: [L298],
        customClass: 'noPrice'
        // customClass: 'soldClass',
      },
      {
        id: '3', name: 'IR Sensor', description: `Perfect for Projects`, price: '180 ', pictureUrl: [IR],
        customClass: 'noPrice'
        // customClass: 'soldClass',
      },
      {
        id: '4', name: 'UltraSonic Sensor', description: `Perfect for Projects`, price: '300 ', pictureUrl: [US],
        customClass: 'noPrice'
        // customClass: 'soldClass',
      },
      {
        id: '5', name: '2 Cells, Cell Holder', description: `Perfect for Projects`, price: '140 ', pictureUrl: [CellCase2],
        customClass: 'noPrice'
        // customClass: 'soldClass',
      },
      {
        id: '6', name: '3 Cells, Cell Holder', description: `Perfect for Projects`, price: '180 ', pictureUrl: [CellCase3],
        customClass: 'noPrice'
        // customClass: 'soldClass',
      },

    ]
  },
  {
    category: 'Laptops',
    id: 'Laptops',
    items: [
      {
        id: '1', name: 'HP Elitebook 440 G7 ', description: `Core i5 10th Gen 
8GB RAM ,
256GB SSD, 
2GB dedicated Graphics card,

7 days money back  guarantee,
15 days check warranty`, price: '78000 ', pictureUrl: [Elitebook440],
        customClass: 'description'
        // customClass: 'soldClass',
      },
      {
        id: '2', name: 'HP zbook', description: `Core i9 11 Gen 
32GB RAM ,
512GB SSD,
8gb Dedicated Graphics Card RTX A4000,
condition: 9/10,
Good battery life, 
Excellent processing power,


7 days money back  guarantee
15 days check warranty`, price: '180000 ', pictureUrl: [ZBook],
        customClass: 'description'
        // customClass: 'soldClass',
      },
    ]
  },
  {
    category: 'Trimmers',
    id: 'Trimmers',
    items: [
      {
        id: '1', name: 'Dingling Professional Trimmer RF-609', description: `The DINGLING has been developed using the latest technical know how. It has been produced using the most modern machinery and all the functions have been thoroughly tested. We hope you will be fully satisfied with the DINGLING. Before use please read the operating instructions carefully,`, price: '3100 ', pictureUrl: [Dingling],
        customClass: 'description'
        // customClass: 'soldClass',
      },
    ]
  },
  {
    category: 'Perfumes',
    id: 'Perfumes',
    items: [
      {
        id: '1', name: 'J. Flames of Passion', description: `Flames of Passion — a bold and sensual fragrance that ignites the senses. It opens with zesty Mandarin, Bergamot, and juicy Red Berries, unfolding into a heart of Caramel, Rose, and Jasmine. The scent lingers with a warm, captivating base of Vanilla, Oakmoss, and Musks.`, price: '4700 ', pictureUrl: [Flames],
        customClass: 'description noPrice'
        // customClass: 'soldClass',
      },
      {
        id: '2', name: 'J. Janan Musk', description: `Janan Musk is an ode to quiet strength. Its fresh citrus notes meet soft florals and melt into a warm blend of musk, amber, and cashmere woods. A refined, modern scent that lingers like a whispered memory, it evokes confidence, connection, and calm. Crafted for those who find elegance in restraint.`, price: '7100 ', pictureUrl: [Janan],
        customClass: 'description noPrice'
        // customClass: 'soldClass',
      },
      {
        id: '3', name: 'J. ZARAR GOLD - 30ml', description: `Size	30ml; Fragrance Category	Fruity, Woody`, price: '2200 ', pictureUrl: [Zarar],
        customClass: 'description noPrice'
        // customClass: 'soldClass',
      },
      {
        id: '4', name: 'J. Perfumes', description: `For any other Perfume`, price: 'As Per MRP ', pictureUrl: [J],
        customClass: 'description noPrice'
        // customClass: 'soldClass',
      },
      {
        id: '5', name: 'Hemani Shaheen J10C', description: `Shaheen J10C is a bold and defiant scent forged for men who rise in the face of challenge. It opens with an energetic burst of pink pepper, cardamom, and violet leaves;  a sharp strike that mirrors the intensity of a fighter jet in motion. `, price: '3900 ', pictureUrl: [J10C],
        customClass: 'description noPrice'
        // customClass: 'soldClass',
      },
      {
        id: '6', name: 'Hemani UNS', description: `UNS is a tender, luminous perfume that captures the quiet beauty of connection. It opens with the soft brightness of bergamot and peony; fresh yet comforting, like the first smile exchanged between kindred souls. At its heart, the endless elegance of rose blends with the golden warmth of amber, creating a delicate sense of intimacy. The scent settles into a soft base of musk and woody notes, warm and grounding, like the feeling of being truly seen and understood.`, price: '3900 ', pictureUrl: [UNS],
        customClass: 'description noPrice'
        // customClass: 'soldClass',
      },
      {
        id: '7', name: 'Hemani Drift', description: `Introducing Drift, a fragrance that embodies the exhilarating rush of a perfectly executed drift. This scent is a tribute to the individual who embraces the edge, balancing precision with a daring spirit. It opens with the sharp, invigorating notes of Bergamot and Grapefruit, mirroring the initial burst of adrenaline. `, price: '920 ', pictureUrl: [Drift],
        customClass: 'description noPrice'
        // customClass: 'soldClass',
      },
      {
        id: '8', name: 'WB by Hemani', description: `For any other Perfume`, price: 'As per MRP ', pictureUrl: [Hemani],
        customClass: 'description noPrice'
        // customClass: 'soldClass',
      },
    ]
  },
  {
    category: 'Watches',
    id: 'Watches',
    items: [
      {
        id: '1', name: 'Yolo Epic Bluetooth Calling Smart Watch', description: `1.91" Bright HD display, Bluetooth calling, music playback, built-in speaker and microphone, 120+ professional sports modes, heart rate, blood pressure & blood oxygen monitoring, messages and app notifications synchronization, AI voice assistant, sleep monitoring, weather updates, smart battery life, IP67 water resistant. NOTE: This Item has brand warranty, not to be claimed through seller.`, price: '8500', pictureUrl: [Yolo8500],
        customClass: 'description',
      },


      {
        id: '2', name: 'Yolo Fortuner Pro Bluetooth Calling Smart Watch - Mystery Black', description: 'Ultra-bright 1.32" HD display, Bluetooth calling, music playback, built-in HD speaker and microphone, heart rate sensor, blood pressure & blood oxygen tracking, 120+ professional sports modes, real-time notifications, weather forecast, AI voice assistant, IP67 water & dustproof, long-lasting battery life. NOTE: This Item has brand warranty, not to be claimed through seller.', price: '12000', pictureUrl: [Yolo12000],

        customClass: "description",
      },
      {
        id: '3', name: 'Yolo Thunder Bluetooth Calling Smart Watch - Admiral Blue', description: 'Rounded 1.32", high-resolution display, Bluetooth Calling, answering and dialing calls and listening to music on the go, 28 mainstream sports modes, heart rate tracking, blood pressure & blood oxygen monitoring, stay connected with real-time smart notifications, live watch faces for a personal touch of style, AI voice assistant, sleep monitoring, weather information, smart battery life, IP67 water resistant. NOTE: This Item has brand warranty, not to be claimed through seller.', price: '10000', pictureUrl: [Yolo10000],
        customClass: "description",

      },


      {
        id: '4', name: 'Yolo Fortuner Bluetooth Calling Smart Watch - Charcoal Black', description: 'Built-in Speaker and Microphone, 1.3" HD Display, Live Watch Faces, Multiple Sports Modes, Heart Rate Sensor, SpO2, IP67 Water Resistant, Smart Notifications and Much More.  NOTE: This Item has brand warranty, not to be claimed through seller.', price: '10000', pictureUrl: [Yolo10000Charcoal],
        customClass: "description",
      },
      {
        id: '5', name: 'Itel Smart Watch - ISW 31 With Bt Calling', description: 'BT calling, Clear voice, 1.72" HD color display, Blood Oxygen Monitor SpO2, Heart Rate Monitor, Narrow Metal Bezel Design, Multiple Sport Modes (7+ Sport Modes), Smart Notifications, Music Playback & Control, Camera Control, IP67 Water Resistance, 1 Year Warranty.  NOTE: This Item has brand warranty, not to be claimed through seller.', price: '10000', pictureUrl: [Itel10000],
        customClass: 'description ',

      },
      {
        id: '6', name: 'Boost Astro Smart Watch', description: 'Enjoy the amazing features including heart rate, Bluetooth 5.3, calls, sleep tracker, flashlight, water resistance, find phone, voice assistant and distance tracker. Moreover, have a comfortable wear with multiple dials and 2 straps. Screen size: 1.43 inches. Brand warranty 1 year. NOTE: This item has brand warranty and cannot be claimed through seller.', price: '8500', pictureUrl: [Astro],
        customClass: 'description noPrice',

      },
      {
        id: '7', name: 'Boost Cosmic Smart Watch', description: 'Enjoy automatic heart rate monitor, Bluetooth calling, call notifications, sleep tracker, flashlight, password unlocking, water resistance, find phone, voice assistant, stress test, steps counter and 2.01 inch Amoled. Moreover, enjoy comfortable wear with multiple dials and 2 straps. 1 year brand warranty. NOTE: This item has brand warranty and cannot be claimed through seller.', price: '10000', pictureUrl: [boostCosmic],
        customClass: 'description noPrice '
      },
      {
        id: '8', name: 'IMILAB SMART BUSSINESS WATCH 12', description: `330 mAh battery 
UpTo 30 days backup
IP68. 1 year brand warranty. NOTE: This item has brand warranty and cannot be claimed through seller.`, price: '7500', pictureUrl: [ImilabW12],
        customClass: 'description noPrice '

      },
    ],
  },
  {
    category: 'Power Banks',
    id: 'PowerBanks',
    items: [
      {
        id: '1', name: 'Faster E 18X (Fast Charging Wireless Power Bank)', description: `Brand : Faster
 Model No : E-18X Wireless
 Micro Input : 5V/9V/12V 18W(Max)
 Type-C Input & Output : 5V/9V/12V 18W(Max)
 USB 1 Output : 5V-10W(Max)
 USB 2 Output : 55V/9V/12V 18W(Max)
 Wireless Output : 5W/7.5W/10W
 Life Cycle : 500 Times
 Plug & Play
 Net Weight : 236g
 Gross Weight : 270g
 Product Dimension : 14.8 x 6.9 x 1.6 cm
 Warranty : 1 year Warranty.  NOTE: This Item has brand warranty, not to be claimed through seller.`, price: '4550', pictureUrl: [Fasterwireless], customClass: 'description '
      },

      {
        id: '2', name: 'Faster S10-PD 20watt 10000mah Power Bank', description: `Brand : Faster
 Model No : S10-PD
 Type-C Input : 5V-3A / 9V-2A
 Type-C Output : 5V-3A / 9V-2.22A / 12V-1.5A
 USB Output : 4.5V-5A / 5V-4.5A / 9V-2A / 12V-1.5A
 Total Output : 20W
 Net Weight : 180g
 Product Dimension : 875726 mm
 Warranty : 1 year Warranty.  NOTE: This Item has brand warranty, not to be claimed through seller.`, price: '4000', pictureUrl: [Faster20W],
        customClass: 'description '
      },

      {
        id: '3', name: 'Faster M5 5000mah Power Bank', description: `Brand : Faster
 Capacity : 5000
 Output : 2.1A
 Battery Type : Polymer Lithium
 Warranty : 1 Year Warranty. NOTE: This Item has brand warranty, not to be claimed through seller.`, price: '1500', pictureUrl: [Faster5k],
        customClass: 'description '
      },
      {
        id: '4', name: 'Space SPEED 20000 mAH', description: `Space SPEED 20000 mAH 3.0 Power Bank SP-075. Qualcomm Quick Charge 3.0, PD Technology, Luxurious, Metallic Body, Modern LCD Display`, price: '8800', pictureUrl: [SpaceSP075],
        customClass: 'description '
      },
      {
        id: '5', name: 'Faster W10 Mini Power Bank', description: `
Brand : Faster,
Model No : W10,
Capacity : 10000 mAh,
Output : 2.1A,
Battery Type:Polymer Lithium,
Warranty: 1 year Warranty. NOTE: This Item has brand warranty, not to be claimed through seller.`, price: '4690', pictureUrl: [FasterW10],
        customClass: 'description '
      },
      {
        id: '6', name: 'Dany Titan T-100', description: `22.5W 20,000 mAh 
2 USB Outputs (Quick Charge)
Dual Input (Type-C +Micro)

Size: 68x143.1x29 (mm)
Net Weight: 418.1 grams`, price: '6000', pictureUrl: [DanyTitan],
        customClass: 'description '
      },
      {
        id: '7', name: 'Audionic Spark Pro S200', description: `Audionic Spark Pro S200: 10000mAh power bank with 22.5W PD & QC 3.0 fast charging.`, price: '4600', pictureUrl: [Audionicspark],
        customClass: 'description '
      },
    ],
  },
  {
    category: 'Sports',
    id: 'sports',
    items: [
      {
        id: '1', name: 'Bedminton Rackets', description: 'Yonex arc 11 pair', price: '2000', pictureUrl: [YonexPair],
        //  customClass:'sold'

      },
      {
        id: '2', name: 'Bedminton Rackets', description: 'Yonex astrox 100 single', price: '2400', pictureUrl: [YonexSingle],
        //  customClass:'sold'

      },
      {
        id: '3', name: 'Bedminton Rackets', description: 'Gosen M 25', price: '2600', pictureUrl: [Gosan],
        //  customClass:'sold'

      },
      { id: '4', name: 'Cricket Tennis Ball', description: 'FG Don', price: '360', pictureUrl: [FGdon], customClass: 'price' },
      { id: '5', name: 'Cricket Tennis Ball', description: 'Shine Ball', price: '360', pictureUrl: [ShineBall], customClass: 'price' },
      { id: '6', name: 'Cricket Tennis Ball', description: 'Large Size Ball', price: '340', pictureUrl: [LargeBall], customClass: 'price' },
      { id: '7', name: 'Cricket Hard Ball', description: 'BK Sports, can be used upto 20 overs', price: '600', pictureUrl: [BKHard] },
      { id: '8', name: 'Cricket Hard Ball', description: 'MZ Sports, can be used upto 20 overs', price: '550', pictureUrl: [MZHard] },
      { id: '9', name: 'Cricket Hard Ball', description: 'Sajjad Sports, can be used upto 20 overs', price: '650', pictureUrl: [SajjadHard] },
      {
        id: '10', name: 'Shuttle trump', description: ' High Quality', price: '380', pictureUrl: [Trump],
        //  customClass:'sold'

      },
      {
        id: '11', name: 'Shuttle', description: 'GS 1, High Quality', price: '335', pictureUrl: [GS1],
        //  customClass:'sold'

      },
      {
        id: '12', name: 'Shuttle voltric', description: 'normal quality', price: '250', pictureUrl: [Voltric],
        //  customClass:'sold'

      },
      {
        id: '13', name: 'PingPong Ball', description: 'Butterfly', price: '90', pictureUrl: [PingPongButterfly],
        //  customClass:'sold'
      },
      {
        id: '14', name: 'PingPong Ball', description: 'Double Circle', price: '70', pictureUrl: [PingPongDoubleCircle],
        //  customClass:'sold'
      },

      {
        id: '15 ', name: 'Poker Cards', description: 'Good quality Plastic Cards', price: '270', pictureUrl: [PokerCards],
        //  customClass:'sold'

      },
    ],
  },


];

// const ProductTable = ({ selectedCategory, applyDiscountToAll = true }) => {
//   const [selectedItem, setSelectedItem] = useState(null);

//   // Filter products based on the selected category
//   const filteredProducts = selectedCategory === 'all'
//     ? products
//     : products.filter(category => category.id === selectedCategory);

//   // Generate WhatsApp link based on the item name and price
//   const generateWhatsAppLink = (name, price) => {
//     const numericPrice = price.split(' ')[0]; // Extract numeric part of price
//     const message = `I am interested in ${name} with price ${numericPrice} PKR`;
//     const whatsappNumber = '923160175207';
//     return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
//   };

//   // Handle button click to show modal
//   const handleShowModal = (item) => {
//     setSelectedItem(item);
//   };

//   // Close the modal
//   const handleCloseModal = () => {
//     setSelectedItem(null);
//   };

//   // Calculate the discounted price based on type
//   const applyDiscount = (price, type) => {
//     const numericPrice = parseFloat(price.split(' ')[0]);
//     // if (type === 'calculator') {
//     //   return (numericPrice * 0.95).toFixed(2); // 5% off for calculators
//     // }
//     return (numericPrice * 0.89).toFixed(2); // 10% off for other items
//   };

//   return (
//     <div className={styles.tableContainer}>
//       {filteredProducts.map((category, index) => (
//         <div key={index} id={category.id}>
//           <h2 className={styles.heading}>{category.category}</h2>

//           <table className={`table table-striped ${styles.table}`}>
//             <thead>
//               <tr>
//                 <th className={styles.head}>S/No</th>
//                 <th className={styles.heads}>Items</th>
//                 <th className={styles.head}>Description</th>
//                 <th className={styles.head}>Price</th>
//                 <th className={styles.head}>Buy</th>
//                 <th className={styles.head}>Picture</th>
//               </tr>
//             </thead>
//             <tbody>
//               {category.items.map(item => {
//                 const hasDescriptionClass = item.customClass?.includes('description');
//                 const isSold = item.customClass?.includes('sold');
//                 const hasPriceClass = item.customClass?.includes('price');
//                 const noPriceClass = item.customClass?.includes('noPrice');

//                 const originalPrice = item.price;
//                 const discountedPrice = applyDiscount(item.price, item.type);

//                 // Final price: apply discount based on the conditions
//                 const finalPrice = (!noPriceClass && (applyDiscountToAll || hasPriceClass))
//                   ? discountedPrice
//                   : originalPrice;

//                 return (
//                   <tr key={item.id}>
//                     <td>{item.id}</td>
//                     <td>{item.name}</td>
//                     <td>
//                       {hasDescriptionClass ? (
//                         <div>
//                           <button
//                             className={styles.viewButton}
//                             onClick={() => handleShowModal(item)}
//                           >
//                             View
//                           </button>
//                         </div>
//                       ) : (
//                         item.description
//                       )}
//                     </td>
//                     <td>
//                       {isSold ? (
//                         <span>{originalPrice}</span>
//                       ) : (
//                         <div>
//                           {(!noPriceClass && (applyDiscountToAll || hasPriceClass)) ? (
//                             <>
//                               <span style={{ textDecoration: 'line-through' }}>
//                                 {originalPrice}
//                               </span>{' '}
//                               <span>{finalPrice} PKR</span>
//                             </>
//                           ) : (
//                             <span>{originalPrice}</span>
//                           )}
//                         </div>
//                       )}
//                     </td>
//                     <td>
//                       {isSold ? (
//                         <button className={`${styles.btn} ${styles.disabledBtn}`} disabled>
//                           Sold
//                         </button>
//                       ) : (
//                         <a
//                           href={generateWhatsAppLink(item.name, finalPrice)}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className={styles.btn}
//                         >
//                           <i className="fas fa-shopping-cart"></i>
//                         </a>
//                       )}
//                     </td>
//                     <td>
//                       <a
//                         href={item.pictureUrl}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className={styles.btn}
//                       >
//                         <i className="fas fa-camera"></i>
//                       </a>
//                     </td>
//                   </tr>
//                 );
//               })}
//             </tbody>
//           </table>

//           <hr style={{ border: '2px solid black', marginBottom: '20px' }} />
//         </div>
//       ))}

//       {selectedItem && (
//         <div className={styles.modalOverlay} onClick={handleCloseModal}>
//           <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
//             <h2>{selectedItem.name}</h2>
//             <p>{selectedItem.description}</p>
//             <button className={styles.closeModalButton} onClick={handleCloseModal}>
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProductTable;


const ProductTable = ({ selectedCategory, applyDiscountToAll, searchTerm }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    if (searchTerm) {
      const matchedCategory = products.find((category) =>
        category.items.some((item) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
      if (matchedCategory) {
        const element = document.getElementById(matchedCategory.id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  }, [searchTerm]);

  const filteredProducts = products
    .filter((category) => selectedCategory === 'all' || category.id === selectedCategory)
    .map((category) => ({
      ...category,
      items: category.items.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    }))
    .filter((category) => category.items.length > 0 || selectedCategory === category.id);

  const generateWhatsAppLink = (itemName, price) => {
    const message = `Hello, I'm interested in buying ${itemName} for ${price} PKR. Can you provide more details?`;
    const whatsappNumber = '923160175207';
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  const handleShowModal = (item) => {
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  const getFinalPrice = (item) => {
    const hasPriceClass = item.customClass?.includes('price');
    const noPriceClass = item.customClass?.includes('noPrice');
    const numericPrice = parseFloat(item.price.split(' ')[0]);
    const discountedPrice = (numericPrice * 0.9).toFixed(2);

    if (!noPriceClass && (applyDiscountToAll || hasPriceClass)) {
      return discountedPrice;
    }
    return item.price;
  };

  return (
    <div className={styles.tableContainer}>
      {filteredProducts.map((category, index) => (
        <div key={index} id={category.id}>
          <h2 className={styles.heading}>{category.category}</h2>
          <table className={`table table-striped ${styles.table}`}>
            <thead>
              <tr>
                <th className={styles.head}>S/No</th>
                <th className={styles.heads}>Items</th>
                <th className={styles.head}>Description</th>
                <th className={styles.head}>Price</th>
                <th className={styles.head}>Buy</th>
                <th className={styles.head}>Picture</th>
              </tr>
            </thead>
            <tbody>
              {category.items.map((item) => {
                const hasDescriptionClass = item.customClass?.includes('description');
                const isSold = item.customClass?.includes('sold');
                const hasPriceClass = item.customClass?.includes('price');
                const noPriceClass = item.customClass?.includes('noPrice');

                const originalPrice = item.price;
                const finalPrice = getFinalPrice(item);

                
                return (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>
                      {hasDescriptionClass ? (
                        <div>
                            <button
                              className={styles.viewButton}
                              onClick={() => handleShowModal(item)}
                            >
                              <FaEye size={20} />
                            </button>
                        </div>
                      ) : (
                        item.description
                      )}
                    </td>
                    <td>
                      {isSold ? (
                        <span>{originalPrice}</span>
                      ) : (
                        <div>
                          {(!noPriceClass && (applyDiscountToAll || hasPriceClass)) ? (
                            <>
                              <span style={{ textDecoration: 'line-through' }}>
                                {originalPrice}
                              </span>{' '}
                              <span>{finalPrice} PKR</span>
                            </>
                          ) : (
                            <span>{originalPrice}</span>
                          )}
                        </div>
                      )}
                    </td>
                    <td>
                      {isSold ? (
                        <button className={`${styles.btn} ${styles.disabledBtn}`} disabled>
                          Sold
                        </button>
                      ) : (
                        <a
                          href={generateWhatsAppLink(item.name, finalPrice)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.btn}
                        >
                          <i className="fas fa-shopping-cart"></i>
                        </a>
                      )}
                    </td>
                    <td>
                      <a
                        href={item.pictureUrl[0]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.btn}
                      >
                        <i className="fas fa-camera"></i>
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <hr style={{ border: '2px solid black', marginBottom: '20px' }} />
        </div>
      ))}

      {selectedItem && (
        <div className={styles.modalOverlay} onClick={handleCloseModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <h2>{selectedItem.name}</h2>
            <p>{selectedItem.description}</p>
            <button className={styles.closeModalButton} onClick={handleCloseModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductTable;