import { defineSlotRecipe } from "@chakra-ui/react";

export const switchSlotRecipe = defineSlotRecipe({
  slots: ["root", "label", "control", "thumb", "indicator"],
  className: "chakra-switch",
  base: {
    root: {
      // bg: { base: '{colors.purple.600}', _dark: '{colors.purple.400}' },
    },
    thumb: {
      // bg: { base: '{colors.white}', _dark: '{colors.black}' },
      bg: { base: "{colors.red.400}", _dark: "{colors.red.600}" },

      _checked: {
        bg: { base: "{colors.purple.600}", _dark: "{colors.purple.400}" },
      },
    },
    // indicator: {
    //   bg: { base: '{colors.slate.200}', _dark: '{colors.slate.800}' },
    //   _checked: {
    //     bg: { base: '{colors.purple.600}', _dark: '{colors.purple.400}' },
    //   },
    // },
    control: {
      // bg: { base: '{colors.slate.200}', _dark: '{colors.slate.800}' },
      bg: {
        base: "{colors.red.600} !important",
        _dark: "{colors.red.400} !important",
      },

      _checked: {
        bg: { base: "{colors.purple.600}", _dark: "{colors.purple.400}" },
      },
    },
    label: {
      fontSize: "lg",
      color: "orange",
    },
  },
  variants: {
    variant: {
      solid: {
        control: {
          borderRadius: "full",
          bg: "bg.emphasized",
          focusVisibleRing: "outside",
          _checked: {
            bg: "colorPalette.solid",
          },
        },
        thumb: {
          bg: "white",
          width: "var(--switch-height)",
          height: "var(--switch-height)",
          scale: "0.8",
          boxShadow: "sm",
          _checked: {
            bg: "colorPalette.contrast",
          },
        },
        label: {
          color: "pink",
        },
      },
      raised: {
        control: {
          borderRadius: "full",
          height: "calc(var(--switch-height) / 2)",
        //   bg: "bg.muted",
          boxShadow: "inset",
          _checked: {
            bg: "colorPalette.solid/60",
          },
          bg: "red",
        },
        thumb: {
          width: "var(--switch-height)",
          height: "var(--switch-height)",
          position: "relative",
          top: "calc(var(--switch-height) * -0.25)",
          bg: "white",
          boxShadow: "xs",
          focusVisibleRing: "outside",
          _checked: {
            bg: "colorPalette.solid",
          },
        },
      },
    },
  },
  defaultVariants: {
    variant: "raised",
    // size: "md",
  },
});
