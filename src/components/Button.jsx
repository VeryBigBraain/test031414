import React, { forwardRef } from "react";
import { Button as MaterialButton } from "@material-ui/core";

export const Button = forwardRef(({ size, variant, color, children }, ref) => {
  return (
    <MaterialButton ref={ref} size={size} variant={variant} color={color}>
      {children}
    </MaterialButton>
  );
});
