import { Box, Collapse, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material"
import { DayIcon, LocationIcon, RemoveIcon, ShiftIcon, SumIcon } from "./icons/icons"
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useEffect, useState } from "react";
import colors from "./colors";
import { buildVariant } from "./theme";
import TripDialog from "./TripDialog";
import usePlanningData from "../../../hooks/usePlanningData";
import { useSelector } from "react-redux";
import { formatDate } from "../../../libs/utils";
import { validateImage } from "../../../services";


export default function Itinerary({ isMobile, itineraries }: any) {


    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}>
            <Typography sx={{...buildVariant(600,'40','56'), textAlign:'center',maxWidth:'640px',marginBottom:'32px'}}>Lịch trình chi tiết theo từng ngày cho chuyến du lịch của bạn</Typography>
            <Box sx={{
                width: '100%',
            }}>
                <List sx={{ width: '100%' }}>
                    {itineraries?.map((item: any, index: any) => (
                        <ItineraryItem key={index} isMobile={isMobile} item={item} />
                    ))}
                </List>
            </Box>
        </Box>
        
    )

}
const ItineraryItem = ({ isMobile, item }: any) => {
    const {isShare: isShare}=useSelector((state:any)=>state.fengShui);
    const [open, setOpen] = useState(true);

    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <Box sx={{
            backgroundColor: colors.white,
            marginBottom: '16px',
            borderRadius: '16px',
            padding: '16px',
        }}>
            <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                    <DayIcon />
                </ListItemIcon>
                <ListItemText>
                    {item?.realDay}
                </ListItemText>
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List>
                    {item?.activities?.map((activity: any, index: any) => (
                        <ListItem key={index} component={"div"} sx={{ gap: '8px', padding: isMobile ? '8px' : '16px' }}>
                            <Activity isMobile={isMobile} id={activity.id} />
                        </ListItem>
                    ))}
                </List>
                <Box >
                 {!isShare && <TripDialog isMobile={isMobile} day={item?.day} realDay={item?.realDay} /> }   
                </Box>
            </Collapse>
        </Box>
    )

}

export const Activity = ({ isMobile, id, isInIntinerary, isPop, actions }: any) => {
    const { handleAdd, handleRemove } = actions || {};
    const activity = usePlanningData(id);
    // const [isValidImage,setIsValidImage]=useState(activity?.img[0]);

    // useEffect(()=>{
    //     const checkImage = async () => {
    //         const urls = await validateImage(activity?.img);
    //         setIsValidImage(urls && urls.length> 0 ? urls[0] : '');
    //     };
    //     checkImage();
    // },[activity])
    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
        }}>

            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
            }}>
                {handleRemove && isInIntinerary && <RemoveIcon onClick={() => handleRemove(id)} />}
                <img src={`${activity.img}`} style={{
                    width: !isMobile ? '108px' : '78px',
                    height: !isMobile ? '72px' : '52px',
                    borderRadius: '8px',
                }} alt="activity" />
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyItems: 'center',
                }}>
                    <Typography sx={buildVariant(600, '16', '24')}>{activity?.name}</Typography>
                    <Box sx={{
                        display: 'flex',
                        gap: '8px',
                        alignItems: 'center'
                    }}>
                        {isMobile ? <></> : <LocationIcon sx={{ width: '20px', height: '20px' }} />}
                        <Typography sx={buildVariant(400, '14', '20', '#838383')}>{activity?.address}</Typography>
                    </Box>
                </Box>
            </Box>
            {isPop && (isMobile && !isInIntinerary) && handleAdd && <SumIcon onClick={() => handleAdd(id)} />}
            {isPop && (isInIntinerary || !isMobile) && <ShiftIcon />}

        </Box>

    )
}
