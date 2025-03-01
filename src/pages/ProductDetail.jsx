import React from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
} from "@mui/material";
import RadioButtonCheckedRoundedIcon from "@mui/icons-material/RadioButtonCheckedRounded";
import { useSearchParams } from "react-router-dom";
import Progressbar from "../components/Progressbar";
import Custombanner from "../components/Custombanner";
import { productData } from "../constants";

const ProductDetail = () => {
  const [searchParams] = useSearchParams();
  const paramValue = searchParams.get("id");
  const filteredProduct = productData.find(
    (product) => product.id === Number(paramValue)
  );
  const data = filteredProduct?.chemicalData;

  return (
    <div className="page-wrapper">
      <Progressbar />
      <Custombanner name={filteredProduct?.heading} heading={"Products"} />
      <Container sx={{ py: 5 }}>
        {/* General Information */}
        <Card sx={{ mb: 4, boxShadow: 3 }}>
          <CardContent>
            <Typography
              variant="h5"
              className="font-weight-600 mb-3"
              color="primary"
              gutterBottom
            >
              General Information
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Typography>
                  <strong>Chemical Name:</strong> {data.name}
                </Typography>
                <Typography>
                  <strong>Molecular Formula:</strong> {data.formula}
                </Typography>
                <Typography>
                  <strong>Molar Mass:</strong> {data.molarMass}
                </Typography>
                <Typography>
                  <strong>CAS Number:</strong> {data.casNumber}
                </Typography>
                <Typography>
                  <strong>pH:</strong> {data.pH}
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography>
                  <strong>Appearance:</strong> {data.appearance}
                </Typography>
                <Typography>
                  <strong>Odor:</strong> {data.odor}
                </Typography>
                <Typography>
                  <strong>Solubility:</strong> {data.solubility}
                </Typography>
                <Typography>
                  <strong>Concentration Range:</strong> {data.concentration}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        {/* Applications */}
        <Card sx={{ mb: 4, boxShadow: 3 }}>
          <CardContent>
            <Typography
              variant="h5"
              className="font-weight-600 mb-3"
              color="primary"
              gutterBottom
            >
              Applications
            </Typography>
            <Grid container spacing={3}>
              {Object.entries(data.applications).map(([key, values]) => (
                <Grid item xs={12} md={6} key={key}>
                  <Typography
                    variant="h6"
                    color="error"
                    className="text-capitalize"
                  >
                    {key.replace(/([A-Z])/g, " $1")}
                  </Typography>
                  <List className="pt-0">
                    {values.map((item, index) => (
                      <ListItem key={index} disablePadding>
                        <ListItemText
                          primary={
                            <>
                              <RadioButtonCheckedRoundedIcon
                                fontSize="small"
                                className="h-auto me-2"
                                sx={{ width: 16 }}
                              />
                              {item?.includes(":") && (
                                <Typography
                                  variant="subtitle1"
                                  fontWeight="bold"
                                  component="span"
                                >
                                  {item.split(":")[0]}:
                                </Typography>
                              )}{" "}
                              <Typography variant="body2" component="span">
                                {item?.includes(":")
                                  ? item.split(":")[1]
                                  : item}
                              </Typography>
                            </>
                          }
                        />
                      </ListItem>
                    ))}
                  </List>
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>

        {/* Chemical & Physical Properties */}
        <Card sx={{ mb: 4, boxShadow: 3 }}>
          <CardContent>
            <Typography
              variant="h5"
              className="font-weight-600 mb-3"
              color="primary"
              gutterBottom
            >
              Chemical & Physical Properties
            </Typography>
            <TableContainer component={Paper}>
              <Table>
                <TableBody>
                  {data.properties.map((prop, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        <strong>{prop.property}</strong>
                      </TableCell>
                      <TableCell>{prop.value}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>

        {/* Packaging & Storage */}
        <Card sx={{ mb: 4, boxShadow: 3 }}>
          <CardContent>
            <Typography
              variant="h5"
              className="font-weight-600 mb-3"
              color="primary"
              gutterBottom
            >
              Packaging & Storage
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Typography variant="h6" color="success">
                  ✅ Packaging:
                </Typography>
                <List>
                  {data.packaging.map((pkg, index) => (
                    <ListItem key={index} disablePadding>
                      <ListItemText primary={pkg} />
                    </ListItem>
                  ))}
                </List>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h6" color="success">
                  ✅ Storage Conditions:
                </Typography>
                <List>
                  {data.storage.map((storage, index) => (
                    <ListItem key={index} disablePadding>
                      <ListItemText primary={storage} />
                    </ListItem>
                  ))}
                </List>
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        {/* Safety & Handling */}
        <Card sx={{ boxShadow: 3 }}>
          <CardContent>
            <Typography
              variant="h5"
              className="font-weight-600 mb-3"
              color="error"
              gutterBottom
            >
              Safety & Handling
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Typography variant="h6" color="error">
                  ⚠️ Hazards:
                </Typography>
                <List>
                  {data.safety.hazards.map((hazard, index) => (
                    <ListItem key={index} disablePadding>
                      <ListItemText primary={hazard} />
                    </ListItem>
                  ))}
                </List>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h6" color="warning">
                  🛑 Precautions:
                </Typography>
                <List>
                  {data.safety.precautions.map((precaution, index) => (
                    <ListItem key={index} disablePadding>
                      <ListItemText primary={precaution} />
                    </ListItem>
                  ))}
                </List>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default ProductDetail;
