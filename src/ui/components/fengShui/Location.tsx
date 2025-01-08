import { Box } from "@mui/material";
import LocationHeader from "./LocationHeader";
import LocationContent from "./LocationContent";
import colors from "./colors";

export default function Location({ isMobile, arrivalCity, suggestedCities,name,introduction }: any) {

    return (
        <Box sx={{
            backgroundColor: colors.soft_blue,
            paddingRight: isMobile ? '16px' : '5vw',
            paddingLeft: isMobile ? '16px' : '5vw',
            display: 'flex',
            flexDirection: 'column'
        }}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
                <LocationHeader isMobile={isMobile} name={name} introduction={introduction} />
            </Box>

            <Box>
                <LocationContent isMobile={isMobile} city={arrivalCity} isSpecial={true} />
                {suggestedCities?.map((city: string, index: number) => (
                    <LocationContent key={index} isMobile={isMobile} city={city} isSpecial={false} />
                ))}
            </Box>
        </Box>
    )
}