import { StyleSheet } from 'react-native'

import Color from './config/Color'
import Size from './config/Size'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.APP_WHITE,
  },
  inputContainer: {
    marginHorizontal: Size.WIDTH1*0.5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Color.LIGHT_GREY,
    width: Size.WIDTH9,
    marginBottom: 25
  },
  input: {
    fontFamily: 'SourceSansPro-Regular',
    paddingVertical: 0,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: Color.LIGHT_GREY,
    borderRadius: 5,
    marginBottom: 8,
    fontSize: 16,
  },
  button: {
    alignSelf: 'flex-end',
    backgroundColor: Color.BLUE,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 16,
    color: Color.APP_WHITE,
    fontFamily: 'SourceSansPro-Regular',
  }
})