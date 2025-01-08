import { Box, Typography } from "@mui/material";

export default function LuckyDescription({isMobile,description}:any){

    const boxStyle={
        gap:'16px',
        paddingRight: isMobile ? '16px':'28.19vw',
        paddingLeft: isMobile ? '16px':'28.19vw',
        marginTop: '32px',

    }
    const typoStyle={
        marginBottom: '16px',
        weight: '400',
        fontSize: isMobile ? '14px':'16px',
        lineHeight:  isMobile ? '20px':'24px',
    }
    const dividePart=(text:string)=>{
        const splitPoint1 = "Trong năm";
        const splitPoint2 = "Để bổ sung";

        const part1 = text.substring(0, text.indexOf(splitPoint1)).trim();
        const part2 = text.substring(text.indexOf(splitPoint1), text.indexOf(splitPoint2)).trim();
        const part3 = text.substring(text.indexOf(splitPoint2)).trim();

        return [part1, part2, part3];
    }
    return (
        <Box sx={boxStyle}>
            <Typography sx={typoStyle}>{description? dividePart(description)[0]:''}</Typography>
            <Typography sx={typoStyle}>{description? dividePart(description)[1]:''}</Typography>
            <Typography sx={typoStyle}>{description? dividePart(description)[2]:''}</Typography>
        </Box>
    )
}