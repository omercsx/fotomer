import {View, Text} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const App = () => {
  return (
    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <AntDesign name="home" size={24} color="black" />
    </View>
  );
};

export default App;
