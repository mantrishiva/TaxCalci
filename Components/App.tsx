/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
// import HeaderComponent from './Components/HeaderComponent';
// import HraCalculater from './Components/HraCalculater';
import HomePage from './HomePage';
import Accrodions from './Accrodions';
import IncomeDetails from './IncomeDetails';
import Header from './Header';
import {colors} from './theame'

function App(): JSX.Element {
  // function findSum(a: Number, b: Number): { sum: Number } {
  //   return { sum: a + b }
  // }

  const data = [
    {
      title: 'Non Veg Biryanis',
      data: 'Biryani also known as biriyani, biriani, birani or briyani, is a mixed rice dish with its origins among the Muslims of the Indian subcontinent. This dish is especially popular throughout the Indian subcontinent, as well as among the diaspora from the region. It is also prepared in other regions such as Iraqi Kurdistan.',
    },
    {
      title: 'Pizzas',
      data: 'Pizza is a savory dish of Italian origin, consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and various other ingredients (anchovies, olives, meat, etc.) baked at a high temperature, traditionally in a wood-fired oven. In formal settings, like a restaurant, pizza is eaten with knife and fork, but in casual settings it is cut into wedges to be eaten while held in the hand. Small pizzas are sometimes called pizzettas.'
    },
    {
      title: 'Drinks',
      data: 'A drink (or beverage) is a liquid intended for human consumption. In addition to their basic function of satisfying thirst, drinks play important roles in human culture. Common types of drinks include plain drinking water, milk, coffee, tea, hot chocolate, juice and soft drinks. In addition, alcoholic drinks such as wine, beer, and liquor, which contain the drug ethanol, have been part of human culture for more than 8,000 years.'
    },
    {
      title: 'Deserts',
      data: 'A dessert is typically the sweet course that concludes a meal in the culture of many countries, particularly Western culture. The course usually consists of sweet foods, but may include other items. The word "dessert" originated from the French word desservir "to clear the table" and the negative of the Latin word servire'
    },
  ]




  const renderAccordians = () => {
    let items = [];
    for (let item of data) {
      items.push(
        <Accrodions
          title={item.title}
          data={item.data}
        />
      );
    }
    return items;
  }
  return (
    <View style={styles.container}>
      <Header />
      <HomePage />
      {/* <IncomeDetails />
      <View style={styles.elements}>
        {renderAccordians()}
      </View> */}

    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
    width: '100%'
  },
  elements: {
    width: '100%'
  }
});

export default App;
