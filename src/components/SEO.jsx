import { useEffect } from "react";

const SEO = ({ title, description }) => {
  const keywords =
    "chemical exporter, pharmaceutical exporter, spice exporter, bulk chemicals supplier, industrial chemicals, specialty chemicals, organic chemicals, active pharmaceutical ingredients (API), pharma raw materials, food-grade chemicals, agrochemicals, chemical trading company, global chemical suppliers, international chemical export, premium spice exporters, high-quality pharmaceutical exports, Polaryx International, chemical distribution, wholesale chemical supplier";
  useEffect(() => {
    document.title = title;

    if (description) {
      const metaDescription = document.querySelector(
        "meta[name='description']"
      );
      if (metaDescription) {
        metaDescription.setAttribute("content", description);
      } else {
        const newMeta = document.createElement("meta");
        newMeta.name = "description";
        newMeta.content = description;
        document.head.appendChild(newMeta);
      }
    }

    if (keywords) {
      const metaKeywords = document.querySelector("meta[name='keywords']");
      if (metaKeywords) {
        metaKeywords.setAttribute("content", keywords);
      } else {
        const newMeta = document.createElement("meta");
        newMeta.name = "keywords";
        newMeta.content = keywords;
        document.head.appendChild(newMeta);
      }
    }
  }, [title, description, keywords]);

  return null;
};

export default SEO;
