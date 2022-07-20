import React from 'react';
import { View, SafeAreaView } from "react-native";

function ViewPagerIndicator({ size = 10, space = 6, numPages, activeIndex, defaultColor, activeColor, horizontal = true }) {
    let itemData = [];
    // const pageContext = useContext(PageContext);
    for (let i = 0; i < numPages; i++) {
        itemData.push(<View key={i} style={{
            width: size,
            height: size,
            margin: space,
            borderRadius: size / 2,
            backgroundColor: i === activeIndex ? activeColor : defaultColor
        }} />)
    }
    return (
        <SafeAreaView style={{ flexDirection: horizontal ? 'row' : 'column' }}>
            {itemData}
        </SafeAreaView>
    );
}

export default ViewPagerIndicator;