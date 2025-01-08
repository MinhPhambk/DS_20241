import { Box, Typography } from "@mui/material"
import colors from "./colors"


export default function LocationHeader({ isMobile,name,introduction }:any) {

    const headerFont = {
        fontSize: isMobile ? '28px' : '40px',
        fontWeight: '600',
        lineHeight: isMobile ? '36px' : '56px',
        textAlign: 'center',

    }
    const subFont = {
        fontSize: isMobile ? '14px' : '16px',
        fontWeight: 400,
        lineHeight: isMobile ? '24px' : '20px',
        textAlign: 'center',
        marginBottom: '16px'
    }


    return (
        <Box sx={{
            paddingRight: isMobile ? '16px' : '0',
            paddingLeft: isMobile ? '16px' : '0',
            paddingTop: isMobile ? '40px' : '5.55vw',
            paddingBottom: isMobile ? '16px' : '80px',
            maxWidth: '864px',
        }}>
            <Typography sx={headerFont} color={colors.primary}>Đây là những địa điểm phù hợp nhất cho</Typography>
            <Typography sx={{ ...headerFont, marginBottom: '16px',maxWidth:'864px' }} color={colors.primary}>{name}</Typography>
            <Typography sx={subFont}>{introduction}</Typography>
        </Box>
    )
}