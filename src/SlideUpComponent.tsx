// src/components/SlideUpComponent.tsx
import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { Box } from "@mui/material";

interface SlideUpComponentProps {
  children: ReactNode;
  in: boolean;
  duration?: number;
}

const SlideUpComponent: React.FC<SlideUpComponentProps> = ({
  children,
  in: inProp,
}) => {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: inProp ? 0 : "-100%" }}
      transition={{ type: "spring", stiffness: 100, damping: 10 }}
      style={{ overflow: "hidden" }}
    >
      <Box>{children}</Box>
    </motion.div>
  );
};

export default SlideUpComponent;
