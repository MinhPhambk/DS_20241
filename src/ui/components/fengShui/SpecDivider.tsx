import { Box } from "@mui/material";

export default function SpecDivider(){
    const boxStyle={
        marginTop: '32px',
        marginBottom: '32px',
    }
    return (
        <Box sx={boxStyle}>
            <img src="/fengShui/divider.svg" alt="divider" style={{width:'100%'}}/> 
        </Box>
    )
}