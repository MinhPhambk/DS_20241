import { Box, Grid, Typography } from "@mui/material";

export default function Analysis() {
  return (
    <Box sx={{ padding: "140px 50px 80px 50px" }}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Box
            sx={{
              backgroundColor: "white",
              borderRadius: "24px",
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.15)",
              padding: "25px 25px 0px 25px",
              display: "flex",
              flexDirection: "column",
              transition: "box-shadow 0.3s ease, transform 0.3s ease",
              "&:hover": {
                boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
                transform: "translateY(-5px)",
              },
              height: "100%",
            }}
          >
            <Typography variant="h5" sx={{ marginLeft: "10px", fontWeight: "600", textAlign: "left", color: "blue", textAlignLast: "center" }}>
              🚀 🚀  Phân Tích & Thống Kê Giá Nhà Tại Thành Phố Hà Nội 🚀 🚀
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing={4} sx={{ marginTop: "30px" }}>
        <Grid item xs={4}>
          <Box
            sx={{
              backgroundColor: "white",
              borderRadius: "24px",
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.15)",
              padding: "25px 25px 4px 25px",
              display: "flex",
              flexDirection: "column",
              transition: "box-shadow 0.3s ease, transform 0.3s ease",
              "&:hover": {
                boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
                transform: "translateY(-5px)",
              },
              height: "100%",
            }}
          >
            <Typography variant="h6" sx={{ marginLeft: "10px", fontWeight: "450", textAlign: "left" }}>
              Độ Dài Các "Tiêu Đề" Tính Theo Từ
            </Typography>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                flex: 1,
              }}
            >
              <Box
                component="img"
                src="/page1/c1.png"
                alt="image"
                sx={{
                  width: "90%",
                  height: "auto",
                  borderRadius: "8px",
                  objectFit: "contain",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              />
            </Box>
          </Box>
        </Grid>

        <Grid item xs={4}>
          <Box
            sx={{
              backgroundColor: "white",
              borderRadius: "24px",
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.15)",
              padding: "25px 25px 4px 25px",
              display: "flex",
              flexDirection: "column",
              transition: "box-shadow 0.3s ease, transform 0.3s ease",
              "&:hover": {
                boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
                transform: "translateY(-5px)",
              },
              height: "100%",
            }}
          >
            <Typography variant="h6" sx={{ marginLeft: "10px", fontWeight: "450", textAlign: "left" }}>
              Độ Dài Các "Mô Tả" Tính Theo Từ
            </Typography>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                flex: 1,
              }}
            >
              <Box
                component="img"
                src="/page1/c2.png"
                alt="image"
                sx={{
                  width: "90%",
                  height: "auto",
                  borderRadius: "8px",
                  objectFit: "contain",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              />
            </Box>
          </Box>
        </Grid>

        <Grid item xs={4}>
          <Box
            sx={{
              backgroundColor: "white",
              borderRadius: "24px",
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.15)",
              padding: "25px 25px 4px 25px",
              display: "flex",
              flexDirection: "column",
              transition: "box-shadow 0.3s ease, transform 0.3s ease",
              "&:hover": {
                boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
                transform: "translateY(-5px)",
              },
              height: "100%",
            }}
          >
            <Typography variant="h6" sx={{ marginLeft: "10px", fontWeight: "450", textAlign: "left" }}>
              Số Lượng Bất Động Sản Rao Bán
            </Typography>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                flex: 1,
              }}
            >
              <Box
                component="img"
                src="/page1/c3.png"
                alt="image"
                sx={{
                  width: "90%",
                  height: "auto",
                  borderRadius: "8px",
                  objectFit: "contain",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing={4} sx={{ marginTop: "30px" }}>
        <Grid item xs={8}>
          <Box
            sx={{
              backgroundColor: "white",
              borderRadius: "24px",
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.15)",
              padding: "25px 25px 4px 25px",
              display: "flex",
              flexDirection: "column",
              transition: "box-shadow 0.3s ease, transform 0.3s ease",
              "&:hover": {
                boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
                transform: "translateY(-5px)",
              },
              height: "100%",
            }}
          >
            <Typography variant="h6" sx={{ marginLeft: "10px", fontWeight: "450", textAlign: "left" }}>
              Phân Phối Các Kiểu Bất Động Sản Thường Gặp Ở Các Đơn Vị Hành Chính Cấp Quận
            </Typography>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                flex: 1,
              }}
            >
              <Box
                component="img"
                src="/page1/c5.png"
                alt="image"
                sx={{
                  width: "90%",
                  height: "auto",
                  borderRadius: "8px",
                  objectFit: "contain",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              />
            </Box>
          </Box>
        </Grid>

        <Grid item xs={4}>
          <Box
            sx={{
              backgroundColor: "white",
              borderRadius: "24px",
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.15)",
              padding: "25px 25px 4px 25px",
              display: "flex",
              flexDirection: "column",
              transition: "box-shadow 0.3s ease, transform 0.3s ease",
              "&:hover": {
                boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
                transform: "translateY(-5px)",
              },
              height: "100%",
            }}
          >
            <Typography variant="h6" sx={{ marginLeft: "10px", fontWeight: "450", textAlign: "left" }}>
              Tần Suất Các Kiểu Bất Động Sản
            </Typography>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                flex: 1,
              }}
            >
              <Box
                component="img"
                src="/page1/c6.png"
                alt="image"
                sx={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "8px",
                  objectFit: "contain",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing={4} sx={{ marginTop: "30px" }}>
        <Grid item xs={4}>
          <Box
            sx={{
              backgroundColor: "white",
              borderRadius: "24px",
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.15)",
              padding: "25px 25px 4px 25px",
              display: "flex",
              flexDirection: "column",
              transition: "box-shadow 0.3s ease, transform 0.3s ease",
              "&:hover": {
                boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
                transform: "translateY(-5px)",
              },
              height: "100%",
            }}
          >
            <Typography variant="h6" sx={{ marginLeft: "10px", fontWeight: "450", textAlign: "left" }}>
              Word Cloud Trường "Mô Tả"
            </Typography>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                flex: 1,
              }}
            >
              <Box
                component="img"
                src="/page1/c4.png"
                alt="image"
                sx={{
                  width: "90%",
                  height: "auto",
                  borderRadius: "8px",
                  objectFit: "contain",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              />
            </Box>
          </Box>
        </Grid>

        <Grid item xs={4}>
          <Box
            sx={{
              backgroundColor: "white",
              borderRadius: "24px",
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.15)",
              padding: "25px 25px 4px 25px",
              display: "flex",
              flexDirection: "column",
              transition: "box-shadow 0.3s ease, transform 0.3s ease",
              "&:hover": {
                boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
                transform: "translateY(-5px)",
              },
              height: "100%",
            }}
          >
            <Typography variant="h6" sx={{ marginLeft: "10px", fontWeight: "450", textAlign: "left" }}>
              Word Cloud Trường "Mô Tả Biệt Thự"
            </Typography>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                flex: 1,
              }}
            >
              <Box
                component="img"
                src="/page1/c7.png"
                alt="image"
                sx={{
                  width: "90%",
                  height: "auto",
                  borderRadius: "8px",
                  objectFit: "contain",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              />
            </Box>
          </Box>
        </Grid>

        <Grid item xs={4}>
          <Box
            sx={{
              backgroundColor: "white",
              borderRadius: "24px",
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.15)",
              padding: "25px 25px 4px 25px",
              display: "flex",
              flexDirection: "column",
              transition: "box-shadow 0.3s ease, transform 0.3s ease",
              "&:hover": {
                boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
                transform: "translateY(-5px)",
              },
              height: "100%",
            }}
          >
            <Typography variant="h6" sx={{ marginLeft: "10px", fontWeight: "450", textAlign: "left" }}>
              Word Cloud Trường "Mô Tả Chung Cư"
            </Typography>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                flex: 1,
              }}
            >
              <Box
                component="img"
                src="/page1/c8.png"
                alt="image"
                sx={{
                  width: "90%",
                  height: "auto",
                  borderRadius: "8px",
                  objectFit: "contain",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing={4} sx={{ marginTop: "30px" }}>
        <Grid item xs={6}>
          <Box
            sx={{
              backgroundColor: "white",
              borderRadius: "24px",
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.15)",
              padding: "25px 25px 4px 25px",
              display: "flex",
              flexDirection: "column",
              transition: "box-shadow 0.3s ease, transform 0.3s ease",
              "&:hover": {
                boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
                transform: "translateY(-5px)",
              },
              height: "100%",
            }}
          >
            <Typography variant="h6" sx={{ marginLeft: "10px", fontWeight: "450", textAlign: "left" }}>
              Phân Phối Giá Trên Diện Tích Của Một Số Kiểu Bất Động Sản
            </Typography>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                flex: 1,
              }}
            >
              <Box
                component="img"
                src="/page1/c9.png"
                alt="image"
                sx={{
                  width: "90%",
                  height: "auto",
                  borderRadius: "8px",
                  objectFit: "contain",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              />
            </Box>
          </Box>
        </Grid>

        <Grid item xs={6}>
          <Box
            sx={{
              backgroundColor: "white",
              borderRadius: "24px",
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.15)",
              padding: "25px 25px 4px 25px",
              display: "flex",
              flexDirection: "column",
              transition: "box-shadow 0.3s ease, transform 0.3s ease",
              "&:hover": {
                boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
                transform: "translateY(-5px)",
              },
              height: "100%",
            }}
          >
            <Typography variant="h6" sx={{ marginLeft: "10px", fontWeight: "450", textAlign: "left" }}>
              Phân Phối Giá Trên Diện Tích Ở Một Số Quận
            </Typography>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                flex: 1,
              }}
            >
              <Box
                component="img"
                src="/page1/c10.png"
                alt="image"
                sx={{
                  width: "90%",
                  height: "auto",
                  borderRadius: "8px",
                  objectFit: "contain",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing={4} sx={{ marginTop: "30px" }}>
        <Grid item xs={12}>
          <Box
            sx={{
              backgroundColor: "white",
              borderRadius: "24px",
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.15)",
              padding: "25px 25px 20px 25px",
              display: "flex",
              flexDirection: "column",
              transition: "box-shadow 0.3s ease, transform 0.3s ease",
              "&:hover": {
                boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
                transform: "translateY(-5px)",
              },
              height: "100%",
            }}
          >
            <Typography variant="h6" sx={{ marginLeft: "10px", fontWeight: "450", marginBottom: "15px", textAlign: "left" }}>
              Mật Độ Diện Tích Bất Động Sản Rao Bán Trên Địa Bàn Hà Nội
            </Typography>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                flex: 1,
              }}
            >
              <Box
                component="img"
                src="/page1/c11.png"
                alt="image"
                sx={{
                  width: "90%",
                  height: "auto",
                  borderRadius: "8px",
                  objectFit: "contain",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
