import React from 'react';
import {
  AsyncStorage,
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Alert,
} from 'react-native';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
// import { Actions, Scene, Router, ActionConst } from 'react-native-router-flux';
import {
  Router, 
  Route, 
  Schema, 
  Actions,
  Scene,
  Animations, 
  TabBar,
  ActionConst
} from 'react-native-router-flux';

import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import store from './store';
import Home from './Containers/Home';
import Login from './Containers/Login';
import StoryList from './Containers/StoryList';
import Detail from './Containers/Detail';
import Search from './Containers/Search';
import Setting from './Containers/Setting';
import CreateStory from './Containers/CreateStory';
import CreatePasscode from './Containers/CreatePasscode';
import EditStory from './Containers/EditStory';
import ShareStory from './Containers/ShareStory';

// import Icon from 'react-native-vector-icons/Ionicons';
//Images, Icons
const colorPurpleDark = '#915DF4';
const colorGreen = '#2CCEB8';
const colorWhite = '#ffffff';
let renderBackButton = function(){
  return(
    <TouchableOpacity onPress={()=> Actions.pop()}>
      <Icon name="ios-arrow-back" style={styles.navbarIcon} />
    </TouchableOpacity>
  )
}
const scenes = Actions.create(
  <Scene key="root">
    <Scene key="Detail" 
      component={ Detail } 
      hideNavBar = {false}
      title = "One Word at a Time"
      renderBackButton={()=>
        <TouchableOpacity onPress={()=> Actions.Search()}>
          <Icon name="ios-search" style={styles.navbarIcon} />
        </TouchableOpacity>
      }
      renderRightButton = {()=>
        <TouchableOpacity onPress={()=>Actions.Setting()}>
          <Icon name="ios-settings-outline" style={styles.navbarIcon} />
        </TouchableOpacity>
      }
    />

    <Scene key="Home" hideNavBar component={ Home } />
    <Scene key="Login" hideNavBar component={ Login } />
    
    <Scene key="StoryList" component={ StoryList } />

    <Scene key="Search" hideNavBar = {false} title="Search" component={Search} />
    <Scene key="Setting" hideNavBar = {false} title="Setting" component={Setting} 
      renderBackButton={()=>renderBackButton()}
      renderRightButton = {()=>
        <TouchableOpacity onPress={()=>Actions.Detail()}>
          <Text style={styles.navBarButton}>Save</Text>
        </TouchableOpacity>
      }
    />
    <Scene key="CreateStory" hideNavBar = {false} title="Create Story" component={CreateStory} 
      renderBackButton={()=>renderBackButton()}
      renderRightButton = {()=>
        <TouchableOpacity onPress={()=>Actions.Detail()}>
          <Text style={styles.navBarButton}>Publish</Text>
        </TouchableOpacity>
      }
    />
    <Scene key="CreatePasscode" hideNavBar = {false} title="Create passcode" titleStyle={{color:'#ffffff'}} component={CreatePasscode} 
      navigationBarStyle={{backgroundColor : colorPurpleDark }}
      renderBackButton={()=>
        <TouchableOpacity onPress={()=> Actions.pop()}>
          <Icon name="ios-arrow-back" style={styles.navbarIconWhite} />
        </TouchableOpacity>
      }
    />
    <Scene key="EditStory" hideNavBar = {true} title="Story" titleStyle={{color:'#00000'}} component={EditStory} 
      navigationBarStyle={{backgroundColor : colorPurpleDark }}
      renderBackButton={()=>
        <TouchableOpacity onPress={()=> Actions.pop()}>
          <Icon name="ios-arrow-back" style={styles.navbarIconGreen} />
        </TouchableOpacity>
      }
      renderRightButton = {()=>
        <TouchableOpacity onPress={()=>Actions.Detail()}>
          <Text style={styles.navBarButtonGreeen}>Edit</Text>
        </TouchableOpacity>
      }
    />
    <Scene key="ShareStory" hideNavBar = {false} title="Story" titleStyle={{color: colorWhite}} component={ShareStory} 
      navigationBarStyle={{backgroundColor : colorGreen }}
      renderBackButton={()=>
        <TouchableOpacity onPress={()=> Actions.pop()}>
          <Icon name="ios-arrow-back" style={styles.navbarIconWhite} />
        </TouchableOpacity>
      }
      renderRightButton = {()=>
        <TouchableOpacity onPress={()=>Actions.Detail()}>
          <Text style={styles.navBarButtonWhite}>Share</Text>
        </TouchableOpacity>
      }
    />
    
  </Scene>
);


export default class Root extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        <Router hideNavBar={ true } scenes={ scenes }/>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  navBarButton:{
    color : colorPurpleDark,
    fontSize : 18
  },
  navbarIcon:{
    fontSize: 30, 
    color: colorPurpleDark
  },
  navbarIconWhite:{
    fontSize: 30, 
    color: '#ffffff' 
  },
  navbarIconGreen:{
    fontSize: 30, 
    color: '#00ff00' 
  },
  navbarIconWhite:{
    fontSize: 30, 
    color: colorWhite
  },
  navBarStyle:{
    color : colorPurpleDark
  },
  navBarButtonGreeen:{
    fontSize : 30,
    color : '#00ff00'
  },
  navBarButtonWhite:{
    fontSize : 18,
    color : '#ffffff'
  },

});