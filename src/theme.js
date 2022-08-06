const theme = {
    color: {
        primary: "#D21D5A", // ok   
        // primary: '#62C9C9', // ok   
        disabled: 'rgba(210,29,90,.5)',
        // disabled: 'rgba(98,201,201, .5)',
        dimPrimary: '#E0F2F7',   
        dimLight: '#666666',
        pink : "#FF86A0",
        darkGray: '#767676',
        dimGray :"#FAFAFA",
        black : "#1F1F1F",
        inputBg : "#F3F3F3",
        extraLight: '#faf9f9',
        inputBorder : "#E8E6E6",
        cardBg : "#F8F8F8",
        midGray : "#F2F2F2",
        red: '#ea5455',
        bg: 'white',
        green: '#1ABA00',
    },
    font: { // ok
        regular: 'Poppins-Regular',
        semiBold: 'Poppins-SemiBold',
        bold: 'Poppins-Bold',
        latoBold: "Lato-Bold",
        latoRegular: "Lato-Regular",
        latoLight: "Lato-Light",
        latoThin: "Lato-Thin"

    },
    fontSizes: {
        extraSmall: 10,
        small: 12,
        regular: 14,
        medium: 16,
        large: 18,
        extraLarge: 20,
        ultraLarge: 22
    },
    marginHorizontal: 15,
    marginVerticle: 15,
    Radius: {
        small: 3,
        medium: 5,
        large: 7
    },
    setPrimaryColor: function (color) {
        this.color.primary = color;
    }
};

export default theme;
