import styled from "@emotion/styled";
import { Dialog } from "@mui/material";

const FengShuiDialog=styled(Dialog)(()=>({
    '& .MuiDialog-paper':{
        backgroundImage: 'url(/fengShui/dialog-background.svg)',
        alignItems:'center',
        paddingBottom:'32px',
        borderRadius:'24px',
        
    },
    
    '& .MuiDialogContent-root':{
        backgroundColor:'white',
        maxWidth:'600px',
        borderRadius:'24px',
        margin:'32px',
    },
    '& .MuiDialogTitle-root':{
        maxWidth:'600px',
    }

}))

export default FengShuiDialog;