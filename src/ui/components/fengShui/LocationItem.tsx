import { Box,  Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { isValidImageUrl, validateImage } from "../../../services";

export default function LocationItem({ isMobile, city }: any) {

    const boxStyle = {
        display: 'flex',
        flexDirection: 'row',
        overflowX: 'auto',
        padding: '16px',
        gap: '16px',
        justifyContent: 'space-between',


    }
    const [validImages, setValidImages] = useState<string[]>([]);

    useEffect(()=>{
        const validateImages = async () => {
            const validatedImages=await validateImage(city?.images);
            if(validatedImages===null) setValidImages(city?.images)
            else  setValidImages(validatedImages.filter((url) => url !== null).slice(0,3) as string[]);
        };
        validateImages();

    },[city])

    return (

        <Box sx={boxStyle}>
            {
                city?.reason?.map((details: any, index: number) => (
                    <CardItem key={index} isMobile={isMobile} details={details} imageUri={validImages.length>0?validImages[index]:''} isRight={index === 2} />
                ))
            }
        </Box>
    )

}

function CardItem({ isMobile, isRight, details, imageUri }: any) {

    const cardStyle = {
        width: isMobile ? '227px' : '24vw',
        borderRadius: '0',
        borderRight: !isRight ? '1px solid #DDDDDD' : 'none',
        paddingRight: '16px',
        paddingLeft: '16px',

    }

    const mediaStyle = {
        borderRadius: '16px',
        width: isMobile ? '227px' : '24vw',
        height: isMobile ? '122px' : '16vw',


    }
    const titleStyle = {
        fontSize: isMobile ? '16px' : '20px',
        fontWeight: 600,
        lineHeight: isMobile ? '24px' : '28px',
        marginBottom: isMobile ? '8px' : '16px',
    }

    const contentStyle = {
        fontSize: isMobile ? '14px' : '16px',
        lineHeight: isMobile ? '20px' : '24px',
    }
    return (
        <Box sx={cardStyle}>
            <img

                src={imageUri}
                alt="location"
                style={mediaStyle}
                onError={(e) => {
                    e.currentTarget.src = '/photo-error.svg';
                }}

            />
            <Box>
                <Typography sx={titleStyle}>{details?.criteria}</Typography>
                <Typography sx={contentStyle}>{details?.description}</Typography>
            </Box>
        </Box>)
}