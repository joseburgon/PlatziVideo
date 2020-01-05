import React from 'react';
import { connect } from 'react-redux';
import ContentWrap from '../components/ContentWrap';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import '../assets/styles/Home.scss';

const Home = ({ myList, trends, originals, searchText }) => {
  const regex = new RegExp(`.*${searchText.toLowerCase()}.*`);
  return (
    <>
      <ContentWrap>
        <Search />
        {
          searchText && (
            <Categories title='Resultados de la búsqueda'>
              <Carousel>
                {
                  trends.filter((item) => regex.test(item.title.toLowerCase()))
                    .map((item) => (
                      <CarouselItem key={item.id} {...item} />
                    ))
                }
                {
                  originals.filter((item) => regex.test(item.title.toLowerCase()))
                    .map((item) => (
                      <CarouselItem key={item.id} {...item} />
                    ))
                }
                }
              </Carousel>
            </Categories>
          )
        }
        {myList.length > 0 && (
          <Categories title='Mi Lista'>
            <Carousel>
              {myList.map((item) =>
                <CarouselItem
                  key={item.id}
                  {...item}
                  isList
                />
              )}
            </Carousel>
          </Categories>
        )}

        <Categories title='Tendencias'>
          <Carousel>
            {trends.map((item) => <CarouselItem key={item.id} {...item} />)}
          </Carousel>
        </Categories>

        <Categories title='Originales de PlatziVideo'>
          <Carousel>
            {originals.map((item) => <CarouselItem key={item.id} {...item} />)}
          </Carousel>
        </Categories>
      </ContentWrap>
    </>
  );
};

const mapStateToProps = state => {
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
    searchText: state.searchText
  };
};

export default connect(mapStateToProps, null)(Home);