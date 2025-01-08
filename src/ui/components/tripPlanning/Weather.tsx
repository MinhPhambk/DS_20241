import { Box, Typography } from "@mui/material";
import { buildVariant } from "./theme";
import { useEffect, useState } from "react";

export default function Weather({isMobile,content,arrival}:any) {

    const [sunUri,cloudyUri,rainUri]=[`/tripPlanning/sun.svg`,`/tripPlanning/cloudy.svg`,`/tripPlanning/rain.svg`]
    const [imgUri,setImgUri]=useState(sunUri)

    useEffect(()=>{
        if(content?.name){
            if(content.name==='cloudy'){
                setImgUri(cloudyUri)
            }else if (content.name==="sunny"){
                setImgUri(sunUri)
            }else if(content.name==='rainny'){
                setImgUri(rainUri)
            }
        }
    },[content])
    return (
        <>
        <Typography sx={{...buildVariant(600,'40','56'), textAlign:'center'}}  >Dự báo thời tiết tại {arrival?.name}</Typography>
        <Box sx={{
            padding: '32px',
            display: 'flex',
            flexDirection: isMobile ? 'column': 'row',
            justifyContent:  'space-between',
            alignItems: 'center',
            backgroundColor:'white',
            borderRadius: '16px',
            marginTop: '16px',
            marginBottom: '16px',
            maxWidth: '800px',
            marginRight:'auto',
            marginLeft:'auto',
        }}>
            <Box sx={{
                alignItems: !isMobile? 'start' : 'center',
            }}>
                <Typography sx={buildVariant(400,'14','20')}>{content?.description}</Typography>
                
            </Box>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: '16px',
                alignItems: 'center',

            }}>
                <img src={imgUri} style={{width:'80px',height:'80px'}}/>
                <Typography sx={buildVariant(500,'32','40')} >{content?.temperature}</Typography>
            </Box>

        </Box>
        </>
        
    )
}