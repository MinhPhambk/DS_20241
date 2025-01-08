import { Box,  Typography} from '@mui/material';
import { buildVariant } from "./theme"

import { MapIcon } from "./icons/icons";
import { useEffect, useState } from "react";
import { MapUrl } from "../../../assets/api";
import { validateImage } from '../../../services';

export const CardItem = ({ location, isMobile, image }: {location:any, isMobile: any,image: any}) => {
    const [hover, setHover] = useState(false);
    const [isValidImage, setIsValidImage] = useState<string>('');
    const handleMapClick=()=>{
        const url = `${MapUrl}/${location?.name} ${location?.address}`;
        window.open(url, '_blank');

    }
    useEffect(() => {
        const checkImage = async () => {
            const urls = await validateImage(image);
            setIsValidImage(urls && urls.length> 0 ? urls[0] : '');
        };
        checkImage();
    },[image]);
    return (
        <Box sx={{
            width: isMobile ? '150px' : '21vw',
            position: 'relative',
            "&:hover": {
                cursor: "pointer",
            },
        }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            {isMobile && <Box sx={{
                borderRadius: '50%',
                padding: '4px',
                position: 'absolute',
                top: '10px',
                right: '10px',
                backgroundColor: '#FFFFFF',
            }}
            >
                <MapIcon onClick={handleMapClick} />
            </Box>}


            {hover && !isMobile && (
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '40%',
                    padding: '16px',
                    backgroundColor: 'white',
                    borderRadius: '16px',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                onClick={handleMapClick}  
                >
                    <MapIcon />
                    <Typography>Xem bản đồ</Typography>
                </Box>
            )}


            <img src={isValidImage} style={{
                width: isMobile ? '150px' : '21vw',
                height: isMobile ? '100px' : '14vw',
                borderRadius: '16px',
            }}></img>
            <Typography variant="subtitle1">{location?.name}</Typography>
            <Typography variant="body2">{location?.description} </Typography>
            <Box sx={{
                display: 'flex',
                alignItems: 'start',
                gap: '8px',
                marginTop: '16px',
            }}
            >
                <img src="/tripPlanning/location.svg" />
                <Typography sx={buildVariant(400, '14px', '20px', '#838383')}>{location?.address}</Typography>
            </Box>
        </Box>
    )
}
