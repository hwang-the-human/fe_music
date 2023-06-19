import React, {useMemo} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {ITrack} from '../extentions/Interfaces';
import AntDesign from 'react-native-vector-icons/AntDesign';
import dayjs from 'dayjs';
import ButtonsBox from './ButtonBox';
import {colors} from '../extentions/colors';

interface Props {
  track: ITrack;
}

function MusicItem({track}: Props): JSX.Element {
  const getDays = useMemo(() => {
    const days = dayjs().diff(dayjs(track.createdAt), 'days');
    return `${days} ${days > 1 ? 'days' : 'day'} ago`;
  }, [track.createdAt]);

  return (
    <View style={styles.musicItem}>
      <View style={styles.container}>
        <View style={styles.imageBox}>
          <Image style={styles.image} source={{uri: track.image}} />
          <View style={styles.subImageBox}>
            <Text style={[styles.textGrey, styles.textFontSize]}>
              {track.podcastName}
            </Text>
            <Text style={styles.textFontWeight} numberOfLines={2}>
              {track.title}
            </Text>
            <View style={styles.subBox}>
              <View style={styles.ratingBox}>
                <AntDesign name="star" color={colors.yellow} size={20} />
                <Text style={styles.textFontSize}>4.2</Text>
              </View>
              <Text style={[styles.textFontWeight, styles.textFontSize]}>
                {track.difficult}
              </Text>
              <Text style={[styles.textGrey, styles.textFontSize]}>
                {getDays}
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.bottomPart}>
          <View style={styles.tagsBox}>
            {track?.tags?.map((tag, i) => (
              <Text style={styles.textGrey} key={i}>
                #{tag}
              </Text>
            ))}
          </View>
          <View style={styles.buttonBox}>
            <ButtonsBox track={track} />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  musicItem: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
  },

  container: {
    width: '100%',
    display: 'flex',
    gap: 10,
    padding: 20,
  },
  imageBox: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  textGrey: {
    color: 'grey',
  },
  textFontSize: {
    fontSize: 12,
  },

  textFontWeight: {
    fontWeight: '600',
  },

  subImageBox: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    gap: 4,
  },

  subBox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },

  bottomPart: {
    display: 'flex',
    gap: 10,
  },

  buttonBox: {
    display: 'flex',
    flexDirection: 'row',
  },

  tagsBox: {
    display: 'flex',
    flexDirection: 'row',
    columnGap: 10,
    flexWrap: 'wrap',
  },

  ratingBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    flexDirection: 'row',
  },
});

export default MusicItem;
