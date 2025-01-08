import { Box } from "@mui/material";
import Analysis from "../../components/page1/Analysis";
import Banner from "../../components/page1/Banner";

export default function Page1() {
  return (
    <Box sx={{ backgroundColor: "#acc3db" }}>
      <Banner />
      <Analysis />
    </Box>
  );
}
