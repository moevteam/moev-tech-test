/**
 * This skeleton includes the mantine library (https://mantine.dev/)
 * You will NOT be expected to know or use this library in the test
 */
import "@mantine/core/styles.css";
import "./app.scss";

import React from "react";
import { Container, Text } from "@mantine/core";

export const App = () => {
  return (
    <Container p={50}>
      <Text className="intro-text">
        If you can see me on http://localhost:5173/, you're ready for the test!
      </Text>
    </Container>
  );
};
