
import { Box, Divider, IconButton, Popover, Typography } from "@mui/material";
import { buildVariant } from "../tripPlanning/theme";
import React from "react";
import { useNavigate } from "react-router";

interface BannerProps {
    isMobile: boolean;
}

export default function Banner({ isMobile }: BannerProps) {

    const navigate = useNavigate();

    const parentBoxStyle = {
        width: '100vw',
        position: "relative",
        height: isMobile ? '700px' : '',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }
    const subBoxStyle = {
        position: "absolute",
        display: "inline-block flex",
        backgroundColor: "white",
        borderRadius: "16px",
        padding: "8px 32px",
        gap: "40px",
        top: "16px"
    }


    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
    const [isToggled, setIsToggled] = React.useState(false);

    const handleToggle = (event: any) => {
        setAnchorEl(event.currentTarget);
        setIsToggled((prev) => !prev);
    };

    const handleClose = () => {
        setAnchorEl(null);
        setIsToggled(false);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    if (isMobile) {
        return (
            <Box sx={parentBoxStyle}>
                <IconButton
                    onClick={handleToggle}
                    sx={{
                        top: '16px',
                        right: '16px',
                        position: 'absolute',
                        width: "60px",
                        height: "60px",
                        borderRadius: "50%",
                        marginRight: "20px",
                        backgroundColor: "white",
                        color: "black",
                        boxShadow: 3,
                        zIndex: 1,
                        transition: "transform 0.3s ease-in-out, background-color 0.3s",
                        "&:active": {
                            transform: "scale(0.9)",
                        },
                    }}
                >
                    <img
                        src={isToggled ? "/page1/icClose.png" : "/page1/icMenu.png"}
                        alt="menu-toggle"
                        style={{
                            width: "28px",
                            height: "28px",
                            transition: "opacity 0.3s ease-in-out",
                        }}
                    />
                </IconButton>
                <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}

                >
                    <Box sx={{
                        padding: '8px 64px 8px 8px',
                        gap: '8px',
                        display: 'flex',
                        flexDirection: 'column',
                    }}>
                        <Typography onClick={() => navigate('/')}>Vietjet x PTPG</Typography>
                        <Divider />
                        <Typography onClick={() => navigate('/fengShui')}>Chọn điểm đến</Typography>
                        <Divider />
                        <Typography onClick={() => navigate('/trip-planning')} >Lên lịch trình</Typography>
                    </Box>
                </Popover>
                <Box sx={{
                    width: '100vw',
                    height: '700px',
                    position: 'absolute',
                    top: '0',
                }}>
                    <img src="/fengShui/banner-mobile.png" style={{
                        width: '100vw',
                        height: '700px',
                        position: 'absolute',
                        zIndex: 0,
                    }}></img>
                    <Typography sx={{
                        width: '100vw',
                        ...buildVariant(600, '32', '40', 'white'),
                        textAlign: 'center',
                        position: 'absolute',
                        top: '508px',
                    }}>
                        Kết Quả Phân Tích Bản Đồ Năng Lượng Cá Nhân
                    </Typography>
                </Box>
            </Box>

        )
    } else {
        return (
            <Box sx={parentBoxStyle}>
                <Box sx={subBoxStyle}>
                    <Typography onClick={() => navigate('/')} >Vietjet x PTPG</Typography>
                    <Typography onClick={() => navigate('/fengShui')} >Chọn điểm đến</Typography>
                    <Typography onClick={() => navigate('/trip-planning')} >Lên lịch trình</Typography>
                </Box>
                <img src="/fengShui/banner.svg" alt="banner" style={{ width: '100%', height: 'auto' }}></img>
            </Box>
        )
    }



}