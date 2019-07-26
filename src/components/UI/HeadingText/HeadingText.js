import React from 'react'
import { StyleSheet, Text } from 'react-native'

const HeadingText = (props) => {
    return (
            <Text {...props} style={[styles.textHeading, props.style]}>{props.children}</Text>
    )
}

export default HeadingText

const styles = StyleSheet.create({
    textHeading: {
        backgroundColor: "transparent",
        fontSize: 32,
        fontWeight: "bold"
      }
});