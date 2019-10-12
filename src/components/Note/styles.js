import { StyleSheet } from 'react-native'

import Color from '../../config/Color'
import Size from '../../config/Size'

export const styles = StyleSheet.create({
  noteContainer: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Color.LIGHT_BLUE,
    width: Size.WIDTH9,
    marginBottom: 10,
    marginHorizontal: Size.WIDTH1*0.5,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: 'SourceSansPro-Bold',
    fontSize: 20,
  },
  content: {
    fontFamily: 'SourceSansPro-Regular',
    textAlign: 'justify',
  }
})