import React, { PureComponent } from 'react';
import { StatusBar, FlatList } from 'react-native';
import { Box, Text } from 'react-native-design-utility';

import CategoryCard from './CategoryCard';
import { theme } from '../../constants/theme';
import DealCarousel from './DealCarousels';
import ProfileBtn from "../CommonComponent/ProfileBtn";

const categories = [
  {
    id: 1,
    title: 'Grocery',
    image: require('../../resources/Images/part10/cart.png'),
  },
  {
    id: 2,
    title: 'Drugs',
    image: require('../../resources/Images/part10/drugs.png'),
  },
  {
    id: 3,
    title: 'Pets',
    image: require('../../resources/Images/part10/pets.png'),
  },
  {
    id: 4,
    title: 'video games',
  },
];

const NUM_COLUMNS = 3;

class HomeScreen extends PureComponent {
  static navigationOptions = {
    title: "Anystore",
    headerLeft: <ProfileBtn />
  }

  state = {}

  renderItem = ({ item, index }) => {

    let style = {};

    if (index % NUM_COLUMNS !== 0) {
      style.borderLeftWidth = 2;
      style.borderLeftColor = theme.color.greyLighter;
    }

    return (
      <Box w={1 / NUM_COLUMNS} h={120} bg="white" style={style}>
        <CategoryCard {...item} />
      </Box>
    )
  }

  separator = () => <Box h={2} bg="greyLighter" />

  render() {
    return (
      <Box f={1}>
        <StatusBar barStyle="light-content" />
        <Box h={130} w={"100%"}>
          <DealCarousel />
        </Box>

        <Box f={1}>
          <FlatList
            data={categories}
            renderItem={this.renderItem}
            keyExtractor={item => String(item.id)}
            numColumns={NUM_COLUMNS}
            ItemSeparatorComponent={this.separator}
          />
        </Box>
      </Box>
    );
  }
}

export default HomeScreen;