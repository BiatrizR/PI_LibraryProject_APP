import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        alignItems:"center",

    },

    label:{
        width:"90%",
        marginTop: 20,
        marginLeft: 'auto',
        marginRight:'auto',
        fontSize:18,
        color:'#008082',

    },
    
    inputText:{
        width:"90%",
        marginTop:10,
        padding:10,
        height:50,
        borderBottomWidth:2,
        borderBottomColor:"#F9C202",
        fontSize:18.5,
        
    },

    buttonNewBook:{
        width:65,
        height: 65,
        bottom:30,
        position: "absolute",
        backgroundColor:"#008082",
        borderRadius:50,
        right: 50,
        justifyContent:'center',
        alignItems:'center',
        
    },

    iconButton:{
        color: "#fff",
        fontSize: 16,
        fontWeight:"bold",
        
     },

});

export default styles;