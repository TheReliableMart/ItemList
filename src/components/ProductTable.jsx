import styles from './ProductTable.module.css';
import { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';


/*Pictures*/
//ACCESSORIES
import OriginalMicroCable from './Pictures/OriginalMicroCable.jpg';
import Lightening1500 from './Pictures/Lightening1500.jpg';
import USBHub from './Pictures/USBHub.jpg';
import HDMIcableOrg from './Pictures/HDMIcableOrg.jpg';
import MFiCable from './Pictures/MFiCable.jpg';
import ANSTYlighteningCable from './Pictures/ANSTYlighteningCable.jpg';
// import ringrough180 from './Pictures/RingRoughRegister2.jpg';
// import NonRingRoughRegister150 from './Pictures/NonRingRoughRegister150.jpg';
// import NonRingRoughRegister210 from './Pictures/NonRingRoughRegister210.jpg';


//USBs

import Sandisk6800 from './Pictures/Sandisk6800.jpg';
import Sandisk13500 from './Pictures/Sandisk13500.jpg';
import Sandisk3100 from './Pictures/Sandisk3100.jpg';
import Sandisk6750 from './Pictures/Sandisk6750.jpg';
import Sandisk1500 from './Pictures/Sandisk1500.jpg';
import Sandisk2400 from './Pictures/Sandisk2400.jpg';



//MIC 
import enrg from './Pictures/Lavalier1000.jpg';
import Gionee450 from './Pictures/Gionee450.jpg';
import SpaceHeadphones from './Pictures/SpaceHeadphones.jpg';
import Boya2800 from './Pictures/Boya2800.jpg';
import GamingHandsfree from './Pictures/GamingHandsfree.jpg';
import Faster4900 from './Pictures/Faster4900.jpg';
import Redmi7450 from './Pictures/Redmi7450.jpg';
// import Dollar10Pointers from './Pictures/10DollarPointers.jpg';

//Mouse
import GamingMouse520 from './Pictures/GamingMouse520.jpg';
import gamingMouseWireless from './Pictures/gamingMouseWireless.jpg';
//1;

import MousePad500 from './Pictures/MousePad500.jpg';
import MousePad120 from './Pictures/MousePad120.jpg';

// Trimmer
import Phillips8000 from './Pictures/Phillips8000.jpg';
import Phillips6000 from './Pictures/Phillips6000.jpg';
import Phillips10000 from './Pictures/Phillips10000.jpg';


//TAPES

import Yolo8500 from './Pictures/Yolo8500.jpg';
import Yolo12000 from './Pictures/Yolo12000.jpg';
import Yolo10000 from './Pictures/Yolo10000.jpg';
import Yolo10000Charcoal from './Pictures/Yolo10000Charcoal.jpg';
import Itel10000 from './Pictures/Itel10000.jpg';



//EARBUDS
import Faster5k from './Pictures/Faster5k.jpg';
import Fasterwireless from './Pictures/Fasterwireless.jpg';
import Faster20W from './Pictures/Faster20W.jpg';


// //RULERS
// import PlasticRulers from './Pictures/PlasticRulers.jpg';
// import StainlessSteel from './Pictures/StainlessSteel.jpg';

// //DRAWING RELATED
// import Pencil from './Pictures/Pencil.jpg';
// import Eraser from './Pictures/Eraser.jpg';
// import Sharpner from './Pictures/Sharpner.jpg';

// //CALCULATORS
// import Calc417 from './Pictures/417.CasioCalculator.jpg';
// import Calc552 from './Pictures/552.CasioCalculator.jpg';

//SPORTS
import YonexPair from './Pictures/YonexPair.jpg';
import YonexSingle from './Pictures/YonexSingle.jpg';
import Gosan from './Pictures/Gosan.jpg';
import FGdon from './Pictures/FGdon.jpg';
import BKHard from './Pictures/BKHard.jpg';
import MZHard from './Pictures/MZHard.jpg';
import SajjadHard from './Pictures/SajjadHard.jpg';
import Trump from './Pictures/Trump.jpg';
import Voltric from './Pictures/Voltric.jpg';
import PingPongButterfly from './Pictures/PingPongButterfly.jpg';
import PingPongDoubleCircle from './Pictures/PingPongDoubleCircle.jpg';
import PokerCards from './Pictures/PokerCards.jpg';


//OTHERS
// import P5 from './Pictures/RingNeatRegister.jpg';
// import P5 from './Pictures/RingNeatRegister.jpg';
// import P5 from './Pictures/RingNeatRegister.jpg';
// import P5 from './Pictures/RingNeatRegister.jpg';
// import P5 from './Pictures/RingNeatRegister.jpg';
// import P5 from './Pictures/RingNeatRegister.jpg';
// import P5 from './Pictures/RingNeatRegister.jpg';
// import P5 from './Pictures/RingNeatRegister.jpg';


const products = [
  {
    category: 'Accessories',
    id: 'Accessories',
    items: [
      { id: '1', name: 'MicroUSB Charging Cable', description: 'Normal Quality', price: '250', pictureUrl: [] },
      { id: '2', name: 'MicroUSB Charging Cable', description: 'Original Cable', price: '400', pictureUrl: [OriginalMicroCable] },
      { id: '3', name: 'TypeC Charging Cable', description: 'Original Cable', price: '450', pictureUrl: [], customClass: 'sold' },
      { id: '4', name: 'TypeC Charging Cable', description: 'Normal Quality Cable', price: '300', pictureUrl: [] },
      { id: '5', name: 'Anker Lightening Cable', description: 'MFi Certified', price: '2450', pictureUrl: [MFiCable] },
      { id: '6', name: 'ANSTY Lightening Cable', description: 'Good Quality Cable', price: '450', pictureUrl: [ANSTYlighteningCable] },
      { id: '7', name: 'Lightening Cable', description: 'Basic Quality', price: '280', pictureUrl: [] },
      { id: '8', name: 'HDMI Cable', description: 'Good Quality 1m Length', price: '450', pictureUrl: [HDMIcableOrg] },
      { id: '9', name: 'HDMI Cable', description: 'Normal Quality 1m Length', price: '300', pictureUrl: [HDMIcableOrg] },

      {
        id: '10', name: 'Aux Cable', description: '1m Length', price: '320', pictureUrl: [],
        // customClass: 'description',
      },

      { id: '11', name: 'Lightning to 3.5mm Hi-Fi Cable', description: 'Braided Cable 2m Length', price: '1500', pictureUrl: [Lightening1500] },


      { id: '12', name: '3.0 USB hub', description: 'Good Quality 4 Ports USB Hub with led indicator', price: '650', pictureUrl: [USBHub] },
      // { id: '11', name: ' HDMI to Lightening', description: '', price: '--', pictureUrl: [], customClass: "sold"  },

      // { id: '12', name: 'Type c to 3.5mm', description: '', price: '--', pictureUrl: [], customClass: "sold"  },
      // { id: '13', name: '2 in 1 3.5mm connector', description: '', price: '--', pictureUrl: [] , customClass: "sold" }, 

      // { id: '14', name: 'Lightening to 3.5mm', description: '', price: '--', pictureUrl: [] , customClass: "sold" }, 
      // { id: '15', name: 'HDMI to Type C', description: '', price: '--', pictureUrl: [], customClass: "sold" },


    ],
  },
  {
    category: 'USBs',
    id: 'USBs',
    items: [
      { id: '1', name: 'Sandisk OTG Drive M3.0 256GB', description: 'Compatible with OTG-enabled Android devices.', price: '6800', pictureUrl: [Sandisk6800] },
      { id: '2', name: 'Sandisk Otg Dual Drive Android', description: `64GB Flash || Brand Warranty`, price: '2400', pictureUrl: [Sandisk2400], },
      { id: '3', name: 'SanDisk - Ultra Fit 3.1', description: '128GB Flash', price: '3100', pictureUrl: [Sandisk3100], customClass: 'sold' },
      { id: '4', name: 'SanDisk - Ultra Fit 3.1', description: '256GB Flash', price: '6750', pictureUrl: [Sandisk6750], customClass: 'sold' },
      { id: '5', name: 'SanDisk - Ultra Fit 3.1', description: '32GB Flash', price: '1500', pictureUrl: [Sandisk1500], customClass: 'sold' },
      {
        id: '6', name: 'SanDisk - Ultra Flair 3.0 ', description: '512GB Flash', price: '13500 ', pictureUrl: [Sandisk13500], customClass: 'sold'
      },
    ],
  },
  {
    category: 'Mic and Headphones',
    id: 'MicAndHeadphones',
    items: [
      { id: '1', name: 'BOYA mic', description: 'Original Boya Mic with 18 months warranty. NOTE: This Item has brand warranty, not to be claimed through seller.', price: '2800', pictureUrl: [Boya2800], customClass: 'description' },
      { id: '2', name: 'Lavalier XO-MKF 01 Wired Mic', description: '5m Wire', price: '1000', pictureUrl: [enrg] },
      { id: '3', name: 'Gionee Handsfree', description: 'Original', price: '450', pictureUrl: [Gionee450] },
      { id: '4', name: 'Gaming Handsfree', description: 'Gaming Handsfree with 2 mics', price: '850', pictureUrl: [GamingHandsfree], customClass: "sold" },
      { id: '5', name: 'Faster Earbuds True Wireless E20 TWS', description: ` 1 Year Brand Warranty. ENC, Noise Reduction technology. bt 5.1. Available in white color || NOTE: This Item has brand warranty, not to be claimed through seller.`, price: '4900', pictureUrl: [Faster4900], customClass: 'description' },
      {
        id: '6', name: 'Redmi Buds 3 White Global', description: `Brand: Xiaomi
        Model: Redmi buds 3, Colour: White, Wireless connection: Bluetooth 5.2,  Battery Capacity: 35mAh (single earbud), Battery type: Lithium-ion polymer battery, Input parameters: 5V70mA, Communication Range: 10m (open space free of obstacles), Single earbud net weight: 4.5 g, Earbud dimensions: 40.7 x 16.9 x 18.7mm. `, price: '6000', pictureUrl: [Redmi7450], customClass: "description  sold",
      },
      { id: '7', name: 'Space wireless Headphones', description: `Driver Unit:40mm, Impedance:320 Ohms, Frequency Response:20-20KHz, Sensitivity:110dB±3dB, Electric Current:3.6V-5V DC, Voltage:≤70 mA, Rechargeable Lithium Battery:250 mAh,Operation Range:10 Meters, Charging Time:2-3 Hours, Standby Time:100 Hours, Memory Card Support: Upto 32GB, L2CAP, A2DP, AVCTP,Supports: AVDTP, AVRCP`, price: '4980', pictureUrl: [SpaceHeadphones], customClass: 'description' },

      { id: '8', name: 'Gaming Headphone', description: 'Gaming Headphones with RGB lights', price: '2750', pictureUrl: [GamingHandsfree], customClass: "sold" },
    ],
  },

  {
    category: 'Mouse and MousePads',
    id: 'MouseandMousePads',
    items: [
      {
        id: '1', name: 'RGB Mouse', description: 'Wired with 7 lights & mouse pad', price: '750', pictureUrl: [GamingMouse520],
        // customClass: 'sold'
      },
      { id: '2', name: 'Wireless Gaming Mouse', description: 'with RGB lights and 6 buttons, Dual connectivity', price: '1800', pictureUrl: [gamingMouseWireless], customClass: 'sold' },
      { id: '3', name: 'MousePad', description: 'Basic Mousepad, available in orange and yellow ', price: '160', pictureUrl: [MousePad120] },
    ],
  },
  // {
  //   category: 'Trimmers',
  //   id: 'Trimmers',
  //   items: [
  //     {
  //       id: '1', name: 'Philips One Blade Trimmer Qp2520/20', description: 'Brand Warranty', price: '8000 ', pictureUrl: [Phillips8000],
  //       customClass: 'sold'
  //       // customClass: 'soldClass',
  //     },
  //     { id: '2', name: 'Philips Series 1000 (NT1650/16)', description: 'Nose & Ear Trimmer', price: '6000', pictureUrl: [Phillips6000] ,customClass: 'sold'},
  //     { id: '3', name: 'Philips Black Beard Trimmer', description: ' Model BT1233/14', price: '10000', pictureUrl: [Phillips10000],
  //       customClass: 'sold' 
  //      },
  //   ],
  // },
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
        id: '5', name: 'Itel Smart Watch - Isw 31 With Bt Phone Call', description: 'BT calling, Clear voice, 1.72" HD color display, Blood Oxygen Monitor SpO2, Heart Rate Monitor, Narrow Metal Bezel Design, Multiple Sport Modes (7+ Sport Modes), Smart Notifications, Music Playback & Control, Camera Control, IP67 Water Resistance, 1 Year Warranty.  NOTE: This Item has brand warranty, not to be claimed through seller.', price: '10000', pictureUrl: [Itel10000],
        customClass: 'description ',

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
 Warranty : 1 year Warranty.  NOTE: This Item has brand warranty, not to be claimed through seller.`, price: '4123', pictureUrl: [Fasterwireless], customClass: 'description'
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
 Warranty : 1 year Warranty.  NOTE: This Item has brand warranty, not to be claimed through seller.`, price: '4638', pictureUrl: [Faster20W],
        customClass: 'description'
      },

      {
        id: '3', name: 'Faster M5 5000mah Power Bank', description: `Brand : Faster
 Capacity : 5000
 Output : 2.1A
 Battery Type : Polymer Lithium
 Warranty : 1 Year Warranty. NOTE: This Item has brand warranty, not to be claimed through seller.`, price: '1855', pictureUrl: [Faster5k],
        customClass: 'description'
      },
    ],
  },
  // {
  //   category: 'Rulers',
  //   id: 'rulers',
  //   items: [
  //     { id: '1', name: 'Plastic Ruler', description: '15/20/30 cm', price: '30/50/60', pictureUrl: [PlasticRulers] },
  //     { id: '2', name: 'Stainless Steel Ruler', description: '30 cm (High Quality)', price: '120', pictureUrl: [StainlessSteel] },
  //   ],
  // },
  // {
  //   category: 'Drawing Related',
  //   id: 'drawing-related',
  //   items: [
  //     { id: '1', name: 'Pencil', description: 'Dollar', price: '20', pictureUrl:[Pencil] },
  //     { id: '2', name: 'Eraser', description: 'White', price: '15', pictureUrl: [Eraser] },
  //     { id: '3', name: 'Sharpener', description: 'Dux High Quality', price: '20', pictureUrl: [Sharpner]},
  //   ],
  // },
  // {
  //   category: 'Calculators',
  //   id: 'calculators',
  //   items: [
  //     {
  //       id: '1', name: 'Casio 552 Functions Calculator', description: 'fx-991EX', price: '2400', pictureUrl: [Calc552],
  //       // customClass: 'soldClass',
  //     },
  //     { id: '2', name: 'Casio 417 Functions Calculator', description: 'fx-991ES', price: '1650', pictureUrl: [Calc417] },
  //   ],
  // },
  {
    category: 'Sports',
    id: 'sports',
    items: [
      {
        id: '1', name: 'Bedminton Rackets', description: 'Yonex arc 11 pair', price: '4000', pictureUrl: [YonexPair],
        //  customClass:'sold'

      },
      {
        id: '2', name: 'Bedminton Rackets', description: 'Yonex astrox 100 single', price: '4000', pictureUrl: [YonexSingle],
        //  customClass:'sold'

      },
      {
        id: '3', name: 'Bedminton Rackets', description: 'Gosen M 25', price: '3500', pictureUrl: [Gosan],
        //  customClass:'sold'

      },
      { id: '4', name: 'Cricket Tennis Ball', description: 'FG Don', price: '400', pictureUrl: [FGdon] },
      { id: '5', name: 'Cricket Tennis Ball', description: 'Shine Ball', price: '400', pictureUrl: [] },
      { id: '6', name: 'Cricket Tennis Ball', description: 'Large Size Ball', price: '400', pictureUrl: [] },
      { id: '7', name: 'Cricket Hard Ball', description: 'BK Sports, can be used for 20 overs', price: '400', pictureUrl: [BKHard] },
      { id: '8', name: 'Cricket Hard Ball', description: 'MZ Sports, can be used for 20 overs', price: '400', pictureUrl: [MZHard] },
      { id: '9', name: 'Cricket Hard Ball', description: 'Sajjad Sports, can be used for 20 overs', price: '400', pictureUrl: [SajjadHard] },
      {
        id: '10', name: 'Shuttle trump', description: 'original High Quality', price: '350', pictureUrl: [Trump],
        //  customClass:'sold'

      },
      {
        id: '11', name: 'Shuttle voltric', description: 'normal quality', price: '250', pictureUrl: [Voltric],
        //  customClass:'sold'

      },
      {
        id: '12', name: 'PingPong Ball', description: 'Butterfly', price: '250', pictureUrl: [PingPongButterfly],
        //  customClass:'sold'
      },
      {
        id: '13', name: 'PingPong Ball', description: 'Double Circle', price: '250', pictureUrl: [PingPongDoubleCircle],
        //  customClass:'sold'
      },

      {
        id: '14', name: 'Poker Cards', description: 'Good quality Plastic Cards', price: '250', pictureUrl: [PokerCards],
        //  customClass:'sold'

      },
    ],
  },

  // {
  //   category: 'Others',
  //   id: 'others',
  //   items: [
  //     { id: 1, name: 'Correction Pen', description: '(Whito)', price: '60', pictureUrl: 'https://example.com/images/correction_pen.jpg' },
  //     { id: 2, name: 'Sticky Notes', description: '3x3 inch, 100 pcs, (Multicolor)', price: '100', pictureUrl: 'https://example.com/images/sticky_notes.jpg' },
  //     { id: 3, name: 'NOTE PAD', description: 'High Quality / Size: A6', price: '70', pictureUrl: 'https://example.com/images/note_pad.jpg' },
  //     { id: 4, name: 'Paper Cutter', description: 'Normal Quality', price: '180', pictureUrl: 'https://example.com/images/paper_cutter.jpg' },
  //     { id: 5, name: 'Scissor', description: 'Normal Quality', price: '60', pictureUrl: 'https://example.com/images/scissor.jpg' },
  //     { id: 6, name: 'Glue Stick', description: 'Company: Nafees', price: '70', pictureUrl: 'https://example.com/images/scissor.jpg' },
  //     { id: 7, name: 'Elfy', description: 'GMSA', price: '30', pictureUrl: 'https://example.com/images/scissor.jpg' },
  //     { id: 8, name: 'Metallic Pen Holder', description: 'High Quality', price: '400', pictureUrl: 'https://example.com/images/scissor.jpg' },
  //   ],
  // },
];



// // //NEW CODE WITHout DISCOUNT

// const ProductTable = ({ selectedCategory }) => {
//   const [selectedItem, setSelectedItem] = useState(null);

//   // Filter products based on the selected category
//   const filteredProducts = selectedCategory === 'all'
//     ? products
//     : products.filter(category => category.id === selectedCategory);

//   // Generate WhatsApp link based on the item name, price, and custom class
//   const generateWhatsAppLink = (name, price, customClass) => {
//     const numericPrice = price.split(' ')[0]; // Extract numeric part of price
//     const message = `I want to buy ${name} with price ${numericPrice} PKR`; // Prepare WhatsApp message

//     let whatsappNumber = '923343288223'; // Default WhatsApp number

//     // Change WhatsApp number if a specific class is matched
//     if (customClass?.includes('specific-class')) {
//       whatsappNumber = '923105688796';
//     }

//     // Return the WhatsApp API link with the message
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

//   // Helper function to calculate discounted price
//   const calculateDiscountedPrice = (price) => {
//     const numericPrice = parseFloat(price.split(' ')[0]);
//     const discountedPrice = (numericPrice * 0.9).toFixed(2);
//     return `${discountedPrice} PKR`;
//   };

//   return (
//     <div className={styles.tableContainer}>
//       {filteredProducts.map((category, index) => (
//         <div key={index} id={category.id}>
//           {/* Category Heading */}
//           <h2 className={styles.heading}>{category.category}</h2>

//           {/* Product Table */}
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
//                 const hasPriceClass = item.customClass?.includes('price');
//                 const isSold = item.customClass?.includes('sold');

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
//                             View Description
//                           </button>
//                         </div>
//                       ) : (
//                         item.description
//                       )}
//                     </td>
//                     <td>
//                       {hasPriceClass && !isSold ? (
//                         <div>
//                           <span style={{ textDecoration: 'line-through' }}>
//                             {item.price}
//                           </span>{' '}
//                           <span>{calculateDiscountedPrice(item.price)}</span>
//                         </div>
//                       ) : (
//                         item.price
//                       )}
//                     </td>
//                     <td>
//                       {isSold ? (
//                         <button className={`${styles.btn} ${styles.disabledBtn}`} disabled>
//                           Sold
//                         </button>
//                       ) : (
//                         <a
//                           href={generateWhatsAppLink(item.name, item.price, item.customClass)}
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

//           {/* Divider between categories */}
//           <hr style={{ border: '2px solid black', marginBottom: '20px' }} />
//         </div>
//       ))}

//       {/* Modal for showing full description */}
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





// // CODE WITH ALL ITEMS 10%

// const ProductTable = ({ selectedCategory }) => {
//   const [selectedItem, setSelectedItem] = useState(null);

//   // Filter products based on the selected category
//   const filteredProducts = selectedCategory === 'all'
//   ? products
//     : products.filter(category => category.id === selectedCategory);

//   // Generate WhatsApp link based on the item name and price
//   const generateWhatsAppLink = (name, price) => {
//     const numericPrice = price.split(' ')[0]; // Extract numeric part of price
//     const message = `I want to buy ${name} with price ${numericPrice} PKR`; // Prepare WhatsApp message
//     const whatsappNumber = '923343288223'; // Default WhatsApp number
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

//   // Calculate the discounted price (10% off)
//   const applyDiscount = (price) => {
//     const numericPrice = parseFloat(price.split(' ')[0]);
//     return (numericPrice * 0.9).toFixed(2);
//   };

//   return (
//     <div className={styles.tableContainer}>
//       {filteredProducts.map((category, index) => (
//         <div key={index} id={category.id}>
//           {/* Category Heading */}
//           <h2 className={styles.heading}>{category.category}</h2>

//           {/* Product Table */}
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

//                 const originalPrice = item.price;
//                 const discountedPrice = applyDiscount(item.price);

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
//                             View Description
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
//                           <span style={{ textDecoration: 'line-through' }}>
//                             {originalPrice}
//                           </span>{' '}
//                           <span>{discountedPrice} PKR</span>
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
//                           href={generateWhatsAppLink(item.name, discountedPrice)}
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

//           {/* Divider between categories */}
//           <hr style={{ border: '2px solid black', marginBottom: '20px' }} />
//         </div>
//       ))}

//       {/* Modal for showing full description */}
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

// // export default ProductTable;
// import React, { useState } from 'react';
// import styles from './ProductTable.module.css';
// import products from './products'; // Assume your products are imported here

const ProductTable = ({ selectedCategory, applyDiscountToAll = true }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  // Filter products based on the selected category
  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(category => category.id === selectedCategory);

  // Generate WhatsApp link based on the item name and price
  const generateWhatsAppLink = (name, price) => {
    const numericPrice = price.split(' ')[0]; // Extract numeric part of price
    const message = `I want to buy ${name} with price ${numericPrice} PKR`; // Prepare WhatsApp message
    const whatsappNumber = '923343288223'; // Default WhatsApp number
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  // Handle button click to show modal
  const handleShowModal = (item) => {
    setSelectedItem(item);
  };

  // Close the modal
  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  // Calculate the discounted price (10% off)
  const applyDiscount = (price) => {
    const numericPrice = parseFloat(price.split(' ')[0]);
    return (numericPrice * 0.9).toFixed(2);
  };

  return (
    <div className={styles.tableContainer}>
      {filteredProducts.map((category, index) => (
        <div key={index} id={category.id}>
          {/* Category Heading */}
          <h2 className={styles.heading}>{category.category}</h2>

          {/* Product Table */}
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
              {category.items.map(item => {
                const hasDescriptionClass = item.customClass?.includes('description');
                const isSold = item.customClass?.includes('sold');
                const hasPriceClass = item.customClass?.includes('price');

                const originalPrice = item.price;
                const discountedPrice = applyDiscount(item.price);

                // Discount Logic:
                // Option 1: Apply discount to all items
                // Option 2: Apply discount only to items with 'price' class
                const finalPrice = applyDiscountToAll || hasPriceClass
                  ? discountedPrice
                  : originalPrice;

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
                            View {/* Font Awesome icon for "View" */}
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
                          {/* Show original price with strikethrough if discounted */}
                          {applyDiscountToAll || hasPriceClass ? (
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
                        href={item.pictureUrl}
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

          {/* Divider between categories */}
          <hr style={{ border: '2px solid black', marginBottom: '20px' }} />
        </div>
      ))}

      {/* Modal for showing full description */}
      {selectedItem && (
        <div className={styles.modalOverlay} onClick={handleCloseModal}>
          <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
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
