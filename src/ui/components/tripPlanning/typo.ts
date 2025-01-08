const buildVariant = (fontWeight: number, fontSize: string, lineHeight: string, color?: string) => {
    return {
        fontSize: fontSize,
        fontWeight: fontWeight,
        lineHeight: lineHeight,
        color: color
    }
}

export const bannerTypo = (isMobile: boolean) => {
    return !isMobile ? buildVariant(600, '48px', '56px', 'white') : buildVariant(600, '20x', '28px', 'white')
}

export const subBannerTypo = (isMobile: boolean) => {
    return !isMobile ? buildVariant(400, '20px', '28px', 'white') : buildVariant(600, '14px', '20px', 'white')
}
