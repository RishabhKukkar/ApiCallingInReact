
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ProductsListScreen } from '../screens/ProductListScreen';

const MainStack = createStackNavigator();
export function MainStackNavigator() {
      return (
        <MainStack.Navigator>
            <MainStack.Screen name={'ProductsList'} component={ProductsListScreen} />
        </MainStack.Navigator>
    );
}

