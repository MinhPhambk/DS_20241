import { Box, Grid2, Typography } from "@mui/material";



export default function Fee({ isMobile, fee }: any) {
    const data = [
        {
            title: 'Vé máy bay (từ Vietjet)',
            imageLink: '/tripPlanning/first-fee-icon.svg',
            price: '2.372k',
            content: '',
        },
        {
            title: 'Chi phí trải nghiệm',
            imageLink: '/tripPlanning/second-fee-icon.svg',
            price: '1.000k',
            content: 'Bãi biển, chùa / Hoạt động trên biển / Khu vui chơi giải trí',
        },
        {
            title: 'Chi phí ăn uống',
            imageLink: '/tripPlanning/third-fee-icon.svg',
            price: '1.000k',
            content: 'Ăn sáng, trưa, tối / Đồ uống',
        },

        {
            title: 'Chi phí di chuyển',
            imageLink: '/tripPlanning/fourth-fee-icon.svg',
            price: '1.000k',
            content: '',
        },
        {
            title: 'Chi phí cư trú',
            imageLink: '/tripPlanning/fifth-fee-icon.svg',
            price: '1.000k',
            content: 'Phòng ngủ, phòng tắm, tiện nghi',
        },
        {
            title: 'Chi phí khác',
            imageLink: '/tripPlanning/sixth-fee-icon.svg',
            price: '1.000k',
            content: 'Phí vé tham quan, phí hướng dẫn viên, phí bảo hiểm',
        }
    ]
    return (
        <Box>
            <Typography variant="h2" sx={{ textAlign: 'center' }}>Dự trù chi phí</Typography>
            <Grid2 container spacing={2}>
                <Grid2 size={{ xs: 12, sm: 6, lg: 4 }} >
                    <FeeItem key={0} item={data[0]} isMobile={isMobile} />
                </Grid2>
                <Grid2 size={{ xs: 12, sm: 6, lg: 4 }} >
                    <FeeItem key={1} item={{ ...data[1], price: fee?.travelExperience }} isMobile={isMobile} />
                </Grid2>
                <Grid2 size={{ xs: 12, sm: 6, lg: 4 }} >
                    <FeeItem key={2} item={{ ...data[2], price: fee?.food }} isMobile={isMobile} />
                </Grid2>
                <Grid2 size={{ xs: 12, sm: 6, lg: 4 }} >
                    <FeeItem key={3} item={{ ...data[3], price: fee?.transportation }} isMobile={isMobile} />
                </Grid2>
                <Grid2 size={{ xs: 12, sm: 6, lg: 4 }} >
                    <FeeItem key={4} item={{ ...data[4], price: fee?.accommodation }} isMobile={isMobile} />
                </Grid2>
                <Grid2 size={{ xs: 12, sm: 6, lg: 4 }} >
                    <FeeItem key={5} item={{ ...data[5], price: fee?.other }} isMobile={isMobile} />
                </Grid2>
            </Grid2>
        </Box>
    )
}

const FeeItem = ({ item, isMobile }: any) => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: isMobile ? 'row' : 'column',
            backgroundColor: 'white',
            borderRadius: '16px',
            padding: isMobile ? '16px' : '32px',
            height: isMobile ? 'auto' : '276px'


        }}>
            <img src={item.imageLink} alt={item.title} style={{ width: '80px', height: '80px', marginBottom: '32px', marginRight: '16px' }} />
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                justifyContent: 'center',
            }}>
                <Typography variant="h4">{item.title}</Typography>
                <Typography variant="body1" sx={{ fontWeight: 600 }}>{`${parseInt(item.price) / 1000000}M`}</Typography>
                <Typography sx={{
                    fontWeight: 400,
                    fontSize: '0.75rem',
                    color: '#838383',
                    lineHeight: '1.25rem'
                }}>{item.content}</Typography>
            </Box>

        </Box>
    )
}