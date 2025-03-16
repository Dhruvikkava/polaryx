export const email = "polaryx.international2024@gmail.com";

export const productSubMenu = [
  { name: "Water treatment", path: "/products/water-treatment" },
  { name: "Cosmetics & Personal Care", path: "/products/cosmetic" },
  { name: "Purifier Agent", path: "/products/purifier-agent" },
  { name: "Food & Beverages", path: "/products/food-beverages" },
  { name: "Solvents", path: "/products/solvents" },
  { name: "Agro Chemicals", path: "/products/agro-chemical" },
];

export const productData = [
  {
    id: 1,
    heading: "Hydrochloric Acid",
    description:
      "Hydrochloric Acid (HCL) is a strong, highly corrosive mineral acid used in industrial processes such as pH regulation, metal refining, and chemical synthesis. It is widely utilized in food processing, pharmaceuticals, and cleaning applications.",
    page: ["Water Treatment"],
    chemicalData: {
      name: "Hydrochloric Acid",
      formula: "HCl",
      molarMass: "36.46 g/mol",
      casNumber: "7647-01-0",
      appearance: "Colorless to light yellow liquid",
      odor: "Pungent, irritating",
      solubility: "Highly soluble in water",
      pH: "<1 (Strongly acidic)",
      concentration: "Typically available in 30%–38% solutions",
      applications: {
        industrial: [
          "Steel Pickling: Removes rust and scale from metals.",
          "Water Treatment: pH adjustment and neutralization.",
          "Chemical Manufacturing: Used in the production of chlorides, fertilizers, and dyes.",
          "Oil & Gas Industry: Acidizing of oil wells to enhance extraction.",
        ],
        food: [
          "pH Regulator: Adjusts acidity in food processing.",
          "Gelatin Production: Used in collagen extraction.",
          "Beverage Industry: Ingredient in soft drinks and syrups.",
        ],
        pharmaceutical: [
          "API Production: Used in the synthesis of active pharmaceutical ingredients.",
          "Laboratory Reagent: Essential for chemical analysis.",
        ],
        personalCare: [
          "pH Adjustment: Used in skincare and haircare formulations.",
        ],
      },
      properties: [
        {
          property: "Boiling Point",
          value: "-85°C (anhydrous), 108.6°C (37%)",
        },
        { property: "Melting Point", value: "-114.2°C (anhydrous)" },
        { property: "Density", value: "1.18 g/cm³ (37% solution)" },
        { property: "Vapor Pressure", value: "190 kPa at 25°C" },
        { property: "Flash Point", value: "Non-flammable" },
        {
          property: "Corrosiveness",
          value: "Highly corrosive to metals & skin",
        },
      ],
      packaging: [
        "HDPE Drums (35kg, 50kg)",
        "IBC Tanks (1000L)",
        "Bulk Tankers",
      ],
      storage: [
        "Store in a cool, well-ventilated area away from direct sunlight.",
        "Use acid-resistant containers (PVC, HDPE, or glass).",
        "Keep away from alkalis, metals, and oxidizing agents.",
      ],
      safety: {
        hazards: [
          "Highly corrosive to skin and eyes.",
          "Produces toxic fumes when in contact with metals.",
          "Inhalation may cause respiratory irritation.",
        ],
        precautions: [
          "Use protective gloves, goggles, and acid-resistant clothing.",
          "Work in well-ventilated areas or fume hoods.",
          "In case of contact, rinse immediately with water and seek medical attention.",
        ],
      },
    },
  },
  {
    id: 2,
    heading: "Sulfuric Acid",
    description:
      "Sulfuric Acid (H₂SO₄) is an essential industrial acid for manufacturing fertilizers, chemicals, and batteries. It plays a key role in petroleum refining, metal processing, and wastewater treatment, with strong dehydrating properties.",
    page: ["Water Treatment", "Purifier Agent"],
    chemicalData: {
      name: "Sulfuric Acid",
      formula: "H₂SO₄",
      molarMass: "98.08 g/mol",
      casNumber: "7664-93-9",
      appearance: "Colorless to slightly yellow viscous liquid",
      odor: "Odorless",
      solubility: "Highly soluble in water, exothermic reaction",
      pH: "<1 (Highly acidic)",
      concentration: "Commonly available in 98%, 96%, 70%, and 50% solutions",
      applications: {
        industrial: [
          "Used in the production of fertilizers (Phosphoric Acid, Ammonium Sulfate)",
          "Manufacturing of chemicals such as hydrochloric acid, nitric acid, and sulfate salts",
          "Petroleum refining for alkylation processes",
          "Battery acid in lead-acid batteries",
          "Used in steel pickling to remove rust and oxidation",
        ],
        pharmaceutical: [
          "Used in API synthesis",
          "pH adjustment in drug formulation",
          "Excipients in some medications",
        ],
        waterTreatment: [
          "Neutralization of alkaline water",
          "pH balancing in wastewater treatment",
        ],
        foodIndustry: [
          "Used as an acidity regulator (E513) in food processing",
        ],
        laboratory: ["Common reagent for chemical analysis and titrations"],
      },
      properties: [
        { property: "Boiling Point", value: "337°C (639°F)" },
        { property: "Melting Point", value: "10°C (50°F)" },
        { property: "Density", value: "1.84 g/cm³ (at 98% concentration)" },
        { property: "Vapor Pressure", value: "<0.3 mmHg at 25°C" },
        { property: "Flash Point", value: "Non-flammable" },
        {
          property: "Corrosiveness",
          value: "Highly corrosive to metals, skin, and eyes",
        },
      ],
      packaging: [
        "HDPE Drums (35kg, 50kg)",
        "IBC Tanks (1000L)",
        "Bulk Tankers",
        "Glass or acid-resistant plastic containers",
      ],
      storage: [
        "Store in cool, dry, well-ventilated areas away from direct sunlight",
        "Use acid-resistant materials for storage tanks (PVC, glass, or stainless steel)",
        "Keep away from water, organic materials, and bases",
        "Ensure proper ventilation to avoid accumulation of corrosive vapors",
      ],
      safety: {
        hazards: [
          "Highly corrosive to skin, eyes, and respiratory system",
          "Reacts violently with water, releasing heat",
          "Can produce toxic sulfur oxides when heated",
        ],
        precautions: [
          "Wear protective gloves, goggles, and acid-resistant clothing",
          "Handle with care, adding acid to water (never water to acid)",
          "Use in a well-ventilated area or fume hood",
          "In case of contact, rinse immediately with plenty of water and seek medical attention",
        ],
      },
    },
  },
  {
    id: 3,
    heading: "Chlorine Dioxide",
    description:
      "Chlorine Dioxide (ClO₂) is a powerful disinfectant and oxidizing agent widely used in water treatment, food sanitation, and industrial bleaching. It eliminates bacteria, viruses, and biofilms without harmful byproducts.",
    page: ["Water Treatment", "Purifier Agent"],
    chemicalData: {
      name: "Chlorine Dioxide",
      formula: "ClO₂",
      molarMass: "67.45 g/mol",
      casNumber: "10049-04-4",
      appearance: "Yellow to reddish-yellow gas or greenish-yellow liquid",
      odor: "Chlorine-like, pungent",
      solubility: "Soluble in water, reacts to form chlorous and chloric acid",
      pH: "Dependent on solution concentration, typically acidic",
      concentration: "Commonly available in 0.2% to 10% solutions",
      applications: {
        waterTreatment: [
          "Used as a disinfectant in municipal and industrial water treatment",
          "Removes biofilm, bacteria, viruses, and protozoa",
          "Oxidizes iron, manganese, and sulfides in water",
        ],
        foodIndustry: [
          "Used for sanitizing food contact surfaces",
          "Approved for washing fruits and vegetables to reduce microbial contamination",
        ],
        healthcare: [
          "Sterilization of medical instruments and environments",
          "Air disinfection in hospitals",
        ],
        pulpAndPaperIndustry: [
          "Used for bleaching pulp in paper manufacturing",
        ],
        industrialProcesses: [
          "Textile bleaching",
          "Oil and gas applications for biofouling control",
        ],
      },
      properties: [
        {
          property: "Boiling Point",
          value: "11°C (52°F) under standard pressure",
        },
        { property: "Melting Point", value: "-59°C (-74°F)" },
        { property: "Density", value: "3.09 g/L (gas at 0°C)" },
        { property: "Vapor Pressure", value: "74 mmHg at 25°C" },
        {
          property: "Flash Point",
          value: "Non-flammable but can decompose explosively",
        },
        {
          property: "Corrosiveness",
          value: "Highly reactive and can corrode metals",
        },
      ],
      packaging: [
        "Stored as a dissolved gas in water solutions",
        "Available in on-site generation systems due to instability",
      ],
      storage: [
        "Stored in well-ventilated areas, away from heat and sunlight",
        "Avoid contact with organic materials, reducing agents, and flammable substances",
        "Stored in controlled environments due to instability in concentrated form",
      ],
      safety: {
        hazards: [
          "Highly reactive and explosive in concentrated form",
          "Strong oxidizer, can cause severe burns and respiratory irritation",
          "Decomposes into toxic chlorine gas under heat or UV exposure",
        ],
        precautions: [
          "Use in well-ventilated areas or fume hoods",
          "Wear protective gloves, goggles, and clothing",
          "Avoid mixing with organic materials or reducing agents",
          "In case of inhalation, move to fresh air immediately and seek medical attention",
        ],
      },
    },
  },
  {
    id: 4,
    heading: "Ferric Chloride",
    description:
      "Ferric Chloride (FeCl₃) is an effective coagulant for water treatment, removing impurities and suspended solids. It is also used in PCB etching, metal surface treatment, and as a catalyst in chemical reactions.",
    page: ["Water Treatment", "Purifier Agent"],
    chemicalData: {
      name: "Ferric Chloride",
      formula: "FeCl₃",
      molarMass: "162.2 g/mol",
      casNumber: "7705-08-0",
      appearance:
        "Dark brown to black crystalline solid or yellow-brown solution",
      odor: "Slight hydrochloric acid-like odor",
      solubility: "Highly soluble in water, ethanol, and methanol",
      pH: "Highly acidic (<2 in aqueous solution)",
      concentration:
        "Available in 40% and 45% aqueous solutions or solid anhydrous form",
      applications: {
        waterTreatment: [
          "Used as a coagulant in wastewater and drinking water treatment",
          "Removes suspended particles, phosphorus, and heavy metals",
        ],
        industrialProcesses: [
          "Etching agent in PCB manufacturing and metal surface treatment",
          "Used in sewage treatment to remove hydrogen sulfide",
        ],
        chemicalManufacturing: [
          "Precursor in the production of iron compounds",
          "Used in organic synthesis as a catalyst",
        ],
        medicine: ["Historically used in antiseptics and astringents"],
      },
      properties: [
        { property: "Boiling Point", value: "315°C (599°F) (Decomposes)" },
        { property: "Melting Point", value: "307°C (584°F)" },
        {
          property: "Density",
          value: "2.90 g/cm³ (anhydrous), 1.4 g/cm³ (40% solution)",
        },
        { property: "Vapor Pressure", value: "Negligible at room temperature" },
        {
          property: "Corrosiveness",
          value: "Highly corrosive to metals and skin",
        },
      ],
      packaging: [
        "HDPE Drums (25kg, 50kg)",
        "IBC Tanks (1000L)",
        "Bulk Tankers",
      ],
      storage: [
        "Store in cool, dry, well-ventilated areas away from moisture",
        "Avoid contact with metals to prevent corrosion",
        "Keep in tightly sealed containers to prevent hydrolysis",
      ],
      safety: {
        hazards: [
          "Highly corrosive to skin, eyes, and respiratory system",
          "Reacts with water to form hydrochloric acid",
          "Can cause severe irritation and burns",
        ],
        precautions: [
          "Use protective gloves, goggles, and clothing",
          "Ensure proper ventilation when handling",
          "Avoid direct contact with metals and organic materials",
          "In case of contact, rinse thoroughly with water and seek medical attention",
        ],
      },
    },
  },
  {
    id: 5,
    heading: "Hydrogen Peroxide",
    description:
      "Hydrogen Peroxide (H₂O₂) is a versatile oxidizing agent used for disinfection, bleaching, and industrial processes. Its strong antimicrobial properties make it valuable in healthcare, water treatment, and textiles.",
    page: ["Water Treatment", "Purifier Agent"],
    chemicalData: {
      name: "Hydrogen Peroxide",
      formula: "H₂O₂",
      molarMass: "34.01 g/mol",
      casNumber: "7722-84-1",
      appearance: "Colorless liquid",
      odor: "Slightly sharp, pungent odor",
      solubility: "Completely miscible in water",
      pH: "Acidic (typically between 3.5 - 6.5)",
      concentration:
        "Common concentrations: 3% (household), 6-12% (cosmetic/medical), 30-50% (industrial), 90%+ (rocket fuel)",
      applications: {
        waterTreatment: [
          "Used for disinfection and oxidation in water and wastewater treatment",
          "Removes organic and inorganic contaminants",
          "Controls algae and bacterial growth",
        ],
        industrialProcesses: [
          "Bleaching agent in paper, textile, and pulp industries",
          "Used in semiconductor and electronics cleaning",
          "Rocket propellant in high concentrations",
        ],
        healthcare: [
          "Antiseptic for wound cleaning and oral care",
          "Used in pharmaceutical formulations and sterilization",
        ],
        foodIndustry: [
          "Food-grade hydrogen peroxide used for packaging sterilization",
          "Approved for bleaching certain food products",
        ],
        agriculture: [
          "Disinfectant for hydroponics and irrigation systems",
          "Used to control bacterial and fungal infections in plants",
        ],
      },
      properties: [
        { property: "Boiling Point", value: "150.2°C (302°F) (decomposes)" },
        { property: "Melting Point", value: "-0.43°C (31.23°F)" },
        {
          property: "Density",
          value: "1.45 g/cm³ (pure), 1.11 g/cm³ (30% solution)",
        },
        { property: "Vapor Pressure", value: "5 mmHg at 30°C" },
        {
          property: "Oxidizing Strength",
          value: "Strong oxidizer, decomposes into oxygen and water",
        },
      ],
      packaging: [
        "Available in 1L, 5L, 25L, and 200L HDPE drums",
        "IBC tanks (1000L)",
        "Bulk tankers for industrial supply",
      ],
      storage: [
        "Store in a cool, dry, and well-ventilated area",
        "Keep away from heat, direct sunlight, and combustible materials",
        "Use only in corrosion-resistant containers (plastic or stainless steel)",
        "Avoid contamination with organic materials or metals",
      ],
      safety: {
        hazards: [
          "Strong oxidizer, may cause combustion when in contact with organic materials",
          "Causes severe skin and eye irritation in concentrated form",
          "Can decompose explosively under high temperatures or pressure",
        ],
        precautions: [
          "Wear protective gloves, goggles, and face shields when handling",
          "Use in a well-ventilated area to avoid inhalation of vapors",
          "Keep away from flammable materials and store in appropriate containers",
          "In case of contact, rinse thoroughly with water and seek medical help if needed",
        ],
      },
    },
  },
  {
    id: 6,
    heading: "Sodium Carbonate",
    description:
      "Sodium Carbonate (Na₂CO₃), or soda ash, is used in glass manufacturing, water treatment, and detergents. It acts as a pH regulator, softens water, and enhances cleaning efficiency.",
    page: ["Water Treatment"],
    chemicalData: {
      name: "Sodium Carbonate",
      formula: "Na₂CO₃",
      molarMass: "105.99 g/mol",
      casNumber: "497-19-8",
      appearance: "White crystalline powder or granular solid",
      odor: "Odorless",
      solubility: "Highly soluble in water, insoluble in ethanol",
      pH: "11.5 (1% solution)",
      concentration:
        "Available in various grades (light, dense, and anhydrous forms)",
      applications: {
        waterTreatment: [
          "Used to adjust pH levels in water treatment plants",
          "Softens hard water by precipitating calcium and magnesium ions",
        ],
        industrialProcesses: [
          "Key ingredient in glass manufacturing",
          "Used in detergent and soap production",
          "Acts as a pH regulator in various chemical processes",
        ],
        foodIndustry: [
          "Used as a food additive (E500) for leavening baked goods",
          "Regulates acidity in food processing",
        ],
        pharmaceuticals: [
          "Utilized as an antacid and pH buffer in medical formulations",
        ],
        agriculture: [
          "Used in soil treatment to neutralize acidic soils",
          "Helps in improving crop yield by regulating soil pH",
        ],
      },
      properties: [
        { property: "Boiling Point", value: "Decomposes at 1600°C (2912°F)" },
        { property: "Melting Point", value: "851°C (1564°F)" },
        { property: "Density", value: "2.54 g/cm³ (anhydrous)" },
        { property: "Solubility in Water", value: "33.2 g/100 mL at 20°C" },
        { property: "Hygroscopic", value: "Absorbs moisture from air" },
      ],
      packaging: [
        "Available in 25kg, 50kg HDPE bags with liners",
        "Bulk shipments in 1000kg jumbo bags",
        "Custom packaging for industrial applications",
      ],
      storage: [
        "Store in a cool, dry, and well-ventilated area",
        "Keep away from moisture to prevent clumping",
        "Avoid exposure to acids and incompatible materials",
      ],
      safety: {
        hazards: [
          "May cause eye and skin irritation",
          "Can be harmful if ingested in large quantities",
          "Produces carbon dioxide when reacting with acids",
        ],
        precautions: [
          "Use protective gloves and goggles when handling",
          "Ensure proper ventilation in storage and handling areas",
          "In case of contact, rinse with plenty of water",
        ],
      },
    },
  },
  {
    id: 7,
    heading: "Sodium Hydroxide",
    description:
      "Sodium Hydroxide (NaOH), or caustic soda, is a strong alkaline compound used in soap making, paper production, and chemical manufacturing. It is essential for pH regulation, water treatment, and petroleum refining.",
    page: ["Water Treatment"],
    chemicalData: {
      name: "Sodium Hydroxide",
      formula: "NaOH",
      molarMass: "39.997 g/mol",
      casNumber: "1310-73-2",
      appearance:
        "White solid (flakes, pellets, or granules); colorless in solution",
      odor: "Odorless",
      solubility:
        "Highly soluble in water, ethanol, and methanol; insoluble in ether",
      pH: "13-14 (strongly alkaline in solution)",
      concentration:
        "Available in various concentrations: 10%, 25%, 50% (liquid form), and solid pellets or flakes",
      applications: {
        waterTreatment: [
          "Used for pH adjustment in water and wastewater treatment",
          "Neutralizes acidic waste streams",
          "Precipitates heavy metals in industrial effluents",
        ],
        industrialProcesses: [
          "Essential in paper and pulp manufacturing for lignin removal",
          "Used in petroleum refining for sulfur removal",
          "Key reagent in soap and detergent production",
        ],
        foodIndustry: [
          "Food additive (E524) used in processing olives and cocoa",
          "Used in cleaning and sanitation in food processing plants",
        ],
        pharmaceuticals: [
          "Used as an excipient in pharmaceutical formulations",
          "Acts as a pH regulator in medicines",
        ],
        textiles: [
          "Used in fabric processing and dyeing",
          "Helps in mercerizing cotton to improve strength and shine",
        ],
      },
      properties: [
        { property: "Boiling Point", value: "1388°C (2530°F)" },
        { property: "Melting Point", value: "318°C (604°F)" },
        { property: "Density", value: "2.13 g/cm³ (solid)" },
        { property: "Solubility in Water", value: "111 g/100 mL at 20°C" },
        {
          property: "Highly Corrosive",
          value: "Reacts violently with acids and water",
        },
      ],
      packaging: [
        "Available in 25kg, 50kg HDPE bags (flakes, pellets)",
        "Liquid form in 50L, 200L drums and IBC tanks",
        "Bulk supply in tankers for industrial use",
      ],
      storage: [
        "Store in a cool, dry, and well-ventilated area",
        "Keep away from acids, organic materials, and moisture",
        "Use corrosion-resistant containers (plastic or stainless steel)",
      ],
      safety: {
        hazards: [
          "Highly corrosive to skin, eyes, and respiratory system",
          "Can cause severe burns and permanent damage",
          "Reacts exothermically with water, releasing heat",
        ],
        precautions: [
          "Wear protective gloves, goggles, and face shields when handling",
          "Ensure proper ventilation to avoid inhaling fumes",
          "In case of contact, rinse immediately with plenty of water",
          "Use only in designated chemical handling areas",
        ],
      },
    },
  },
  {
    id: 8,
    heading: "Phosphoric Acid",
    description:
      "Phosphoric Acid (H₃PO₄) is a versatile acid widely used in fertilizers, food additives, and industrial cleaning agents. It plays a key role in rust removal, metal treatment, and beverage production, especially in soft drinks. Due to its acidic nature, it must be handled with care in industrial applications.",
    page: ["Water Treatment", "Food & Beverages"],
    chemicalData: {
      name: "Phosphoric Acid",
      formula: "H₃PO₄",
      molarMass: "97.994 g/mol",
      casNumber: "7664-38-2",
      appearance:
        "Colorless, odorless, viscous liquid or transparent crystalline solid",
      odor: "Odorless",
      solubility: "Highly soluble in water, ethanol, and methanol",
      pH: "1.5 (1% solution)",
      concentration:
        "Available in various concentrations: 75%, 85% (industrial & food-grade)",
      applications: {
        waterTreatment: [
          "Used for pH adjustment and corrosion control in water systems",
          "Prevents scale formation in boilers and cooling towers",
        ],
        industrialProcesses: [
          "Used in metal cleaning and rust removal",
          "Key ingredient in fertilizers (phosphate-based)",
          "Essential in detergent and soap manufacturing",
        ],
        foodIndustry: [
          "Food additive (E338) for acidity regulation in beverages",
          "Used in soft drinks (cola), jams, and dairy processing",
        ],
        pharmaceuticals: [
          "Used as an acidulant in pharmaceutical formulations",
          "Plays a role in dental care products (etching solution for enamel bonding)",
        ],
        agriculture: [
          "Used as a fertilizer in the form of phosphates",
          "Improves soil nutrient content for crop growth",
        ],
      },
      properties: [
        {
          property: "Boiling Point",
          value: "158°C (316°F) at 85% concentration",
        },
        { property: "Melting Point", value: "42.4°C (108°F) (pure form)" },
        { property: "Density", value: "1.88 g/cm³ (85% solution)" },
        {
          property: "Solubility in Water",
          value: "Miscible in all proportions",
        },
        {
          property: "Corrosiveness",
          value: "Highly corrosive to metals and tissues",
        },
      ],
      packaging: [
        "Available in 35kg, 50kg, 250kg HDPE drums",
        "Bulk supply in IBC tanks and tankers",
        "Custom packaging for industrial and food-grade applications",
      ],
      storage: [
        "Store in a cool, dry, well-ventilated area",
        "Keep in corrosion-resistant containers (plastic, stainless steel)",
        "Avoid contact with strong bases and metals",
      ],
      safety: {
        hazards: [
          "Highly corrosive to skin, eyes, and respiratory system",
          "Can cause severe burns and irritation",
          "Reacts violently with strong bases and certain metals",
        ],
        precautions: [
          "Wear protective gloves, goggles, and chemical-resistant clothing",
          "Ensure proper ventilation during handling",
          "In case of contact, rinse immediately with plenty of water",
          "Use only in designated chemical storage and handling areas",
        ],
      },
    },
  },
  {
    id: 9,
    heading: "Poly Aluminum Chloride",
    description:
      "Poly Aluminum Chloride (PAC) is an efficient coagulant used in water and wastewater treatment for impurity removal and turbidity reduction. It is widely applied in industrial processes, paper manufacturing, and municipal water purification. Known for its high efficiency and low sludge production, PAC improves filtration and clarifies water effectively.",
    page: ["Water Treatment"],
    chemicalData: {
      name: "Poly Aluminum Chloride",
      formula: "Aln(OH)mCl(3n-m)",
      molarMass: "Varies depending on composition",
      casNumber: "1327-41-9",
      appearance: "Yellow to light yellow powder or liquid",
      odor: "Odorless",
      solubility: "Highly soluble in water",
      pH: "3.5 - 5.0 (1% solution)",
      concentration:
        "Available in various grades: 10%, 18%, 28%, 30% (liquid) or solid powder",
      applications: {
        waterTreatment: [
          "Used as a coagulant for drinking water purification",
          "Removes suspended particles, turbidity, and organic matter",
          "Efficient in wastewater and industrial effluent treatment",
        ],
        paperIndustry: [
          "Enhances paper sizing and retention",
          "Used as a flocculant in pulp processing",
        ],
        textiles: [
          "Used for dyeing and finishing processes",
          "Improves color fastness and reduces wastewater pollutants",
        ],
        "oil and gas": [
          "Used in oil refining processes for water clarification",
          "Aids in separation of oil-water emulsions",
        ],
        foodIndustry: [
          "Used in food processing as a clarifying agent",
          "Helps in sugar refining and beverage production",
        ],
      },
      properties: [
        {
          property: "Boiling Point",
          value: "Not applicable (decomposes at high temperature)",
        },
        {
          property: "Melting Point",
          value: "Not applicable (amorphous solid or liquid)",
        },
        { property: "Density", value: "1.2 - 1.4 g/cm³ (liquid form)" },
        { property: "Solubility in Water", value: "Completely soluble" },
        {
          property: "Coagulation Efficiency",
          value: "High, even at low dosages",
        },
      ],
      packaging: [
        "Available in 25kg bags (powder form)",
        "Liquid form in 200L drums, IBC tanks, and bulk tankers",
        "Customized packaging for specific industrial needs",
      ],
      storage: [
        "Store in a cool, dry, well-ventilated area",
        "Keep away from strong acids and bases",
        "Avoid contact with moisture to prevent premature hydrolysis",
      ],
      safety: {
        hazards: [
          "Irritant to eyes and skin",
          "Can cause respiratory discomfort if inhaled in powder form",
          "Reacts with strong acids and bases",
        ],
        precautions: [
          "Wear protective gloves, goggles, and face mask during handling",
          "Ensure proper ventilation in storage and usage areas",
          "In case of contact, rinse immediately with plenty of water",
          "Use in designated chemical handling areas",
        ],
      },
    },
  },
  {
    id: 10,
    heading: "Potassium Permanganate",
    description:
      "Potassium Permanganate (KMnO₄) is a strong oxidizing agent used in water treatment, disinfection, and odor control. It is widely applied in medical treatments, wastewater purification, and chemical synthesis.",
    page: ["Water Treatment", "Purifier Agent"],
    chemicalData: {
      name: "Potassium Permanganate",
      formula: "KMnO₄",
      molarMass: "158.034 g/mol",
      casNumber: "7722-64-7",
      appearance: "Dark purple or almost black crystalline solid",
      odor: "Odorless",
      solubility: "Soluble in water, slightly soluble in methanol and acetone",
      pH: "Neutral to slightly alkaline (1% solution pH ~7.2-9.2)",
      concentration: "Available in various grades: 97%-99% purity",
      applications: {
        waterTreatment: [
          "Used for disinfection and oxidation of contaminants",
          "Removes iron, manganese, and hydrogen sulfide from water",
          "Controls taste and odor in drinking water",
        ],
        medicalUses: [
          "Used as an antiseptic and disinfectant for wound treatment",
          "Diluted solutions used for skin conditions like dermatitis and fungal infections",
        ],
        industrialProcesses: [
          "Used in metal cleaning and etching processes",
          "Oxidizing agent in organic synthesis and pharmaceuticals",
        ],
        agriculture: [
          "Used as a disinfectant for seeds and soil treatment",
          "Controls fungal infections in crops and plants",
        ],
        textiles: [
          "Used in bleaching and dyeing processes",
          "Color stripping agent in fabric treatment",
        ],
        foodIndustry: [
          "Used as an antimicrobial in food processing (limited applications)",
          "Oxidizing agent in sugar refining",
        ],
      },
      properties: [
        {
          property: "Boiling Point",
          value: "Decomposes at high temperature (>240°C)",
        },
        { property: "Melting Point", value: "240°C (464°F) (decomposes)" },
        { property: "Density", value: "2.7 g/cm³" },
        { property: "Solubility in Water", value: "6.38 g/100 mL at 20°C" },
        {
          property: "Oxidizing Strength",
          value:
            "Strong oxidizer, reacts with organic materials and reducing agents",
        },
      ],
      packaging: [
        "Available in 25kg, 50kg HDPE drums (solid form)",
        "Bulk supply in fiber drums and plastic-lined bags",
        "Custom packaging for pharmaceutical and industrial needs",
      ],
      storage: [
        "Store in a cool, dry, well-ventilated area",
        "Keep away from combustible materials, reducing agents, and organic substances",
        "Avoid moisture contact to prevent clumping and degradation",
      ],
      safety: {
        hazards: [
          "Strong oxidizer, can cause fire in contact with organic materials",
          "Causes skin and eye irritation",
          "Harmful if swallowed or inhaled",
        ],
        precautions: [
          "Wear protective gloves, goggles, and a face mask during handling",
          "Keep away from heat, sparks, and combustible materials",
          "Handle with care to prevent accidental spills and dust formation",
          "In case of contact, rinse immediately with plenty of water",
        ],
      },
    },
  },
  {
    id: 11,
    heading: "Sodium Lauryl Sulfate",
    description:
      "Sodium Lauryl Sulfate (SLS) is a powerful surfactant commonly used in shampoos, toothpaste, and cleaning products for its foaming and cleansing properties. It effectively removes oils and dirt, making it a key ingredient in personal care and industrial cleaners.",
    page: ["Cosmetic"],
    chemicalData: {
      name: "Sodium Lauryl Sulfate",
      formula: "C12H25NaO4S",
      molarMass: "288.38 g/mol",
      casNumber: "151-21-3",
      appearance: "White or off-white crystalline powder or solid",
      odor: "Slight characteristic odor",
      solubility: "Highly soluble in water, soluble in ethanol",
      pH: "7.5 - 9.5 (1% aqueous solution)",
      concentration:
        "Available in 70%-95% purity (solid), 25%-30% purity (liquid solution)",
      applications: {
        personalCare: [
          "Used as a surfactant in shampoos, body washes, and facial cleansers",
          "Foaming agent in toothpaste and mouthwashes",
        ],
        householdCleaning: [
          "Key ingredient in detergents, soaps, and dishwashing liquids",
          "Enhances cleaning power by emulsifying oils and grease",
        ],
        pharmaceuticals: [
          "Used as an emulsifier and solubilizing agent in topical and oral medications",
          "Enhances drug absorption in pharmaceutical formulations",
        ],
        industrialUses: [
          "Used in textile and leather processing as a wetting and foaming agent",
          "Component in emulsions and adhesives",
        ],
        foodIndustry: [
          "Used as an emulsifier and thickener in certain food and beverage formulations (approved in limited quantities)",
        ],
      },
      properties: [
        { property: "Boiling Point", value: "Decomposes before boiling" },
        { property: "Melting Point", value: "206 - 209°C" },
        { property: "Density", value: "1.1 - 1.2 g/cm³ (solid form)" },
        {
          property: "Foaming Ability",
          value: "High foaming, even in hard water",
        },
        {
          property: "Surface Tension Reduction",
          value:
            "Effective in reducing water surface tension for better cleaning",
        },
      ],
      packaging: [
        "Available in 25kg, 50kg HDPE bags (solid form)",
        "Liquid solutions available in 200L drums and bulk containers",
        "Customized packaging available for specific industry needs",
      ],
      storage: [
        "Store in a cool, dry place away from moisture and direct sunlight",
        "Keep tightly closed to prevent clumping in solid form",
        "Avoid exposure to strong acids or oxidizers to maintain stability",
      ],
      safety: {
        hazards: [
          "Can cause skin and eye irritation in high concentrations",
          "Inhalation of powder may cause respiratory discomfort",
          "Mild toxicity if ingested in large amounts",
        ],
        precautions: [
          "Use gloves and eye protection when handling concentrated forms",
          "Ensure proper ventilation when working with powdered SLS",
          "In case of skin contact, rinse thoroughly with water",
          "Avoid ingestion and prolonged exposure to high concentrations",
        ],
      },
    },
  },
  {
    id: 12,
    heading: "Sodium Laureth Sulfate",
    description:
      "Sodium Laureth Sulfate (SLES) is a mild surfactant used in shampoos, body washes, and cleaning products for its excellent foaming and cleansing abilities. It is derived from Sodium Lauryl Sulfate (SLS) but undergoes an additional ethoxylation process, making it less irritating to the skin.",
    page: ["Cosmetic"],
    chemicalData: {
      name: "Sodium Laureth Sulfate",
      formula: "C12H25(OCH2CH2)nOSO3Na",
      molarMass: "Varies (depends on ethoxylation level)",
      casNumber: "9004-82-4",
      appearance: "Clear to slightly yellow liquid or white powder",
      odor: "Mild or odorless",
      solubility: "Soluble in water",
      pH: "5.5 - 7.5 (aqueous solution)",
      concentration: "Varies based on formulation (typically 25-70%)",
      applications: {
        personalCare: [
          "Used in shampoos for foaming and cleansing",
          "Common in body washes and liquid soaps",
          "Found in toothpaste for mild cleansing",
        ],
        cleaning: [
          "Used in household detergents for surfactant properties",
          "Found in industrial cleaners for emulsifying grease",
        ],
        cosmetics: [
          "Used in facial cleansers for gentle cleansing",
          "Helps improve texture and stability in formulations",
        ],
      },
      properties: [
        { property: "Foaming Ability", value: "Excellent" },
        { property: "Cleansing Strength", value: "Effective but mild" },
        { property: "Biodegradability", value: "Yes, readily biodegradable" },
        { property: "Water Solubility", value: "Highly soluble" },
        {
          property: "Irritation Potential",
          value: "Lower than Sodium Lauryl Sulfate (SLS)",
        },
      ],
      packaging: ["Available in drums, IBC tanks, and bulk containers"],
      storage: [
        "Store in a cool, dry place away from direct sunlight",
        "Keep containers tightly closed to avoid contamination",
      ],
      safety: {
        hazards: [
          "May cause mild eye and skin irritation",
          "Not considered highly toxic",
        ],
        precautions: [
          "Use gloves and eye protection when handling",
          "Avoid prolonged skin contact",
          "Rinse thoroughly with water if it comes into contact with eyes",
        ],
      },
    },
  },
  {
    id: 13,
    heading: "Cocamidopropyl Betaine",
    description:
      "Cocamidopropyl Betaine (CAPB) is a mild surfactant derived from coconut oil, commonly used in shampoos, body washes, and facial cleansers. It enhances foam, improves cleansing, and reduces irritation in personal care products.",
    page: ["Cosmetic"],
    chemicalData: {
      name: "Cocamidopropyl Betaine",
      formula: "C19H38N2O3",
      molarMass: "342.52 g/mol",
      casNumber: "61789-40-0",
      appearance: "Clear to slightly yellow liquid",
      odor: "Mild characteristic odor",
      solubility: "Soluble in water and alcohols",
      pH: "5.0 - 6.5 (10% solution)",
      concentration: "Typically available in 30% and 50% active concentrations",
      applications: {
        personalCare: [
          "Used as a mild surfactant in shampoos, body washes, and facial cleansers",
          "Acts as a foam booster and viscosity enhancer in skincare products",
          "Reduces irritation potential of anionic surfactants like SLS",
        ],
        householdCleaning: [
          "Used in dishwashing liquids, hand soaps, and fabric softeners",
          "Provides good foaming and cleansing while being gentle on skin",
        ],
        industrialUses: [
          "Utilized in textile and leather industries as a wetting agent",
          "Acts as an emulsifier in industrial cleaning formulations",
        ],
        agriculture: [
          "Used in pesticide formulations to improve wetting and spreading",
        ],
      },
      properties: [
        {
          property: "Boiling Point",
          value: ">100°C (decomposes at high temperatures)",
        },
        { property: "Density", value: "1.03 - 1.05 g/cm³" },
        {
          property: "Foaming Ability",
          value: "High foaming, even in hard water",
        },
        {
          property: "Biodegradability",
          value: "Readily biodegradable and eco-friendly",
        },
        {
          property: "Irritation Level",
          value:
            "Low irritation to skin and eyes compared to other surfactants",
        },
      ],
      packaging: [
        "Available in 200L HDPE drums",
        "Bulk packaging in IBC totes (1000L) or ISO tanks for large shipments",
        "Custom packaging available based on industry requirements",
      ],
      storage: [
        "Store in a cool, dry place away from direct sunlight",
        "Keep containers tightly closed to prevent contamination",
        "Avoid exposure to extreme temperatures to maintain stability",
      ],
      safety: {
        hazards: [
          "Mild skin and eye irritation in concentrated form",
          "Not considered toxic but should not be ingested",
          "May cause foaming in water sources if released in large quantities",
        ],
        precautions: [
          "Use gloves and goggles when handling concentrated CAPB",
          "Avoid prolonged contact with eyes or skin",
          "Ensure proper ventilation in storage and handling areas",
          "In case of accidental contact, rinse with plenty of water",
        ],
      },
    },
  },
  {
    id: 14,
    heading: "Lactic Acid",
    description:
      "Lactic Acid is a naturally occurring alpha hydroxy acid (AHA) used in skincare, food preservation, and industrial applications. It helps exfoliate dead skin cells, improve hydration, and brighten the skin in cosmetic products. Additionally, it is used in food processing as a pH regulator and preservative.",
    page: ["Cosmetic", "Food & Beverages"],
    chemicalData: {
      name: "Lactic Acid",
      formula: "C3H6O3",
      molarMass: "90.08 g/mol",
      casNumber: "50-21-5",
      appearance: "Colorless to yellowish liquid or crystalline solid",
      odor: "Mild, slightly acidic odor",
      solubility: "Highly soluble in water, ethanol, and glycerol",
      pH: "2.5 - 3.5 (10% solution)",
      concentration: "Available in 80% and 88% solutions",
      applications: {
        foodIndustry: [
          "Used as a food preservative and acidity regulator",
          "Common in dairy products, baked goods, and beverages",
          "Enhances flavor and extends shelf life",
        ],
        cosmeticsAndPersonalCare: [
          "Used in skincare products as an exfoliant and pH adjuster",
          "Helps in moisturizing and improving skin texture",
          "Found in anti-aging creams, peels, and cleansers",
        ],
        pharmaceuticals: [
          "Utilized in IV solutions and pharmaceuticals",
          "Acts as a chiral intermediate in drug synthesis",
        ],
        industrialApplications: [
          "Used in biodegradable plastics (PLA - polylactic acid)",
          "Employed in leather tanning and textile processing",
        ],
        agriculture: [
          "Used in animal feed to promote digestion",
          "Acts as a natural antibacterial agent in livestock nutrition",
        ],
      },
      properties: [
        { property: "Boiling Point", value: "122°C (252°F) at 15 mmHg" },
        { property: "Density", value: "1.2 g/cm³" },
        { property: "Melting Point", value: "18°C (64°F)" },
        { property: "Refractive Index", value: "1.439 - 1.441" },
        {
          property: "Corrosiveness",
          value: "Mildly corrosive to metals in concentrated form",
        },
      ],
      packaging: [
        "Available in 25kg HDPE drums",
        "Bulk packaging in IBC totes (1000L) or ISO tanks",
        "Glass or plastic bottles for laboratory-grade supply",
      ],
      storage: [
        "Store in a cool, dry, and well-ventilated area",
        "Keep containers tightly closed to prevent moisture absorption",
        "Avoid direct sunlight and extreme temperatures",
      ],
      safety: {
        hazards: [
          "Causes skin and eye irritation in concentrated form",
          "Harmful if swallowed in large quantities",
          "May cause respiratory irritation if inhaled in mist form",
        ],
        precautions: [
          "Use protective gloves and goggles when handling",
          "Avoid inhaling fumes or mist",
          "In case of contact with eyes or skin, rinse thoroughly with water",
          "Ensure proper ventilation in storage and handling areas",
        ],
      },
    },
  },
  {
    id: 15,
    heading: "Titanium Dioxide",
    description:
      "Titanium Dioxide (TiO₂) is a naturally occurring mineral widely used as a whitening and UV-blocking agent in cosmetics, sunscreens, and paints. It provides excellent opacity and UV protection, making it essential in various industrial and personal care applications.",
    page: ["Cosmetic"],
    chemicalData: {
      name: "Titanium Dioxide",
      formula: "TiO₂",
      molarMass: "79.87 g/mol",
      casNumber: "13463-67-7",
      appearance: "White powder",
      odor: "Odorless",
      solubility:
        "Insoluble in water, soluble in hot concentrated sulfuric acid",
      pH: "Neutral (6.5 - 8.5 in aqueous suspension)",
      concentration:
        "Available in various purity grades (e.g., 99%+ for food and pharmaceutical applications)",
      applications: {
        cosmeticsAndPersonalCare: [
          "Used as a whitening and UV-blocking agent in sunscreens, foundations, and lotions",
          "Provides opacity and brightness in skincare and cosmetic formulations",
        ],
        foodIndustry: [
          "Commonly used as a food coloring (E171) in confectionery, dairy, and baked goods",
          "Enhances opacity and brightness in food products",
        ],
        pharmaceuticals: [
          "Acts as a coating agent in tablets and capsules",
          "Improves visual appeal and stability of medications",
        ],
        paintsAndCoatings: [
          "Primary pigment in paints, coatings, and varnishes for high opacity and brightness",
          "Used in automotive, industrial, and decorative paints",
        ],
        plasticsAndPolymers: [
          "Used as a whitening agent in plastic products, including packaging and films",
          "Enhances UV resistance and durability in polymer materials",
        ],
        paperAndTextiles: [
          "Improves brightness and opacity in paper production",
          "Used in textile fibers for enhanced whiteness and UV protection",
        ],
      },
      properties: [
        { property: "Melting Point", value: "1,843°C (3,349°F)" },
        { property: "Boiling Point", value: "2,972°C (5,382°F)" },
        { property: "Density", value: "4.23 g/cm³" },
        {
          property: "Refractive Index",
          value: "2.488 (rutile), 2.583 (anatase)",
        },
        {
          property: "UV Absorption",
          value: "High UV light absorption and scattering",
        },
      ],
      packaging: [
        "Available in 25kg and 50kg paper or plastic bags",
        "Bulk packaging in 500kg - 1000kg jumbo bags",
        "Customized packaging options for specific industry needs",
      ],
      storage: [
        "Store in a cool, dry, and well-ventilated area",
        "Keep away from moisture and direct sunlight",
        "Ensure containers are tightly sealed to prevent contamination",
      ],
      safety: {
        hazards: [
          "May cause respiratory irritation if inhaled in powder form",
          "Potential eye and skin irritant",
          "Avoid prolonged exposure to airborne dust",
        ],
        precautions: [
          "Use appropriate dust masks and protective eyewear during handling",
          "Ensure proper ventilation in work areas",
          "Wash hands thoroughly after handling",
          "Store in a dry place to prevent clumping and contamination",
        ],
      },
    },
  },
  {
    id: 16,
    heading: "Acid Slurry 90% (LABSA)",
    description:
      "Acid Slurry 90% (LABSA) is a highly effective anionic surfactant widely used in detergent, soap, and cleaning product formulations. It provides excellent foaming, emulsification, and grease-cutting properties, making it essential in household and industrial cleaners.",
    page: ["Cosmetic"],
    chemicalData: {
      name: "Acid Slurry 90% (LABSA)",
      formula: "C18H30SO3H",
      molarMass: "326.49 g/mol",
      casNumber: "27176-87-0",
      appearance: "Brown viscous liquid",
      odor: "Characteristic pungent odor",
      solubility: "Soluble in water, producing a highly foaming solution",
      pH: "2 - 3 (acidic)",
      concentration: "90% active matter",
      applications: {
        detergentsAndCleaning: [
          "Used in the formulation of household and industrial detergents",
          "Key ingredient in dishwashing liquids, toilet cleaners, and liquid soaps",
          "Provides excellent foaming and cleansing properties",
        ],
        textileIndustry: [
          "Employed as a wetting and dispersing agent in dyeing and bleaching processes",
          "Enhances penetration of dyes into fabrics",
        ],
        leatherIndustry: [
          "Acts as a degreasing agent in leather processing",
          "Used in leather softening and finishing treatments",
        ],
        paperIndustry: [
          "Utilized in paper coating formulations",
          "Enhances paper softness and absorbency",
        ],
        agrochemicals: [
          "Used as an emulsifier in pesticide and herbicide formulations",
          "Improves stability and effectiveness of agricultural chemicals",
        ],
      },
      properties: [
        { property: "Active Matter", value: "90% ± 1%" },
        { property: "Sulphuric Acid Content", value: "≤ 6%" },
        { property: "Color", value: "Dark brown to light brown" },
        { property: "Density", value: "1.06 - 1.07 g/cm³" },
        {
          property: "Foaming Ability",
          value: "High foaming power in aqueous solutions",
        },
      ],
      packaging: [
        "Available in 50kg, 200kg HDPE drums",
        "Bulk packaging in 1000kg IBC tanks",
        "Custom packaging as per client requirements",
      ],
      storage: [
        "Store in a cool, dry place away from direct sunlight",
        "Keep containers tightly closed to prevent contamination",
        "Use corrosion-resistant storage tanks (HDPE or stainless steel recommended)",
      ],
      safety: {
        hazards: [
          "Can cause severe skin and eye irritation",
          "Harmful if inhaled or ingested",
          "Corrosive to metals and certain materials",
        ],
        precautions: [
          "Wear protective gloves, goggles, and clothing while handling",
          "Ensure proper ventilation in storage and work areas",
          "Avoid direct contact with skin and eyes; rinse immediately if exposed",
          "Store away from strong oxidizers and alkaline substances",
        ],
      },
    },
  },
  {
    id: 17,
    heading: "Sodium Citrate Dihydrate",
    description:
      "Sodium Citrate Dihydrate is a versatile salt used as a pH regulator, buffering agent, and preservative in food, pharmaceuticals, and cosmetics. It enhances the stability of formulations and acts as an anticoagulant in medical applications.",
    page: ["Cosmetic"],
    chemicalData: {
      name: "Sodium Citrate Dihydrate",
      formula: "C6H5Na3O7·2H2O",
      molarMass: "294.10 g/mol",
      casNumber: "6132-04-3",
      appearance: "White, crystalline powder or granular",
      odor: "Odorless",
      solubility: "Highly soluble in water, insoluble in alcohol",
      pH: "7.5 - 9.0 (5% solution)",
      concentration: "Varies based on application, typically 99% purity",
      applications: {
        foodAndBeverage: [
          "Used as a buffering agent, acidity regulator, and preservative in food and beverages",
          "Commonly found in soft drinks, dairy products, and processed foods",
        ],
        pharmaceuticals: [
          "Utilized as an anticoagulant in blood collection tubes",
          "Serves as a stabilizer in pharmaceutical formulations",
          "Acts as an alkalizing agent in medicinal syrups and effervescent tablets",
        ],
        cosmeticsAndPersonalCare: [
          "Functions as a pH regulator in creams, lotions, and skincare products",
          "Enhances product stability in cosmetic formulations",
        ],
        detergentsAndCleaning: [
          "Used as a water softener in detergents to enhance cleaning efficiency",
          "Prevents soap scum formation and improves lathering",
        ],
        industrialApplications: [
          "Applied in metal cleaning and electroplating processes",
          "Used in textile dyeing as a pH buffer",
        ],
      },
      properties: [
        { property: "Assay (Purity)", value: "≥ 99%" },
        { property: "Loss on Drying", value: "10.0 - 13.0%" },
        { property: "Heavy Metals", value: "≤ 10 ppm" },
        { property: "Chlorides", value: "≤ 50 ppm" },
        { property: "Sulphates", value: "≤ 150 ppm" },
        { property: "Density", value: "1.7 g/cm³" },
      ],
      packaging: [
        "Available in 25kg and 50kg HDPE bags with inner liner",
        "Custom bulk packaging available upon request",
      ],
      storage: [
        "Store in a cool, dry place away from moisture",
        "Keep in tightly sealed containers to prevent caking",
        "Avoid exposure to strong acids and oxidizing agents",
      ],
      safety: {
        hazards: [
          "Generally regarded as safe (GRAS) when used in food applications",
          "Can cause mild irritation if inhaled or comes in contact with eyes",
        ],
        precautions: [
          "Use protective gloves and goggles when handling in industrial applications",
          "Ensure proper ventilation in storage and processing areas",
          "Keep away from incompatible materials such as strong acids",
        ],
      },
    },
  },
  {
    id: 18,
    heading: "Ascorbic acid",
    description:
      "Ascorbic Acid (Vitamin C) is a powerful antioxidant used in food, pharmaceuticals, and skincare. It boosts immunity, enhances collagen production, and prevents oxidation in food and beverages.",
    page: ["Cosmetic"],
    chemicalData: {
      name: "Ascorbic Acid",
      formula: "C6H8O6",
      molarMass: "176.12 g/mol",
      casNumber: "50-81-7",
      appearance: "White or slightly yellow crystalline powder",
      odor: "Odorless",
      solubility:
        "Highly soluble in water, slightly soluble in alcohol, insoluble in chloroform and ether",
      pH: "2.2 - 2.5 (5% solution)",
      concentration: "Typically available in 99% purity",
      applications: {
        foodAndBeverage: [
          "Used as a natural antioxidant and preservative in food and beverages",
          "Commonly found in fruit juices, soft drinks, and processed foods",
          "Enhances shelf life and prevents oxidation in food products",
        ],
        pharmaceuticals: [
          "Essential vitamin supplement for preventing and treating scurvy",
          "Used in pharmaceutical formulations for immune support and antioxidant properties",
          "Applied in injectable solutions and effervescent tablets",
        ],
        cosmeticsAndPersonalCare: [
          "Acts as an antioxidant in skincare products to protect against free radicals",
          "Used in anti-aging creams, serums, and brightening treatments",
          "Helps in collagen synthesis and skin repair",
        ],
        industrialApplications: [
          "Utilized in photography as a developing agent",
          "Used in water treatment as a reducing agent to remove chlorine",
          "Applied in polymer and plastic manufacturing for stabilization",
        ],
      },
      properties: [
        { property: "Assay (Purity)", value: "≥ 99%" },
        { property: "Melting Point", value: "190 - 192°C (decomposes)" },
        { property: "Loss on Drying", value: "≤ 0.4%" },
        { property: "Specific Rotation", value: "+20.5° to +21.5°" },
        { property: "Heavy Metals", value: "≤ 10 ppm" },
      ],
      packaging: [
        "Available in 25kg fiber drums or HDPE bags",
        "Custom bulk packaging available upon request",
      ],
      storage: [
        "Store in a cool, dry place away from direct sunlight and heat",
        "Keep in tightly sealed containers to prevent degradation",
        "Avoid exposure to moisture and strong oxidizing agents",
      ],
      safety: {
        hazards: [
          "Generally regarded as safe (GRAS) when used in food applications",
          "Can cause mild irritation if inhaled or comes in contact with eyes",
        ],
        precautions: [
          "Use protective gloves and goggles when handling in industrial applications",
          "Ensure proper ventilation in storage and processing areas",
          "Keep away from incompatible materials such as strong bases and oxidizers",
        ],
      },
    },
  },
  {
    id: 19,
    heading: "Sodium Hypochlorite",
    description:
      "Sodium Hypochlorite is a powerful disinfectant and bleaching agent widely used in water treatment, household cleaners, and sanitation. It effectively kills bacteria, viruses, and mold, making it essential for hygiene and industrial applications.",
    page: ["Purifier Agent"],
    chemicalData: {
      name: "Sodium Hypochlorite",
      formula: "NaOCl",
      molarMass: "74.44 g/mol",
      casNumber: "7681-52-9",
      appearance: "Pale greenish-yellow liquid",
      odor: "Chlorine-like odor",
      solubility: "Highly soluble in water",
      pH: "10 - 12 (depending on concentration)",
      concentration: "Typically available in 5-15% solutions",
      applications: {
        waterTreatment: [
          "Used as a disinfectant for drinking water and wastewater treatment",
          "Effective in removing bacteria, viruses, and algae",
          "Helps in oxidation of organic contaminants",
        ],
        householdCleaning: [
          "Commonly used as bleach for cleaning and stain removal",
          "Disinfects surfaces and eliminates mold and mildew",
        ],
        industrialApplications: [
          "Used in pulp and paper industry for bleaching",
          "Applied in textile and detergent manufacturing",
          "Used in food processing plants for sanitation",
        ],
        medical: [
          "Utilized in hospitals as a surface disinfectant",
          "Used in dental applications for root canal treatment",
        ],
      },
      properties: [
        {
          property: "Density",
          value: "1.1 - 1.2 g/cm³ (depending on concentration)",
        },
        { property: "Boiling Point", value: "Decomposes before boiling" },
        {
          property: "Decomposition",
          value: "Slowly decomposes into sodium chloride and oxygen",
        },
        { property: "Oxidizing Potential", value: "Strong oxidizing agent" },
      ],
      packaging: [
        "Available in 25L, 50L HDPE drums or bulk tankers",
        "Custom packaging available upon request",
      ],
      storage: [
        "Store in a cool, well-ventilated area away from direct sunlight",
        "Keep in tightly sealed containers to prevent decomposition",
        "Avoid contact with acids, ammonia, and organic materials",
      ],
      safety: {
        hazards: [
          "Can cause severe skin and eye irritation",
          "Toxic if ingested or inhaled in high concentrations",
          "Reacts with acids to produce toxic chlorine gas",
        ],
        precautions: [
          "Wear protective gloves, goggles, and clothing when handling",
          "Use in well-ventilated areas or under fume hoods",
          "Avoid mixing with other household or industrial chemicals",
        ],
      },
    },
  },
  {
    id: 20,
    heading: "Acetic Acid",
    description:
      "Acetic Acid is an organic acid commonly used in food preservation, vinegar production, and industrial applications. It acts as a pH regulator, solvent, and antimicrobial agent in various industries, including food, pharmaceuticals, and textiles.",
    page: ["Purifier Agent"],
    chemicalData: {
      name: "Acetic Acid",
      formula: "C₂H₄O₂",
      molarMass: "60.05 g/mol",
      casNumber: "64-19-7",
      appearance: "Colorless liquid",
      odor: "Strong, pungent vinegar-like odor",
      solubility: "Completely miscible in water, ethanol, and ether",
      pH: "2.4 (for a 1.0M solution)",
      concentration: "Available in 5% to 99% solutions",
      applications: {
        industrial: [
          "Used in the production of acetate esters and synthetic fibers",
          "Essential in manufacturing acetic anhydride, vinyl acetate monomer, and terephthalic acid",
        ],
        foodIndustry: [
          "Used as a food additive (E260) for flavor enhancement and preservation",
          "Key ingredient in vinegar production",
        ],
        pharmaceuticals: [
          "Used in the synthesis of various drugs and chemical intermediates",
          "Applied in antiseptics and wound dressings",
        ],
        textiles: [
          "Used in dyeing and finishing processes in textile manufacturing",
        ],
        waterTreatment: ["Acts as a pH adjuster in industrial water treatment"],
      },
      properties: [
        { property: "Density", value: "1.049 g/cm³" },
        { property: "Boiling Point", value: "118.1°C (244.6°F)" },
        { property: "Melting Point", value: "16.6°C (61.9°F)" },
        { property: "Flash Point", value: "39°C (102°F) – closed cup" },
        { property: "Vapor Pressure", value: "15.7 mmHg at 20°C" },
      ],
      packaging: [
        "Available in 25L, 50L HDPE drums",
        "Also supplied in 200L barrels and bulk tankers",
        "Custom packaging available on request",
      ],
      storage: [
        "Store in a cool, well-ventilated area away from heat sources",
        "Keep containers tightly closed to prevent vapor release",
        "Avoid contact with strong oxidizers and bases",
      ],
      safety: {
        hazards: [
          "Highly corrosive and can cause severe burns",
          "Irritating to the respiratory system",
          "Highly flammable in concentrated forms",
        ],
        precautions: [
          "Use protective gloves, goggles, and clothing",
          "Ensure adequate ventilation when handling",
          "Keep away from open flames and heat sources",
        ],
      },
    },
  },
  {
    id: 21,
    heading: "Ammonium Hydroxide",
    description:
      "Ammonium Hydroxide is a strong alkaline solution used in cleaning products, water treatment, and chemical manufacturing. It acts as a pH regulator, neutralizer, and household cleaner, effectively removing grease and stains.",
    page: ["Purifier Agent"],
    chemicalData: {
      name: "Ammonium Hydroxide",
      formula: "NH₄OH",
      molarMass: "35.05 g/mol",
      casNumber: "1336-21-6",
      appearance: "Colorless liquid",
      odor: "Strong, pungent ammonia-like odor",
      solubility: "Highly soluble in water",
      pH: "11.6 - 12.0 (for a 1M solution)",
      concentration: "Available in 5% to 30% solutions",
      applications: {
        industrial: [
          "Used in the production of fertilizers, plastics, and rubber",
          "Employed in the manufacturing of explosives and dyes",
        ],
        cleaning: [
          "Commonly used in household and industrial cleaners",
          "Acts as a degreaser for metal and glass surfaces",
        ],
        foodIndustry: [
          "Used as a food additive (E527) to regulate acidity in food products",
        ],
        pharmaceuticals: [
          "Utilized in medical laboratories for chemical synthesis",
        ],
        waterTreatment: [
          "Used as a pH adjuster in water and wastewater treatment plants",
        ],
        textiles: [
          "Employed in the textile industry for dyeing and fabric treatment",
        ],
      },
      properties: [
        { property: "Density", value: "0.88 g/cm³ (for 28% solution)" },
        { property: "Boiling Point", value: "37.7°C (100°F) – decomposes" },
        { property: "Melting Point", value: "-57.5°C (-71.5°F)" },
        {
          property: "Flash Point",
          value: "Not flammable, but vapors are irritating",
        },
        { property: "Vapor Pressure", value: "115 mmHg at 20°C" },
      ],
      packaging: [
        "Available in 25L, 50L HDPE drums",
        "Also supplied in 200L barrels and bulk tankers",
        "Custom packaging available on request",
      ],
      storage: [
        "Store in a cool, well-ventilated area away from acids",
        "Keep containers tightly closed to prevent ammonia vapor escape",
        "Avoid contact with oxidizing agents",
      ],
      safety: {
        hazards: [
          "Corrosive and can cause severe burns on skin and eyes",
          "Inhalation of vapors may cause respiratory irritation",
          "Reacts violently with acids and oxidizers",
        ],
        precautions: [
          "Use protective gloves, goggles, and clothing",
          "Ensure proper ventilation when handling",
          "Store away from incompatible materials",
        ],
      },
    },
  },
  {
    id: 22,
    heading: "Citric Acid",
    description:
      "Citric Acid is a natural acid widely used as a flavor enhancer, preservative, and pH regulator in food and beverages. It also serves as a cleaning agent and chelating agent in cosmetics, pharmaceuticals, and industrial applications.",
    page: ["Food & Beverages"],
    chemicalData: {
      name: "Citric Acid",
      formula: "C₆H₈O₇",
      molarMass: "192.12 g/mol",
      casNumber: "77-92-9",
      appearance: "White crystalline powder",
      odor: "Odorless",
      solubility: "Highly soluble in water (145 g/100 mL at 20°C)",
      pH: "1.8 – 2.2 (for a 1% solution)",
      concentration: "Available in anhydrous and monohydrate forms",
      applications: {
        foodIndustry: [
          "Used as a food preservative and flavor enhancer (E330)",
          "Commonly found in soft drinks, candies, and dairy products",
          "Acts as a pH regulator in food processing",
        ],
        pharmaceuticals: [
          "Used as an excipient in pharmaceutical formulations",
          "Employed in effervescent tablets and syrups",
        ],
        cosmetics: [
          "Acts as a pH adjuster in skincare and personal care products",
          "Used in hair conditioners, shampoos, and bath products",
        ],
        cleaning: [
          "Effective as a biodegradable cleaning agent",
          "Removes limescale, rust, and mineral deposits",
        ],
        industrial: [
          "Used in metal passivation and chelating applications",
          "Employed in detergent and textile industries",
        ],
        waterTreatment: [
          "Functions as a chelating agent for metal removal",
          "Used in boiler cleaning solutions",
        ],
      },
      properties: [
        { property: "Density", value: "1.665 g/cm³ (anhydrous)" },
        { property: "Melting Point", value: "153°C (307°F)" },
        { property: "Boiling Point", value: "Decomposes before boiling" },
        { property: "Flash Point", value: "Non-flammable" },
        {
          property: "Molecular Structure",
          value: "Tricarboxylic acid with three COOH groups",
        },
      ],
      packaging: [
        "Available in 25kg, 50kg HDPE bags with inner liner",
        "Also supplied in bulk packaging as per customer requirements",
      ],
      storage: [
        "Store in a cool, dry place away from moisture",
        "Keep containers tightly closed to avoid clumping",
        "Avoid exposure to direct sunlight and extreme temperatures",
      ],
      safety: {
        hazards: [
          "Can cause eye and skin irritation in high concentrations",
          "Inhalation of dust may cause respiratory discomfort",
        ],
        precautions: [
          "Use gloves and protective eyewear while handling",
          "Ensure proper ventilation in storage and handling areas",
          "Avoid inhaling dust; use a dust mask if necessary",
        ],
      },
    },
  },
  {
    id: 23,
    heading: "Potassium Chloride",
    description:
      "Potassium Chloride is a vital electrolyte used in pharmaceuticals, food processing, and fertilizers. It helps maintain fluid balance in the body and serves as a potassium supplement and a salt substitute in food products.",
    page: ["Food & Beverages"],
    chemicalData: {
      name: "Potassium Chloride",
      formula: "KCl",
      molarMass: "74.55 g/mol",
      casNumber: "7447-40-7",
      appearance: "White crystalline powder or colorless crystals",
      odor: "Odorless",
      solubility:
        "Soluble in water (34.2 g/100 mL at 20°C), insoluble in alcohol",
      pH: "Neutral (pH ~7 in aqueous solution)",
      concentration:
        "Available in various purity grades (Industrial, Food, and Pharma)",
      applications: {
        agriculture: [
          "Used as a potash fertilizer to enhance soil potassium levels",
          "Essential for plant growth and crop yield improvement",
        ],
        pharmaceuticals: [
          "Used in oral rehydration salts and electrolyte replacement therapy",
          "Component of intravenous fluids for treating potassium deficiency",
        ],
        foodIndustry: [
          "Used as a salt substitute in low-sodium foods",
          "Functions as a preservative and flavor enhancer (E508)",
        ],
        industrial: [
          "Utilized in the production of potassium-based chemicals",
          "Used in water softening and de-icing applications",
        ],
        waterTreatment: [
          "Used in water softeners to regenerate ion-exchange resins",
          "Employed in brine solutions for water purification",
        ],
        laboratory: [
          "Commonly used as a reagent in analytical chemistry",
          "Component in buffer solutions and calibration standards",
        ],
      },
      properties: [
        { property: "Density", value: "1.98 g/cm³" },
        { property: "Melting Point", value: "770°C (1418°F)" },
        { property: "Boiling Point", value: "1420°C (2588°F)" },
        { property: "Crystal Structure", value: "Cubic" },
        { property: "Refractive Index", value: "1.490" },
      ],
      packaging: [
        "Available in 25kg and 50kg HDPE bags with inner liners",
        "Can be supplied in bulk packaging as per customer requirements",
      ],
      storage: [
        "Store in a cool, dry place away from moisture",
        "Keep containers tightly closed to prevent caking",
        "Avoid exposure to extreme temperatures and humidity",
      ],
      safety: {
        hazards: [
          "Non-toxic under normal conditions",
          "High doses can cause hyperkalemia (excess potassium in blood)",
          "May cause mild irritation to eyes and skin",
        ],
        precautions: [
          "Wear protective gloves and eyewear while handling",
          "Avoid inhaling dust; use a mask if necessary",
          "Keep away from incompatible materials like strong acids",
        ],
      },
    },
  },
  {
    id: 24,
    heading: "Acrylic acid",
    description:
      "Acrylic Acid is a key raw material used in the production of adhesives, coatings, and superabsorbent polymers. It provides strong adhesion, durability, and water absorption properties, making it essential in industrial and consumer applications.",
    page: ["Food & Beverages", "Solvents"],
    chemicalData: {
      name: "Acrylic Acid",
      formula: "C3H4O2",
      molarMass: "72.06 g/mol",
      casNumber: "79-10-7",
      appearance: "Colorless liquid",
      odor: "Acrid, pungent odor",
      solubility: "Miscible in water, alcohols, and ethers",
      pH: "Acidic",
      concentration:
        "Available in various purity grades (Industrial, Technical, and High Purity)",
      applications: {
        polymersAndResins: [
          "Used as a monomer in the production of acrylic polymers and copolymers",
          "Manufactures superabsorbent polymers (SAP) used in hygiene products",
        ],
        adhesivesAndSealants: [
          "Component in adhesives, coatings, and sealants for enhanced adhesion",
          "Improves water resistance and durability in industrial adhesives",
        ],
        textilesAndLeather: [
          "Used in textile finishes to improve durability and water repellency",
          "Enhances flexibility and wear resistance in leather treatments",
        ],
        waterTreatment: [
          "Used in water-soluble polymers for scale and corrosion control",
          "Employed in dispersants and thickeners for industrial water treatment",
        ],
        paintsAndCoatings: [
          "Enhances adhesion and gloss in paints and protective coatings",
          "Provides weather resistance in exterior and automotive coatings",
        ],
      },
      properties: [
        { property: "Density", value: "1.05 g/cm³" },
        { property: "Melting Point", value: "13°C (55°F)" },
        { property: "Boiling Point", value: "141°C (286°F)" },
        { property: "Flash Point", value: "50°C (122°F) (closed cup)" },
        { property: "Vapor Pressure", value: "3.8 mmHg at 20°C" },
      ],
      packaging: [
        "Available in 200kg HDPE drums",
        "Supplied in bulk tankers for industrial use",
        "Customized packaging available upon request",
      ],
      storage: [
        "Store in a cool, dry, and well-ventilated area",
        "Keep away from heat, open flames, and direct sunlight",
        "Use inhibitors to prevent unwanted polymerization",
      ],
      safety: {
        hazards: [
          "Highly corrosive to skin and eyes",
          "Flammable and reactive with oxidizers",
          "Can cause respiratory irritation if inhaled",
        ],
        precautions: [
          "Wear protective gloves, goggles, and clothing",
          "Ensure proper ventilation in handling areas",
          "Avoid prolonged exposure; use a respirator if necessary",
        ],
      },
    },
  },
  {
    id: 25,
    heading: "Citric Acid Monohydrous",
    description:
      "Citric Acid Monohydrate is a versatile acid used as a preservative, pH regulator, and flavor enhancer in food, beverages, and pharmaceuticals. It also serves as a chelating agent in cosmetics, detergents, and industrial applications.",
    page: ["Food & Beverages"],
    chemicalData: {
      name: "Citric Acid Monohydrate",
      formula: "C6H8O7·H2O",
      molarMass: "210.14 g/mol",
      casNumber: "5949-29-1",
      appearance: "White crystalline powder or granular",
      odor: "Odorless",
      solubility: "Highly soluble in water, ethanol, and alcohol",
      pH: "1.8 – 2.2 (5% aqueous solution)",
      concentration:
        "Available in various purity grades (Food, Pharmaceutical, and Industrial)",
      applications: {
        foodAndBeverages: [
          "Used as an acidulant and pH regulator in beverages, candies, and processed foods",
          "Acts as a preservative to enhance shelf life",
          "Enhances flavor in soft drinks, jams, and sauces",
        ],
        pharmaceuticals: [
          "Used in effervescent tablets and syrups as an acidity regulator",
          "Acts as a stabilizer in vitamin and mineral supplements",
        ],
        cosmeticsAndPersonalCare: [
          "Functions as a pH adjuster in skincare and beauty products",
          "Used in shampoos and conditioners for chelating properties",
        ],
        cleaningAndDetergents: [
          "Acts as a descaler in household and industrial cleaning products",
          "Used in dishwashing liquids to remove mineral deposits",
        ],
        waterTreatment: [
          "Used as a chelating agent to prevent metal ion buildup in water systems",
          "Enhances efficiency of industrial water softeners",
        ],
      },
      properties: [
        { property: "Density", value: "1.54 g/cm³" },
        { property: "Melting Point", value: "135-152°C (275-306°F)" },
        { property: "Boiling Point", value: "Decomposes before boiling" },
        { property: "Solubility in Water", value: "144g/100mL at 20°C" },
      ],
      packaging: [
        "Available in 25kg and 50kg bags",
        "Supplied in bulk quantities for industrial use",
        "Custom packaging available upon request",
      ],
      storage: [
        "Store in a cool, dry, and well-ventilated area",
        "Keep away from moisture and direct sunlight",
        "Use sealed containers to prevent contamination",
      ],
      safety: {
        hazards: [
          "Mildly irritating to eyes and skin",
          "Can cause respiratory discomfort if inhaled in large amounts",
        ],
        precautions: [
          "Wear protective gloves and goggles when handling large quantities",
          "Ensure proper ventilation in storage and handling areas",
          "Avoid direct contact with skin and eyes",
        ],
      },
    },
  },
  {
    id: 26,
    heading: "Dextrose Anhydrous",
    description:
      "Dextrose Anhydrous is a simple sugar used as a sweetener, energy source, and pharmaceutical excipient. It is commonly found in food, beverages, and medical applications like oral rehydration solutions and IV fluids.",
    page: ["Food & Beverages"],
    chemicalData: {
      name: "Dextrose Anhydrous",
      formula: "C6H12O6",
      molarMass: "180.16 g/mol",
      casNumber: "50-99-7",
      appearance: "White crystalline powder",
      odor: "Odorless",
      solubility: "Highly soluble in water, slightly soluble in ethanol",
      pH: "4.0 – 6.5 (10% solution in water)",
      concentration:
        "Available in food-grade, pharmaceutical-grade, and industrial-grade",
      applications: {
        foodAndBeverages: [
          "Used as a sweetener and energy source in beverages, bakery products, and dairy items",
          "Acts as a fermentable sugar in brewing and confectionery",
          "Used in processed foods as a bulking agent",
        ],
        pharmaceuticals: [
          "Used in intravenous (IV) solutions for hydration and energy supply",
          "Acts as a carrier for medicine formulations in tablets and syrups",
        ],
        personalCareAndCosmetics: [
          "Functions as a humectant in skincare products",
          "Used in oral care formulations as a mild sweetener",
        ],
        animalFeed: [
          "Added as an energy source in livestock and pet food formulations",
        ],
        industrialApplications: [
          "Used in fermentation processes for bioethanol production",
          "Serves as a raw material in biochemical and microbiological research",
        ],
      },
      properties: [
        { property: "Density", value: "1.56 g/cm³" },
        { property: "Melting Point", value: "146°C (295°F)" },
        { property: "Boiling Point", value: "Decomposes before boiling" },
        { property: "Solubility in Water", value: "909 g/L at 25°C" },
      ],
      packaging: [
        "Available in 25kg and 50kg bags",
        "Supplied in bulk for industrial use",
        "Custom packaging available upon request",
      ],
      storage: [
        "Store in a cool, dry place away from moisture",
        "Keep in airtight containers to prevent caking",
        "Protect from direct sunlight and extreme temperatures",
      ],
      safety: {
        hazards: [
          "Generally recognized as safe (GRAS) for food and pharmaceutical use",
          "Excessive consumption may lead to hyperglycemia",
        ],
        precautions: [
          "Avoid inhalation of powder to prevent respiratory discomfort",
          "Store away from strong oxidizing agents",
          "Ensure proper handling in food and pharma environments",
        ],
      },
    },
  },
  {
    id: 27,
    heading: "Glycerin",
    description:
      "Glycerin is a versatile humectant and moisturizer widely used in cosmetics, pharmaceuticals, and food products. It helps retain moisture, improves skin hydration, and acts as a solvent in various formulations.",
    page: ["Food & Beverages", "Solvents"],
    chemicalData: {
      name: "Glycerin (Glycerol)",
      formula: "C3H8O3",
      molarMass: "92.09 g/mol",
      casNumber: "56-81-5",
      appearance: "Clear, colorless, and viscous liquid",
      odor: "Odorless",
      solubility: "Fully miscible with water, soluble in alcohol and acetone",
      pH: "5.5 – 7.5 (10% solution in water)",
      concentration:
        "Available in pharmaceutical, food, and industrial grades with purity levels up to 99.5%",
      applications: {
        pharmaceuticals: [
          "Used as a humectant in cough syrups and oral solutions",
          "Acts as a lubricant in eye drops and suppositories",
          "Used in skin care ointments and creams",
        ],
        foodAndBeverages: [
          "Functions as a sweetener and moisture-retaining agent",
          "Used in bakery products, beverages, and confectionery",
          "Acts as a solvent for food flavors and colors",
        ],
        cosmeticsAndPersonalCare: [
          "Used in skincare products as a moisturizing agent",
          "Added to soaps, shampoos, and toothpaste for smooth texture",
          "Functions as a skin-conditioning agent in lotions",
        ],
        industrialApplications: [
          "Used in the production of resins, paints, and coatings",
          "Serves as an antifreeze agent in automotive and industrial applications",
          "Used in the manufacture of explosives (e.g., nitroglycerin)",
        ],
        animalFeed: [
          "Added as an energy source in livestock feed",
          "Used as a binder in pet food formulations",
        ],
      },
      properties: [
        { property: "Density", value: "1.26 g/cm³" },
        { property: "Boiling Point", value: "290°C (554°F)" },
        { property: "Melting Point", value: "18°C (64°F)" },
        { property: "Viscosity", value: "1.412 Pa·s at 25°C" },
      ],
      packaging: [
        "Available in 250mL, 500mL, 1L bottles for pharmaceutical and cosmetic use",
        "Supplied in 25kg and 200kg drums for industrial applications",
        "Bulk shipments available in IBC tanks and tankers",
      ],
      storage: [
        "Store in a cool, dry, and well-ventilated area",
        "Keep away from direct sunlight and heat sources",
        "Use tightly sealed containers to prevent moisture absorption",
      ],
      safety: {
        hazards: [
          "Generally recognized as safe (GRAS) for food and pharmaceutical applications",
          "Non-toxic but may cause mild irritation if inhaled or in contact with eyes",
        ],
        precautions: [
          "Avoid contact with strong oxidizing agents",
          "Handle with care to prevent spills and contamination",
          "Use personal protective equipment (PPE) in industrial settings",
        ],
      },
    },
  },
  {
    id: 28,
    heading: "Sodium Bicarbonate",
    description:
      "Sodium Bicarbonate, commonly known as baking soda, is a versatile compound used as a leavening agent, pH regulator, and cleaning agent. It is widely utilized in baking, pharmaceuticals, and household cleaning products.",
    page: ["Food & Beverages"],
    chemicalData: {
      name: "Sodium Bicarbonate",
      formula: "NaHCO₃",
      molarMass: "84.01 g/mol",
      casNumber: "144-55-8",
      appearance: "White crystalline powder or granules",
      odor: "Odorless",
      solubility: "Soluble in water (96 g/L at 20°C), insoluble in alcohol",
      pH: "8.3 (1% solution in water)",
      concentration:
        "Available in different purity grades: food grade, pharmaceutical grade, industrial grade",
      applications: {
        foodAndBeverages: [
          "Used as a leavening agent in baking",
          "Regulates pH in food and beverages",
          "Acts as an anti-caking agent in processed foods",
        ],
        pharmaceuticals: [
          "Used as an antacid to relieve heartburn and acid indigestion",
          "Serves as an active ingredient in effervescent tablets",
          "Used in hemodialysis solutions for blood pH regulation",
        ],
        personalCareAndCosmetics: [
          "Added in toothpaste and mouthwash for oral care",
          "Used in deodorants and bath products as an odor neutralizer",
          "Functions as an exfoliating agent in skincare products",
        ],
        industrialApplications: [
          "Used in fire extinguishers as a dry chemical agent",
          "Serves as a pH buffer in water treatment processes",
          "Acts as a mild abrasive in cleaning products",
        ],
        animalFeed: [
          "Used as a dietary supplement to regulate pH in livestock feed",
          "Aids in digestion and improves feed efficiency in dairy cattle",
        ],
      },
      properties: [
        { property: "Density", value: "2.2 g/cm³" },
        { property: "Melting Point", value: "Decomposes at 50°C" },
        {
          property: "Decomposition Temperature",
          value: "Above 60°C (releases CO₂)",
        },
        { property: "Solubility", value: "9 g/100mL in water at 20°C" },
      ],
      packaging: [
        "Available in 25kg and 50kg bags for industrial use",
        "Supplied in 1kg and 5kg packs for food and pharmaceutical applications",
        "Bulk shipments available in IBCs and tankers",
      ],
      storage: [
        "Store in a cool, dry, and well-ventilated area",
        "Keep away from acids and moisture to prevent degradation",
        "Use tightly sealed containers to avoid contamination",
      ],
      safety: {
        hazards: [
          "Generally considered non-toxic",
          "May cause mild irritation to eyes and skin on prolonged exposure",
        ],
        precautions: [
          "Avoid inhalation of dust",
          "Use gloves and goggles when handling large quantities",
          "Store away from strong acids to prevent carbon dioxide release",
        ],
      },
    },
  },
  {
    id: 29,
    heading: "Acetone",
    description:
      "Acetone is a fast-evaporating solvent widely used in cosmetics, pharmaceuticals, and industrial applications. It is commonly found in nail polish removers, paint thinners, and chemical synthesis due to its strong dissolving properties.",
    page: ["Solvents"],
    chemicalData: {
      name: "Acetone",
      formula: "C₃H₆O",
      molarMass: "58.08 g/mol",
      casNumber: "67-64-1",
      appearance: "Colorless liquid",
      odor: "Characteristic sweet, pungent odor",
      solubility:
        "Completely miscible with water, alcohol, and most organic solvents",
      pH: "Neutral (pH ~7)",
      concentration:
        "Available in industrial, pharmaceutical, and laboratory grades",
      applications: {
        industrial: [
          "Used as a solvent in the production of plastics, resins, and synthetic fibers",
          "Essential in paint thinners, varnishes, and adhesives",
          "Used in degreasing and cleaning applications",
        ],
        pharmaceuticalsAndCosmetics: [
          "Key ingredient in nail polish remover",
          "Used in chemical peels and skin-care products",
          "Used as a solvent in some pharmaceutical formulations",
        ],
        laboratory: [
          "Used in chemical synthesis and extractions",
          "Acts as a cleaning solvent for laboratory glassware",
        ],
        automotiveAndElectronics: [
          "Used in automotive care for removing grease and stains",
          "Employed in the electronics industry for cleaning circuit boards",
        ],
      },
      properties: [
        { property: "Boiling Point", value: "56.05°C (132.89°F)" },
        { property: "Melting Point", value: "-94.7°C (-138.5°F)" },
        { property: "Density", value: "0.7845 g/cm³ at 25°C" },
        { property: "Vapor Pressure", value: "30.8 kPa at 25°C" },
        { property: "Flash Point", value: "-20°C (-4°F) (closed cup)" },
      ],
      packaging: [
        "Available in 160L steel drums",
        "Supplied in 1L, 5L, and 25L HDPE bottles for laboratory use",
        "Bulk shipments in ISO tanks and IBC containers",
      ],
      storage: [
        "Store in a cool, dry, and well-ventilated area",
        "Keep away from heat, sparks, open flames, and strong oxidizers",
        "Use explosion-proof containers and storage areas",
      ],
      safety: {
        hazards: [
          "Highly flammable liquid and vapor",
          "Can cause irritation to eyes, skin, and respiratory system",
          "Prolonged exposure may cause dizziness, headache, or nausea",
        ],
        precautions: [
          "Use protective gloves and safety goggles when handling",
          "Ensure proper ventilation in work areas",
          "Keep away from ignition sources and incompatible materials",
          "Use proper storage containers to prevent leakage and evaporation",
        ],
      },
    },
  },
  {
    id: 30,
    heading: "Ethanol",
    description:
      "Ethanol is a versatile alcohol used as a solvent, disinfectant, and fuel additive. It is widely utilized in pharmaceuticals, cosmetics, and alcoholic beverages due to its antimicrobial and preservative properties.",
    page: ["Solvents"],
    chemicalData: {
      name: "Ethanol",
      formula: "C₂H₆O",
      molarMass: "46.07 g/mol",
      casNumber: "64-17-5",
      appearance: "Colorless, volatile liquid",
      odor: "Mild, characteristic alcoholic odor",
      solubility: "Completely miscible with water and most organic solvents",
      pH: "Neutral (~7)",
      concentration:
        "Available in various concentrations, including 70%, 95%, and 99.9%",
      applications: {
        industrial: [
          "Used as a solvent in the production of paints, coatings, and inks",
          "Essential in the manufacture of perfumes, cosmetics, and pharmaceuticals",
          "Used in the production of biofuels and industrial alcohol",
        ],
        pharmaceuticalsAndMedical: [
          "Used as an antiseptic and disinfectant in hand sanitizers and medical wipes",
          "Solvent for pharmaceutical formulations",
          "Preservative in vaccines and medications",
        ],
        foodAndBeverage: [
          "Alcoholic component in beverages such as beer, wine, and spirits",
          "Used as a food additive and flavoring agent",
          "Employed in the extraction of natural flavors and essences",
        ],
        laboratory: [
          "Common solvent in chemical synthesis and extractions",
          "Used in DNA and RNA precipitation procedures",
          "Cleaning agent for laboratory instruments",
        ],
        automotiveAndFuel: [
          "Blended with gasoline as ethanol fuel (E10, E85, etc.)",
          "Used in windshield washer fluids and antifreeze",
        ],
      },
      properties: [
        { property: "Boiling Point", value: "78.37°C (173.07°F)" },
        { property: "Melting Point", value: "-114.1°C (-173.4°F)" },
        { property: "Density", value: "0.789 g/cm³ at 20°C" },
        { property: "Vapor Pressure", value: "5.95 kPa at 20°C" },
        { property: "Flash Point", value: "13°C (55°F) (closed cup)" },
      ],
      packaging: [
        "Available in 1L, 5L, and 25L HDPE bottles",
        "Supplied in 200L steel drums",
        "Bulk shipments in ISO tanks and IBC containers",
      ],
      storage: [
        "Store in a cool, well-ventilated area away from heat and ignition sources",
        "Keep containers tightly closed to prevent evaporation",
        "Use explosion-proof storage areas and equipment",
      ],
      safety: {
        hazards: [
          "Highly flammable liquid and vapor",
          "Can cause eye and skin irritation",
          "Inhalation of high concentrations may cause dizziness, headache, or nausea",
          "Harmful if ingested in large amounts",
        ],
        precautions: [
          "Use protective gloves, goggles, and adequate ventilation when handling",
          "Keep away from heat, sparks, open flames, and hot surfaces",
          "Store in properly labeled, tightly sealed containers",
          "Use in well-ventilated areas or fume hoods",
        ],
      },
    },
  },
  {
    id: 31,
    heading: "Hexane",
    description:
      "Hexane is a highly volatile solvent widely used in oil extraction, adhesives, and industrial cleaning. It is valued for its strong dissolving properties in chemical and manufacturing processes.",
    page: ["Solvents"],
    chemicalData: {
      name: "Hexane",
      formula: "C₆H₁₄",
      molarMass: "86.18 g/mol",
      casNumber: "110-54-3",
      appearance: "Colorless liquid",
      odor: "Mild gasoline-like odor",
      solubility: "Insoluble in water, soluble in organic solvents",
      pH: "Neutral (~7)",
      concentration:
        "Available in various purities, including n-Hexane 95% and 99%",
      applications: {
        industrial: [
          "Used as a solvent in the extraction of edible oils from seeds and vegetables",
          "Essential in the production of adhesives, coatings, and glues",
          "Used in the manufacture of synthetic rubber and polymers",
        ],
        laboratory: [
          "Used as a non-polar solvent in chemical reactions and extractions",
          "Commonly employed in chromatography and sample preparation",
        ],
        automotiveAndFuel: [
          "Present in gasoline blends",
          "Used as a degreasing agent for automotive and mechanical parts",
        ],
        pharmaceuticalAndCosmetic: [
          "Used in pharmaceutical formulations",
          "Solvent for cosmetics and personal care products",
        ],
      },
      properties: [
        { property: "Boiling Point", value: "68.7°C (155.7°F)" },
        { property: "Melting Point", value: "-95.3°C (-139.5°F)" },
        { property: "Density", value: "0.659 g/cm³ at 20°C" },
        { property: "Vapor Pressure", value: "17.6 kPa at 20°C" },
        { property: "Flash Point", value: "-22°C (-7.6°F) (closed cup)" },
      ],
      packaging: [
        "Available in 1L, 5L, and 25L HDPE bottles",
        "Supplied in 200L steel drums",
        "Bulk shipments in ISO tanks and IBC containers",
      ],
      storage: [
        "Store in a cool, well-ventilated area away from heat and ignition sources",
        "Keep containers tightly closed to prevent evaporation",
        "Use explosion-proof storage areas and equipment",
      ],
      safety: {
        hazards: [
          "Highly flammable liquid and vapor",
          "May cause drowsiness or dizziness if inhaled",
          "Prolonged skin exposure may cause irritation or dermatitis",
          "Toxic to aquatic life with long-lasting effects",
        ],
        precautions: [
          "Use protective gloves, goggles, and adequate ventilation when handling",
          "Keep away from heat, sparks, open flames, and hot surfaces",
          "Store in properly labeled, tightly sealed containers",
          "Use in well-ventilated areas or fume hoods",
        ],
      },
    },
  },
  {
    id: 32,
    heading: "Acetonitrile",
    description:
      "Acetonitrile is a colorless, volatile solvent widely used in pharmaceuticals, chemical synthesis, and laboratory analysis. It is valued for its high solubility and effectiveness in organic reactions and chromatography.",
    page: ["Solvents"],
    chemicalData: {
      name: "Acetonitrile",
      formula: "C₂H₃N",
      molarMass: "41.05 g/mol",
      casNumber: "75-05-8",
      appearance: "Colorless liquid",
      odor: "Ether-like odor",
      solubility: "Miscible with water and most organic solvents",
      pH: "Neutral (~7)",
      concentration:
        "Available in various purities, including 99.9% HPLC grade",
      applications: {
        industrial: [
          "Used as a solvent in the pharmaceutical industry",
          "Essential in the production of synthetic fibers and plastics",
          "Employed in battery electrolytes, particularly lithium-ion batteries",
        ],
        laboratory: [
          "Widely used as a solvent in high-performance liquid chromatography (HPLC)",
          "Common solvent in chemical synthesis and extraction processes",
        ],
        pharmaceutical: [
          "Used in peptide synthesis and DNA sequencing applications",
          "Solvent in drug formulation and purification processes",
        ],
      },
      properties: [
        { property: "Boiling Point", value: "81.6°C (178.9°F)" },
        { property: "Melting Point", value: "-45.7°C (-50.3°F)" },
        { property: "Density", value: "0.786 g/cm³ at 20°C" },
        { property: "Vapor Pressure", value: "9.7 kPa at 20°C" },
        { property: "Flash Point", value: "2°C (35.6°F) (closed cup)" },
      ],
      packaging: [
        "Available in 1L, 5L, and 25L glass or HDPE bottles",
        "Supplied in 200L steel drums",
        "Bulk shipments in ISO tanks",
      ],
      storage: [
        "Store in a cool, dry, well-ventilated area away from heat and open flames",
        "Keep containers tightly sealed to prevent moisture absorption",
        "Use explosion-proof storage and handling equipment",
      ],
      safety: {
        hazards: [
          "Highly flammable liquid and vapor",
          "Toxic if swallowed, inhaled, or absorbed through the skin",
          "Causes irritation to the eyes, skin, and respiratory tract",
        ],
        precautions: [
          "Use protective gloves, goggles, and lab coats when handling",
          "Store away from strong oxidizing agents and acids",
          "Ensure proper ventilation and avoid prolonged exposure",
          "Dispose of waste following local environmental regulations",
        ],
      },
    },
  },
  {
    id: 33,
    heading: "Ammonium Nitrate",
    description:
      "Ammonium Nitrate is a highly soluble compound used in fertilizers, explosives, and industrial applications. It provides a rich nitrogen source for plant growth and is a key ingredient in mining and construction explosives.",
    page: ["Agro Chemical"],
    chemicalData: {
      name: "Ammonium Nitrate",
      formula: "NH₄NO₃",
      molarMass: "80.04 g/mol",
      casNumber: "6484-52-2",
      appearance: "White crystalline solid",
      odor: "Odorless",
      solubility: "Highly soluble in water (118g/100mL at 20°C)",
      pH: "Acidic (4.5-6.0 for a 10% solution)",
      concentration:
        "Available in various grades, including technical and agricultural grades",
      applications: {
        agriculture: [
          "Used as a high-nitrogen fertilizer (33-34% nitrogen content)",
          "Promotes plant growth and improves crop yields",
        ],
        industrial: [
          "Component in the production of explosives (ANFO - Ammonium Nitrate Fuel Oil)",
          "Used in mining, construction, and quarrying industries",
        ],
        laboratory: [
          "Used as an oxidizer in various chemical reactions",
          "Component in cold packs due to its endothermic dissolution in water",
        ],
      },
      properties: [
        { property: "Boiling Point", value: "Decomposes at ~210°C (410°F)" },
        { property: "Melting Point", value: "169.6°C (337.3°F)" },
        { property: "Density", value: "1.72 g/cm³" },
        { property: "Vapor Pressure", value: "Negligible at room temperature" },
        {
          property: "Decomposition Temperature",
          value: "210°C (can lead to explosion under confinement)",
        },
      ],
      packaging: [
        "Packed in 25kg, 50kg HDPE bags with inner lining",
        "Available in bulk bags (500kg - 1000kg) for industrial use",
        "Transported in sealed containers to prevent moisture absorption",
      ],
      storage: [
        "Store in a cool, dry, well-ventilated area away from combustible materials",
        "Keep away from sources of heat, sparks, and open flames",
        "Avoid contamination with organic materials, fuels, and reducing agents",
      ],
      safety: {
        hazards: [
          "Strong oxidizer; enhances combustion of other materials",
          "Can be explosive under high heat or confined conditions",
          "Harmful if ingested or inhaled in large quantities",
        ],
        precautions: [
          "Use protective gloves, goggles, and dust masks when handling",
          "Store separately from flammable substances and reducing agents",
          "Ensure proper ventilation in storage areas",
          "Follow local regulations for transport and disposal",
        ],
      },
    },
  },
  {
    id: 34,
    heading: "Zinc Sulfate",
    description:
      "Zinc Sulfate is a water-soluble compound used in pharmaceuticals, agriculture, and industrial applications. It serves as a dietary supplement, fertilizer additive, and a key ingredient in various chemical processes.",
    page: ["Agro Chemical"],
    chemicalData: {
      name: "Zinc Sulfate",
      formula: "ZnSO₄",
      molarMass: "161.47 g/mol (anhydrous), 287.53 g/mol (heptahydrate)",
      casNumber: "7733-02-0",
      appearance: "White crystalline powder or colorless crystals",
      odor: "Odorless",
      solubility: "Highly soluble in water (57.7 g/100 mL at 20°C)",
      pH: "4.0-6.0 (5% solution)",
      concentration:
        "Available in different hydrate forms: monohydrate, heptahydrate, anhydrous",
      applications: {
        agriculture: [
          "Used as a micronutrient fertilizer to correct zinc deficiency in crops",
          "Essential for plant growth and enzyme function",
        ],
        industrial: [
          "Used in the production of rayon, electrolytes for zinc plating",
          "Employed in the manufacture of pigments and dyes",
        ],
        pharmaceutical: [
          "Used in dietary supplements to treat zinc deficiency",
          "Component in skin treatments for acne and wound healing",
        ],
        waterTreatment: [
          "Used as a coagulating agent in water purification",
          "Employed in the prevention of moss and algae in water systems",
        ],
      },
      properties: [
        { property: "Boiling Point", value: "Decomposes before boiling" },
        { property: "Melting Point", value: "680°C (anhydrous)" },
        {
          property: "Density",
          value: "3.54 g/cm³ (anhydrous), 1.97 g/cm³ (heptahydrate)",
        },
        { property: "Solubility in Alcohol", value: "Slightly soluble" },
        { property: "Hygroscopic", value: "Absorbs moisture from air" },
      ],
      packaging: [
        "Available in 25kg, 50kg HDPE bags with inner lining",
        "Bulk packaging available for industrial applications",
        "Sealed moisture-proof bags to prevent caking",
      ],
      storage: [
        "Store in a cool, dry, well-ventilated area away from direct sunlight",
        "Keep away from strong acids and alkalis",
        "Avoid prolonged exposure to moisture to prevent clumping",
      ],
      safety: {
        hazards: [
          "Irritant to skin, eyes, and respiratory system",
          "Harmful if swallowed in large quantities",
          "Toxic to aquatic life in high concentrations",
        ],
        precautions: [
          "Use protective gloves, goggles, and masks when handling",
          "Avoid inhalation of dust; use in well-ventilated areas",
          "Follow proper disposal methods according to local regulations",
        ],
      },
    },
  },
  {
    id: 35,
    heading: "Copper Sulfate",
    description:
      "Copper Sulfate is a versatile compound used in agriculture, water treatment, and industrial applications. It acts as a fungicide, algaecide, and catalyst in various chemical processes.",
    page: ["Agro Chemical"],
    chemicalData: {
      name: "Copper Sulfate",
      formula: "CuSO₄",
      molarMass: "159.61 g/mol (anhydrous), 249.68 g/mol (pentahydrate)",
      casNumber: "7758-98-7",
      appearance:
        "Blue crystalline solid (pentahydrate), white-gray powder (anhydrous)",
      odor: "Odorless",
      solubility: "Highly soluble in water (23 g/100 mL at 20°C)",
      pH: "3.5-4.5 (5% solution)",
      concentration: "Available in anhydrous and pentahydrate forms",
      applications: {
        agriculture: [
          "Used as a fungicide, algaecide, and herbicide in agriculture",
          "Essential micronutrient in animal feed and fertilizers",
        ],
        industrial: [
          "Used in electroplating and metal surface treatment",
          "Component in textile dyeing and printing processes",
        ],
        waterTreatment: [
          "Used to control algae and bacteria in water reservoirs and pools",
          "Added to wastewater treatment systems for purification",
        ],
        medical: [
          "Used in medical applications as an antiseptic and astringent",
          "Employed in the preparation of diagnostic reagents",
        ],
      },
      properties: [
        { property: "Boiling Point", value: "Decomposes before boiling" },
        {
          property: "Melting Point",
          value: "110°C (pentahydrate), 560°C (anhydrous)",
        },
        {
          property: "Density",
          value: "3.6 g/cm³ (anhydrous), 2.28 g/cm³ (pentahydrate)",
        },
        { property: "Solubility in Alcohol", value: "Slightly soluble" },
        { property: "Hygroscopic", value: "Absorbs moisture from air" },
      ],
      packaging: [
        "Available in 25kg, 50kg HDPE bags with inner lining",
        "Packed in moisture-proof bags to prevent caking",
        "Bulk packaging available for industrial applications",
      ],
      storage: [
        "Store in a cool, dry, and well-ventilated area",
        "Keep away from direct sunlight and moisture",
        "Avoid contact with acids and strong oxidizers",
      ],
      safety: {
        hazards: [
          "Harmful if swallowed; can cause gastrointestinal distress",
          "Irritant to skin, eyes, and respiratory system",
          "Toxic to aquatic life in high concentrations",
        ],
        precautions: [
          "Use protective gloves, goggles, and masks when handling",
          "Avoid inhalation of dust; use in well-ventilated areas",
          "Follow proper disposal regulations to prevent environmental contamination",
        ],
      },
    },
  },
  {
    id: 36,
    heading: "Gibberellic Acid",
    description:
      "Gibberellic Acid is a plant growth regulator used in agriculture to enhance seed germination, stem elongation, and fruit development. It helps improve crop yield and quality in various horticultural and agricultural applications.",
    page: ["Agro Chemical"],
    chemicalData: {
      name: "Gibberellic Acid",
      formula: "C19H22O6",
      molarMass: "346.37 g/mol",
      casNumber: "77-06-5",
      appearance: "White to off-white crystalline powder",
      odor: "Odorless",
      solubility: "Slightly soluble in water, soluble in ethanol and acetone",
      pH: "3.8 - 4.5 (1% solution)",
      concentration:
        "Available in various concentrations, commonly 90% technical grade and 0.001% - 10% formulated products",
      applications: {
        agriculture: [
          "Used as a plant growth regulator to stimulate seed germination and growth",
          "Promotes fruit setting, flowering, and cell elongation in plants",
          "Enhances yield in crops like rice, wheat, grapes, and citrus fruits",
        ],
        horticulture: [
          "Speeds up seed germination and seedling development",
          "Used in tissue culture for plant propagation",
        ],
        industrial: [
          "Employed in the brewing industry to stimulate malting in barley",
          "Used in research and biotechnology for studying plant hormones",
        ],
      },
      properties: [
        { property: "Boiling Point", value: "Decomposes before boiling" },
        { property: "Melting Point", value: "233-235°C" },
        { property: "Density", value: "1.2 g/cm³" },
        {
          property: "Stability",
          value:
            "Stable under normal conditions but decomposes in strong acidic or alkaline environments",
        },
      ],
      packaging: [
        "Available in 1g, 5g, 25g, 100g, 1kg, and bulk packaging",
        "Stored in sealed aluminum foil bags, HDPE containers, or fiber drums",
      ],
      storage: [
        "Store in a cool, dry place away from direct sunlight",
        "Keep in tightly closed containers to prevent moisture absorption",
        "Avoid exposure to strong acids and oxidizing agents",
      ],
      safety: {
        hazards: [
          "Low toxicity but can cause mild irritation to skin and eyes",
          "May cause respiratory irritation if inhaled in large amounts",
        ],
        precautions: [
          "Wear protective gloves, goggles, and a dust mask when handling",
          "Use in a well-ventilated area to prevent inhalation",
          "Follow proper disposal guidelines to avoid environmental contamination",
        ],
      },
    },
  },
  {
    id: 37,
    heading: "Amino Acid",
    description:
      "Amino Acid is plant growth enhancers used in agriculture to improve nutrient absorption, stress resistance, and crop yield. They promote healthy plant development and are widely used in fertilizers and biostimulants.",
    page: ["Agro Chemical"],
    chemicalData: {
      name: "Amino Acid",
      formula: "Varies (General structure: NH2-CHR-COOH)",
      molarMass: "Varies depending on the specific amino acid",
      casNumber: "Varies for different amino acids",
      appearance: "White to off-white crystalline powder or granules",
      odor: "Odorless or slightly characteristic odor",
      solubility: "Soluble in water, varies in organic solvents",
      pH: "Varies (commonly 4 - 7 for neutral amino acids)",
      concentration:
        "Available in various concentrations depending on the application",
      applications: {
        agriculture: [
          "Used as a bio-stimulant to enhance plant growth and crop yield",
          "Improves soil fertility and nutrient uptake",
          "Acts as a chelating agent in fertilizers",
        ],
        foodIndustry: [
          "Used as a food additive and nutritional supplement",
          "Essential in protein synthesis and metabolism",
        ],
        pharmaceuticals: [
          "Used in dietary supplements and medical nutrition products",
          "Supports muscle recovery, wound healing, and immune system function",
        ],
        cosmetics: [
          "Used in skin and hair care products for hydration and protein repair",
          "Acts as an anti-aging and moisturizing agent",
        ],
      },
      properties: [
        { property: "Boiling Point", value: "Decomposes before boiling" },
        {
          property: "Melting Point",
          value: "Varies (typically 200-300°C with decomposition)",
        },
        {
          property: "Density",
          value: "Varies based on the specific amino acid",
        },
        {
          property: "Stability",
          value:
            "Stable under normal conditions, but sensitive to strong acids and bases",
        },
      ],
      packaging: [
        "Available in 25kg bags, 50kg drums, or bulk packaging",
        "Stored in airtight containers to prevent moisture absorption",
      ],
      storage: [
        "Store in a cool, dry place away from direct sunlight",
        "Keep in sealed containers to prevent contamination",
        "Avoid exposure to strong acids, bases, and oxidizing agents",
      ],
      safety: {
        hazards: [
          "Generally considered safe, but may cause irritation in high concentrations",
          "Some amino acids may be allergens to sensitive individuals",
        ],
        precautions: [
          "Use protective gloves and a mask when handling large quantities",
          "Ensure proper ventilation in handling areas",
          "Follow local disposal regulations for waste management",
        ],
      },
    },
  },
  {
    id: 38,
    heading: "Borax Decahydrate",
    description:
      "Borax Decahydrate is a versatile compound used in detergents, glass manufacturing, and agriculture. It acts as a buffering agent, water softener, and essential micronutrient for plant growth.",
    page: ["Agro Chemical"],
    chemicalData: {
      name: "Borax Decahydrate",
      formula: "Na₂B₄O₇·10H₂O",
      molarMass: "381.37 g/mol",
      casNumber: "1303-96-4",
      appearance: "White crystalline powder or granules",
      odor: "Odorless",
      solubility:
        "Soluble in water (4.7 g/100 mL at 20°C); insoluble in alcohol",
      pH: "9.3 - 9.5 (1% solution in water at 25°C)",
      concentration:
        "Available in various concentrations depending on application",
      applications: {
        industrial: [
          "Used in glass and ceramic manufacturing",
          "Acts as a flux in metallurgy",
          "Used in welding and brazing applications",
        ],
        agriculture: [
          "Used as a micronutrient in fertilizers",
          "Enhances plant growth by providing boron",
        ],
        detergents: [
          "Used in laundry detergents and household cleaners",
          "Improves stain removal and softens water",
        ],
        pharmaceuticals: [
          "Used in some medicinal and cosmetic formulations",
          "Acts as a pH buffer in eye drops and skin creams",
        ],
        flameRetardants: [
          "Used in fire retardant coatings and insulation materials",
        ],
      },
      properties: [
        { property: "Boiling Point", value: "Decomposes before boiling" },
        {
          property: "Melting Point",
          value: "62°C (loses water, forms anhydrous borax at 320°C)",
        },
        { property: "Density", value: "1.73 g/cm³" },
        {
          property: "Stability",
          value: "Stable under normal conditions but loses water upon heating",
        },
      ],
      packaging: [
        "Available in 25kg and 50kg bags",
        "Packed in moisture-resistant containers",
      ],
      storage: [
        "Store in a cool, dry place away from moisture",
        "Keep in tightly sealed containers to prevent water absorption",
        "Avoid exposure to strong acids and bases",
      ],
      safety: {
        hazards: [
          "May cause eye and skin irritation",
          "Harmful if ingested in large quantities",
          "Prolonged exposure may affect fertility and development",
        ],
        precautions: [
          "Use protective gloves, safety goggles, and a dust mask when handling",
          "Ensure proper ventilation in storage and handling areas",
          "Follow local disposal regulations for waste management",
        ],
      },
    },
  },
  {
    id: 39,
    heading: "Citric Acid Anhydrous",
    description:
      "Citric Acid Anhydrous is a widely used acidulant and preservative in food, beverages, and pharmaceuticals. It also serves as a pH regulator and chelating agent in industrial and cosmetic applications.",
    page: ["Agro Chemical"],
    chemicalData: {
      name: "Citric Acid Anhydrous",
      formula: "C₆H₈O₇",
      molarMass: "192.12 g/mol",
      casNumber: "77-92-9",
      appearance: "White crystalline powder or granules",
      odor: "Odorless",
      solubility:
        "Highly soluble in water (61.8 g/100 mL at 20°C); soluble in ethanol",
      pH: "2.2 (1% aqueous solution at 25°C)",
      concentration:
        "Available in various concentrations depending on application",
      applications: {
        foodAndBeverage: [
          "Used as a flavoring agent and preservative in soft drinks and candies",
          "Acts as an acidulant in food processing",
        ],
        pharmaceuticals: [
          "Used as an excipient in tablets and effervescent powders",
          "Serves as a pH regulator in medicinal formulations",
        ],
        cosmetics: [
          "Used in skincare products as an exfoliating agent",
          "Acts as a pH adjuster in shampoos and creams",
        ],
        industrial: [
          "Used in cleaning products for descaling and rust removal",
          "Acts as a chelating agent in detergents and water treatment",
        ],
      },
      properties: [
        { property: "Melting Point", value: "153°C (decomposes)" },
        { property: "Density", value: "1.665 g/cm³" },
        { property: "Boiling Point", value: "Decomposes before boiling" },
        {
          property: "Stability",
          value: "Stable under normal conditions; hygroscopic",
        },
      ],
      packaging: [
        "Available in 25kg and 50kg bags",
        "Packed in moisture-resistant bags or drums",
      ],
      storage: [
        "Store in a cool, dry, and well-ventilated area",
        "Keep in tightly sealed containers to prevent moisture absorption",
        "Avoid exposure to strong oxidizers and bases",
      ],
      safety: {
        hazards: [
          "May cause mild skin and eye irritation",
          "Can be harmful if inhaled in large amounts",
        ],
        precautions: [
          "Use protective gloves and safety goggles when handling",
          "Ensure proper ventilation in storage and handling areas",
          "Wash hands thoroughly after handling",
        ],
      },
    },
  },
  {
    id: 40,
    heading: "Boron 20%",
    description:
      "Boron 20% is a micronutrient used in agriculture to support plant growth, cell division, and fruit development. It helps improve crop yield and quality by preventing boron deficiencies in soil.",
    page: ["Agro Chemical"],
    chemicalData: {
      name: "Boron",
      formula: "B",
      molarMass: "10.81 g/mol",
      casNumber: "7440-42-8",
      appearance:
        "Black-brown amorphous powder or silver-grey crystalline solid",
      odor: "Odorless",
      solubility: "Insoluble in water; soluble in molten metals and some acids",
      pH: "Not applicable (elemental form)",
      concentration:
        "Available in various purities and particle sizes depending on application",
      applications: {
        industrial: [
          "Used in metallurgy as an additive to improve the hardness of steel",
          "Essential in the production of high-strength glass and ceramics",
        ],
        agriculture: [
          "Used as a micronutrient fertilizer to promote plant growth",
          "Essential for cell wall development in plants",
        ],
        electronics: [
          "Utilized in semiconductor manufacturing",
          "Acts as a dopant in silicon wafers for electronic components",
        ],
        pharmaceuticals: [
          "Used in some medicinal formulations",
          "Has potential applications in cancer treatment and antiseptics",
        ],
      },
      properties: [
        { property: "Melting Point", value: "2076°C" },
        { property: "Boiling Point", value: "3927°C" },
        {
          property: "Density",
          value: "2.34 g/cm³ (crystalline), 2.08 g/cm³ (amorphous)",
        },
        {
          property: "Electrical Conductivity",
          value: "Poor conductor at room temperature",
        },
        {
          property: "Hardness",
          value: "9.5 on the Mohs scale (crystalline form)",
        },
      ],
      packaging: [
        "Available in powder, granular, or crystalline form",
        "Packed in sealed drums or plastic-lined bags (5kg, 25kg, or bulk quantities)",
      ],
      storage: [
        "Store in a cool, dry place away from moisture",
        "Keep away from strong oxidizing agents",
        "Ensure proper ventilation in storage areas",
      ],
      safety: {
        hazards: [
          "Dust may cause mild respiratory irritation if inhaled",
          "Prolonged exposure may lead to boron toxicity",
        ],
        precautions: [
          "Use protective masks and gloves when handling",
          "Ensure proper ventilation when using in powder form",
          "Avoid prolonged skin and eye contact",
        ],
      },
    },
  },
];
