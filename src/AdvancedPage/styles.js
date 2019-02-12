import {StyleSheet} from 'react-native'; 
const item = {
  
  backgroundColor: '#FFF',
  height: 50,
  borderRadius: 50,
  alignItems: 'center',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 20,
  flexDirection: 'row',
  paddingLeft: 20,
  paddingRight: 10,
}
const itemIcon = {
        
        borderRadius:100,
        width:30,
        height:30,
        backgroundColor:'#707B81',

}
export default styles = StyleSheet.create({

    page:{
      flex:1,
      backgroundColor: 'pink',
      
    },
     header:{
        flexDirection: "row",
        backgroundColor: '#fff',
        alignItems: 'center',
        height: 70,
        padding: 20, 
    },
    backButton:{
      width:30,
      height:30,
      backgroundColor:'#0DD1E3',
      borderRadius:100,
      alignItems: 'center',
      marginTop: 10,  
  },
  title: {
    fontSize: 20,
    backgroundColor: '#fff',
    marginLeft: 10,
    marginTop: 10,
  },
    content:{
      paddingHorizontal: 20,
      backgroundColor: '#F5F8FA',
      flex: 1,

    },

    enabledItem:{
        ...item,
    },
    itemTitle:{
      flex: 1,
      fontSize: 18,
      color: "#707B81",
      
    },
    itemIcon:{
        borderRadius:100,
        width:30,
        height:30,
        backgroundColor:'#707B81',
       
    },
    // DISABLED ITEMS -----------------------------------
    
    disabledItem:{
      ...item,
      backgroundColor: '#CFCFCF',
  },
    disabledItemTitle:{
    flex: 1,
    fontSize: 18,
    color: "#758085",
    
  },
    disabledItemIcon:{
      ...itemIcon,
      backgroundColor:'#9F9F9F',
      
  },
  })
  