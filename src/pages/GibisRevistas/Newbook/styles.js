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
        color:'#662E9B',

    },
    
    inputText:{
        width:"90%",
        marginTop:10,
        padding:10,
        height:50,
        borderBottomWidth:2,
        borderBottomColor:"#43BCCD",
        fontSize:18.5,
        
    },

    inputDescription:{
        width:"90%",
        marginTop:10,
        padding:10,
        height:200,
        borderBottomWidth:2,
        borderBottomColor:"#43BCCD",
        fontSize:18.5,
        
    },

    buttonNewBook:{
        width:60,
        height: 60,
        marginLeft: "70%",
        position: "relative",
        backgroundColor:"#662E9B",
        borderRadius:50,
        justifyContent:'center',
        alignItems:'center',
        
    },

    iconButton:{
        color: "#fff",
        fontSize: 14,
        fontWeight:"600",
        
     },

     buttonGaleria: {
        backgroundColor:'#43BCCD',
        width: "40%",
        height: 40,
       
        padding:8,
        alignItems:'center',
        justifyContent:'center',
        marginTop:10,
     },
     textoBotaoPicker:{
        alignSelf:'center',
        fontSize:15,
        fontWeight: 'bold',
             
        color:'#fff', 
        
     },
     imagemDesign:{
        width: "95%",
        height: 350,
        borderWidth:2,
        borderRadius:15,
        backgroundColor:'#D3D1CB',

     },

     buttonAvailable:{
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 0,
        padding:8,
        marginTop: 8,
     },

     titlebuttonAvailable:{
        color: "#0AE020",
        fontSize: 18,
        fontWeight: '300',
        padding: 14,
        
     },


});

export default styles;