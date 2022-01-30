import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { WebView } from 'react-native-webview';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text>Andrea is a cunt</Text>
      <WebView scalesPageToFit={false}
          bounces={false}
          javaScriptEnabled
          style={{ height: 10, width: 300 }}
          source={{html: '<iframe src="https://www.google.com/maps/embed?pb=!1m40!1m12!1m3!1d4476.198482050721!2d-4.302338298593547!3d55.878293121967275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m25!3e2!4m3!3m2!1d55.8824859!2d-4.3033231!4m5!1s0x488845c474d34a87%3A0x1c3f74326659ec6e!2sJelly%20Hill%20Cafe%20Bar%2C%20195%20Hyndland%20Rd%2C%20Glasgow%20G12%209HT!3m2!1d55.8757455!2d-4.3053864!4m3!3m2!1d55.8742204!2d-4.2948547!4m5!1s0x488845cc72f33203%3A0x50a165a3f7d3388d!2zw5JyYW4gTcOzciwgQnlyZXMgUm9hZCwgR2xhc2dvdw!3m2!1d55.8775633!2d-4.289759699999999!4m3!3m2!1d55.8824859!2d-4.3033231!5e0!3m2!1sen!2suk!4v1643565741129!5m2!1sen!2suk" width="300" height="550" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'}}/>
          
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
