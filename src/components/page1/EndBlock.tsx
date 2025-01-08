import {
  Box,
  Grid,
  Typography,
  Button,
  createTheme,
  ThemeProvider,
  useMediaQuery,
} from "@mui/material";
import "@fontsource/livvic";

export default function EndBlock() {
  const theme = createTheme({
    typography: {
      fontFamily: "Livvic, Arial, sans-serif",
    },
  });
  const isMobile = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box
      sx={{
        textAlign: "center",
        marginLeft: {
          md: "7%",
          xs: "5%",
        },
        paddingRight: {
          md: "7%",
          xs: "5%",
        },
        marginBottom: {
          xs: "24px",
          md: "86px",
        },
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "auto",
          backgroundImage: "url('/page1/bg_end.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          borderRadius: {
            xs: "16px",
            md: "24px",
          },
        }}
      >
        <Grid
          container
          sx={{
            width: "100%",
            overflow: "hidden",
          }}
        >
          {isMobile ? (
            <Grid
              item
              xs={12}
              md={3}
              sx={{
                position: "relative",
                overflow: "visible",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                paddingLeft: "7%",
                paddingRight: {
                  md: "0%",
                  xs: "7%",
                },
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  whiteSpace: { md: "nowrap" },
                }}
              >
                <ThemeProvider theme={theme}>
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      fontSize: { xs: "28px", md: "40px" },
                      textAlign: "left",
                    }}
                  >
                    Bay Cùng Vietjet Tới
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      fontSize: { xs: "28px", md: "40px" },
                      marginBottom: {
                        md: "12%",
                        xs: "24px",
                      },
                      textAlign: "left",
                    }}
                  >
                    Hành Trình Gắn Kết Yêu Thương
                  </Typography>
                </ThemeProvider>
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
                      marginBottom: { xs: "23px", md: "22%" },
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
                    }}
                  >
                    BẮT ĐẦU NGAY
                  </Button>
                </Box>
              </Box>
            </Grid>
          ) : null}
          <Grid
            item
            xs={12}
            md={9}
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "end",
            }}
          >
            <Box
              component="img"
              src="/page1/icPlaneEnd.svg"
              alt="Icon"
              sx={{
                width: {
                  md: "90%",
                  xs: "120%",
                },
                height: "auto",
              }}
            />
          </Grid>

          {!isMobile ? (
            <Grid
              item
              xs={12}
              md={3}
              sx={{
                position: "relative",
                overflow: "visible",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                paddingLeft: "7%",
                paddingRight: {
                  md: "0%",
                  xs: "7%",
                },
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  whiteSpace: { md: "nowrap" },
                }}
              >
                <ThemeProvider theme={theme}>
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      fontSize: { xs: "28px", md: "40px" },
                      textAlign: "left",
                    }}
                  >
                    Bay Cùng Vietjet Tới
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      fontSize: { xs: "28px", md: "40px" },
                      marginBottom: {
                        md: "12%",
                        xs: "24px",
                      },
                      textAlign: "left",
                    }}
                  >
                    Hành Trình Gắn Kết Yêu Thương
                  </Typography>
                </ThemeProvider>
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
                      marginBottom: { xs: "23px", md: "22%" },
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
                    }}
                  >
                    BẮT ĐẦU NGAY
                  </Button>
                </Box>
              </Box>
            </Grid>
          ) : null}
        </Grid>
      </Box>
    </Box>
  );
}
