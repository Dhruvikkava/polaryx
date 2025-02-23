import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import FiberSmartRecordIcon from "@mui/icons-material/FiberSmartRecord";
import Tree1Img from "../images/tree1.png";
import Tree2Img from "../images/tree2.png";
import PlantImg from "../images/plant.png";
import Cloud1Img from "../images/cloud1.png";
import Cloud2Img from "../images/cloud2.png";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const ChemicalContent = ({ name }) => {
  return (
    <div className="d-flex">
      <FiberSmartRecordIcon />
      <p className="ms-3">{name}</p>
    </div>
  );
};

const ProductRightSection = () => {
  return (
    <>
      <img
        src={Tree1Img}
        alt="product-image"
        className="position-absolute tree1-img"
      />
      <img
        src={Tree2Img}
        alt="product-image"
        className="position-absolute tree2-img"
      />
      <img
        src={PlantImg}
        alt="product-image"
        className="position-absolute cloud plant-img"
      />
      <img
        src={Cloud1Img}
        alt="product-image"
        className="position-absolute cloud cloud1-img"
      />
      <img
        src={Cloud2Img}
        alt="product-image"
        className="position-absolute cloud cloud2-img"
      />
    </>
  );
};

export default function ProductTab() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      className="ps-3 pe-5"
      sx={{
        maxWidth: { xs: 320, sm: 480, md: 767, lg: "100%" },
      }}
    >
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
        >
          <Tab label="Water treatment" {...a11yProps(0)} />
          <Tab label="Purifier Agent" {...a11yProps(1)} />
          <Tab label="Cosmetic" {...a11yProps(2)} />
          <Tab label="Food & Beverages" {...a11yProps(3)} />
          <Tab label="Solvents" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <div className="row">
          <div className="col-md-7">
            <ChemicalContent name="Hydrochloric Acid (HCl)" />
            <ChemicalContent name="Aluminum Sulfate (Alum)" />
            <ChemicalContent name="Ferric Chloride" />
            <ChemicalContent name="Poly Aluminum Chloride (PAC)" />
            <ChemicalContent name="Sodium Hypochlorite (NaOCl)" />
            <ChemicalContent name="Calcium Hypochlorite" />
            <ChemicalContent name="Sulfuric Acid (H₂SO₄)" />
            <ChemicalContent name="Sodium Hydroxide (Caustic Soda)" />
          </div>
          <div className="col-md-5 position-relative product-custom-image">
            <ProductRightSection />
          </div>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <div className="row">
          <div className="col-md-7">
            <ChemicalContent name="Hydrogen Peroxide (H₂O₂)" />
            <ChemicalContent name="Potassium Permanganate (KMnO₄)" />
            <ChemicalContent name="Poly Alumenum Chloride" />
            <ChemicalContent name="Activated Carbon" />
            <ChemicalContent name="Zeolites" />
            <ChemicalContent name="Ferric Chloride" />
            <ChemicalContent name="Aluminum Sulfate (Alum)" />
            <ChemicalContent name="Ethanol" />
          </div>
          <div className="col-md-5 position-relative product-custom-image">
            <ProductRightSection />
          </div>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <div className="row">
          <div className="col-md-7">
            <ChemicalContent name="Lactic Acid" />
            <ChemicalContent name="Titanium Dioxide (TiO₂)" />
            <ChemicalContent name="Acetic Acid glacial" />
            <ChemicalContent name="Acid Slurry 90% (LABSA)" />
            <ChemicalContent name="Alpha Olefin Sulphonates (AOS) liquid" />
            <ChemicalContent name="Ascorbic acid (Vitamin C)" />
            <ChemicalContent name="Sodium lauryl Ether Sulphate (SLES)" />
            <ChemicalContent name="Sodium Citrate Dihydrate" />
          </div>
          <div className="col-md-5 position-relative product-custom-image">
            <ProductRightSection />
          </div>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <div className="row">
          <div className="col-md-7">
            <ChemicalContent name="Citric Acid" />
            <ChemicalContent name="Acrylic acid" />
            <ChemicalContent name="Dextrose Anhydrous" />
            <ChemicalContent name="Sodium Bicarbonate (Baking Soda)" />
            <ChemicalContent name="Sodium Benzoate" />
            <ChemicalContent name="Propylene Glycol" />
            <ChemicalContent name="Dextrose Anhydrous" />
            <ChemicalContent name="Lactic Acid" />
          </div>
          <div className="col-md-5 position-relative product-custom-image">
            <ProductRightSection />
          </div>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        <div className="row">
          <div className="col-md-7">
            <ChemicalContent name="Acrylic acid" />
            <ChemicalContent name="Diethylene Glycol (DEG)" />
            <ChemicalContent name="Formic Acid" />
            <ChemicalContent name="Glycerin" />
            <ChemicalContent name="Light Liquid Paraffin" />
            <ChemicalContent name="Nitrobenzene" />
            <ChemicalContent name="Propylene Glycol" />
            <ChemicalContent name="Ethyl Acetate" />
          </div>
          <div className="col-md-5 position-relative product-custom-image">
            <ProductRightSection />
          </div>
        </div>
      </CustomTabPanel>
    </Box>
  );
}
