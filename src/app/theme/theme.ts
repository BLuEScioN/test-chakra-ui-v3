"use client";

import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

import { switchSlotRecipe } from "@/recipes/SwitchRecipe";

const appConfig = defineConfig({
  //   cssVarsPrefix: "stacks",
  // strictTokens: true, // enforces the usage of only design tokens
  // useSystemColorMode: false,
  // initialColorMode: 'light',
});

export const system = createSystem(defaultConfig, appConfig, {
  theme: {
    recipes: {},
    slotRecipes: {
      switch: switchSlotRecipe,
    },
  },
});
