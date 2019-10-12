import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'

import { styles } from './styles'

const Note = ({ title, content, onPress }) => (
    <View style={styles.noteContainer}>
      <View style={styles.headerRow}>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity onPress={onPress}>
          <Icon name="close" size={20} color="black" />
        </TouchableOpacity>
      </View>
      <Text style={styles.content}>{content}</Text>
    </View>
)

export default Note