import React from "react";

import {
  View,
  Text,
  ScrollView,
  StatusBar,
  Pressable,
  Alert,
} from "react-native";

const FEATURES = [
  {
    id: "bmi",
    icon: "⚖️",
    title: "BMI Calculator",
    description: "Understand your body metrics",
    color: "bg-indigo-100",
  },
  {
    id: "diet",
    icon: "🥗",
    title: "Diet Planner",
    description: "Personalized nutrition planning",
    color: "bg-emerald-100",
  },
  {
    id: "prescription",
    icon: "📄",
    title: "Prescription Scanner",
    description: "Digitize your prescriptions",
    color: "bg-orange-100",
  },
  {
    id: "medicine",
    icon: "💊",
    title: "Medicine Reminders",
    description: "Keep track of your medicines",
    color: "bg-pink-100",
  },
];

export default function HomePage() {
  const handlePress = (feature) => {
    Alert.alert(feature, "This feature is coming soon!");
  };

  return (
    <View className="flex-1 bg-[#F7F7FC]">
      <StatusBar barStyle="dark-content" backgroundColor="#F7F7FC" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 32 }}
      >
        <View className="px-5 pt-4">
          {/* Header */}
          <View className="mb-8 flex-row items-center justify-between">
            <View>
              <Text className="text-[27px] font-extrabold tracking-tight text-[#20264F]">
                Think
                <Text className="text-[#7774E8]">Not.</Text>
              </Text>

              <Text className="mt-0.5 text-[9px] font-bold tracking-widest text-[#898BA3]">
                YOUR PERSONAL HEALTH COMPANION
              </Text>
            </View>

            <Pressable
              onPress={() => handlePress("Profile")}
              className="h-11 w-11 items-center justify-center rounded-2xl border border-[#ECECF4] bg-white"
            >
              <Text className="text-xl">👤</Text>
            </Pressable>
          </View>

          {/* Welcome */}
          <View className="mb-6">
            <Text className="mb-3 text-[10px] font-extrabold tracking-[2px] text-[#7774E8]">
              YOUR HEALTH, SIMPLIFIED
            </Text>

            <Text className="text-[29px] font-extrabold leading-[37px] tracking-tight text-[#20264F]">
              Take care of yourself,{"\n"}
              <Text className="text-[#7774E8]">one day at a time.</Text>
            </Text>

            <Text className="mt-2.5 text-sm leading-5 text-[#898BA3]">
              Small steps today. A healthier you tomorrow.
            </Text>
          </View>

          {/* Hero Card */}
          <View className="relative mb-8 min-h-[242px] overflow-hidden rounded-[25px] bg-[#20264F] p-5">
            <View className="absolute -right-3 top-16 h-[105px] w-[105px] items-center justify-center rounded-full bg-[#343960]">
              <Text className="text-[43px]">💜</Text>

              <View className="absolute left-2 top-1 h-3 w-3 rounded-full bg-[#BEBBFF]" />
            </View>

            <View className="z-10">
              <View className="mb-4 self-start rounded-full bg-[#383D69] px-3 py-2">
                <Text className="text-[9px] font-extrabold tracking-wide text-[#DAD8FF]">
                  ✦ YOUR DAILY CARE
                </Text>
              </View>

              <Text className="text-[22px] font-extrabold leading-[29px] text-white">
                Your health journey{"\n"}
                starts here.
              </Text>

              <Text className="mt-2 max-w-[220px] text-xs leading-[17px] text-[#C2C4DE]">
                Build healthier habits with tools designed around you.
              </Text>

              <Pressable
                onPress={() => handlePress("Daily Health Check")}
                className="mt-4 self-start rounded-xl bg-[#C7C4FF] px-4 py-3"
              >
                <Text className="text-xs font-extrabold text-[#20264F]">
                  Get started →
                </Text>
              </Pressable>
            </View>
          </View>

          {/* Feature Heading */}
          <View className="mb-4">
            <Text className="text-xl font-extrabold tracking-tight text-[#20264F]">
              Your health toolkit
            </Text>

            <Text className="mt-1 text-xs text-[#898BA3]">
              Everything you need, in one place.
            </Text>
          </View>

          {/* Feature Cards */}
          <View className="flex-row flex-wrap justify-between gap-y-3">
            {FEATURES.map((feature) => (
              <Pressable
                key={feature.id}
                onPress={() => handlePress(feature.title)}
                className="min-h-[176px] w-[48.2%] rounded-[20px] border border-[#ECECF4] bg-white p-4 active:opacity-70"
              >
                <View className="mb-4 flex-row items-center justify-between">
                  <View
                    className={`h-11 w-11 items-center justify-center rounded-2xl ${feature.color}`}
                  >
                    <Text className="text-[22px]">{feature.icon}</Text>
                  </View>

                  <Text className="text-lg font-bold text-[#7774E8]">↗</Text>
                </View>

                <Text className="text-sm font-extrabold leading-5 text-[#20264F]">
                  {feature.title}
                </Text>

                <Text className="mt-1.5 pr-1 text-[11px] leading-4 text-[#898BA3]">
                  {feature.description}
                </Text>
              </Pressable>
            ))}
          </View>

          {/* Daily Reminder */}
          <View className="mt-6 flex-row items-start rounded-[18px] bg-[#EAE9FF] p-4">
            <Text className="mr-3 text-2xl text-[#7774E8]">✦</Text>

            <View className="flex-1">
              <Text className="mb-1 text-sm font-extrabold text-[#20264F]">
                A little reminder
              </Text>

              <Text className="text-xs leading-5 text-[#626582]">
                You don't have to do everything today. Just take one healthy
                step.
              </Text>
            </View>
          </View>

          {/* Footer */}
          <Text className="mt-6 text-center text-[9px] font-bold tracking-[2px] text-[#A3A4B8]">
            MADE WITH CARE • THINKNOT
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
