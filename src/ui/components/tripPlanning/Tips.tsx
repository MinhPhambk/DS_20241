import { Box, Grid2, Typography } from "@mui/material"
import { TipIcon } from "./icons/icons"
import { buildVariant } from "./theme"

export const Tips = ({isMobile,location,tips}:any) => {
     return (
        <Box sx={{
            marginBottom: '32px',
        }}>
        <Typography sx={{...buildVariant(600,'40','56'), textAlign:'center'}}  >Tips du lịch {location} vào dịp Tết</Typography>
        <Grid2 container sx={{
            marginTop: '32px',
            backgroundColor:'white',
            padding: '16px',
            borderRadius: '16px',
            
        }}  spacing={4} >
            {
                tips?.map((tip:any,index:number) => {
                    return (
                        <Grid2 size={{ xs:12, sm:4 }}  sx={{display: 'flex'}} key={index}>
                            <TipItem isMobile={isMobile} isLast={index === tips.length - 1} position={index+1} description={tip?.description}/>
                        </Grid2>
                    )
                })

            }
           
        </Grid2>
        </Box>
        
     )

    
}

const TipItem = ({isMobile,isLast,position,description}:any) => {

    return (
    <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        gap: '16px',
        borderRight: isMobile ? 'none' : (isLast ? 'none':'1px solid #E0E0E0'),
        padding: '16px',
    }}>
        <TipIcon sx={{ width: '5rem',height:'5rem',marginBottom:'16px'}}/>
        <Box>
            <Typography sx={buildVariant(400,'14','20','#FF1018')}>Tip {position}</Typography>
            <Typography>{description}</Typography>
        </Box>
    </Box>

    )
    
}