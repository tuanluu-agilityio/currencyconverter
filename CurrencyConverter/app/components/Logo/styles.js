import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

const imageWidth = Dimensions.get('window').width / 2;

export default EStyleSheet.create({
  $largeContainerSize: imageWidth,
  $largeImageSizeWidth: imageWidth / 2 + 10,
  $largeImageSizeHeight: imageWidth / 2 - 5,

  $smallContainerSize: imageWidth / 2,
  $smallImageSizeWidth: imageWidth / 4 + 10,
  $smallImageSizeHeight: imageWidth / 4 - 5,

  container: {
    alignItems: 'center',
  },
  containerImage: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '$largeContainerSize',
    height: '$largeContainerSize',
  },
  logo: {
    width: '$largeImageSizeWidth',
    height: '$largeImageSizeHeight',
  },
  text: {
    fontWeight: '600',
    fontSize: 28,
    letterSpacing: -0.5,
    marginTop: 15,
    color: '$white',
  },
});
