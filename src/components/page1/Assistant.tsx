import { Box, Grid, Typography, Button, useMediaQuery } from "@mui/material";

export default function Assistant() {
  const isSmallScreen = useMediaQuery("(max-width:700px)");
  return (
    <Box>
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
          <Grid
            item
            xs={12}
            md={8}
            sx={{
              paddingTop: {
                md: "81.5px",
                xs: "64px",
              },
              paddingBottom: {
                md: "81.5px",
                xs: "0px",
              },
            }}
          >
            <Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "left",
                  marginBottom: "40px",
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
                  paddingRight: { md: "40px", xs: "20px" },
                }}
              >
                <Button
                  startIcon={
                    <img src="/page1/icSp.svg" alt="icon" width={"90%"} />
                  }
                  variant="contained"
                  sx={{
                    background:
                      "linear-gradient(92.4deg, #A8F5FF -8.37%, #FF4E72 10.92%, #DA0530 81.42%, #E9A2C2 102.96%)",
                    borderRadius: "20px",
                    color: "white",
                    textTransform: "none",
                    "&:hover": {
                      background:
                        "linear-gradient(92.4deg, #E9A2C2 102.96%, #DA0530 81.42%, #FF4E72 10.92%, #A8F5FF -8.37%)",
                    },
                    fontSize: {
                      xs: "12px",
                    },
                  }}
                >
                  VỚI TRỢ LÝ THÔNG MINH TỪ VIETJET
                </Button>

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
                  Bạn sẽ{" "}
                  <span style={{ color: "#FF4E72" }}>
                    dễ dàng tìm thấy điểm đến lý tưởng
                  </span>{" "}
                  và{" "}
                  <span style={{ color: "#FF4E72" }}>lịch trình phù hợp</span>,
                  được tối ưu dựa trên bản đồ năng lượng cá nhân của từng thành
                  viên.
                </Typography>
                <Typography
                  sx={{
                    marginTop: "16px",
                    marginBottom: "40px",
                    color: "#222222",
                    fontSize: {
                      xs: "14px",
                    },
                  }}
                >
                  Hãy để Vietjet đồng hành cùng bạn tạo nên những kỷ niệm trọn
                  vẹn và yêu thương xuyên suốt hành trình sum họp đầy ý nghĩa
                  này!
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

          <Grid item xs={12} md={4}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                height: "100%",
              }}
            >
              <Box
                sx={{
                  width: { xs: "80%", md: "100%" },
                  maxWidth: "700px",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  marginBottom:{
                    xs: "25px",
                  }
                }}
              >
                <img
                  src="/page1/icAI.svg"
                  alt="icon-3"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
