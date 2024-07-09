// src/components/FadeComponent.tsx
import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { Box } from "@mui/material";

interface FadeComponentProps {
  children: ReactNode;
  in: boolean;
  duration?: number;
}

const FadeComponent: React.FC<FadeComponentProps> = ({
  children,
  in: inProp,
}) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: inProp ? 1 : 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 10 }}
    >
      <Box>{children}</Box>
    </motion.div>
  );
};

export default FadeComponent;
