import React, {useState, useEffect} from 'react';
import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';
import {IResponse, ITrack} from '../extentions/Interfaces';
import MusicItem from '../items/MusicItem';
import Header from './Header';
import {colors} from '../extentions/colors';

function Home(): JSX.Element {
  const windowHeight = Dimensions.get('window').height;

  const [tracks, setTracks] = useState<ITrack[]>([]);
  const [page, setPage] = useState<number>(0);
  const [count, setCount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  async function getTracks(p: number) {
    setLoading(true);
    try {
      const {data}: {data: IResponse} = await axios.get(
        `https://test-demo-001-64cca7afd05a.herokuapp.com/api/tracks/getAll?page=${p}&page_count=10`,
      );
      setTracks(prev => [...prev, ...data.data]);
      setCount(data.count);
      setPage(p);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }

  useEffect(() => {
    getTracks(0);
  }, []);

  function onScroll(e: NativeSyntheticEvent<NativeScrollEvent>) {
    const scrollCenter = e.nativeEvent.contentSize.height - windowHeight;
    if (
      e.nativeEvent.contentOffset.y > scrollCenter &&
      !loading &&
      tracks.length < count
    ) {
      getTracks(page + 1);
    }
  }

  return (
    <SafeAreaView style={styles.home}>
      <Header />
      <ScrollView
        style={styles.scroll}
        contentInsetAdjustmentBehavior="automatic"
        scrollEventThrottle={16}
        onScroll={onScroll}>
        {tracks.map((track, i) => (
          <MusicItem track={track} key={i} />
        ))}
        {loading && (
          <ActivityIndicator
            style={styles.loading}
            size="small"
            color={colors.pink}
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  home: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
  scroll: {
    width: '100%',
    height: '100%',
  },

  loading: {
    marginTop: 20,
    marginBottom: 20,
  },
});

export default Home;
