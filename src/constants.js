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
  },
  {
    id: 18,
    heading: "Ascorbic acid",
    description:
      "Ascorbic Acid (Vitamin C) is a powerful antioxidant used in food, pharmaceuticals, and skincare. It boosts immunity, enhances collagen production, and prevents oxidation in food and beverages.",
    page: ["Cosmetic"],
  },
  {
    id: 19,
    heading: "Sodium Hypochlorite",
    description:
      "Sodium Hypochlorite is a powerful disinfectant and bleaching agent widely used in water treatment, household cleaners, and sanitation. It effectively kills bacteria, viruses, and mold, making it essential for hygiene and industrial applications.",
    page: ["Purifier Agent"],
  },
  {
    id: 20,
    heading: "Acetic Acid",
    description:
      "Acetic Acid is an organic acid commonly used in food preservation, vinegar production, and industrial applications. It acts as a pH regulator, solvent, and antimicrobial agent in various industries, including food, pharmaceuticals, and textiles.",
    page: ["Purifier Agent"],
  },
  {
    id: 21,
    heading: "Ammonium Hydroxide",
    description:
      "Ammonium Hydroxide is a strong alkaline solution used in cleaning products, water treatment, and chemical manufacturing. It acts as a pH regulator, neutralizer, and household cleaner, effectively removing grease and stains.",
    page: ["Purifier Agent"],
  },
  {
    id: 22,
    heading: "Citric Acid",
    description:
      "Citric Acid is a natural acid widely used as a flavor enhancer, preservative, and pH regulator in food and beverages. It also serves as a cleaning agent and chelating agent in cosmetics, pharmaceuticals, and industrial applications.",
    page: ["Food & Beverages"],
  },
  {
    id: 23,
    heading: "Potassium Chloride",
    description:
      "Potassium Chloride is a vital electrolyte used in pharmaceuticals, food processing, and fertilizers. It helps maintain fluid balance in the body and serves as a potassium supplement and a salt substitute in food products.",
    page: ["Food & Beverages"],
  },
  {
    id: 24,
    heading: "Acrylic acid",
    description:
      "Acrylic Acid is a key raw material used in the production of adhesives, coatings, and superabsorbent polymers. It provides strong adhesion, durability, and water absorption properties, making it essential in industrial and consumer applications.",
    page: ["Food & Beverages", "Solvents"],
  },
  {
    id: 25,
    heading: "Citric Acid Monohydrous",
    description:
      "Citric Acid Monohydrate is a versatile acid used as a preservative, pH regulator, and flavor enhancer in food, beverages, and pharmaceuticals. It also serves as a chelating agent in cosmetics, detergents, and industrial applications.",
    page: ["Food & Beverages"],
  },
  {
    id: 26,
    heading: "Dextrose Anhydrous",
    description:
      "Dextrose Anhydrous is a simple sugar used as a sweetener, energy source, and pharmaceutical excipient. It is commonly found in food, beverages, and medical applications like oral rehydration solutions and IV fluids.",
    page: ["Food & Beverages"],
  },
  {
    id: 27,
    heading: "Glycerin",
    description:
      "Glycerin is a versatile humectant and moisturizer widely used in cosmetics, pharmaceuticals, and food products. It helps retain moisture, improves skin hydration, and acts as a solvent in various formulations.",
    page: ["Food & Beverages", "Solvents"],
  },
  {
    id: 28,
    heading: "Sodium Bicarbonate",
    description:
      "Sodium Bicarbonate, commonly known as baking soda, is a versatile compound used as a leavening agent, pH regulator, and cleaning agent. It is widely utilized in baking, pharmaceuticals, and household cleaning products.",
    page: ["Food & Beverages"],
  },
  {
    id: 29,
    heading: "Acetone",
    description:
      "Acetone is a fast-evaporating solvent widely used in cosmetics, pharmaceuticals, and industrial applications. It is commonly found in nail polish removers, paint thinners, and chemical synthesis due to its strong dissolving properties.",
    page: ["Solvents"],
  },
  {
    id: 30,
    heading: "Ethanol",
    description:
      "Ethanol is a versatile alcohol used as a solvent, disinfectant, and fuel additive. It is widely utilized in pharmaceuticals, cosmetics, and alcoholic beverages due to its antimicrobial and preservative properties.",
    page: ["Solvents"],
  },
  {
    id: 31,
    heading: "Hexane",
    description:
      "Hexane is a highly volatile solvent widely used in oil extraction, adhesives, and industrial cleaning. It is valued for its strong dissolving properties in chemical and manufacturing processes.",
    page: ["Solvents"],
  },
  {
    id: 32,
    heading: "Acetonitrile",
    description:
      "Acetonitrile is a colorless, volatile solvent widely used in pharmaceuticals, chemical synthesis, and laboratory analysis. It is valued for its high solubility and effectiveness in organic reactions and chromatography.",
    page: ["Solvents"],
  },
  {
    id: 33,
    heading: "Ammonium Nitrate",
    description:
      "Ammonium Nitrate is a highly soluble compound used in fertilizers, explosives, and industrial applications. It provides a rich nitrogen source for plant growth and is a key ingredient in mining and construction explosives.",
    page: ["Agro Chemical"],
  },
  {
    id: 34,
    heading: "Zinc Sulfate",
    description:
      "Zinc Sulfate is a water-soluble compound used in pharmaceuticals, agriculture, and industrial applications. It serves as a dietary supplement, fertilizer additive, and a key ingredient in various chemical processes.",
    page: ["Agro Chemical"],
  },
  {
    id: 35,
    heading: "Copper Sulfate",
    description:
      "Copper Sulfate is a versatile compound used in agriculture, water treatment, and industrial applications. It acts as a fungicide, algaecide, and catalyst in various chemical processes.",
    page: ["Agro Chemical"],
  },
  {
    id: 36,
    heading: "Gibberellic Acid",
    description:
      "Gibberellic Acid is a plant growth regulator used in agriculture to enhance seed germination, stem elongation, and fruit development. It helps improve crop yield and quality in various horticultural and agricultural applications.",
    page: ["Agro Chemical"],
  },
  {
    id: 37,
    heading: "Amino Acid 50 & 80%",
    description:
      "Amino Acid is plant growth enhancers used in agriculture to improve nutrient absorption, stress resistance, and crop yield. They promote healthy plant development and are widely used in fertilizers and biostimulants.",
    page: ["Agro Chemical"],
  },
  {
    id: 38,
    heading: "Borax Decahydrate",
    description:
      "Borax Decahydrate is a versatile compound used in detergents, glass manufacturing, and agriculture. It acts as a buffering agent, water softener, and essential micronutrient for plant growth.",
    page: ["Agro Chemical"],
  },
  {
    id: 39,
    heading: "Citric Acid Anhydrous",
    description:
      "Citric Acid Anhydrous is a widely used acidulant and preservative in food, beverages, and pharmaceuticals. It also serves as a pH regulator and chelating agent in industrial and cosmetic applications.",
    page: ["Agro Chemical"],
  },
  {
    id: 40,
    heading: "Boron 20%",
    description:
      "Boron 20% is a micronutrient used in agriculture to support plant growth, cell division, and fruit development. It helps improve crop yield and quality by preventing boron deficiencies in soil.",
    page: ["Agro Chemical"],
  },
];
