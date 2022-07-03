import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
   container: {
      flex:1,
      backgroundColor:"#fff",
      paddingTop:20,

   },
   Books:{
      width:"100%",
      flexDirection:"row",
      justifyContent:"space-between",
      marginTop:10,

   },
   deleteBook:{
      justifyContent:"center",
      paddingLeft:5,
   },

   DescriptionBook:{
      width:"90%",
      alignContent:"flex-start",
      backgroundColor:"#D1EDF1",
      padding:12,
      borderRadius:8,
      marginBottom:5,
      marginRight:15,
      textAlign:'center',
      
      
   },

   buttonNew:{
      width:60,
      height: 60,
      position:"absolute",
      bottom:30,
      left:20,
      backgroundColor:"#008082",
      borderRadius:50,
      justifyContent:'center',
      alignItems:'center',
   },
   
   iconButton:{
      color: "#fff",
      fontWeigth:"bold",
      fontSize:20,
      
   }

});

export default styles;