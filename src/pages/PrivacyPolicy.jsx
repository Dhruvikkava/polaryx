import React from "react";
import { Container, Typography, Box } from "@mui/material";
import ScrollToTop from "../components/ScrollToTop";
import Progressbar from "../components/Progressbar";
import { email } from "../constants";

const PrivacyPolicy = () => {
  return (
    <div className="page-wrapper">
      <ScrollToTop />
      <Progressbar />
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <h2 className="text-center heading pt-3">Privacy Policy</h2>
        <Typography variant="subtitle1" color="textSecondary" gutterBottom>
          Effective Date: 04/01/2025
        </Typography>

        <Box sx={{ my: 2 }}>
          <Typography variant="body1" paragraph>
            Welcome to Polaryx International. Your privacy is important to us.
            This Privacy Policy explains how we collect, use, disclose, and
            safeguard your information when you visit our website.
          </Typography>
          <Typography variant="body1" paragraph>
            By using our website, you agree to the collection and use of
            information in accordance with this policy.
          </Typography>
        </Box>

        <Typography variant="h5" gutterBottom>
          1. Information We Collect
        </Typography>
        <Typography variant="body1" paragraph>
          We may collect the following types of information:
        </Typography>
        <Typography variant="subtitle1" fontWeight="bold">
          a. Personal Information:
        </Typography>
        <Typography variant="body2" paragraph>
          - Name, email address, phone number, company name, shipping address,
          billing details, and other information voluntarily provided.
        </Typography>
        <Typography variant="subtitle1" fontWeight="bold">
          b. Non-Personal Information:
        </Typography>
        <Typography variant="body2" paragraph>
          - Browser type, IP address, pages visited, time spent on the website,
          and other analytical data.
        </Typography>
        <Typography variant="subtitle1" fontWeight="bold">
          c. Cookies and Tracking Technologies:
        </Typography>
        <Typography variant="body2" paragraph>
          - We use cookies and similar technologies to enhance user experience
          and analyze website traffic.
        </Typography>

        <Typography variant="h5" gutterBottom>
          2. How We Use Your Information
        </Typography>
        <Typography variant="body1" paragraph>
          We use the collected information for the following purposes:
        </Typography>
        <Typography variant="body2" paragraph>
          - To provide and manage our services
          <br />
          - To process transactions and orders
          <br />
          - To communicate with you regarding inquiries or orders
          <br />
          - To improve our website, products, and services
          <br />
          - To personalize user experience
          <br />- To comply with legal obligations
        </Typography>

        <Typography variant="h5" gutterBottom>
          3. How We Share Your Information
        </Typography>
        <Typography variant="body1" paragraph>
          We do not sell or rent your personal information. However, we may
          share your information in the following cases:
        </Typography>
        <Typography variant="body2" paragraph>
          - With trusted third-party service providers who assist in website
          operations, payments, and logistics
          <br />
          - With legal authorities if required by law
          <br />- In the event of a business merger, sale, or acquisition
        </Typography>

        <Typography variant="h5" gutterBottom>
          4. Cookies and Tracking Technologies
        </Typography>
        <Typography variant="body1" paragraph>
          We use cookies and similar tracking technologies to improve website
          functionality and user experience. You can modify your browser
          settings to disable cookies, but some features may not function
          properly.
        </Typography>

        <Typography variant="h5" gutterBottom>
          5. Data Security
        </Typography>
        <Typography variant="body1" paragraph>
          We implement appropriate security measures to protect your personal
          information. However, no electronic storage or transmission method is
          100% secure, and we cannot guarantee absolute security.
        </Typography>

        <Typography variant="h5" gutterBottom>
          6. Your Rights and Choices
        </Typography>
        <Typography variant="body1" paragraph>
          Depending on your location, you may have the right to:
        </Typography>
        <Typography variant="body2" paragraph>
          - Access, update, or delete your personal information
          <br />
          - Opt-out of receiving marketing communications
          <br />- Request details about how your data is used
        </Typography>
        <Typography variant="body1" paragraph>
          To exercise your rights, please contact us at {email}.
        </Typography>

        <Typography variant="h5" gutterBottom>
          7. Third-Party Links
        </Typography>
        <Typography variant="body1" paragraph>
          Our website may contain links to third-party websites. We are not
          responsible for the privacy policies or content of those external
          sites.
        </Typography>

        <Typography variant="h5" gutterBottom>
          8. Changes to This Privacy Policy
        </Typography>
        <Typography variant="body1" paragraph>
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page with the updated effective date.
        </Typography>

        <Typography variant="h5" gutterBottom>
          9. Contact Us
        </Typography>
        <Typography variant="body1" paragraph>
          If you have any questions about this Privacy Policy, please contact
          us:
        </Typography>
        <Typography variant="body2">
          Email: {email}
          <br />
          Phone: +91 80130 31369
          <br />
          Address: Kamrej, Surat, India
        </Typography>
      </Container>
    </div>
  );
};

export default PrivacyPolicy;
