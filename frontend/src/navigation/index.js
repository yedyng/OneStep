import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import HomeScreen from '../screens/HomeScreen';
import TaskList from '../screens/TaskList';

const Stack = createStackNavigator();

const ScreenStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Signup" 
          component={SignupScreen}
          options={{
            headerStyle: {
              backgroundColor: 'black', 
            },
            headerTintColor: '#fff',
            headerBackTitle: 'Back to Login',
          }} 
        />
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="TaskList" 
          component={TaskList} 
          options={{ headerShown: true, title: 'Task List' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ScreenStack;