import React from "react";
import "./global.css";

import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StatusBar,
  Pressable,
} from "react-native";

const features = [
  {
    id: "1",
    icon: "⚖️",
    title: "BMI Calculator",
    description: "Understand your body metrics",
    color: "#E8F1FF",
    tag: "HEALTH",
  },
  {
    id: "2",
    icon: "🥗",
    title: "Diet Planner",
    description: "Build a diet around your routine",
    color: "#E4F7EC",
    tag: "NUTRITION",
  },
  {
    id: "3",
    icon: "📋",
    title: "Prescription Scanner",
    description: "Organize your prescribed medicines",
    color: "#F0E8FF",
    tag: "MEDICINES",
  },
  {
    id: "4",
    icon: "⏰",
    title: "Medicine Reminders",
    description: "Keep track of your schedule",
    color: "#FFF0DE",
    tag: "REMINDERS",
  },
];

export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-surface">
      <StatusBar barStyle="dark-content" backgroundColor="#F7F8FC" />

      <ScrollView
        className="flex-1"
        contentContainerStyle={{
          paddingHorizontal: 22,
          paddingTop: 18,
          paddingBottom: 36,
        }}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View className="mb-9 flex-row items-center justify-between">
          <View className="flex-row items-center gap-[11px]">
            <View className="h-[43px] w-[43px] items-center justify-center rounded-[14px] bg-brand-700">
              <Text className="text-[23px] font-extrabold text-white">T</Text>
            </View>

            <View>
              <Text className="text-[21px] font-extrabold tracking-[-0.6px] text-ink">
                ThinkNot
              </Text>
              <Text className="mt-[3px] text-[8px] font-bold tracking-[1px] text-[#7D879C]">
                YOUR EVERYDAY HEALTH COMPANION
              </Text>
            </View>
          </View>

          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Profile"
            className="h-[42px] w-[42px] items-center justify-center rounded-full bg-[#E6EAF7]"
            onPress={() => {}}
          >
            <Text className="text-[17px] font-extrabold text-brand-700">G</Text>
          </Pressable>
        </View>

        {/* Welcome */}
        <View className="mb-[25px]">
          <Text className="mb-[13px] text-[10px] font-extrabold tracking-[2px] text-brand-500">
            YOUR HEALTH, SIMPLIFIED
          </Text>

          <Text className="text-[34px] font-extrabold leading-[41px] tracking-[-1.3px] text-ink">
            Take care of yourself.{" "}
            <Text className="text-brand-500">We'll help.</Text>
          </Text>

          <Text className="mt-[13px] text-[14px] leading-[22px] text-[#737E92]">
            Track your health, plan your meals, and keep your medicines
            organized in one place.
          </Text>
        </View>

        {/* Daily health card */}
        <View className="mb-8 flex-row items-center overflow-hidden rounded-[24px] bg-brand-700 p-[22px]">
          <View className="flex-1 pr-2">
            <Text className="mb-3 text-[9px] font-extrabold tracking-[1.2px] text-[#C8D5FF]">
              A LITTLE CARE, EVERY DAY
            </Text>

            <Text className="text-[22px] font-extrabold leading-[28px] text-white">
              Your health journey starts here.
            </Text>

            <Text className="mt-[9px] text-[12px] leading-[19px] text-[#E0E7FF]">
              Small steps today can make a difference tomorrow.
            </Text>
          </View>

          <View className="h-[61px] w-[61px] items-center justify-center rounded-[20px] bg-white">
            <Text className="text-[32px]">🌱</Text>
          </View>
        </View>

        {/* Feature section heading */}
        <View className="mb-[18px] flex-row items-center justify-between">
          <View>
            <Text className="text-[21px] font-extrabold tracking-[-0.5px] text-ink">
              Your health tools
            </Text>
            <Text className="mt-[5px] text-[12px] text-[#7D879C]">
              Everything you need, right here.
            </Text>
          </View>

          <Text className="text-[9px] font-extrabold tracking-[1px] text-[#7D879C]">
            04 TOOLS
          </Text>
        </View>

        {/* Feature cards */}
        <View className="gap-[13px]">
          {features.map((feature) => (
            <Pressable
              key={feature.id}
              accessibilityRole="button"
              accessibilityLabel={feature.title}
              className="flex-row items-center gap-[13px] rounded-[19px] border border-[#EDF0F6] bg-white p-[15px] active:opacity-75"
              onPress={() => {}}
            >
              <View
                className="h-[53px] w-[53px] items-center justify-center rounded-[16px]"
                style={{ backgroundColor: feature.color }}
              >
                <Text className="text-[25px]">{feature.icon}</Text>
              </View>

              <View className="flex-1">
                <Text className="mb-1 text-[8px] font-extrabold tracking-[1.3px] text-[#8590A5]">
                  {feature.tag}
                </Text>

                <Text className="text-[15px] font-extrabold text-[#202B42]">
                  {feature.title}
                </Text>

                <Text className="mt-1 text-[11px] leading-[17px] text-[#7D879C]">
                  {feature.description}
                </Text>
              </View>

              <Text className="pl-[3px] text-[27px] text-[#A2ABC0]">›</Text>
            </Pressable>
          ))}
        </View>

        {/* Footer */}
        <View className="mt-[30px] items-center border-t border-[#E7EAF2] pt-[22px]">
          <Text className="text-center text-[12px] font-bold text-[#4C5870]">
            A healthier day, one step at a time.
          </Text>

          <Text className="mt-[7px] text-[10px] text-[#929BAE]">
            ThinkNot · Your health, in your hands.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
