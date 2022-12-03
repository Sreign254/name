import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Colors from "../../Constants/Colors"



export default StyleSheet.create({
    btnContainer: {
        width: "100%",
        height: RFValue(50),
        borderRadius: 10,
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        backgroundColor: Colors.primaryblue,
        marginTop: 10,
        marginBottom: 10,
    },
    btnText: {
        color: Colors.White,
        fontSize: RFValue(16),
        fontWeight: "bold",

    },
    iconStyle: {
        height: RFValue(20),
        width: RFValue(20),
        borderRadius: RFValue(10),
        tintColor: Colors.White,
    }

})