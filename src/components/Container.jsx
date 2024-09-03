import { Paper } from "@material-ui/core";
import { forwardRef } from "react";

export const Container = forwardRef(
  ({ background, padding = 0, children }, ref) => {
    return (
      <Paper
        ref={ref}
        style={{ margin: "5px 0", background, padding: padding + "px" }}
      >
        {children}
      </Paper>
    );
  }
);
