import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Tabs } from "expo-router";
import { Image, ImageBackground, ImageProps, Text, View } from "react-native";

export default function _Layout() {
    const tabScreen = [
        { id: 'index', title: "Home", icon: icons.home },
        { id: 'saved', title: "Saved", icon: icons.save },
        { id: 'search', title: "Search", icon: icons.search },
        { id: 'profile', title: "Profile", icon: icons.person },
    ]


    const TabsIcon = ({ screen, focused }: { screen: { icon: ImageProps, title: string }, focused:boolean }) => {
      if(focused) {
        return (
            <ImageBackground
                className="flex-1 flex-row min-w-[112px] gap-2 min-h-16 mt-4 justify-center items-center rounded-full overflow-hidden"
                source={images.highlight}>
                <Image
                    source={screen.icon}
                    className="size-5"
                    tintColor={"#151312"}
                />
                <Text className="text-secondary text-base font-semibold">
                    {screen.title}
                </Text>
            </ImageBackground>
        )
      } else {
        return (
            <View className="size-full justify-center items-center mt-4 rounded-full">
                <Image
                    source={screen.icon}
                    tintColor={"#A8B5DB"}
                    className="size-5"                
                />
            </View>
        )
      }
    }
    return (
        <Tabs
            screenOptions={{
                tabBarShowLabel: false,
                tabBarItemStyle:{
                    width: "100%",
                    height: "100%",
                    justifyContent: "center",
                    alignItems: "center"
                },
                tabBarStyle: {
                    backgroundColor: "#0f0D23",
                    borderTopWidth: 0,
                    borderRadius: 50,
                    marginHorizontal: 20,
                    marginBottom: 36,
                    height: 52,
                    position: 'absolute',
                    overflow: 'hidden',
                }
            }}
        >   
            {
                tabScreen.map((screen, index) => (
                    <Tabs.Screen
                        key={screen.id + index}
                        name={screen.id}
                        options={{
                            title: screen.title,
                            headerShown: false,
                            tabBarIcon: ({ focused }) => (
                                <TabsIcon
                                    focused={focused}
                                    screen={{
                                        title: screen.title,
                                        icon: screen.icon
                                    }}
                                />
                            )
                        }}
                    >

                    </Tabs.Screen>
                ))
            }
        </Tabs>
    )
}