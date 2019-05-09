import React, { Component } from 'react';

import 'owl.carousel';

// import owlStyles from 'owl.carousel/dist/assets/owl.carousel.css';
import styles from './Carousel.css';

// console.log(styles);

class Carousel extends Component {
  constructor(props) {
    super(props)
    let link = document.createElement('link');
    link.rel = 'text/css';
    link.rel = 'stylesheet';
    link.href = 'web/css/3rdParties/OwlCarousel/assets/owl.carousel.css';
    document.getElementsByTagName('head')[0].appendChild(link);

    link = document.createElement('link');
    link.rel = 'text/css';
    link.rel = 'stylesheet';
    link.href = 'web/css/3rdParties/OwlCarousel/assets/owl.theme.green.css';
    document.getElementsByTagName('head')[0].appendChild(link);
  }

  render() {
    return(
      <div className={`${styles.carousel} owl-carousel owl-theme`}>
        <div className={`${styles.item} item`}>
          <img src="../../../web/images/photos/georgia.nicole.paxton/georgia_2.jpg" />
        </div>
        <div className={`${styles.item} item`}>
          <img src="../../../web/images/photos/kelly.hathaway/kelly_2.jpg" />
        </div>
        <div className={`${styles.item} item`}>
          <img src="../../../web/images/photos/sorcha/sorcha_1.jpg" />
        </div>
        <div className={`${styles.item} item`}>
          <img src="../../../web/images/photos/georgia.nicole.paxton/georgia_1.jpg" />
        </div>
        <div className={`${styles.item} item`}>
          <img src="../../../web/images/photos/tayszea/tayszea_1.jpg" />
        </div>
        <div className={`${styles.item} item`}>
          <img src="../../../web/images/photos/georgia.nicole.paxton/georgia_3.jpg" />
        </div>
      </div>
    )
  };

  componentDidMount() {
    $('.owl-carousel').owlCarousel({
      // autoHeight: true,
      // center: true,
      loop: true,
      margin: 10,
      items: 2,
      responsive: {
        // 600: {
        //   items: 3
        // }
      }
    })
  }
};

export default Carousel;