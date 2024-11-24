import { SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import UIProvider from './providers/ui-provider';
import RestaurantsScreen from './screens/restaurants';


export default function App() {
  return (
    <>
      <UIProvider>
        <SafeAreaView style={styles.container}>
          <RestaurantsScreen/>
        </SafeAreaView>
        <StatusBar style={'default'} />
      </UIProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10
  },
});
