import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "@fontsource/livvic";

export default function TravelWithAs() {
  const theme = createTheme({
    typography: {
      fontFamily: "Livvic, Arial, sans-serif",
    },
  });

  const cards = [
    {
      img: "/page1/slide4.svg",
      title: "Tối Ưu và Cá Nhân Hóa",
      description:
        "Trợ lý sử dụng những phân tích từ bản đồ năng lượng cá nhân dựa trên năm, tháng, ngày, giờ và nơi sinh để đề xuất cho bạn những điểm đến phù hợp nhất, mang lại cho bạn sự cân bằng năng lượng.",
    },
    {
      img: "/page1/slide5.svg",
      title: "Bình An và May Mắn",
      description:
        'Giờ xuất hành, con số hay màu sắc trang phục mang lại may mắn - bên cạnh một lịch trình du lịch chi tiết, trợ lý cũng sẽ "mách nước" những tips du lịch giúp hành trình của bạn thật thuận lợi, bình an.',
    },
    {
      img: "/page1/slide6.svg",
      title: "Yêu Thương và Gắn Kết",
      description:
        "Không chỉ dừng lại ở sự hài hòa giữa các thành viên trong đoàn, bạn hoàn toàn có thể bày tỏ sự quan tâm và chu đáo của mình qua một hành trình du lịch hoàn toàn dựa trên bản đồ năng lượng của người thương.",
    },
  ];

  return (
    <Box
      sx={{
        textAlign: "center",
        paddingTop: "40px",
        paddingLeft: {
          md: "7%",
          xs: "5%",
        },
        paddingRight: {
          md: "7%",
          xs: "5%",
        },
      }}
    >
      <ThemeProvider theme={theme}>
        <Typography
          sx={{
            marginBottom: {
              md: "40px",
              xs: "24px",
            },
            marginTop: {
              md: "40px",
            },
            fontWeight: "bold",
            fontSize: {
              md: "40px",
              xs: "28px",
            },
          }}
        >
          Du Lịch Tết Cá Nhân Hóa Cùng Trợ Lý Thông Minh
        </Typography>
      </ThemeProvider>
      <Swiper
        spaceBetween={16}
        slidesPerView={1.2}
        breakpoints={{
          768: { slidesPerView: 3 },
        }}
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index}>
            <Card
              sx={{
                position: "relative",
                borderRadius: "16px",
                overflow: "hidden",
                width: "100%",
                boxShadow: "none",
                border: "none",
              }}
            >
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  overflow: "hidden",
                  width: "100%",
                  backgroundColor: "white",
                  boxShadow: "none",
                  border: "none",
                }}
              >
                <Box
                  component="img"
                  src={card.img}
                  alt={card.title}
                  sx={{
                    width: "100%",
                    height: { xs: "180px", md: "275px" },
                    borderRadius: "16px",
                    objectFit: "cover",
                  }}
                />
                <CardContent
                  sx={{
                    textAlign: "left",
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "left",
                    padding: 0,
                    paddingTop: {
                      xs: "16px",
                      md: "24px",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      fontSize: {
                        xs: "18px",
                        md: "20px",
                      },
                      marginBottom: "8px",
                      color: "#333",
                      overflowWrap: "break-word",
                    }}
                  >
                    {card.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "12px",
                        md: "14px",
                      },
                      color: "#555",
                      lineHeight: {
                        md: "20px",
                        xs: "18px",
                      },
                      overflowWrap: "break-word",
                    }}
                  >
                    {card.description}
                  </Typography>
                </CardContent>
              </Card>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
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
            marginTop: { xs: "12px", md: "32px" },
            marginBottom: { xs: "40px", md: "80px" },
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
          THỬ NGAY
        </Button>
      </Box>
    </Box>
  );
}
