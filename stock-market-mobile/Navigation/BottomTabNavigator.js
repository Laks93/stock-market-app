import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";

import TabBarIcon from "../components/TabBarIcon";

import MarketOverview from "../screens/MarketOverview";
import SectorScreen from "../screens/SectorScreen";
import StockScreen from "../screens/StockScreen";

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = "Home";

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Home"
        component={MarketOverview}
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="ios-home" />
          ),
        }}
      />
      <BottomTab.Screen
        name="Stock"
        component={StockScreen}
        options={{
          title: "Stock",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="ios-stats" />
          ),
        }}
      />
      <BottomTab.Screen
        name="Sector"
        component={SectorScreen}
        options={{
          title: "Sector",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="ios-podium" />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName =
    route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case "Home":
      return "Market Overview";
    case "Stock":
      return "Stock";
    case "Sector":
      return "Market - Sectorwise";
  }
}
