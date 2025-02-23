import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

const Progressbar = () => {
  const [isShowProgress, setIsShowProgress] = React.useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsShowProgress(false);
    }, 1500);
  }, []);
  return (
    isShowProgress && (
      <Box sx={{ width: "100%" }}>
        <LinearProgress color={"info"} />
      </Box>
    )
  );
};

export default Progressbar;
