import React from 'react';
import Banner from '../Banner/Banner';
import PopularMenu from '../PopularMenu/PopularMenu';
// import Category from '../Category/Category';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            {/* <Category></Category> */}
            <PopularMenu></PopularMenu>
        </div>
    );
};

export default Home;