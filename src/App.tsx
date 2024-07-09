// src/App.tsx
import React, { useState } from "react";

import { Button, Box } from "@mui/material";
import FadeComponent from "./FadeComponent";
import SlideUpComponent from "./SlideUpComponent";
import ExpandableCard from "./ExpandableCard";

const App: React.FC = () => {
  const [show, setShow] = useState(true);

  return (
    <Box sx={{ padding: 4 }}>
      <Button variant="contained" onClick={() => setShow(!show)}>
        Toggle Fade
      </Button>
      <FadeComponent in={show}>
        <Box sx={{ marginTop: 2, padding: 2, backgroundColor: "lightgray" }}>
          This content will fade in and out.
        </Box>
      </FadeComponent>
      <SlideUpComponent in={show}>
        <Box sx={{ marginTop: 2, padding: 2, backgroundColor: "lightgray" }}>
          This content will slide up and down.
        </Box>
      </SlideUpComponent>
      <Box sx={{ padding: 4 }}>
        <ExpandableCard />
      </Box>
    </Box>
  );
};

export default App;
