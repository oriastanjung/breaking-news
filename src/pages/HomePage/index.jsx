/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CardPopular from '../../components/CardPopular';
import CardRecent from '../../components/CardRecent';
import LayoutSection from '../../components/LayoutSection';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment/moment';

import {
  fetchNewsPopular,
  fetchNewsRecent,
} from '../../store/reducer/newsSlice/newsSlice';

function HomePage() {
  const dispatch = useDispatch();
  const { newsList: popularNews } = useSelector((state) => state.news);
  const { newsRecent } = useSelector((state) => state.news);
  const { search } = useSelector((state) => state.search);
  useEffect(() => {
    dispatch(fetchNewsPopular('global'));
    dispatch(fetchNewsRecent('global'));
  }, []);

  useEffect(() => {
    dispatch(fetchNewsPopular(search));
    dispatch(fetchNewsRecent(search));
  }, [search]);
  return (
    <>
      <LayoutSection title="Popular News">
        {popularNews &&
          popularNews.map((item) => {
            return (
              <CardPopular
                onClick={() => (window.location.href = item.url)}
                key={item.id}
                img={item.urlToImage}
                category={'popular'}
                title={item.title}
                description={item.description}
              />
            );
          })}
        {popularNews.length === 0 && (
          <p>Search Not Found with the Search Keyword</p>
        )}
      </LayoutSection>
      <LayoutSection title="Recent News">
        {newsRecent &&
          newsRecent.map((item) => {
            return (
              <CardRecent
                key={item.id}
                onClick={() => (window.location.href = item.url)}
                img={item.urlToImage}
                category={'recent'}
                title={item.title}
                author={`${item.author} |  ${moment(item.publishedAt).format(
                  'MMMM Do YYYY',
                )} `}
              />
            );
          })}
        {newsRecent.length === 0 && (
          <p>Search Not Found with the search keyword</p>
        )}
      </LayoutSection>
    </>
  );
}

export default HomePage;