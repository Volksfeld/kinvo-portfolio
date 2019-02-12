

import React, {Component} from 'react';
import {Alert, Text, View, TouchableOpacity} from 'react-native';
import styles from './styles';
import '../config/StatusBarConfig';

export default class Avancado extends Component{
    onPressButton = () => {
    Alert.alert('Pera que eu vou implementar')
  };

  renderHeader = () => {
    return(
      <View style={styles.header}>
      <TouchableOpacity style={styles.backButton}
          onPress={this.onPressButton}
          title=""
         />
        <Text style={styles.title}>Avançado</Text> 
        </View>
    )
  } 


  renderItem = (title) => {
    
    return(
     
      <TouchableOpacity style={styles.enabledItem} 
          onPress={this.onPressButton}>
          <Text style={styles.itemTitle}>{title}</Text>
          <View style={styles.itemIcon}></View>
          </TouchableOpacity>
      
    );
  }
  renderDisabledItem = (title) => {
    
    return(
     
      <TouchableOpacity style={styles.disabledItem} disabled={true}
          onPress={this.onPressButton}>
          <Text style={styles.disabledItemTitle}>{title}</Text>
          <View style={styles.disabledItemIcon}></View>
          </TouchableOpacity>
      
    );
  }
  renderContent = () => {
    const item1   = this.renderDisabledItem("Análise de Produtos");
    const item2 = this.renderItem("Projeção da Carteira",true);
    const item3 = this.renderDisabledItem("Sensibilidade dos Ativos");
    return(
      <View style={styles.content}>
        {item1}
        {item2}
        {item3}
      </View>
  
    );

  }

  render() { 
    const header = this.renderHeader();
    const content = this.renderContent();
    return (  
      <View style={styles.page}> 
       {header}
       {content}
      </View> 
    );
  }
  
  
}