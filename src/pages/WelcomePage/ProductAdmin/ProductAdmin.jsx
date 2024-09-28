import React from 'react';

import MostPopularProducts from './MostProduct/MostProduct';
import TopSellingProducts from './TopSelling/TopSelling';


const TopProductSection = () => (
  <div className="row flex justify-center">
    <MostPopularProducts />
    <TopSellingProducts />
    {/* <MostPopularProducts /> */}
  </div>
);

export default TopProductSection;
