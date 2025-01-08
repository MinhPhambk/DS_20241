import { Box, Grid, useMediaQuery, useTheme } from "@mui/material";
import LeftSide from "./LeftSide";
import FormCustom from "./FormCustom";

export default function Landing() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          backgroundImage: {
            md: "url(/page1/bg.svg)",
            xs: "url(/page1/bg_small.png)",
          },
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: {
            xs: "auto",
            md: "auto",
          },
          position: "relative",
        }}
      >
        <Box
          component="img"
          src="/page1/bg_footer.svg"
          alt="Footer Background"
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: "auto",
            zIndex: 2,
          }}
        />
        <Grid
          container
          sx={{
            paddingBottom: 0,
          }}
        >
          <Grid
            item
            xs={12}
            md={7}
            sx={{
              padding: 3,
              paddingBottom: 0,
            }}
          >
            <LeftSide />
          </Grid>
          {isMobile ? (
            <Grid
              item
              xs={12}
              md={5}
              sx={{
                height: "auto",
                justifyContent: "center",
                margin: "10px auto",
                marginTop: "150px",
              }}
            >
              <FormCustom />
            </Grid>
          ) : null}
        </Grid>
      </Box>

      {!isMobile ? (
        <Box
          sx={{
            display: {
              md: "none",
              xs: "block",
              paddingLeft: 3,
              paddingRight: 3,
              marginLeft: "16px",
              marginRight: "16px",
              marginTop: "-25px",
            },
          }}
        >
          <FormCustom />
        </Box>
      ) : null}
    </Box>
  );
}
