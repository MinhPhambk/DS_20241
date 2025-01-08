import {
  Box,
  Button,
  Divider,
  Popover,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router";

export default function Banner() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.up("md"));
  const [isToggled, setIsToggled] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleToggle = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setIsToggled((prev) => !prev);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setIsToggled(false);
  };

  const parentBoxStyle = {
    width: "100vw",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  const subBoxStyle = {
    position: "absolute",
    display: "flex",
    backgroundColor: "white",
    borderRadius: "16px",
    padding: "8px 32px",
    gap: "10px",
    border: "2.5px solid #d32f2f",
  };

  const buttonStyle = {
    color: "black",
    textTransform: "none",
    fontSize: "16px",
    padding: "5px 20px",
    "&:hover": {
      backgroundColor: "transparent",
    },
  };

  const activeButtonStyle = {
    ...buttonStyle,
    color: "red",
    fontWeight: "bold",
  };

  return (
    <Box
      sx={{
        position: "fixed",
        top: "70px",
        left: 0,
        width: "100%",
        height: "auto",
        zIndex: 2000,
      }}
    >
      <Box sx={parentBoxStyle}>
        <Box sx={subBoxStyle}>
          <Button
            sx={location.pathname === "/" ? activeButtonStyle : buttonStyle}
            onClick={() => navigate("/")}
          >
            Dự Đoán Giá Nhà
          </Button>
          <Divider
            orientation="vertical"
            flexItem
            sx={{ backgroundColor: "#ddd", margin: "0 10px" }}
          />
          <Button
            sx={location.pathname === "/page2" ? activeButtonStyle : buttonStyle}
            onClick={() => navigate("/page2")}
          >
            Phân Tích & Thống Kê
          </Button>
          <Divider
            orientation="vertical"
            flexItem
            sx={{ backgroundColor: "#ddd", margin: "0 10px" }}
          />
          <Button
            sx={location.pathname === "/page3" ? activeButtonStyle : buttonStyle}
            onClick={() => navigate("/page3")}
          >
            Tìm Nhà Bán
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
