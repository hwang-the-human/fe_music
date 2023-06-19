import React, {useMemo} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import {ITrack} from '../extentions/Interfaces';
import {colors} from '../extentions/colors';

interface Props {
  track: ITrack;
}

function ButtonsBox({track}: Props): JSX.Element {
  const getDuration = useMemo(() => {
    return `${Math.floor(track.duration / 60)} min`;
  }, [track.duration]);

  return (
    <View style={styles.buttonsBox}>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <View style={styles.icon}>
            <AntDesign name="playcircleo" color="white" size={25} />
          </View>
          <View style={styles.textBox}>
            <Text style={styles.playText}>Free</Text>
          </View>
        </View>
        <View style={styles.textBox}>
          <Text style={styles.durationText}>{getDuration}</Text>
        </View>
      </View>

      <View style={styles.rightButtonBox}>
        <View style={styles.iconButton}>
          <Entypo name="add-to-list" color="black" size={20} />
        </View>

        <View style={styles.iconButton}>
          <AntDesign name="download" color="black" size={20} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonsBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: colors.lightPink,
    borderRadius: 30,
    width: 170,
    height: 40,
  },

  textContainer: {
    flex: 1.5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.lightPink,
    borderRadius: 100,
  },

  textBox: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  icon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.pink,
    borderRadius: 30,
    height: '100%',
    width: 40,
  },

  playText: {
    fontWeight: '600',
    fontSize: 16,
    color: colors.pink,
  },

  durationText: {
    fontWeight: '600',
    fontSize: 16,
  },

  iconButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 100,
    height: 40,
    width: 40,
  },

  rightButtonBox: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
  },
});

export default ButtonsBox;
