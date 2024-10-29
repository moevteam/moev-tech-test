import { App } from "./App";
import React from "react";
import { createRoot } from "react-dom/client";
import { MantineProvider } from "@mantine/core";
const container = document.getElementById("root") as HTMLElement;

const root = createRoot(container);

root.render(
  <MantineProvider defaultColorScheme="dark">
    <App />
  </MantineProvider>
);
