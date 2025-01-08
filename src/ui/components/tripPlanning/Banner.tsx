import { Box, Divider, IconButton, Popover, Typography } from "@mui/material"
import { bannerTypo, subBannerTypo } from './typo';
import { useNavigate } from "react-router";
import React from "react";

export const Banner = ({ isMobile,name,startDate,endDate,arrival,imgUri,isShare}: any) => {
    const navigate= useNavigate();

    const parentBoxStyle={
        position: "absolute",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
    }

    const subBoxStyle = {
        display: "inline-block flex",
        backgroundColor: "white",
        borderRadius: "16px",
        padding: "8px 32px",
        gap: "40px",
        top: "16px",
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

    const formatDate = (date: Date | string | undefined): string => {
        if (!date) return "";
        
        const parsedDate = typeof date === "string" ? new Date(date) : date;
        
        return parsedDate.toLocaleDateString("vi-VN", {
            weekday: "long",
            year: "numeric",
            month: "long", 
            day: "numeric",
        });
    };   

    return (
        <Box sx={{
            backgroundImage: `url(${imgUri})`,
            backgroundSize: 'cover',
            width: '100%',
            height: isMobile ? '48.3vw' : 'calc(400/1400*100vw)',
            position: 'relative',
            borderRadius: '16px',
        }}>
            <img src={imgUri} style={{
                width: '100%',
                height: isMobile ? '48.3vw' : 'calc(400/1400*100vw)',
                top: 0,
                position: 'absolute',
                borderRadius: '16px',
            }} alt="Banner"></img>
            <Box sx={{
                position: 'absolute',
                bottom: isMobile ? '16px' : '32px',
                left: isMobile ? '16px' : '32px',
            }}>
                <Typography sx={bannerTypo(isMobile)} >Chuyến đi tới {arrival?.name} của {name}</Typography>
                <Typography sx={subBannerTypo(isMobile)} >{formatDate(startDate)} - {formatDate(endDate)}</Typography>
            </Box>
            {
                (!isShare) && (isMobile ?(
                    <Box>
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
                                padding: '8px 8px 8px 8px',
                                gap: '8px',
                                display: 'flex',
                                flexDirection: 'column',
                            }}>
                                <Typography sx={{marginRight:'56px'}} onClick={() => navigate('/')}>Vietjet x PTPG</Typography>
                                <Divider />
                                <Typography  sx={{marginRight:'56px'}} onClick={() => navigate('/fengShui')}>Chọn điểm đến</Typography>
                                <Divider />
                                <Typography sx={{marginRight:'56px'}}  onClick={() => navigate('/trip-planning')} >Lên lịch trình</Typography>
                            </Box>
                        </Popover>
                    </Box>

                )
                :(
                    <Box sx={parentBoxStyle}>
                         <Box sx={subBoxStyle}>
                            <Typography onClick={() => navigate('/')} >Vietjet x PTPG</Typography>
                            <Typography onClick={() => navigate('/fengShui')} >Chọn điểm đến</Typography>
                            <Typography onClick={() => navigate('/trip-planning')} >Lên lịch trình</Typography>
                          </Box>
                    </Box>
                   

                ))
            }

        </Box>
    )

  
}