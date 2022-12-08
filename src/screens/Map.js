import React from 'react';
import {
  Animated,
  FlatList,
  Image,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {
  initialRegion,
  mapDarkStyle,
  mapStandardStyle,
  markers,
} from '../data/mapData';

// Dummy data
const dummyData = ['Vancouver', 'Kingsway', 'Champlain Heights'];

export default function Map({theme, setTheme, onTogglePress}) {
  // Hooks
  const _map = React.useRef(null);
  const fadeAnim = React.useRef(new Animated.Value(0)).current;
  const [cardData, setCardData] = React.useState(null);
  const [mID, setMID] = React.useState(null);
  const [focused, setFocused] = React.useState(false);

  //   useEffect
  React.useEffect(() => {
    console.log(theme);
  }, [theme]);

  //   functions
  const onMarkerPress = mapEventData => {
    const markerID = mapEventData._targetInst.return.key;
    setCardData(markers[markerID]);
    setMID(markerID);
  };

  const onMapPress = () => {
    Keyboard.dismiss();
    setMID(null);
    if (cardData != null) {
      setCardData(null);
    }
  };

  const fadeIn = () => {
    setFocused(true);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    setFocused(false);
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View>
      {/* Map */}
      <MapView
        ref={_map}
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={initialRegion}
        customMapStyle={theme == 'dark' ? mapDarkStyle : mapStandardStyle}
        onPress={onMapPress}>
        {/* markers */}
        {markers.map((marker, index) => {
          return (
            <Marker
              key={index}
              coordinate={marker.coordinate}
              onPress={e => onMarkerPress(e)}>
              <View
                style={[
                  styles.markerWrap,
                  {
                    backgroundColor: theme == 'dark' ? '#444444' : 'white',
                    borderWidth: mID == index ? 3 : 0,
                    borderColor:
                      mID == index
                        ? theme == 'dark'
                          ? 'white'
                          : 'black'
                        : null,
                  },
                ]}>
                <Image
                  source={marker.image}
                  style={styles.marker}
                  resizeMode="cover"
                />
              </View>
            </Marker>
          );
        })}
      </MapView>

      {/* search box */}
      <View
        style={[
          styles.searchBox,
          {
            backgroundColor: theme == 'dark' ? '#444' : '#fff',
            shadowColor: theme == 'dark' ? '#000' : '#ccc',
          },
        ]}>
        <Image
          source={require('../icons/search.png')}
          style={{height: 20, width: 20, marginRight: 15, tintColor: 'grey'}}
        />
        <TextInput
          placeholder="Search here"
          placeholderTextColor="grey"
          autoCapitalize="none"
          style={{padding: 0, color: theme == 'dark' ? 'white' : 'black'}}
          onFocus={fadeIn}
          onBlur={fadeOut}
        />
      </View>

      {/* bottom cards */}
      {cardData != null && (
        <View
          style={[
            styles.infoCard,
            {
              backgroundColor: theme == 'dark' ? '#444444' : 'white',
              shadowColor: theme == 'dark' ? 'black' : '#ccc',
            },
          ]}>
          <Image
            source={cardData.cardImage}
            style={{
              height: 90,
              width: 90,
              marginRight: 15,
              borderRadius: 5,
            }}
          />
          <View style={{flexDirection: 'column'}}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '600',
                color: theme == 'dark' ? 'white' : 'black',
                marginBottom: 3,
              }}>
              {cardData.title}
            </Text>
            <Text style={{fontWeight: '400', color: 'grey'}}>
              {cardData.description}
            </Text>
          </View>
        </View>
      )}

      {/* Toggle buttons */}
      <TouchableOpacity
        style={[
          styles.toggle,
          {backgroundColor: theme == 'dark' ? '#444' : '#fff'},
        ]}
        onPress={onTogglePress}>
        <Image
          source={require('../icons/levels.png')}
          style={{
            height: 25,
            width: 25,
            tintColor: theme == 'dark' ? 'white' : 'black',
          }}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <View
        style={[
          styles.toggle,
          {marginTop: 160, backgroundColor: theme == 'dark' ? '#444' : '#fff'},
        ]}>
        <Image
          source={require('../icons/navigation.png')}
          style={{
            height: 25,
            width: 25,
            tintColor: theme == 'dark' ? 'white' : 'black',
          }}
          resizeMode="contain"
        />
      </View>

      {/* Dropdown */}

      <Animated.ScrollView
        style={[
          styles.fadingContainer,
          {
            height: !focused ? 0 : 'auto',
            opacity: fadeAnim,
            backgroundColor: theme == 'dark' ? '#444' : 'white',
          },
        ]}>
        {dummyData.map((item, index) => {
          return (
            <View
              key={index}
              style={{
                width: '90%',
                justifyContent: 'center',
                marginVertical: 3,
                borderBottomWidth: 1,
                borderBottomColor: 'grey',
                padding: 3,
              }}>
              <Text
                style={{
                  color: theme == 'dark' ? 'white' : 'black',
                }}>
                {item}
              </Text>
            </View>
          );
        })}
      </Animated.ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    height: '100%',
  },
  searchBox: {
    position: 'absolute',
    marginTop: Platform.OS === 'ios' ? 40 : 20,
    flexDirection: 'row',
    backgroundColor: '#fff',
    width: '90%',
    alignSelf: 'center',
    borderRadius: 5,
    padding: 10,
    shadowColor: '#ccc',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
    alignItems: 'center',
  },
  markerWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    // backgroundColor: '#444444',
    backgroundColor: '#ffffff',
    borderWidth: 3,
    borderColor: 'black',
    borderRadius: 25,
  },
  marker: {
    width: 30,
    height: 30,
  },
  infoCard: {
    position: 'absolute',
    flexDirection: 'row',
    backgroundColor: '#fff',
    width: '90%',
    alignSelf: 'center',
    borderRadius: 5,
    padding: 10,
    shadowColor: '#ccc',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
    alignItems: 'center',
    bottom: 40,
  },
  toggle: {
    position: 'absolute',
    marginTop: Platform.OS === 'ios' ? 120 : 100,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignSelf: 'flex-end',
    borderRadius: 50,
    padding: 10,
    right: '5%',
    elevation: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fadingContainer: {
    padding: 20,
    backgroundColor: 'powderblue',
    position: 'absolute',
    top: 80,
    alignSelf: 'center',
    width: '90%',
    borderRadius: 5,
  },
});
