// Comprehensive Dynamic Space Product Data Configuration
const productData = {
  'inertia-nano': {
    name: 'Inertia Nano',
    subtitle: 'Compact CubeSat Platform',
    description: 'Revolutionary nanosatellite platform designed for research missions, educational purposes, and commercial applications with advanced miniaturized systems for space exploration.',
    icon: 'ri-rocket-2-line',
    category: 'Nanosatellite Systems',
    price: 'Starting at ₹2,50,00,000',
    rating: 4.8,
    availability: 'Available for immediate deployment',
    
    // Dynamic content sections for product details page
    contentSections: [
      {
        title: 'Advanced Nano Technology',
        content: 'Our Inertia Nano represents breakthrough miniaturization technology, packing advanced space-grade systems into a compact CubeSat format. With precision engineering and rigorous testing protocols, this nanosatellite delivers exceptional performance for critical research and commercial missions.',
        type: 'content-image',
        image: 'assets/rocket_middle2.png'
      },
      {
        title: 'Nano Mission Operations',
        content: 'Discover how Inertia Nano enables breakthrough nanosatellite missions through innovative design and autonomous operation. This comprehensive system provides reliable performance in Low Earth Orbit for educational, research, and commercial applications.',
        type: 'content-video',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
      },
      {
        title: 'CubeSat Integration Testing',
        content: 'Watch comprehensive CubeSat testing procedures and system integration processes for Inertia Nano. This detailed video demonstrates our rigorous quality assurance protocols, environmental testing, and performance validation for nanosatellite missions.',
        type: 'content-video',
        video: 'https://www.youtube.com/embed/9bZkp7q19f0'
      },
      {
        title: 'Nano Technical Specifications',
        content: 'Comprehensive technical specifications and operational guidelines for Inertia Nano. Access detailed documentation covering CubeSat architecture, payload integration, power systems, and mission planning requirements for nanosatellite operations.',
        type: 'content-document',
        document: 'assets/documents/inertia-nano-technical-specs.pdf'
      },
      {
        title: 'CubeSat Mission Planning',
        content: 'Complete CubeSat mission planning documentation for Inertia Nano including orbital mechanics calculations for LEO missions, payload integration specifications, launch requirements, and operational procedures for nanosatellite deployments.',
        type: 'content-document',
        document: 'assets/documents/inertia-nano-mission-planning.pdf'
      },
      {
        title: 'Nano Safety & Compliance',
        content: 'Comprehensive safety protocols and regulatory compliance documentation for Inertia Nano. Includes CubeSat design standards compliance, safety procedures, risk assessment guidelines, and space debris mitigation protocols.',
        type: 'content-document',
        document: 'assets/documents/inertia-nano-safety-compliance.pdf'
      },
      {
        title: 'Nanosatellite Innovation Impact',
        content: 'Inertia Nano is revolutionizing access to space through cost-effective nanosatellite technology. Our CubeSat platform democratizes space exploration, enabling universities, research institutions, and small companies to conduct meaningful space missions while advancing our understanding of Earth and space sciences.',
        type: 'content-only'
      }
    ],
    
    heroMedia: {
      type: 'video',
      src: 'assets/videos/inertia-nano-deployment.mp4',
      poster: 'assets/images/inertia-nano-hero.jpg',
      alt: 'Inertia Nano Satellite Deployment'
    },
    
    gallery: [
      {
        type: 'image',
        src: 'assets/images/nano-assembly.jpg',
        alt: 'Nano Satellite Assembly',
        caption: 'Precision engineering in compact 1U-6U CubeSat format'
      },
      {
        type: 'video',
        src: 'assets/videos/nano-testing.mp4',
        poster: 'assets/images/nano-testing-thumb.jpg',
        alt: 'Satellite Testing Process',
        caption: 'Rigorous testing protocols for space qualification'
      },
      {
        type: 'image',
        src: 'assets/images/nano-orbit.jpg',
        alt: 'Satellite in Orbit',
        caption: 'Inertia Nano successfully operating in Low Earth Orbit'
      }
    ],
    
    features: [
      {
        icon: 'ri-microscope-line',
        title: 'Miniaturized Systems',
        description: 'Advanced miniaturization technology for maximum capability in minimal space',
        benefits: ['1U-6U CubeSat compatibility', 'High integration density', 'Modular design']
      },
      {
        icon: 'ri-wifi-line',
        title: 'Communication Suite',
        description: 'High-frequency communication systems for reliable data transmission',
        benefits: ['S-band/X-band transceivers', 'Ground station connectivity', 'Data encryption']
      },
      {
        icon: 'ri-battery-charge-line',
        title: 'Power Management',
        description: 'Efficient solar panels and battery systems for extended mission life',
        benefits: ['Solar array deployment', '3-year mission life', 'Power optimization']
      },
      {
        icon: 'ri-compass-line',
        title: 'Attitude Control',
        description: 'Precision attitude determination and control systems',
        benefits: ['3-axis stabilization', 'Reaction wheels', 'Magnetorquers']
      },
      {
        icon: 'ri-cpu-line',
        title: 'Onboard Computing',
        description: 'Advanced flight computer with autonomous operation capabilities',
        benefits: ['Fault tolerance', 'Autonomous operations', 'Real-time processing']
      },
      {
        icon: 'ri-shield-check-line',
        title: 'Space Qualification',
        description: 'Radiation-hardened components for harsh space environment',
        benefits: ['Radiation tolerance', 'Thermal cycling', 'Vibration tested']
      }
    ],
    
    specifications: {
      'Physical Characteristics': {
        'Size': '1U-6U CubeSat format (10×10×10 cm per unit)',
        'Mass': '1-8 kg depending on configuration',
        'Power': '10-50W solar panel generation',
        'Battery': 'Lithium-ion with 3-year life'
      },
      'Performance': {
        'Mission Life': '2-5 years in LEO',
        'Altitude Range': '300-800 km orbits',
        'Payload Capacity': 'Up to 3U dedicated payload space',
        'Data Rate': 'Up to 1 Mbps downlink'
      },
      'Environmental': {
        'Operating Temperature': '-40°C to +85°C',
        'Radiation Tolerance': '100 krad total dose',
        'Vibration': 'Launch qualified to 20G',
        'Thermal Cycling': '-100°C to +120°C survival'
      },
      'Certifications': {
        'Standards': 'CubeSat Design Standard compliance',
        'Launch': 'Compatible with major launch providers',
        'Testing': 'Full space qualification testing',
        'Documentation': 'Complete technical documentation'
      }
    },
    
    applications: [
      {
        title: 'Earth Observation',
        description: 'High-resolution imaging and environmental monitoring missions',
        icon: 'ri-earth-line',
        benefits: ['Climate monitoring', 'Agriculture surveillance', 'Disaster response']
      },
      {
        title: 'Communication Networks',
        description: 'IoT connectivity and communication relay services',
        icon: 'ri-signal-tower-line',
        benefits: ['Global IoT coverage', 'Remote connectivity', 'Emergency communications']
      },
      {
        title: 'Scientific Research',
        description: 'Space science experiments and technology demonstration',
        icon: 'ri-flask-line',
        benefits: ['Microgravity research', 'Technology validation', 'Educational missions']
      },
      {
        title: 'Commercial Services',
        description: 'Commercial space services and constellation missions',
        icon: 'ri-building-line',
        benefits: ['Cost-effective deployment', 'Rapid development', 'Scalable constellation']
      }
    ],
    
    packages: [
      {
        name: 'Research Mission',
        price: '₹2,50,00,000',
        duration: '18-month development',
        coverage: 'Single satellite',
        features: [
          'Custom payload integration',
          'Mission design and analysis',
          'Ground station support',
          'Launch coordination',
          '2-year mission operations'
        ],
        recommended: false
      },
      {
        name: 'Commercial Deployment',
        price: '₹15,00,00,000',
        duration: '24-month development',
        coverage: '6-satellite constellation',
        features: [
          'Multi-satellite constellation',
          'Advanced payload capabilities',
          'Dedicated ground segment',
          'Launch integration services',
          'Extended mission support',
          'Data processing services'
        ],
        recommended: true
      },
      {
        name: 'Enterprise Solution',
        price: 'Custom Pricing',
        duration: 'Tailored timeline',
        coverage: 'Large constellation',
        features: [
          'Custom satellite design',
          'Dedicated constellation',
          'Private ground network',
          'Mission control center',
          'Training and certification',
          '24/7 operations support'
        ],
        recommended: false
      }
    ]
  },
  
  'inertia': {
    name: 'Inertia',
    subtitle: 'Mid-Range Satellite Platform',
    description: 'Advanced mid-range satellite system with enhanced communication capabilities, scientific instrumentation, and extended mission duration for comprehensive space missions.',
    icon: 'ri-satellite-line',
    category: 'Small Satellite Systems',
    price: 'Starting at ₹25,00,00,000',
    rating: 4.9,
    availability: 'Available for 2025 launches',
    
    contentSections: [
      {
        title: 'Advanced Satellite Technology',
        content: 'Our Inertia satellite represents cutting-edge mid-range satellite technology, incorporating advanced communication systems and scientific instrumentation. With robust engineering and comprehensive testing protocols, this platform delivers exceptional performance for extended space missions.',
        type: 'content-image',
        image: 'assets/img/bock_ai_img1.jpg'
      },
      {
        title: 'Extended Mission Operations',
        content: 'Discover how Inertia enables extended satellite missions through innovative design and enhanced communication capabilities. This comprehensive system provides reliable performance for 7-10 year operational lifetimes in various orbital configurations.',
        type: 'content-video',
        video: 'https://www.youtube.com/embed/L_jWHffIx5E'
      },
      {
        title: 'Satellite System Integration',
        content: 'Watch comprehensive satellite testing procedures and system integration processes for Inertia. This detailed video demonstrates our advanced testing protocols, thermal vacuum testing, and performance validation for extended mission reliability.',
        type: 'content-video',
        video: 'https://www.youtube.com/embed/2g811Eo7K8U'
      },
      {
        title: 'Satellite Technical Documentation',
        content: 'Comprehensive technical specifications and operational guidelines for Inertia satellite system. Access detailed documentation covering satellite architecture, communication systems, power management, and mission control procedures.',
        type: 'content-document',
        document: 'assets/documents/inertia-technical-manual.pdf'
      },
      {
        title: 'Extended Mission Planning',
        content: 'Complete mission planning documentation for Inertia including orbital mechanics for various orbits, communication link budgets, ground station requirements, and long-term operational procedures for satellite missions.',
        type: 'content-document',
        document: 'assets/documents/inertia-mission-operations.pdf'
      },
      {
        title: 'Satellite Safety Protocols',
        content: 'Comprehensive safety protocols and regulatory compliance for Inertia satellite operations. Includes space traffic coordination, collision avoidance procedures, end-of-life disposal planning, and international space law compliance.',
        type: 'content-document',
        document: 'assets/documents/inertia-safety-protocols.pdf'
      },
      {
        title: 'Satellite Communication Revolution',
        content: 'Inertia is transforming satellite communications through advanced mid-range satellite technology. Our platform enables reliable, long-duration missions that provide essential services including Earth observation, communication relays, and scientific research for global applications.',
        type: 'content-only'
      }
    ],
    
    features: [
      {
        icon: 'ri-radar-line',
        title: 'Advanced Payloads',
        description: 'High-performance sensors and communication equipment',
        benefits: ['Multi-spectral imaging', 'High-resolution cameras', 'Scientific instruments']
      },
      {
        icon: 'ri-rocket-line',
        title: 'Propulsion System',
        description: 'Electric propulsion for orbital maneuvers and station-keeping',
        benefits: ['Orbit maintenance', 'Collision avoidance', 'End-of-life disposal']
      },
      {
        icon: 'ri-time-line',
        title: 'Extended Mission Life',
        description: 'Designed for 7-10 year operational lifetime',
        benefits: ['Long-term services', 'Reduced replacement costs', 'Stable operations']
      }
    ]
  },
  
  'inertia-mega': {
    name: 'Inertia Mega',
    subtitle: 'Large-Scale Space Platform',
    description: 'Heavy-duty satellite platform with advanced propulsion systems and deep space exploration capabilities for ambitious interplanetary missions.',
    icon: 'ri-space-ship-line',
    category: 'Large Satellite Systems',
    price: 'Starting at ₹200,00,00,000',
    rating: 4.7,
    availability: 'Development phase - 2026 availability',
    
    contentSections: [
      {
        title: 'Deep Space Technology',
        content: 'Our Inertia Mega represents the pinnacle of large-scale satellite engineering, incorporating advanced propulsion systems and deep space exploration capabilities. With cutting-edge technology and extensive testing, this platform enables ambitious interplanetary missions.',
        type: 'content-image',
        image: 'assets/img/bock_automotive_img1.jpg'
      },
      {
        title: 'Interplanetary Mission Capabilities',
        content: 'Discover how Inertia Mega enables breakthrough interplanetary missions through advanced propulsion and deep space navigation. This comprehensive system provides reliable performance for Mars missions, asteroid exploration, and outer planet studies.',
        type: 'content-video',
        video: 'https://www.youtube.com/embed/B1R3dTdcpSU'
      },
      {
        title: 'Deep Space Testing Protocols',
        content: 'Watch comprehensive deep space testing procedures and system validation for Inertia Mega. This detailed video demonstrates our rigorous space qualification protocols, radiation testing, and performance validation for extreme space environments.',
        type: 'content-video',
        video: 'https://www.youtube.com/embed/FzCubvpzf84'
      },
      {
        title: 'Deep Space Technical Manual',
        content: 'Comprehensive technical specifications for Inertia Mega deep space platform. Access detailed documentation covering advanced propulsion systems, radiation shielding, deep space communication, and interplanetary mission architectures.',
        type: 'content-document',
        document: 'assets/documents/inertia-mega-deep-space-manual.pdf'
      },
      {
        title: 'Interplanetary Mission Design',
        content: 'Complete interplanetary mission planning for Inertia Mega including trajectory optimization, deep space navigation, planetary protection protocols, and long-duration mission operational procedures for space exploration.',
        type: 'content-document',
        document: 'assets/documents/inertia-mega-interplanetary-missions.pdf'
      },
      {
        title: 'Deep Space Safety Standards',
        content: 'Comprehensive safety protocols for Inertia Mega deep space operations. Includes planetary protection compliance, contamination control, deep space communication protocols, and emergency response procedures for interplanetary missions.',
        type: 'content-document',
        document: 'assets/documents/inertia-mega-deep-space-safety.pdf'
      },
      {
        title: 'Space Exploration Frontier',
        content: 'Inertia Mega is pushing the boundaries of human space exploration through advanced deep space technology. Our platform enables ambitious missions to Mars, asteroids, and beyond, contributing to scientific discovery and paving the way for future human settlement of the solar system.',
        type: 'content-only'
      }
    ],
    
    features: [
      {
        icon: 'ri-rocket-2-line',
        title: 'Deep Space Capability',
        description: 'Advanced propulsion for interplanetary missions',
        benefits: ['Mars missions', 'Asteroid exploration', 'Deep space science']
      },
      {
        icon: 'ri-database-2-line',
        title: 'Large Payload Capacity',
        description: 'Support for heavy scientific instruments and equipment',
        benefits: ['Multiple payloads', 'Research platforms', 'Space telescopes']
      },
      {
        icon: 'ri-shield-star-line',
        title: 'Enhanced Protection',
        description: 'Advanced shielding for deep space radiation environment',
        benefits: ['Radiation hardening', 'Micrometeorite protection', 'Long-duration missions']
      }
    ]
  },
  
  'momentum': {
    name: 'Momentum',
    subtitle: 'High-Performance Propulsion',
    description: 'Advanced propulsion system designed for efficient orbital transfers, station-keeping, and interplanetary missions with innovative fuel management technology.',
    icon: 'ri-rocket-line',
    category: 'Propulsion Systems',
    price: 'Starting at ₹50,00,00,000',
    rating: 4.8,
    availability: 'Available for integration',
    
    contentSections: [
      {
        title: 'Advanced Propulsion Technology',
        content: 'Our Momentum propulsion system represents revolutionary advancement in space propulsion technology, featuring high-efficiency engines and innovative fuel management. With precision engineering and extensive testing, this system delivers exceptional performance for complex space missions.',
        type: 'content-image',
        image: 'assets/img/bock_chain_img1.jpg'
      },
      {
        title: 'Propulsion System Operations',
        content: 'Discover how Momentum enables efficient orbital transfers and station-keeping through advanced propulsion technology. This comprehensive system provides variable thrust capabilities and fuel optimization for extended mission durations.',
        type: 'content-video',
        video: 'https://www.youtube.com/embed/wbSwFU6tY1c'
      },
      {
        title: 'Engine Testing & Validation',
        content: 'Watch comprehensive propulsion testing procedures and engine validation for Momentum. This detailed video demonstrates our rigorous engine testing protocols, thrust characterization, and performance validation for mission-critical applications.',
        type: 'content-video',
        video: 'https://www.youtube.com/embed/VBlIvghQTlI'
      },
      {
        title: 'Propulsion Technical Manual',
        content: 'Comprehensive technical specifications for Momentum propulsion system. Access detailed documentation covering engine performance characteristics, fuel systems, thrust vector control, and integration procedures for spacecraft applications.',
        type: 'content-document',
        document: 'assets/documents/momentum-propulsion-manual.pdf'
      },
      {
        title: 'Mission Integration Guide',
        content: 'Complete integration documentation for Momentum propulsion system including spacecraft integration procedures, fuel loading protocols, mission planning considerations, and operational procedures for various mission profiles.',
        type: 'content-document',
        document: 'assets/documents/momentum-integration-guide.pdf'
      },
      {
        title: 'Propulsion Safety Protocols',
        content: 'Comprehensive safety protocols for Momentum propulsion operations. Includes fuel handling procedures, engine safety systems, emergency shutdown protocols, and hazardous operations procedures for propulsion system operations.',
        type: 'content-document',
        document: 'assets/documents/momentum-safety-protocols.pdf'
      },
      {
        title: 'Propulsion Innovation Leadership',
        content: 'Momentum is revolutionizing space propulsion through advanced engine technology and fuel efficiency innovations. Our propulsion system enables cost-effective space missions, reducing fuel consumption while maximizing mission capability and operational flexibility.',
        type: 'content-only'
      }
    ],
    
    features: [
      {
        icon: 'ri-gas-station-line',
        title: 'Efficient Fuel Management',
        description: 'Advanced fuel systems with green propellants',
        benefits: ['High specific impulse', 'Environmentally friendly', 'Extended mission capability']
      },
      {
        icon: 'ri-speed-line',
        title: 'Variable Thrust',
        description: 'Adjustable thrust levels for precise maneuvers',
        benefits: ['Precision control', 'Fuel optimization', 'Mission flexibility']
      },
      {
        icon: 'ri-repeat-line',
        title: 'Reusable Design',
        description: 'Multiple restart capability for complex missions',
        benefits: ['Mission flexibility', 'Cost effectiveness', 'Operational efficiency']
      }
    ]
  },
  
  'zeyon-x90': {
    name: 'Zeyon X90',
    subtitle: 'AI-Powered Navigation System',
    description: 'Revolutionary navigation and guidance system with AI-powered autonomous capabilities for precision spacecraft maneuvering, landing operations, and formation flying.',
    icon: 'ri-radar-line',
    category: 'Navigation & Guidance',
    price: 'Starting at ₹15,00,00,000',
    rating: 4.9,
    availability: 'Available for immediate integration',
    
    contentSections: [
      {
        title: 'AI Navigation Technology',
        content: 'Our Zeyon X90 represents breakthrough AI-powered navigation technology, incorporating machine learning algorithms and autonomous decision-making capabilities. With advanced sensors and real-time processing, this system delivers precision navigation for complex space missions.',
        type: 'content-image',
        image: 'assets/img/bock_foods_img1.jpg'
      },
      {
        title: 'Autonomous Navigation Operations',
        content: 'Discover how Zeyon X90 enables autonomous spacecraft navigation through advanced AI algorithms and precision guidance. This comprehensive system provides real-time decision making, hazard avoidance, and formation flying capabilities.',
        type: 'content-video',
        video: 'https://www.youtube.com/embed/RK8xHq6dfAo'
      },
      {
        title: 'AI System Testing & Validation',
        content: 'Watch comprehensive AI navigation testing procedures and system validation for Zeyon X90. This detailed video demonstrates our rigorous AI testing protocols, simulation validation, and performance verification for autonomous operations.',
        type: 'content-video',
        video: 'https://www.youtube.com/embed/hFJHtdIGOJM'
      },
      {
        title: 'AI Navigation Technical Manual',
        content: 'Comprehensive technical specifications for Zeyon X90 AI navigation system. Access detailed documentation covering AI algorithms, sensor integration, autonomous decision-making processes, and spacecraft integration procedures.',
        type: 'content-document',
        document: 'assets/documents/zeyon-x90-ai-navigation-manual.pdf'
      },
      {
        title: 'Autonomous Mission Planning',
        content: 'Complete autonomous mission planning documentation for Zeyon X90 including AI behavior configuration, mission scenario planning, autonomous decision trees, and operational procedures for AI-guided spacecraft missions.',
        type: 'content-document',
        document: 'assets/documents/zeyon-x90-autonomous-missions.pdf'
      },
      {
        title: 'AI Safety & Reliability',
        content: 'Comprehensive safety protocols for Zeyon X90 AI navigation operations. Includes AI failsafe mechanisms, human oversight procedures, autonomous system validation, and safety-critical AI operation protocols.',
        type: 'content-document',
        document: 'assets/documents/zeyon-x90-ai-safety.pdf'
      },
      {
        title: 'AI Navigation Revolution',
        content: 'Zeyon X90 is transforming spacecraft navigation through artificial intelligence and autonomous systems. Our AI-powered platform enables unprecedented precision in spacecraft maneuvering, reducing human workload while increasing mission success rates and operational efficiency.',
        type: 'content-only'
      }
    ],
    
    features: [
      {
        icon: 'ri-brain-line',
        title: 'AI-Powered Autonomy',
        description: 'Machine learning algorithms for autonomous decision making',
        benefits: ['Autonomous operations', 'Adaptive behavior', 'Predictive navigation']
      },
      {
        icon: 'ri-crosshair-line',
        title: 'Precision Landing',
        description: 'Centimeter-accurate landing capabilities',
        benefits: ['Hazard avoidance', 'Precise targeting', 'Safe landings']
      },
      {
        icon: 'ri-group-line',
        title: 'Formation Flying',
        description: 'Coordinated multi-spacecraft operations',
        benefits: ['Constellation management', 'Collision avoidance', 'Synchronized missions']
      }
    ]
  },
  
  'launch-vehicle': {
    name: 'Launch Vehicle',
    subtitle: 'Reusable Launch System',
    description: 'Next-generation reusable launch vehicle capable of delivering payloads to various orbits with cost-effective operations and environmentally conscious design.',
    icon: 'ri-rocket-2-fill',
    category: 'Launch Systems',
    price: 'Launch Services: ₹50,00,00,000 per mission',
    rating: 4.6,
    availability: 'First launch scheduled for 2026',
    
    contentSections: [
      {
        title: 'Reusable Launch Technology',
        content: 'Our Launch Vehicle represents next-generation reusable rocket technology, featuring advanced recovery systems and cost-effective operations. With innovative engineering and comprehensive testing, this system delivers reliable access to space at reduced costs.',
        type: 'content-image',
        image: 'assets/img/bock_health_img1.jpg'
      },
      {
        title: 'Launch Operations & Recovery',
        content: 'Discover how our Launch Vehicle enables cost-effective space access through reusable technology and precision landing systems. This comprehensive system provides reliable payload delivery to various orbits with rapid turnaround capabilities.',
        type: 'content-video',
        video: 'https://www.youtube.com/embed/u0-pfzKbh2k'
      },
      {
        title: 'Rocket Testing & Validation',
        content: 'Watch comprehensive launch vehicle testing procedures and system validation. This detailed video demonstrates our rigorous rocket testing protocols, static fire tests, and flight validation for reliable launch operations.',
        type: 'content-video',
        video: 'https://www.youtube.com/embed/WxH4CAlhtiQ'
      },
      {
        title: 'Launch Vehicle Technical Manual',
        content: 'Comprehensive technical specifications for our reusable Launch Vehicle system. Access detailed documentation covering rocket performance characteristics, payload capabilities, launch procedures, and recovery operations.',
        type: 'content-document',
        document: 'assets/documents/launch-vehicle-technical-manual.pdf'
      },
      {
        title: 'Launch Mission Planning',
        content: 'Complete launch mission planning documentation including trajectory optimization, payload integration procedures, launch window analysis, and mission-specific operational procedures for various orbital destinations.',
        type: 'content-document',
        document: 'assets/documents/launch-vehicle-mission-planning.pdf'
      },
      {
        title: 'Launch Safety Protocols',
        content: 'Comprehensive safety protocols for Launch Vehicle operations. Includes range safety procedures, payload safety requirements, launch abort systems, and emergency response protocols for safe launch operations.',
        type: 'content-document',
        document: 'assets/documents/launch-vehicle-safety-protocols.pdf'
      },
      {
        title: 'Space Access Revolution',
        content: 'Our Launch Vehicle is revolutionizing access to space through reusable rocket technology and cost-effective operations. This platform democratizes space access, enabling more frequent missions while reducing environmental impact through sustainable launch practices.',
        type: 'content-only'
      }
    ],
    
    features: [
      {
        icon: 'ri-recycle-line',
        title: 'Reusable Technology',
        description: 'Multiple-use rocket stages for cost reduction',
        benefits: ['10x cost reduction', 'Rapid turnaround', 'Sustainable access']
      },
      {
        icon: 'ri-weight-line',
        title: 'Flexible Payload',
        description: 'Adaptable to various payload sizes and orbits',
        benefits: ['LEO to GEO capability', '1-10 ton payload', 'Multiple deployment']
      },
      {
        icon: 'ri-leaf-line',
        title: 'Green Propulsion',
        description: 'Environmentally friendly propellant systems',
        benefits: ['Reduced emissions', 'Clean combustion', 'Sustainable operations']
      }
    ]
  }
};
