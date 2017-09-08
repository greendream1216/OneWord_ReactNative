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

import { connect } from 'react-redux';
import { Actions, Scene, Router, ActionConst } from 'react-native-router-flux';
import { Form, Item, Label, List, ListItem, Input, Switch, Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
//Const images, colors
import colors, {StoryThemeColorLight, StoryThemeColorDark}  from '../../Constants/colors';;

class ShowLockedStory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      storyName : '',    
      createdBy : '',
      storyContent : '',
      storyThemeColor : 0,
    }
  }

  componentWillMount(){
    let _storyName = this.props.storyInfo.storyName; 
    let _createBy = this.props.storyInfo.createdBy;
    let _storyContent = this.props.storyInfo.storyContent;
    let _storyThemeColor = this.props.storyInfo.defaultStoryThemeColor;
    //let selectedStoryId = this.props.selectedStoryId;
    
    this.setState({storyName : _storyName});
    this.setState({createdBy : _createBy});
    this.setState({storyContent : _storyContent});
    this.setState({storyThemeColor : _storyThemeColor});
  }
  handleJoinStory(){
    Actions.ShowStory({storyInfo : this.props.storyInfo});
  }
  onEnterPasscode(){
    Actions.CheckPasscode({storyInfo : this.props.storyInfo});
  }
  render() {
    return (
      <View style={[styles.container, {backgroundColor : StoryThemeColorLight[this.state.storyThemeColor]}]}>

        <Header style={styles.headerContainer}>
          <Left>
            <Button transparent onPress={()=>Actions.pop()}>
              <Icon name='arrow-back' style={{color : colors.colorWhite}}/>
            </Button>
          </Left>
          <Body>
            <Title style={styles.headerTitle}>Story</Title>
          </Body>
          <Right>
          </Right>
        </Header>

        <View style={styles.titleContainer}>
          <Text style={styles.titleStyle}>{this.state.storyName}</Text>  
          <Text style={styles.byWriter}>{'by ' + this.state.createdBy}</Text>
        </View>
        
        <View style={styles.storyContentContainer}>
          <TextInput 
            multiline={true} 
            editable={false}
            style={styles.storyContent}
            value = {this.state.storyContent}
          />
          <Button style={[styles.JoinButton, {backgroundColor : StoryThemeColorLight[this.state.storyThemeColor]}]} onPress={()=>this.onEnterPasscode()}>
            <Text style={styles.buttonText}>Enter a Passcode</Text>
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: colors.colorGreen,
    
  },
  headerContainer:{
    backgroundColor : 'transparent',
    borderBottomWidth : 0
  },
  titleContainer:{
    marginTop : 30
  },
  formContainer:{
    marginTop : 20
  },
  storyContentContainer:{
    flex : 1,
    marginTop : 30,
    marginHorizontal : 20,
    backgroundColor : colors.colorWhite,
    borderRadius : 10  ,
    // opacity : .5,
    // borderWidth : 1
  },  
  ListItem:{
    borderWidth : 0,
    borderBottomWidth : 0
  },
  itemText:{
    fontSize : 17,
  },
  colorBoxItem:{
    width : 30,
    height : 30,
    marginHorizontal : 6,
    borderRadius : 4
  },
  titleStyle:{
    fontSize : 30,
    color : colors.colorWhite,
    fontWeight : 'bold',
    marginHorizontal : 10,
    textAlign : 'center'
  },
  byWriter:{
    marginTop : 15,
    textAlign : 'center',
    fontSize : 15,
    color : colors.colorWhite,
  },
  storyContent:{
    flex : .9,
    fontSize : 16,
    lineHeight : 30,
    marginHorizontal : 10,
    marginTop : 10,
    opacity : 0.08,
  },
  headerTitle:{
    color : colors.colorWhite
  },
  buttonStyle:{
    backgroundColor : colors.colorGreen,
    borderColor : colors.colorGreen,
    borderWidth : 0,
    borderRadius : 20,
    overflow : 'visible'
  },
  JoinButton:{
    backgroundColor : colors.colorGreen,
    borderColor : colors.colorGreen,
    borderRadius : 20,
    width : 200,
    justifyContent : 'center',
    alignSelf : 'center',
  },
  buttonText:{
    color : colors.colorWhite,
    textAlign : 'center',
    fontSize : 20
  }
});


const mapStateToProps = (state) => ({
  userId : state.user.userId,
  userName : state.user.userName,
  defaultThemeColor : state.user.defaultThemeColor,
  passCode : state.stories.passCode,
  selectedStoryId : state.stories.selectedStoryId,
  StoriesList : state.stories.StoriesList,
});
const mapDispatchToProps = (dispatch) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowLockedStory);