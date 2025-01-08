import {
  Box,
  Typography,
  Card,
  CardContent,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "@fontsource/livvic";

export default function Plan() {
  const theme = createTheme({
    typography: {
      fontFamily: "Livvic, Arial, sans-serif",
    },
  });

  const cards = [
    {
      img: "/page1/slide1.svg",
      title: "Cho Gia Đình",
      description:
        "Đến Tết, được đi du lịch cùng đại gia đình thật vui biết bao! Nhưng... bố mẹ thích nghỉ dưỡng, các con thì mê khám phá, trải nghiệm, còn ông bà đã lớn tuổi rồi, chỉ muốn thưởng trà ngắm cảnh mà thôi... Làm sao để lên một lịch trình phù hợp với tất cả thành viên trong nhà đây?",
    },
    {
      img: "/page1/slide2.svg",
      title: "Cho Nhóm Bạn",
      description:
        "Thân thiết là thế đó nhưng mỗi người trong nhóm lại có những sở thích khác nhau. Ai cũng đều gợi ý ra những điểm ăn chơi hay ho, thú vị cần phải thử hết. Thảo luận rõ lâu rồi mà cả nhóm vẫn chưa thống nhất được lịch trình du lịch, còn Tết thì ngày một tới gần rồi. Phải làm sao để những mảnh ghép khác biệt cùng tạo nên một bức tranh xinh đẹp?",
    },
    {
      img: "/page1/slide3.svg",
      title: "Cho Công Ty",
      description:
        "Còn gì tuyệt vời hơn là được tin tưởng nắm giữ trọng trách lên kế hoạch du lịch Tết này cho cả một tập thể. Thế nhưng lịch trình cần phải cân bằng giữa sở thích của mọi người, mục tiêu gắn kết cho tập thể và cả ngân sách nữa. Rõ là đau đầu...",
    },
  ];

  return (
    <Box
      sx={{
        textAlign: "center",
        padding: "40px 16px",
        background: "#FFF0F7",
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
          Nếu Bạn Đang Lên Kế Hoạch Du Lịch Tết . . .
        </Typography>
      </ThemeProvider>
      <Swiper
        spaceBetween={16}
        slidesPerView={1.2}
        breakpoints={{
          768: { slidesPerView: 3 },
        }}
        style={{ paddingBottom: "12px" }}
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index}>
            <Card
              sx={{
                position: "relative",
                boxShadow: 3,
                borderRadius: "16px",
                overflow: "hidden",
                width: "100%",
                height: { xs: "368px", md: "548px" },
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  background: "linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.5))",
                  zIndex: 1,
                }}
              />

              <Box
                component="img"
                src={card.img}
                alt={card.title}
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  zIndex: 0,
                }}
              />
              <CardContent
                sx={{
                  zIndex: 1,
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  color: "white",
                  padding: {
                    md: "32px",
                    xs: "16px",
                  },
                  textAlign: "left",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: {
                      md: "20px",
                      xs: "18px",
                    },
                    marginBottom: "8px",
                    marginTop: "auto",
                  }}
                >
                  {card.title}
                </Typography>
                <Typography
                  sx={{
                    fontSize: {
                      md: "16px",
                      xs: "12px",
                    },
                    marginBottom: {
                      md: 7,
                      xs: 4,
                    },
                  }}
                >
                  {card.description}
                </Typography>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
