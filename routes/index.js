var express = require("express");
var router = express.Router();



var autos = [
  {
    Name: "BMW i4",
    Price:"₹ 80.33 lakh",
    Mileage: "590km(Full charge)",
    Engine: "Electrically Excited Synchronous Motor",
    Transmission: "Auto",
    Fueltype: "Electric",
    Description:"The first-ever fully-electric BMW i4 delivers outstanding dynamics with a high level of comfort and the ideal qualities.",
    link: "https://www.autocarindia.com/cars/bmw/i4",
    image:
      "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/BMW-i4-271220221146.jpg&w=373&h=245&q=75&c=1",
   
  },
  {
   
      Name: "Ferrari 812 Superfast",
      Price:"₹ 6.93 crore",
      Mileage: "14.01kpml",
      Engine: "6496cc",
      Transmission: "Dual-Clutch Auto",
      Fueltype: "Petrol",
      Description:"The 812 Superfast is the latest in a long line of front-engined, V12-powered GTs from Ferrari, and it goes beyond the GT brief ",
      link:"https://www.autocarindia.com/cars/ferrari/812-superfast",
      image:
      "https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Ferrari-296-GTB-280920221627.jpg&w=350&h=251&q=90&c=1",
  },
  {
    
      Name: "Porsche Macan",
      Price:"₹ 82.53 - 98.46 lakh",
      Mileage: "11.24kpml",
      Engine: "1984cc",
      Transmission: "Dual Clutch Auto",
      Fueltype: "Petrol",
      Description:"Five doors, five seats, yet incomparable, unmistakable and unstoppable. In its latest generation, the Macan is and ",
      link: "https://www.autocarindia.com/cars/porsche/macan",
      image:
      "https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Porsche-Macan-220620221545.jpg&w=350&h=251&q=90&c=1",

    
  },
  {
    link: "https://www.autocarindia.com/cars/jaguar/xf",
    image:
      "https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Jaguar-XF-220820221634.jpg&w=350&h=251&q=90&c=1",
      Engine: "1997cc",
      Transmission: "Torque Converter Auto",
      Fueltype: "petrol",
      Mileage: "19.2kpml",
      Name: "Jaguar XF",
      Price:"₹ 82.85 - 87.93 lakh",
      Description:"The XF is the most advanced, efficient, and refined sports Sedan car that Jaguar has ever produced."
  },
  {
    link: "https://www.autocarindia.com/cars/bmw/x5",
    image:
      "https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/X5ModelImage.jpg&w=350&h=251&q=90&c=1",
      Engine: "2993cc",
      Transmission: "Torque Converter Auto",
      Fueltype: "Diesel",
      Mileage: "13.38kpml",
      Name: "BMW X5",
      Price:"₹ 88.53 - 97.97 lakh",
      Description:"The BMW X5 is designed to let you boss every road with unmatched comfort and in extreme ease."
  },
  {
    link: "https://www.autocarindia.com/cars/land-rover/range-rover-velar",
    image:
      "https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Range%20Rover%20VelarModelImage.jpg&w=350&h=251&q=90&c=1",
      Engine: "1997cc",
      Transmission: "Torque Converter Auto",
      Fueltype: "Petrol",
      Mileage: "593kpml",
      Name: "Land Rover Range Rover Velar",
      Price:"₹ 84.81 lakh",
      Description:"Immerse yourself in Range Rover Velar. A calm sanctuary and elegant simplicity await."
  },
  {
    link: "https://www.autocarindia.com/cars/mercedes-benz/glc-coupe",
    image:
      "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Mercedes-Benz-GLC%20Coupe-060320201156.jpg&w=373&h=245&q=75&c=1",
      Engine: "2996cc",
      Transmission: "Torque Converter Auto",
      Fueltype: "Petrol",
      Mileage: "16.3kpml",
      Name: "Mercedes-Benz GLC Coupe",
      Price:"₹ 88.74 lakh",
      Description:"Mercedes Benz GLC Coupé combines the merits of an SUV and a coupé like no other."
  },
  {
    link: "https://www.autocarindia.com/cars/land-rover/discovery",
    image:
      "https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/DiscoveryModelImage.jpg&w=350&h=251&q=90&c=1",
      Engine: "1999cc",
      Transmission: "Torque Converter Auto",
      Fueltype: "Diesel",
      Mileage: "18kpml",
      Name: "Land Rover Discovery",
      Price:"₹ 88.86 lakh",
      Description:"Designed to be unforgettable, Land Rover Discovery is premium by nature, versatile by design."
  },
  {
    link: "https://www.autocarindia.com/cars/jeep/grand-cherokee",
    image:
      "https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Jeep-Grand-Cherokee-220920221922.jpg&w=350&h=251&q=90&c=1",
      Engine: "1995cc",
      Transmission: "Torque Converter Auto",
      Fueltype: "Petrol",
      Mileage: "12.8kpml",
      Name: "Jeep Grand Cherokee",
      Price:"₹ 89.66 lakh",
      Description:"Experience luxury, connectivity & iconic Jeep capability with the all-new Grand Cherokee."
  },
  {
    link: "https://www.autocarindia.com/cars/mercedes-benz/gle",
    image:
      "https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Mercedes-Benz-GLE-160220201751.jpg&w=350&h=251&q=90&c=1",
      Engine: "1950cc",
      Transmission: "Torque Converter Auto",
      Fueltype: "Diesel",
      Mileage: "15.0kpml",
      Name: "Mercedes-Benz GLE ",
      Price:"₹ 91.31 lakh - 1.11 crore",
      Description:"Mercedes Benz GLE LWB can provide you with tangible support and protection, thanks. "
  },
  {
    link: "https://www.autocarindia.com/cars/audi/q7",
    image:
      "https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Audi-Q7-271220221608.jpg&w=350&h=251&q=90&c=1",
      Engine: "1999cc",
      Transmission: "Torque Converter Auto",
      Fueltype: "Petrol",
      Mileage: "11.21kpml",
      Name: "Audi Q7",
      Price:"₹ 92.54 lakh - 1.02 crore",
      Description:"Versatile top-class SUV. Intelligent technologies, a compelling driving experience."
  },
  {
    link: "https://www.autocarindia.com/cars/mercedes-benz/a-class-hatchback",
    image:
      "https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Mercedes-Benz-A-class-Hatchback-210920221745.jpg&w=350&h=251&q=90&c=1",
      Engine: "1991cc",
      Transmission: "8-speed Dual-Clutch Auto",
      Fueltype: "Petrol",
      Mileage: "20kpml",
      Name: "Mercedes-Benz A-class Hatchback",
      Price:"₹ 94.28 lakh",
      Description:"The Mercedes-Benz A-Class is a subcompact car produced."
  },
  {
    link: "https://www.autocarindia.com/cars/audi/a5-sportback",
    image:
      "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Audi-A5-Sportback-120420212020.jpg&w=373&h=245&q=75&c=1",
      Engine: "2994cc",
      Transmission: "Torque Converter Auto",
      Fueltype: "Petrol",
      Mileage: "19.2kpml",
      Name: "Audi A5 Sportback",
      Price:"₹ 96.99 lakh",
      Description:"Versatile and refined design. The hidden beauty of the Audi A5 Sportback lies in its versatility"
  },
  {
    link: "https://www.autocarindia.com/cars/porsche/718",
    image:
      "https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/718ModelImage.jpg&w=350&h=251&q=90&c=1",
      Engine: "1988cc",
      Transmission: "Dual-Clutch Auto",
      Fueltype: "Petrol",
      Mileage: "9.17kmpl",
      Name: "Porsche 718",
      Price:"₹ 99.42 lakh",
      Description:"The 718 Style Edition models increase the driving joy of every journey, thanks to two-zone."
  },
  {
    link: "https://www.autocarindia.com/cars/lamborghini/urus",
    image:
      "https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Lamborghini-Urus-251120221630.jpg&w=350&h=251&q=90&c=1",
      Engine: "3996cc",
      Transmission: "Torque Converter Auto",
      Fueltype: "Petrol",
      Mileage: "7.87kmpl",
      Name: "Lamborghini Urus",
      Price:"₹ 4.87 crore",
      Description:"Powered by Lamborghini's 4.0-liter twin-turbo V8 engine, the Urus is all about a performance."
  },
  {
    link: "https://www.autocarindia.com/cars/rolls-royce/dawn",
    image:
      "https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/DawnModelImage.jpg&w=350&h=251&q=90&c=1",
      Engine: "6592cc",
      Transmission: "Torque Converter Auto",
      Fueltype: "Petrol",
      Mileage: "9.8kpml",
      Name: "Rolls-Royce Dawn",
      Price:"₹ 8.43 - 9.06 crore",
      Description:"Blending sophistication with the freedom of open-top driving, Dawn is an exacting balance of ."
  },
 
];
router.get("/", function (req, res) {
  res.render("index", { autos });
});
router.get("/Carlist", function (req, res) {
  res.render("Carlist", { autos });
});
router.get("/Cardetails", function (req, res) {
  res.render("Cardetails", { autos });
});
module.exports = router;