import { Box, Button, Typography } from "@mui/material";
import SpecDivider from "./SpecDivider";
import colors from "./colors";
import LuckyDescription from "./LuckyDescription";

export default function ExploreBox({ isMobile, description }: any) {

    const boxStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', // Center items horizontally
        justifyContent: 'center' // Center items vertically

    }
    const handleClick = () => {
            window.scrollTo({
                top: 1500,
                behavior: "smooth",
            });
    };

    const buttonStyle = {
        backgroundColor: colors.primary,
        color: 'white',
        padding: '14px 121px 14px 121px',
        borderRadius: '16px',
    }
    return (
        <Box sx={boxStyle}>
            <LuckyDescription isMobile={isMobile} description={description} />
            <Box sx={boxStyle}>
                <SpecDivider />
                <Typography sx={{ marginBottom: "32px", textAlign: 'center' }}>Khám phá điểm đến du lịch phù hợp nhất với năng lượng cá nhân của bạn trong Tết 2025</Typography>
                <Button variant="contained" sx={buttonStyle}
                 onClick={handleClick}
                
                >Xem ngay</Button>
                <SpecDivider />
            </Box>
        </Box>
    )
}