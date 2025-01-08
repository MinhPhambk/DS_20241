import { Box, Button, CircularProgress, DialogContent, DialogTitle, Grid2, IconButton, Slider, TextField, Typography } from "@mui/material";
import LocationItem from "./LocationItem";
import colors from "./colors";
import { useEffect, useState } from "react";
import FengShuiDialog from "./FengShuiDialog";
import { MinusIcon, SumIcon } from "./icons/Icon";
import { useDispatch, useSelector } from "react-redux";
import { getTripPlanning } from "../../../libs/slices/fengShuiSlice";
import { useNavigate } from "react-router";
import { cityCode } from "../../../assets/data/city";
import { SavedUserInfo, TripInfoTypePayLoad } from "../../../types";
import { buildVariant } from "../tripPlanning/theme";
import { validateImage } from "../../../services";

export default function LocationContent({ isMobile, isSpecial, city, position }: any) {


  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isSubmit, setIsSubmit] = useState(false);
  const {  tripLoading, tripError } = useSelector((state: any) => state.fengShui);
  const [showAlert, setShowAlert] = useState(false);
  const userInfo: SavedUserInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo') as string) : null;
  const [customerData, setCustomerData] = useState({
    budget: 1000,
    startDate: "",
    endDate: "",
    quantities: 1,
  });
  const [quantiy, setQuantity] = useState(1);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setCustomerData({ ...customerData, [name]: value });
  };



  const handleIncrease = () => {
    setQuantity(quantiy + 1);
    setCustomerData({ ...customerData, quantities: quantiy + 1 });
  }

  const handleDecrease = () => {
    if (quantiy > 1) {
      setQuantity(quantiy - 1);
      setCustomerData({ ...customerData, quantities: quantiy + 1 });
    }
  }

  const handleSliderChange = (e: any) => {
    const {  value } = e.target;
    setCustomerData({ ...customerData, budget: value });
  }


  const calculateDurationInDays = (startDate: Date, endDate: Date) => {
    const differenceInTime = endDate.getTime() - startDate.getTime();
    const differenceInDays = differenceInTime / (1000 * 3600 * 24);
    return differenceInDays;
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (new Date(customerData.endDate) <= new Date(customerData.startDate)) {
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 1000);
      return;
    }
    const departureCity = userInfo?.departureCity;

    const arrival = {
      name: cityCode[city.code],
      code: city.code
    }
    let validImages=await validateImage(city.images);
    
    const data: TripInfoTypePayLoad = {
      duration: calculateDurationInDays(new Date(customerData.startDate), new Date(customerData.endDate)),
      budget: customerData.budget*1000000,
      arrival: arrival,
      departure: departureCity,
      travelerQuantities: customerData.quantities,
      startDate: customerData.startDate,
      endDate: customerData.endDate,
      arrivalImg: validImages && validImages.length>0 ? validImages[0] : '',
    }
    localStorage.setItem('tripInfo', JSON.stringify(data));
    dispatch(getTripPlanning(data) as any);
    navigate('/trip-planning');
  }


  const buttonStyle = {
    backgroundColor: colors.primary,
    color: 'white',
    paddingTop: '18px',
    paddingBottom: '18px',
    borderRadius: '16px',
    width: '327px',

  }
  const typoStyle = {
    fontSize: isMobile ? '12px' : '16px',
    lineHeight: isMobile ? '18px' : '24px',
  }

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#FFFFFF",
        borderRadius: "24px",
        padding: "32px",
        marginTop: "32px",
        marginBottom: "32px",

      }}
    >
      <Box
        sx={{
          marginBottom: "32px",
        }}
      >
        <Typography
          sx={{
            color: "#838383",
            fontWeight: 600,
            fontSize: isMobile ? "18px" : "20px",
            lineHeight: isMobile ? "24px" : "28px",
          }}
        >
          Địa điểm {position}
        </Typography>
        <Box sx={{
          display: 'flex',
          flexDirection: isMobile? 'column':'row',
          gap: '16px',
        }}>
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: isMobile ? "24px" : "32px",
              lineHeight: isMobile ? "32px" : "40px",
            }}
          >
            {city?.code ? cityCode[city.code] : ""}
          </Typography>
          {
            isSpecial && (
              <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: '8px',
                alignItems: 'center',
                background: `linear-gradient(92.4deg, #A8F5FF -8.37%, #FF4E72 10.92%, #DA0530 81.42%, #E9A2C2 102.96%)`,
                borderRadius:'32px',
                padding: '8px',
    
              }}>
                <img src="/fengShui/location.svg" alt="location" style={{ width:'24px', height:'24px'}}></img>
                <Typography sx={buildVariant(600,'14','20','white')}>Địa điểm du lịch mong muốn</Typography>
              </Box>
            )
          }
        </Box>
      </Box>

      <LocationItem isMobile={isMobile} city={city} />

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "32px",
        }}
      >
        <Button variant="contained" sx={buttonStyle} onClick={handleClickOpen}>
          Tìm hiểu lịch trình
        </Button>
      </Box>

      <FengShuiDialog open={open} onClose={handleClose}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle sx={{
          color: 'white',
          fontSize: isMobile ? '28px' : '40px',
          lineHeight: isMobile ? '36px' : '40px',
          textAlign: 'center',
          maxWidth: '600x',

        }}>Hãy Cung Cấp Cho Mình Thêm Một Vài Thông Tin Sau Nhé</DialogTitle>
        <DialogContent sx={{ padding: 1 }}>
          <Box component="form"
            onSubmit={handleSubmit}
            sx={{
              padding: isMobile ? '16px' : '32px',
              paddingRight: '2px',
              paddingLeft: '2px',
              maxWidth: '600px'
            }}>
            <Grid2 container columnSpacing={{ xs: 1, md: 4 }} rowSpacing={{ xs: 1, md: 4 }} sx={{ padding: isMobile ? '8px' : '16px' }}>
              <Grid2 size={6}>
                <Box sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'start',
                  width: '100%',
                  marginBottom: '8px',
                  gap: isMobile ? '4px' : '8px'
                }}>
                  <img src="/fengShui/flight-go.svg" alt="flight"></img>
                  <Typography sx={typoStyle}>Chọn ngày đi</Typography>
                </Box>
                <TextField type="date" sx={{ width: '100%' }} size="small" name="startDate" required onChange={handleInputChange}></TextField>
              </Grid2>
              <Grid2 size={6} >
                <Box sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'start',
                  marginBottom: '8px',
                  gap: isMobile ? '4px' : '8px'
                }}>
                  <img src="/fengShui/flight-back.svg" alt="flight"></img>
                  <Typography sx={typoStyle}>Chọn ngày về</Typography>
                </Box>
                <TextField type="date" sx={{ width: '100%' }} size="small" required name="endDate" onChange={handleInputChange} ></TextField>
                {showAlert && <Typography sx={{ color: 'red', fontSize: '12px' }}>Ngày về phải sau ngày đi</Typography>}
              </Grid2>
              <Grid2 size={{ xs: 12, sm: 6 }} sx={{ display: 'flex', flexDirection: 'column', alignItems: isMobile ? 'center' : 'start' }} >
                <Box sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'start',
                  width: '100%',
                  marginBottom: '16px',
                  gap: '8px'
                }}>
                  <img src="/fengShui/human.svg" alt="flight"></img>
                  <Typography sx={typoStyle}>Số người trong đoàn</Typography>
                </Box>
                <Box sx={{
                  display: 'flex',
                  justifyContent: 'start',
                  marginBottom: '16px'
                }}>
                  <IconButton sx={{
                    border: '0.5px solid #E4E9F2',
                    borderRadius: '0px',
                  }}>
                    <MinusIcon onClick={handleDecrease} />
                  </IconButton>
                  <Typography sx={{
                    border: '0.5px solid #E4E9F2',
                    borderRadius: '0px',
                    padding: '6px 73px 6px 73px'
                  }}
                  >{quantiy}</Typography>
                  <IconButton sx={{
                    border: '0.5px solid #E4E9F2',
                    borderRadius: '0px',

                  }}>
                    <SumIcon onClick={handleIncrease} />
                  </IconButton>
                </Box>
              </Grid2>
              <Grid2 size={{ xs: 12, sm: 6 }} >
                <Typography sx={{ fontWeight: '600', marginBottom: '8px' }}>Ngân sách của bạn/ người</Typography>
                <Slider defaultValue={1} valueLabelDisplay="on" valueLabelFormat={(value) => <div>{`${value}M`}</div>} min={1} max={50} value={customerData.budget} onChange={handleSliderChange} step={0.1}
                  sx={{
                    color: '#2D43CA',
                    width: '100%',
                    '& .MuiSlider-thumb': {
                      backgroundColor: '#2D43CA',
                    },
                    '& .MuiSlider-valueLabel': {
                      backgroundColor: '#2D43CA',
                      color: 'white',
                      lineHeight: 1.2,
                      fontSize: 12,
                      padding: 0.5,
                      maxWidth: 60,
                      height: 32,
                    },

                    "& .MuiSlider-track": {
                      backgroundColor: "#2D43CA",
                      width: "100%",
                    },
                    "& .MuiSlider-rail": {
                      backgroundColor: "black",
                      width: "100%",
                    },
                    "& .MuiSlider-mark": {
                      backgroundColor: "#2D43CA",
                    },
                  }}
                />
              </Grid2>
            </Grid2>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "8px",
                marginBottom: "8px",
              }}
            >
              <Button
                variant="contained"
                sx={{ ...buttonStyle, width: "100%" }}
                component="button"
                type="submit"
              >
                {tripLoading ? <CircularProgress color="secondary" /> : 'Xem lịch trình'}
              </Button>
            </Box>
            {/* {tripError && <Typography sx={{ color: 'red' }}>{tripError}</Typography>} */}
            <Typography
              onClick={handleClose}
              sx={{
                color: colors.primary,
                textAlign: "center",
                fontSize: "16px",
                lineHeight: "24px",
                fontWeight: 600,
              }}
            >
              Trở lại{" "}
            </Typography>
          </Box>
        </DialogContent>
      </FengShuiDialog>
    </Box>
  );
}
