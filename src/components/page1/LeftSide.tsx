import {
  Button,
  Typography,
  Box,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import "@fontsource/livvic";

export default function LeftSide() {
  const theme = createTheme({
    typography: {
      fontFamily: "Livvic, Arial, sans-serif",
    },
  });

  return (
    <Box
      sx={{
        paddingRight: {
          md: "20px",
        },
        marginTop: {
          xs: "40px",
          md: "120px",
        },
        marginLeft: {
          md: "10.37%",
        },
        position: "relative",
      }}
    >
      <ThemeProvider theme={theme}>
        <Box>
          <Typography
            variant="h4"
            fontWeight="bold"
            gutterBottom
            color="red"
            sx={{
              fontSize: {
                xs: "32px",
                md: "56px",
              },
              "@media (min-width:900px) and (max-width:1000px)": {
                fontSize: "50px",
              },
            }}
          >
            Mua Nhà Hôm Nay,
          </Typography>
          <Typography
            variant="h4"
            fontWeight="bold"
            gutterBottom
            color="red"
            sx={{
              fontSize: {
                xs: "32px",
                md: "56px",
              },
              marginTop: {
                xs: -1.5,
                md: -2.5,
              },
              "@media (min-width:900px) and (max-width:1000px)": {
                fontSize: "50px",
              },
            }}
          >
            Tết Thêm Sum Vầy
          </Typography>
        </Box>
      </ThemeProvider>

      <Typography
        variant="body1"
        color="text.secondary"
        gutterBottom
        sx={{
          fontSize: {
            xs: "15px",
            md: "18px",
          },
          mt: -1,
          pb: "65px",
          color: "#222222",
        }}
      >
      </Typography>
      {/* <Button
        sx={{
          background:
            "linear-gradient(92.4deg, #A8F5FF -8.37%, #FF4E72 10.92%, #DA0530 81.42%, #E9A2C2 102.96%)",
          borderRadius: 3,
          padding: "10px 20px",
          color: "white",
          fontWeight: "bold",
          height: "56px",
          width: {
            xs: "100%",
            md: "327px",
          },
          fontSize: "16px",
          marginTop: "15px",
          zIndex: 10,
        }}
      >
        THỬ NGAY
      </Button> */}

      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          height: "100%",
          marginBottom: 0,
          marginTop: 3,
        }}
      >
        <Box
          component="img"
          src="/page1/bg_icon.svg"
          alt="Background"
          sx={{
            width: "80%",
            height: "auto",
            marginTop: "-20px",
            maxWidth: "590px",
            zIndex: 1,
          }}
        />
      </Box>
    </Box>
  );
}
