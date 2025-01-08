import { Box, Grid, Typography, useMediaQuery } from "@mui/material";

export default function AssistantMore() {
  const isSmallScreen = useMediaQuery("(max-width:700px)");
  return (
    <Box
      sx={{
        background: "#FFF0F7",
      }}
    >
      <Box
        sx={{
          marginLeft: {
            md: "7%",
            xs: "5%",
          },
          marginRight: {
            md: "7%",
            xs: "5%",
          },
        }}
      >
        <Grid container>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                height: "100%",
              }}
            >
              <Box
                sx={{
                  width: { xs: "70%", md: "100%" },
                  maxWidth: "700px",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img
                  src="/page1/icAs.svg"
                  alt="icon-3"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={8}
            sx={{
              paddingTop: {
                md: "41.5px",
                xs: "44px",
              },
              paddingBottom: {
                md: "8.5px",
                xs: "0px",
              },
            }}
          >
            <Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "left",
                  marginBottom: {
                    md: "40px",
                    xs: "15px",
                  },
                }}
              >
                {isSmallScreen ? (
                  <img
                    src="/page1/icSlide_small.svg"
                    alt="icon-3"
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                  />
                ) : (
                  <img
                    src="/page1/icSlide.svg"
                    alt="icon-3"
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                  />
                )}
              </Box>

              <Box
                sx={{
                  paddingLeft: { md: "40px", xs: "20px" },
                  paddingRight: { md: "35px", xs: "20px" },
                }}
              >
                <Typography
                  sx={{
                    marginTop: "32px",
                    fontSize: {
                      md: "20px",
                      xs: "18px",
                    },
                    fontWeight: 600,
                    color: "#222222",
                  }}
                >
                  Trợ lý từ Vietjet Air là{" "}
                  <span style={{ color: "#FF4E72" }}>
                    người đồng hành đắc lực
                  </span>{" "}
                  cho bạn khi lên lịch trình cho đoàn du lịch Tết, giúp bạn dễ
                  dàng chọn được điểm đến và lịch trình lý tưởng nhất cho năm
                  2025 dựa trên bản đồ năng lượng cá nhân của bạn hoặc những
                  người thân yêu.
                </Typography>
                <Typography
                  sx={{
                    marginTop: "16px",
                    marginBottom: {
                      md: "40px",
                      xs: "15px",
                    },
                    color: "#222222",
                    fontSize: {
                      md: "16px",
                      xs: "14px",
                    },
                  }}
                >
                  Với những giải thích chi tiết về yếu tố ngũ hành phù hợp, trợ
                  lý giúp bạn chọn hướng đi và điểm đến du lịch sẽ mang lại sự
                  an lành, cân bằng và may mắn cho cả đoàn trong dịp Tết và suốt
                  cả năm mới 2025.
                </Typography>
              </Box>

              <Box sx={{ display: "flex", justifyContent: "left" }}>
                {isSmallScreen ? (
                  <img
                    src="/page1/icSlide_small.svg"
                    alt="icon-3"
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                  />
                ) : (
                  <img
                    src="/page1/icSlide.svg"
                    alt="icon-3"
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                  />
                )}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
