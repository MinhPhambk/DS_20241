import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router';
import { buildVariant } from '../ui/components/tripPlanning/theme';

export default function ErrorDialog({message,action,url}: any){
    const navigate=useNavigate();
    const handleClick=()=>{
        navigate(url);
    }
    return(
        <Box sx={{
            width:'100%',
            maxWidth:'560px',
            height:'42px',
            backgroundColor:'#FFF0F7',
            display:'flex',
            alignItems:'center',
            justifyContent:'space-between',
            borderRadius:'8px',
            border:'1px solid #DA0530',
            gap:'8px',
            padding:'4px 32px 4px 32px',

        }}>
            <img src="/error-alert.svg" style={{
                width: '24px',
                height: '24px'
            }} alt='Error alert'></img>
            <Typography sx={{...buildVariant(600,'14','24','#DA0530'),maxWidth:'400px'}}>{message}</Typography>
            <Button onClick={handleClick} sx={{
                backgroundColor:'#2D43CA',
                color:'white',
                borderRadius:'8px',
            }} variant='contained' >{action}</Button>
        </Box>
    )

}