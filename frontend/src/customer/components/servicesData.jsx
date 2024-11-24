  //AC Repairs/Home_Appliances
import acImage from "../../assets/Website_Images/AC Repair/Home_Appliances/ac.jpg";
import refImage from "../../assets/Website_Images/AC Repair/Home_Appliances/refrigerator.jpg";
import gas_stoveImage from "../../assets/Website_Images/AC Repair/Home_Appliances/gas_stove.jpg";
import microwaveImage from "../../assets/Website_Images/AC Repair/Home_Appliances/microwave.jpg";
import washingImage from "../../assets/Website_Images/AC Repair/Home_Appliances/washing_machine.jpg";
import purifierImage from "../../assets/Website_Images/AC Repair/Home_Appliances/water_purifier.jpg";

//AC Repairs/Electrical_Serivces
import wiringImage from "../../assets/Website_Images/AC Repair/Electric_Services/electricwiring.jpg";
import fanImage from "../../assets/Website_Images/AC Repair/Electric_Services/fan.jpg";
import generatorImage from "../../assets/Website_Images/AC Repair/Electric_Services/generator.jpg";
import switchboardImage from "../../assets/Website_Images/AC Repair/Electric_Services/switchboard.jpg";
import upsImage from "../../assets/Website_Images/AC Repair/Electric_Services/ups.jpg";

//Cleaning and Pest Control/Cleaning
import bathroomImage from "../../assets/Website_Images/Cleaning and Pest Control/Cleaning/bathroom.jpg";
import homeImage from "../../assets/Website_Images/Cleaning and Pest Control/Cleaning/full home.jpg";
import kitchenImage from "../../assets/Website_Images/Cleaning and Pest Control/Cleaning/kitchen.jpg";

//Cleaning and Pest Control/Pest Control
import bedbugsImage from "../../assets/Website_Images/Cleaning and Pest Control/Pest/bed_bugs.jpg";
import generalpestImage from "../../assets/Website_Images/Cleaning and Pest Control/Pest/general pest.jpg";
import termiteImage from "../../assets/Website_Images/Cleaning and Pest Control/Pest/termite.jpg";

//EPC/Repairs
import ceilingLightImage from "../../assets/Website_Images/EPC/Repairs/ceiling_light.jpg";
import cupboardImage from "../../assets/Website_Images/EPC/Repairs/cupboard.jpg";
import doorImage from "../../assets/Website_Images/EPC/Repairs/door.jpg";
import fanRepairImage from "../../assets/Website_Images/EPC/Repairs/fan_repair.jpg";
import furnitureImage from "../../assets/Website_Images/EPC/Repairs/furniture.jpg";
import switchSocketImage from "../../assets/Website_Images/EPC/Repairs/switch_socket.jpg";

//EPC/Installations
import bathroomImage2 from "../../assets/Website_Images/EPC/Installation/bathroom.jpg";
import curtainImage from "../../assets/Website_Images/EPC/Installation/curtain.jpg";
import doorLockImage from "../../assets/Website_Images/EPC/Installation/door_lock.jpg";
import fanImage2 from "../../assets/Website_Images/EPC/Installation/fan.jpg";
import geyserImage from "../../assets/Website_Images/EPC/Installation/geyser.jpg";
import wiringImage2 from "../../assets/Website_Images/EPC/Installation/wiring.jpg";

//Salon/Men
import beardImage from "../../assets/Website_Images/Salon/Men/bear.jpg";
import detanImage from "../../assets/Website_Images/Salon/Men/detan.jpg";
import facialImage from "../../assets/Website_Images/Salon/Men/facial_cleanup.jpg";
import hairColorImage from "../../assets/Website_Images/Salon/Men/hair_color.jpg";
import haircutImage from "../../assets/Website_Images/Salon/Men/haircut.jpg";
import massageImage from "../../assets/Website_Images/Salon/Men/massage.jpg";
import pedicureImage from "../../assets/Website_Images/Salon/Men/pedicure.jpg";


//Salon/Women 
import bodyCleanupImage from "../../assets/Website_Images/Salon/Women/body_cleanup.jpg";
import detanImage2 from "../../assets/Website_Images/Salon/Women/detan.jpg";
import facialImage2 from "../../assets/Website_Images/Salon/Women/facial.jpg";
import hairStylingImage from "../../assets/Website_Images/Salon/Women/hair_styling.jpg";
import makeupImage from "../../assets/Website_Images/Salon/Women/makeup.jpg";
import manicureImage from "../../assets/Website_Images/Salon/Women/manicure.jpg";
import massageImage2 from "../../assets/Website_Images/Salon/Women/massage.jpg";
import pedicureImage2 from "../../assets/Website_Images/Salon/Women/pedicure.jpg";
import threadingImage from "../../assets/Website_Images/Salon/Women/threading.jpg";
import waxingImage from "../../assets/Website_Images/Salon/Women/waxing.jpg";

//Gardening/Design Services
import gardenImage from "../../assets/Website_Images/Gardening and Landscapes/design_services/garden.jpg";
import irrigationImage from "../../assets/Website_Images/Gardening and Landscapes/design_services/irrigation.jpg";
import landscapeImage from "../../assets/Website_Images/Gardening and Landscapes/design_services/landscape.jpg";
import lawnImage from "../../assets/Website_Images/Gardening and Landscapes/design_services/lawn.jpg";

//Gardening/planting and installation
import irrigationImage2 from "../../assets/Website_Images/Gardening and Landscapes/planting and installation/irrigation.jpg";
import shrubsImage from "../../assets/Website_Images/Gardening and Landscapes/planting and installation/shrubs and flowe.jpg";
import treeplantingImage from "../../assets/Website_Images/Gardening and Landscapes/planting and installation/tree planting.jpg";


export const services = {
    appliances: [
      { 
        id: "ACA1", 
        name: 'AC Repair & Service', 
        price: '₹499', 
        description: 'Complete AC maintenance for all brands and models, ensuring optimal cooling performance.',
        image: acImage,
        duration: '1-2 hours',
        includes: [
          'Complete AC inspection and diagnosis',
      'Gas pressure and leak check',
      'Filter cleaning and sanitization',
      'Coil and fan cleaning',
      'Performance testing and optimization',
      'Electrical components check'
        ]
      },
      { 
        id: "ACA2", 
        name: 'Refrigerator Repair', 
        price: '₹399', 
        description: 'Expert diagnosis and repair for all refrigerator types and brands.',
        image: refImage,
        duration: '1-2 hours',
        includes: [
          'Cooling system inspection',
          'Thermostat calibration',
          'Door seal check and repair',
          'Gas pressure optimization',
          'Condenser coil cleaning',
          'Performance testing'
        ]
      },
      { 
        id: "ACA3", 
        name: 'Washing Machine Service', 
        price: '₹349', 
        description: 'Comprehensive repair and maintenance for both front and top-loading machines.',
        image: washingImage,
        duration: '1-2 hours',
        includes: [
          'Complete machine inspection',
          'Motor and belt check',
          'Drum cleaning and maintenance',
          'Drain system inspection',
          'Water inlet valve check',
          'Spin cycle optimization'
        ]
      },
      { 
        id: "ACA4", 
        name: 'Microwave Repair', 
        price: '₹299', 
        description: 'Quick and reliable repair for all microwave oven models.',
        image: microwaveImage,
        duration: '1-2 hours',
        includes: [
          'Power system diagnosis',
      'Magnetron testing',
      'Door safety check',
      'Control panel inspection',
      'Cavity cleaning',
      'Performance testing'
        ]
      },
      { 
        id: "ACA5", 
        name: 'Gas Stove Service', 
        price: '₹249', 
        description: 'Professional cleaning and maintenance for gas stoves.',
        image: gas_stoveImage,
        duration: '1-2 hours',
        includes: [
          'Burner deep cleaning',
      'Gas leak inspection',
      'Ignition system check',
      'Knob and regulator testing',
      'Safety system verification',
      'Performance optimization'
        ]
      },
      { 
        id: "ACA6", 
        name: 'Water Purifier Service', 
        price: '₹379', 
        description: 'Thorough cleaning and repair of kitchen chimneys.',
        image: purifierImage,
        duration: '1-2 hours',
        includes: [
          'Filter inspection and cleaning',
      'UV lamp effectiveness check',
      'Water quality testing',
      'Tank sanitization',
      'Component replacement if needed',
      'Performance optimization'
        ]
      },

    ],
    electrical: [
      { 
        id: "ACE1", 
        name: 'Electrical Wiring', 
        price: '₹599', 
        description: 'Professional electrical wiring and maintenance services.',
        image: wiringImage,
        duration: '1-2 hours',
        includes: [
          'Complete circuit inspection and testing',
      'Wire insulation and connection check',
      'Load distribution analysis',
      'Short circuit prevention',
      'Earthing system verification',
      'Safety compliance check'
        ]
      },
      { 
        id: "ACE2", 
        name: 'Switchboard Repair', 
        price: '₹249', 
        description: 'Expert repair and replacement of switchboards and electrical outlets.',
        image: switchboardImage,
        duration: '1-2 hours',
        includes: [
          'Switch mechanism inspection',
      'Socket connection testing',
      'Contact point cleaning',
      'Wiring terminal tightening',
      'Cover plate replacement if needed',
      'Safety and functionality testing'
        ]
      },
      { 
        id: "ACE3", 
        name: 'Fan & Fixture Service', 
        price: '₹299', 
        description: 'Repair and installation of fans, lights, and electrical fixtures.',
        image: fanImage,
        duration: '1-2 hours',
        includes: [
          'Motor and bearing inspection',
          'Blade balancing and alignment',
          'Speed control mechanism check',
          'Wiring connection testing',
          'Mounting and stability check',
          'Performance optimization'
        ]
      },
      { 
        id: "ACE4", 
        name: 'Generator Maintenance', 
        price: '₹499', 
        description: 'Comprehensive generator servicing and repair.',
        image: generatorImage,
        duration: '1-2 hours',
        includes: [
          'Engine oil and filter check',
      'Fuel system inspection',
      'Battery condition testing',
      'Alternator performance check',
      'Automatic transfer switch testing',
      'Load capacity verification'
        ]
      },
      { 
        id: "ACE5", 
        name: 'UPS & Inverter Service', 
        price: '₹349', 
        description: 'Battery and system maintenance for UPS and inverters.',
        image: upsImage,
        duration: '1-2 hours',
        includes: [
          
        ]
      }
    ],
    ////////////////////////////////
    cleaning: [
      {
        id: "C1",
        name: 'Bathroom Cleaning',
        price: '₹299',
        description: 'Comprehensive bathroom deep cleaning service.',
        image: bathroomImage,
        duration: '1-2 hours',
        includes: [
          'Tile & grout scrubbing',
          'Sanitization of fixtures',
          'Mirror and glass cleaning',
          'Floor mopping',
        ]
      },
      {
        id: "C2",
        name: 'Kitchen Cleaning',
        price: '₹499',
        description: 'Complete kitchen deep cleaning and degreasing.',
        image: kitchenImage,
        duration: '2-3 hours',
        includes: [
          'Appliance exterior cleaning',
          'Countertop sanitization',
          'Cabinet and drawer cleaning',
          'Floor and wall cleaning',
        ]
      },
      {
        id: "C3",
        name: 'Full Home Cleaning',
        price: '₹1299',
        description: 'Comprehensive cleaning of entire living space.',
        image: homeImage  ,
        duration: '3-4 hours',
        includes: [
          'Room-by-room deep cleaning',
          'Furniture dusting',
          'Floor mopping and vacuuming',
          'Window and glass cleaning',
        ]
      },
    ],
    pestControl: [
      {
        id: "PC1",
        name: 'General Pest Control',
        price: '₹599',
        description: 'Comprehensive treatment for cockroaches, ants, and common pests.',
        image: generalpestImage,
        duration: '1-2 hours',
        includes: [
          'Thorough pest inspection',
          'Targeted chemical treatment',
          'Entry point sealing',
          'Follow-up consultation',
        ]
      },
      {
        id: "PC2",
        name: 'Termite Control',
        price: '₹1499',
        description: 'Advanced termite prevention and eradication service.',
        image: termiteImage,
        duration: '2-3 hours',
        includes: [
          'Comprehensive termite assessment',
          'Chemical barrier treatment',
          'Wood treatment',
          'Preventive recommendations',
        ]
      },
      {
        id: "PC3",
        name: 'Bed Bugs Control',
        price: '₹899',
        description: 'Specialized bed bug elimination treatment.',
        image: bedbugsImage,
        duration: '2-3 hours',
        includes: [
          'Detailed bed bug inspection',
          'Heat treatment',
          'Chemical application',
          'Follow-up treatment check',
        ]
      },
    ],
    ////////////////////////////////
    electrical: [
      {
        id: "EL1",
        category: 'Electrical',
        name: 'Switch & Socket Service',
        price: '₹199',
        description: 'Professional repair and replacement of faulty switches and sockets.',
        image: switchSocketImage,
        duration: '2-3 hours',
        includes: [
          'Detailed switch and socket inspection',
          'Replacement of faulty components',
          'Wiring connections check',
          'Switch functionality test'
        ]
      },
      {
        id: "EL2",
        category: 'Electrical',
        name: 'Fan Service',
        price: '₹299',
        description: 'Complete fan installation, repair, and maintenance.',
        image: fanRepairImage,
        duration: '2-3 hours',
        includes: [
          'Fan motor inspection and repair',
          'New installation if needed',
          'Blade and bearing alignment',
          'Test run for operation'
        ]
      },
      {
        id: "EL3",
        category: 'Electrical',
        name: 'Wall/Ceiling Light',
        price: '₹249',
        description: 'Installation and repair of wall or ceiling light fixtures.',
        image: ceilingLightImage,
        duration: '2-3 hours',
        includes: [
          'Fixture and bulb replacement',
          'New installation',
          'Wiring inspection',
          'Safety check after installation'
        ]
      },
      {
        id: "EL4",
        category: 'Electrical',
        name: 'Geyser Service',
        price: '₹599',
        description: 'Complete geyser installation and repair with safety checks.',
        image: geyserImage,
        duration: '2-3 hours',
        includes: [
          'Geyser placement and mounting',
          'Repair of existing unit',
          'Electrical connections',
          'Safety and functionality test'
        ]
      },
      {
        id: "EL5",
        category: 'Electrical',
        name: 'Wiring Service',
        price: '₹799',
        description: 'New wiring installation and existing wiring repairs.',
        image: wiringImage2,
        duration: '2-3 hours',
        includes: [
          'New wiring system installation',
          'Repair of existing wiring',
          'Electrical safety checks',
          'Complete testing'
        ]
      }
    ],
    carpenter: [
      {
        id: "CP1",
        category: 'Carpenter',
        name: 'Cupboard & Drawer',
        price: '₹299',
        description: 'Installation and repair of cupboards, drawers, and cabinet hardware.',
        image: cupboardImage,
        duration: '2-3 hours',
        includes: [
          'Installation and repairs',
          'Fixing misaligned hinges',
          'Drawer channel service',
          'Surface restoration'
        ]
      },
      {
        id: "CP2",
        category: 'Carpenter',
        name: 'Door Service',
        price: '₹349',
        description: 'Comprehensive door installation and repair services.',
        image: doorImage,
        duration: '2-3 hours',
        includes: [
          'Door installation/repair',
          'Hinge and latch service',
          'Lock installation',
          'Alignment adjustment'
        ]
      },
      {
        id: "CP3",
        category: 'Carpenter',
        name: 'Furniture Service',
        price: '₹399',
        description: 'Furniture assembly, repair and restoration services.',
        image: furnitureImage,
        duration: '2-3 hours',
        includes: [
          'Furniture assembly',
          'Joint and structure repair',
          'Surface restoration',
          'Part replacement'
        ]
      },
      {
        id: "CP4",
        category: 'Carpenter',
        name: 'Curtain Rod Installation',
        price: '₹299',
        description: 'Professional curtain rod installation service.',
        image: curtainImage,
        duration: '2-3 hours',
        includes: [
          'Rod and bracket installation',
          'Secure placement',
          'Drilling and mounting',
          'Stability testing'
        ]
      },
      {
        id: "CP5",
        category: 'Carpenter',
        name: 'Bathroom Accessories',
        price: '₹249',
        description: 'Installation of bathroom accessories and fixtures.',
        image: bathroomImage2,
        duration: '2-3 hours',
        includes: [
          'Accessory mounting',
          'Holders installation',
          'Secure fixture setup',
          'Final inspection'
        ]
      }
    ],
    ////////////////////////////////
    gardening: [
      {
        id: "GA1",
        name: 'Landscape Design',
        price: '₹15,999',
        description: 'Professional landscape design service to transform your outdoor space into a beautiful and functional area.',
        image: landscapeImage,
        duration: '3-5 days',
        includes: [
          'Site analysis and assessment',
          '3D visualization of design',
          'Plant selection consultation',
          'Detailed implementation plan'
        ]
      },
      {
        id: "GA2",
        name: 'Garden Design',
        price: '₹8,999',
        description: 'Custom garden design service focusing on creating beautiful and sustainable garden spaces.',
        image: gardenImage,
        duration: '2-3 days',
        includes: [
          'Color scheme planning',
          'Seasonal plant selection',
          'Garden layout design',
          'Maintenance guidelines'
        ]
      },
      {
        id: "GA3",
        name: 'Irrigation Design',
        price: '₹12,999',
        description: 'Expert irrigation system design for efficient water management and plant health.',
        image: irrigationImage,
        duration: '2-3 days',
        includes: [
          'Water requirement analysis',
          'Sprinkler layout planning',
          'Drip system design',
          'Control system specification'
        ]
      },
      {
        id: "GA4",
        name: 'Lawn Renovation',
        price: '₹9,999',
        description: 'Complete lawn makeover service to revitalize your green space.',
        image: lawnImage,
        duration: '3-4 days',
        includes: [
          'Soil testing and preparation',
          'Grass type selection',
          'Leveling and grading',
          'Initial maintenance plan'
        ]
      }
    ],
    landscaping: [
      {
        id: "LA1",
        name: 'Tree Planting',
        price: '₹3,999',
        description: 'Professional tree planting service including selection, placement, and installation.',
        image: '/api/placeholder/300/200?text=Tree+Planting',
        duration: '1-2 days',
        includes: [
          'Tree species consultation',
          'Location assessment',
          'Soil preparation',
          'Post-planting care guide'
        ]
      },
      {
        id: "LA2",
        name: 'Shrubs and Flower Bed Installation',
        price: '₹7,999',
        description: 'Complete installation service for shrubs and flower beds to enhance your garden.',
        image: '/api/placeholder/300/200?text=Flower+Beds',
        duration: '2-3 days',
        includes: [
          'Bed preparation and edging',
          'Plant arrangement',
          'Mulching service',
          'Care instructions'
        ]
      },
      {
        id: "LA3",
        name: 'Irrigation System Installation',
        price: '₹24,999',
        description: 'Professional installation of automated irrigation systems for your garden.',
        image: '/api/placeholder/300/200?text=Irrigation+System',
        duration: '3-4 days',
        includes: [
          'System component installation',
          'Timer and control setup',
          'Testing and calibration',
          'Usage training'
        ]
      }
    ],
    ////////////////////////////////
    men: [
      {
        id: "SM1",
        name: "Haircut",
        price: "₹299",
        description: "Professional styling and precise cutting to match your desired look.",
        image: haircutImage,
        duration: "30-45 mins",
        includes: [
          "Hair wash",
          "Style consultation",
          "Precision cutting",
          "Final styling"
        ]
      },
      {
        id: "SM2",
        name: "Beard Trimming & Styling",
        price: "₹199",
        description: "Perfectly sculpted beard with expert shaping and grooming.",
        image: beardImage,
        duration: "20-30 mins",
        includes: [
          "Beard wash",
          "Shape consultation",
          "Precise trimming",
          "Beard oil application"
        ]
      },
      {
        id: "SM3",
        name: "Massage",
        price: "₹499",
        description: "Relaxing full-body massage to release tension and rejuvenate.",
        image: massageImage,
        duration: "60 mins",
        includes: [
          "Aromatic oils",
          "Full body massage",
          "Head massage",
          "Hot towel treatment"
        ]
      },
      {
        id: "SM4",
        name: "Pedicure",
        price: "₹349",
        description: "Complete foot care with cleaning, exfoliation, and nail treatment.",
        image: pedicureImage,
        duration: "45-60 mins",
        includes: [
          "Foot soak",
          "Scrub treatment",
          "Nail grooming",
          "Foot massage"
        ]
      },
      {
        id: "SM5",
        name: "Hair Color",
        price: "₹699",
        description: "Professional hair coloring with premium, long-lasting dyes.",
        image: hairColorImage,
        duration: "90-120 mins",
        includes: [
          "Color consultation",
          "Premium hair color",
          "Application & processing",
          "Post-color care"
        ]
      },
      {
        id: "SM6",
        name: "Detan",
        price: "₹399",
        description: "Skin brightening treatment to remove tan and even out skin tone.",
        image: detanImage,
        duration: "45-60 mins",
        includes: [
          "Skin analysis",
          "De-tan pack application",
          "Face massage",
          "Moisturizer application"
        ]
      },
      {
        id: "SM7",
        name: "Facial & Cleanup",
        price: "₹599",
        description: "Deep cleansing facial to remove impurities and refresh skin.",
        image: facialImage,
        duration: "60-75 mins",
        includes: [
          "Deep cleansing",
          "Face scrub",
          "Steam treatment",
          "Face pack"
        ]
      }
    ],
    women: [
      {
        id: "SW1",
        name: "Makeup & Styling",
        price: "₹799",
        description: "Professional makeup application for any occasion or photoshoot.",
        image: makeupImage,
        duration: "60-90 mins",
        includes: [
          "Skin preparation",
          "Full face makeup",
          "Hair styling",
          "Touch-up kit"
        ]
      },
      {
        id: "SW2",
        name: "Hair Styling",
        price: "₹399",
        description: "Elegant hairstyling for various looks and events.",
        image: hairStylingImage,
        duration: "45-60 mins",
        includes: [
          "Hair wash",
          "Blow dry",
          "Style consultation",
          "Final setting"
        ]
      },
      {
        id: "SW3",
        name: "Massage",
        price: "₹549",
        description: "Soothing massage to relax and revitalize body and mind.",
        image: massageImage2,
        duration: "60 mins",
        includes: [
          "Aromatherapy oils",
          "Full body massage",
          "Head massage",
          "Steam therapy"
        ]
      },
      {
        id: "SW4",
        name: "Waxing",
        price: "₹299",
        description: "Smooth, long-lasting hair removal for entire body.",
        image: waxingImage,
        duration: "45-60 mins",
        includes: [
          "Pre-wax care",
          "Premium wax application",
          "Post-wax soothing",
          "Moisturizer application"
        ]
      },
      {
        id: "SW5",
        name: "Facial",
        price: "₹499",
        description: "Customized facial treatment for glowing, healthy skin.",
        image: facialImage2,
        duration: "60-75 mins",
        includes: [
          "Skin analysis",
          "Deep cleansing",
          "Face massage",
          "Mask application"
        ]
      },
      {
        id: "SW6",
        name: "Cleanup",
        price: "₹349",
        description: "Thorough skin cleansing and pore treatment.",
        image: bodyCleanupImage,
        duration: "30-45 mins",
        includes: [
          "Deep cleansing",
          "Blackhead removal",
          "Toning",
          "Moisturizing"
        ]
      },
      {
        id: "SW7",
        name: "Pedicure",
        price: "₹399",
        description: "Complete foot care with nail polish and massage.",
        image: pedicureImage2,
        duration: "45-60 mins",
        includes: [
          "Foot soak",
          "Callus removal",
          "Nail care",
          "Polish application"
        ]
      },
      {
        id: "SW8",
        name: "Manicure",
        price: "₹249",
        description: "Comprehensive hand and nail care with styling.",
        image: manicureImage,
        duration: "30-45 mins",
        includes: [
          "Hand soak",
          "Cuticle care",
          "Hand massage",
          "Nail polish"
        ]
      },
      {
        id: "SW9",
        name: "Threading & Face Wax",
        price: "₹199",
        description: "Precise facial hair removal and shaping.",
        image: threadingImage,
        duration: "15-20 mins",
        includes: [
          "Eyebrow threading",
          "Upper lip threading",
          "Face waxing",
          "Soothing gel application"
        ]
      },
      {
        id: "SW10",
        name: "Bleach & Detan",
        price: "₹449",
        description: "Skin brightening and tan removal treatment.",
        image: detanImage2,
        duration: "45-60 mins",
        includes: [
          "Skin patch test",
          "Bleach application",
          "De-tan pack",
          "Sun protection"
        ]
      }
    ],
    Ser: [
      {
        id: "SE1",
        category: "Electrician",
        name: "Switch & Socket Repair",
        price: "₹199",
        description: "Professional repair and replacement of faulty switches and sockets.",
        image: "/api/placeholder/300/200?text=Switch+Repair",
        duration: "30-45 mins",
        includes: [
          "Inspection of switches and sockets",
          "Repair or replacement of faulty parts",
          "Safety checks",
          "Cleanup after service"
        ]
      },
      {
        id: "SE2",
        category: "Electrician",
        name: "Fan Repair",
        price: "₹299",
        description: "Complete fan servicing, repair, and maintenance.",
        image: "/api/placeholder/300/200?text=Fan+Repair",
        duration: "45-60 mins",
        includes: [
          "Fan disassembly and cleaning",
          "Motor repair or replacement",
          "Lubrication of moving parts",
          "Reassembly and testing"
        ]
      },
      {
        id: "SE3",
        category: "Electrician",
        name: "Wall/Ceiling Light",
        price: "₹249",
        description: "Replacement and repair of wall or ceiling light fixtures.",
        image: "/api/placeholder/300/200?text=Light+Repair",
        duration: "30-45 mins",
        includes: [
          "Removal of old fixtures",
          "Installation of new fixtures",
          "Electrical wiring adjustments",
          "Functional testing"
        ]
      },
      {
        id: "SC4",
        category: "Carpenter",
        name: "Cupboard & Drawer",
        price: "₹299",
        description: "Repair of cupboards, drawers, and cabinet hardware.",
        image: "/api/placeholder/300/200?text=Cupboard+Repair",
        duration: "30-45 mins",
        includes: [
          "Hinge adjustments",
          "Drawer runner replacement",
          "Hardware tightening",
          "Surface refinishing"
        ]
      },
      {
        id: "SC5",
        category: "Carpenter",
        name: "Door Repair",
        price: "₹349",
        description: "Comprehensive door repair and alignment services.",
        image: "/api/placeholder/300/200?text=Door+Repair",
        duration: "45-60 mins",
        includes: [
          "Door hinge repair",
          "Alignment adjustments",
          "Lock mechanism repair",
          "Surface refinishing"
        ]
      },
      {
        id: "SC6",
        category: "Carpenter",
        name: "Furniture Repair",
        price: "₹399",
        description: "General furniture repair and restoration services.",
        image: "/api/placeholder/300/200?text=Furniture+Repair",
        duration: "1-2 hours",
        includes: [
          "Wood polishing",
          "Joint reinforcement",
          "Hardware replacement",
          "Surface repairs"
        ]
      }
    ],
    installations: [
      {
        id: "IE1",
        category: "Electrician",
        name: "Fan Installation",
        price: "₹399",
        description: "Professional ceiling fan installation with wiring.",
        image: fanImage2,
        duration: "45-60 mins",
        includes: [
          "Bracket mounting",
          "Wiring and connections",
          "Alignment adjustments",
          "Operational testing"
        ]
      },
      {
        id: "IE2",
        category: "Electrician",
        name: "Geyser Installation",
        price: "₹599",
        description: "Complete geyser installation with safety checks.",
        image: geyserImage,
        duration: "1-2 hours",
        includes: [
          "Wall mounting",
          "Plumbing and wiring connections",
          "Safety testing",
          "Operational demonstration"
        ]
      },
      {
        id: "IE3",
        category: "Electrician",
        name: "Wiring",
        price: "₹799",
        description: "New wiring installation and existing wiring updates.",
        image: wiringImage2,
        duration: "2-3 hours",
        includes: [
          "Wire routing",
          "Switchboard connections",
          "Safety insulation checks",
          "Functionality testing"
        ]
      },
      {
        id: "IC4",
        category: "Carpenter",
        name: "Curtain Rod Installation",
        price: "₹299",
        description: "Secure installation of curtain rods and brackets.",
        image: curtainImage,
        duration: "30-45 mins",
        includes: [
          "Bracket mounting",
          "Rod alignment",
          "Wall drilling and fixing",
          "Stability testing"
        ]
      },
      {
        id: "IC5",
        category: "Carpenter",
        name: "Bathroom Accessories",
        price: "₹249",
        description: "Installation of bathroom holders and hangers.",
        image: bathroomImage2,
        duration: "30-45 mins",
        includes: [
          "Position marking",
          "Drilling and fixing",
          "Stability testing",
          "Cleanup after installation"
        ]
      },
      {
        id: "IC6",
        category: "Carpenter",
        name: "Door Lock Installation",
        price: "₹349",
        description: "Professional door lock and handle installation.",
        image: doorLockImage,
        duration: "45-60 mins",
        includes: [
          "Positioning and alignment",
          "Lock and handle fixing",
          "Functionality testing",
          "Safety demonstration"
        ]
      }
    ],
    design: [
      {
        id: "D1",
        name: "Landscape Design",
        price: "₹15,999",
        description: "Professional landscape design service to transform your outdoor space into a beautiful and functional area.",
        duration: "3-5 days",
        image: landscapeImage,
        includes: [
          "Site analysis and assessment",
          "3D visualization of design",
          "Plant selection consultation",
          "Detailed implementation plan"
        ]
      },
      {
        id: "D2",
        name: "Garden Design",
        price: "₹8,999",
        description: "Custom garden design service focusing on creating beautiful and sustainable garden spaces.",
        duration: "2-3 days",
        image: gardenImage,
        includes: [
          "Color scheme planning",
          "Seasonal plant selection",
          "Garden layout design",
          "Maintenance guidelines"
        ]
      },
      {
        id: "D3",
        name: "Irrigation Design",
        price: "₹12,999",
        description: "Expert irrigation system design for efficient water management and plant health.",
        duration: "2-3 days",
        image: irrigationImage,
        includes: [
          "Water requirement analysis",
          "Sprinkler layout planning",
          "Drip system design",
          "Control system specification"
        ]
      },
      {
        id: "D4",
        name: "Lawn Renovation",
        price: "₹9,999",
        description: "Complete lawn makeover service to revitalize your green space.",
        duration: "3-4 days",
        image: lawnImage,
        includes: [
          "Soil testing and preparation",
          "Grass type selection",
          "Leveling and grading",
          "Initial maintenance plan"
        ]
      }
    ],
    planting: [
      {
        id: "P1",
        name: "Tree Planting",
        price: "₹3,999",
        description: "Professional tree planting service including selection, placement, and installation.",
        duration: "1-2 days",
        image: treeplantingImage,
        includes: [
          "Tree species consultation",
          "Location assessment",
          "Soil preparation",
          "Post-planting care guide"
        ]
      },
      {
        id: "P2",
        name: "Shrubs and Flower Bed Installation",
        price: "₹7,999",
        description: "Complete installation service for shrubs and flower beds to enhance your garden.",
        duration: "2-3 days",
        image: shrubsImage,
        includes: [
          "Bed preparation and edging",
          "Plant arrangement",
          "Soil enrichment",
          "Watering system setup"
        ]
      },
      {
        id: "P3",
        name: "Vegetable Garden Installation",
        price: "₹4,999",
        description: "Turn your backyard into a sustainable vegetable garden.",
        duration: "2-3 days",
        image: irrigationImage2,
        includes: [
          "Soil preparation",
          "Seedling planting",
          "Garden layout design",
          "Initial watering schedule"
        ]
      }
    ]
  }; 

  export default services;