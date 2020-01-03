import React from 'react';
import ContentWrap from '../components/ContentWrap';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import useInitialState from '../hooks/useInitialState';
import '../assets/styles/Home.scss';

const API = 'http://localhost:3000/initialState/';

const Home = () => {
  const initialState = useInitialState(API);
  return initialState.length === 0 ? <h1>Loading...</h1> : (
    <>
      <ContentWrap>
        <Search />

        { initialState.mylist.length > 0 && (
          <Categories title='Mi Lista'>
            <Carousel>
              {initialState.trends.map((item) => <CarouselItem key={item.id} {...item} />)}
            </Carousel>
          </Categories>
        )}

        <Categories title='Tendencias'>
          <Carousel>
            {initialState.trends.map((item) => <CarouselItem key={item.id} {...item} />)}
          </Carousel>
        </Categories>

        <Categories title='Originales de PlatziVideo'>
          <Carousel>
            {initialState.originals.map((item) => <CarouselItem key={item.id} {...item} />)}
          </Carousel>
        </Categories>
      </ContentWrap>
    </>
  );
};

export default Home;
