import React from "react";
import { View, Text, FlatList, TouchableOpacity, StatusBar, TextInput, Alert } from 'react-native';
import { Note } from './components/Note';
import { Title } from './components/Title';
import Color from './config/Color';

import { styles } from './styles'

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      noteList: [{
        id: '1',
        title: 'Testing Note',
        content: 'Lalala'
      },{
        id: '2',
        title: 'Note 2',
        content: 'Testing'
      }],
      title: '',
      content: ''
    }
  }
  
  saveNote = () => {
    let notes = this.state.noteList
    let temp = {
      id : (notes.length + 1).toString(),
      title: this.state.title,
      content: this.state.content
    }
    notes.unshift(temp)
    this.setState({
      noteList: notes,
      title: '',
      content: ''
    })
    this.input.focus()
  }

  delete = (id) => {
    let temp = this.state.noteList;
    let delIndex = temp.findIndex(note => note.id == id )
    temp.splice(delIndex,1)
    this.setState({noteList:temp})
  }

  _renderItem = ({item}) => (
    <Note 
      title={item.title}
      content={item.content}
      onPress={()=>this.delete(item.id)}
    />
  );

  onChange = async(key,val) => {
    if (key == "title")
      this.setState({title: val})
    else
      this.setState({content: val})
  }

  render(){
    return(
      <View style={styles.center}>
        <StatusBar backgroundColor={Color.APP_WHITE} barStyle="dark-content" />
        <Title size="small" titleColor={Color.BLUE} />
        <View style={styles.inputContainer}>
          <TextInput
            ref={x => this.input = x} 
            onChangeText={(val)=>this.onChange("title",val)}
            placeholder="Title of Notes" style={styles.input} placeholderTextColor={Color.GREY} value={this.state.title} />
          <TextInput
            onChangeText={(val)=>this.onChange("content",val)}
            style={styles.input} multiline={true} value={this.state.content} />
          <TouchableOpacity style={styles.button} onPress={this.saveNote}>
            <Text style={styles.buttonText}>OK</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          extraData={this.state}
          data={this.state.noteList}
          keyExtractor={item=>item.id}
          renderItem={this._renderItem}
        />
      </View>
    )
  }
}