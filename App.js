import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
   
} from "react-native";

import { NavigationContainer, TabNavigator } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import screen1 from "./scrns/screen1";
import screen2 from "./scrns/screen2";
import screen3 from "./scrns/screen3";
import screen4 from "./scrns/screen4";


  const Tab = createMaterialTopTabNavigator();

  
  function MyTabs() {
    return (  

     
      <Tab.Navigator
      
        initialRouteName="Feed"
        tabBarOptions={{
            activeTintColor: '#ffa500',
            inactiveTintColor:'#778899',
            labelStyle: {  fontSize: 12, opacity:0.8,textTransform: 'none' },
            pressColor:'white',
            // activeBackgroundColor:'white',
            contentContainerStyle: {
              //  activeTintColor: '#ffa500',
              // backgroundColor: 'white',
              // borderWidth: 4,
              color: 'white'
            },
            indicatorStyle: {
              backgroundColor: 'white',
              height: '100%',
              borderBottomColor: 'white',
              borderBottomWidth: 1
            },
                  

            style:{
              shadowColor: 'rgba(58,55,55,0.1)',
              shadowOpacity: 1,
              shadowRadius: 15,
              elevation: 0,
              borderTopColor: 'transparent',
              backgroundColor: '#fafacd',
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
              height: 40
            },
            
            
         
        }}
      >
        <Tab.Screen
          name="Feed"
          component={screen1}
          options={{ tabBarLabel: 'Food'}}
        />
        <Tab.Screen
          name="Notifications"
          component={screen2 }
          options={{ tabBarLabel: 'Groceries'  }}
        />
        <Tab.Screen
          name="Profile"
          component={screen3}
          options={{ tabBarLabel: 'Meat & Fish' }}
        />
        <Tab.Screen
          name="Profiles"
          component={screen4}
          options={{ tabBarLabel: 'Fruit & Veg' }}
        />
      </Tab.Navigator>
      
    );
  }

  export default function App() {
    return (
        <View style={styles.container}>
             {/* <View style={styles.header}> */}
            <View style={styles.headertext}>
            
            <Text style={{ fontSize: 22, fontWeight: '500' }}>Top offers</Text>
            </View>
      {/* </View> */}
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
      
      </View>
    );
  }
  const styles = StyleSheet.create({
    container: {
         height: '100%',
         width: '100%',
         borderWidth: 0.5,
         borderColor: '#dddddd',
         borderRadius:10 ,
        },
    header:{ 
        height: 200,
        width:'100%',
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: '#dddddd'
        },
    headertext:{
        flexDirection:'row',
        marginStart: 20,
        marginTop:30,
        marginBottom:'12%'
    },
    
            
    });
