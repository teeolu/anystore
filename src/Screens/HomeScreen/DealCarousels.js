import React, { PureComponent } from 'react';
import { Image, ScrollView, Dimensions } from 'react-native';
import { Box } from 'react-native-design-utility';

const images = [
  require("../../resources/Images/part10/food1.png"),
  require("../../resources/Images/part10/food2.png"),
  require("../../resources/Images/part10/food3.png"),
]

const WIDTH = Dimensions.get("window").width;
const DOT_WIDTH = 10;
const TIMER = 2000;

class DealCarousel extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      currentIndex: 0
    }

    this.scrollView = React.createRef()
  }

  componentDidMount = () => {
    this.timer = setInterval(() => {
      this.handleScroll()
    }, TIMER);
  };

  componentWillUnmount = () => {
    clearInterval(this.timer)
  };


  handleScroll = () => {
    const newIndex = this.state.currentIndex + 1;

    if (newIndex < images.length) {
      this.scrollView.current.scrollTo({
        x: newIndex * WIDTH,
        animated: true
      })

      this.setState({ currentIndex: newIndex })
    } else {
      this.scrollView.current.scrollTo({
        x: 0,
        animated: true
      })

      this.setState({ currentIndex: 0 })
    }
  }

  onScroll = event => {
    const { contentOffset } = event.nativeEvent;

    const currentIndex = Math.round(contentOffset.x / WIDTH);

    if (this.state.currentIndex !== currentIndex) {
      this.setState({ currentIndex })
    }
  }


  render() {
    return (
      <Box>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          ref={this.scrollView}
          onScroll={this.onScroll}
        >
          {
            images.map((img, i) => (
              <Box
                key={i}
                position="relative"
                style={{ height: 130, width: WIDTH }}
              >
                <Image source={img} />
                <Box
                  position="absolute"
                  dir="row"
                  style={{ height: 130, width: WIDTH }}
                  align="end"
                  justify='center'
                  pb="xs"
                >
                  {
                    Array.from({ length: images.length }).map((_, index) => (
                      <Box
                        key={index}
                        bg={this.state.currentIndex === index ? "black" : "transparent"}
                        circle={DOT_WIDTH}
                        mx={DOT_WIDTH / 2}
                        style={{ borderWidth: 1, borderColor: "black" }}
                      ></Box>
                    ))
                  }
                </Box>
              </Box>
            ))
          }
        </ScrollView>
      </Box>
    )
  }
}

export default DealCarousel;