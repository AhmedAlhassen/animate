// src/components/ExpandableCard.tsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  ButtonGroup,
} from "@mui/material";

const ExpandableCard: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const toggleButtonGroup = () => {
    setShowButtons(!showButtons);
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          Expandable Card
        </Typography>
        <Typography variant="body2" color="text.secondary">
          This is an expandable card.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={toggleExpand}>
          {expanded ? "Collapse" : "Expand"}
        </Button>
      </CardActions>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: expanded ? "auto" : 0, opacity: expanded ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
        style={{ overflow: "hidden" }}
      >
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This content is shown when the card is expanded. You can put any
            additional information here.
          </Typography>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 2,
            }}
          >
            <Button
              size="small"
              onClick={toggleButtonGroup}
              sx={{ marginTop: 2 }}
            >
              {showButtons ? "Hide Buttons" : "Show Buttons"}
            </Button>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                //   width: showButtons ? "100%" : 0,
                opacity: showButtons ? 1 : 0,
              }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              style={{
                overflow: "hidden",
                display: "inline-block",
                marginTop: "8px",
              }}
            >
              {showButtons && (
                <ButtonGroup
                  variant="contained"
                  aria-label="outlined primary button group"
                >
                  <Button>Button 1</Button>
                  <Button>Button 2</Button>
                  <Button>Button 3</Button>
                </ButtonGroup>
              )}
            </motion.div>
          </div>
        </CardContent>
      </motion.div>
    </Card>
  );
};

export default ExpandableCard;
