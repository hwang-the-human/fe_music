import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, Image} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from '../extentions/colors';
import SearchBar from './SearchBar';

function Header(): JSX.Element {
  return (
    <View
      style={{
        borderBottomWidth: 1,
        borderColor: 'lightgrey',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        paddingBottom: 10,
      }}>
      <View style={styles.header}>
        <View style={styles.topBox}>
          <View
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              flex: 1,
            }}>
            <View style={styles.container}>
              <View style={styles.textContainer}>
                <View style={styles.icon}>
                  <Text
                    style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>
                    T
                  </Text>
                </View>
                <View style={styles.textBox}>
                  <Text style={styles.playText}>0$</Text>
                </View>
              </View>
            </View>
          </View>

          <View
            style={{
              display: 'flex',
              alignItems: 'center',
              flex: 1,
            }}>
            <Image
              style={styles.image}
              source={require('../images/logo.png')}
            />
          </View>
          <View style={{flex: 1, display: 'flex', alignItems: 'flex-end'}}>
            <View style={[styles.iconButton, styles.iconColor]}>
              <Ionicons name="person" color={'white'} size={20} />
            </View>
          </View>
        </View>
        <View style={styles.searchBox}>
          <SearchBar />
          <View style={styles.iconButton}>
            <Feather name="search" color={'black'} size={20} />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    gap: 10,
    width: '90%',
  },

  topBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  iconColor: {
    backgroundColor: colors.pink,
  },

  image: {
    backgroundColor: 'black',
    width: 100,
    height: 40,
    resizeMode: 'cover',
  },

  searchBox: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
  },

  iconButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: 100,
    height: 40,
    width: 40,
    backgroundColor: colors.grey,
  },

  playText: {
    fontSize: 16,
    color: 'black',
  },

  textBox: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  durationText: {
    fontWeight: '600',
    fontSize: 16,
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
  container: {
    display: 'flex',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: colors.lightPink,
    borderRadius: 30,
    width: 90,
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
});

export default Header;
