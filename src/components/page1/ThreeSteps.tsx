import {
  Box,
  Typography,
  Grid,
  Button,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import "@fontsource/livvic";

export default function ThreeSteps() {
  const theme = createTheme({
    typography: {
      fontFamily: "Livvic, Arial, sans-serif",
    },
  });

  const steps = [
    {
      title: "BƯỚC 1",
      description: "Phân tích bản đồ năng lượng cá nhân",
      img: "/page1/icStep.svg",
    },
    {
      title: "BƯỚC 2",
      description: "Danh sách các điểm đến du lịch lý tưởng cho Tết Ất Tỵ 2025",
      img: "/page1/icStep.svg",
    },
    {
      title: "BƯỚC 3",
      description:
        "Lịch trình chi tiết từng ngày với các hoạt động giúp nâng cao năng lượng cá nhân",
      img: "/page1/icStep.svg",
    },
  ];

  return (
    <Box
      sx={{
        background: "#FFF0F7",
        paddingLeft: {
          md: "7%",
          xs: "9%",
        },
        paddingRight: {
          md: "7%",
          xs: "5%",
        },
        paddingTop: {
          xs: "40px",
          md: "80px",
        },
        paddingBottom: {
          xs: "40px",
          md: "80px",
        },
      }}
    >
      <Box
        sx={{
          textAlign: "center",
        }}
      >
        <ThemeProvider theme={theme}>
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "28px", md: "40px" },
              marginBottom: { xs: "36px", md: "45px" },
            }}
          >
            3 Bước - Tới Hành Trình Trọn Vẹn
          </Typography>
        </ThemeProvider>
      </Box>
      <Box>
        <Grid
          container
          spacing={2}
          sx={{
            borderRadius: "16px",
            overflow: "hidden",
            background: "white",
            paddingBottom: { xs: "32px", md: "32px" },
            paddingTop: { md: "32px" },
          }}
        >
          {steps.map((step, index) => (
            <Grid
              item
              xs={12}
              md={4}
              key={index}
              sx={{
                marginLeft: { xs: "24px", md: "0px" },
                marginRight: { xs: "24px", md: "0px" },
                borderRight: {
                  md: index !== steps.length - 1 ? "1px solid #DDDDDD" : "none",
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "left",
                  marginLeft: { md: "35px" },
                  marginRight: { md: "40px" },
                }}
              >
                <Box
                  component="img"
                  src={step.img}
                  alt={step.title}
                  sx={{
                    width: { xs: "64px", md: "80px" },
                    height: "100%",
                    marginBottom: { md: "32px", xs: "16px" },
                    marginTop: { md: -2, xs: "16px" },
                  }}
                />
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: { xs: "12px", md: "14px" },
                    color: "#DA0530",
                    marginBottom: "8px",
                  }}
                >
                  {step.title}
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "14px", md: "16px" },
                    color: "#333",
                  }}
                >
                  {step.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
        <Box
          sx={{
            textAlign: "center",
          }}
        >
          <Button
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
            variant="contained"
            sx={{
              marginTop: { xs: "32px", md: "32px" },
              padding: { xs: "8px 16px", md: "12px 32px" },
              fontSize: { xs: "14px", md: "16px" },
              fontWeight: "bold",
              background: "#DA0530",
              borderRadius: "12px",
              "&:hover": {
                background: "#DA0530",
              },
              width: {
                md: "327px",
                xs: "100%",
              },
              height: {
                xs: "48px",
                md: "56px",
              },
              marginLeft: {
                xs: "-3%",
                md: "0px",
              },
            }}
          >
            THỬ NGAY
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
