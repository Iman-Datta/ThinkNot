import React from "react";
import {
  View,
  Text,
  ScrollView,
  StatusBar,
  Pressable,
  Alert,
} from "react-native";

import {
  Scale,
  Salad,
  FileText,
  BellRing,
  UserRound,
  ChevronRight,
  ArrowUpRight,
  HeartPulse,
  Sparkles,
  ShieldCheck,
} from "lucide-react-native";

const FEATURES = [
  {
    id: "bmi",
    title: "BMI Calculator",
    description: "Understand your body metrics",
    tag: "HEALTH",
    Icon: Scale,
    color: "#E8F1FF",
    iconColor: "#4169C9",
  },
  {
    id: "diet",
    title: "Diet Planner",
    description: "Build a diet around your routine",
    tag: "NUTRITION",
    Icon: Salad,
    color: "#E4F7EC",
    iconColor: "#238653",
  },
  {
    id: "prescription",
    title: "Prescription Scanner",
    description: "Organize your prescriptions",
    tag: "MEDICINES",
    Icon: FileText,
    color: "#F0E8FF",
    iconColor: "#8153C7",
  },
  {
    id: "medicine",
    title: "Medicine Reminders",
    description: "Keep track of your schedule",
    tag: "REMINDERS",
    Icon: BellRing,
    color: "#FFF0DE",
    iconColor: "#C77722",
  },
];

export default function HomePage() {
  const handlePress = (feature) => {
    Alert.alert(feature, "This feature is coming soon!");
  };

  return (
    <View className="flex-1 bg-[#F7F8FC]">
      <StatusBar barStyle="dark-content" backgroundColor="#F7F8FC" />

      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 22,
          paddingTop: 18,
          paddingBottom: 36,
        }}
      >
        {/* Header */}
        <View className="mb-9 flex-row items-center justify-between">
          <View className="flex-row items-center gap-[11px]">
            <View className="h-[43px] w-[43px] items-center justify-center rounded-[14px] bg-[#303D83]">
              <HeartPulse size={25} color="#FFFFFF" strokeWidth={2.2} />
            </View>

            <View>
              <Text className="text-[21px] font-extrabold tracking-[-0.6px] text-[#202B42]">
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
            onPress={() => handlePress("Profile")}
          >
            <UserRound size={21} color="#303D83" strokeWidth={2} />
          </Pressable>
        </View>

        {/* Welcome */}
        <View className="mb-[25px]">
          <Text className="mb-[13px] text-[10px] font-extrabold tracking-[2px] text-[#7774E8]">
            YOUR HEALTH, SIMPLIFIED
          </Text>

          <Text className="text-[34px] font-extrabold leading-[41px] tracking-[-1.3px] text-[#202B42]">
            Take care of yourself.{" "}
            <Text className="text-[#7774E8]">We'll help.</Text>
          </Text>

          <Text className="mt-[13px] text-[14px] leading-[22px] text-[#737E92]">
            Track your health, plan your meals, and keep your medicines
            organized in one place.
          </Text>
        </View>

        {/* Daily health card */}
        <View className="mb-8 flex-row items-center overflow-hidden rounded-[24px] bg-[#303D83] p-[22px]">
          <View className="flex-1 pr-3">
            <View className="mb-3 flex-row items-center gap-1.5">
              <Sparkles size={13} color="#D7DEFF" />
              <Text className="text-[9px] font-extrabold tracking-[1.2px] text-[#D7DEFF]">
                A LITTLE CARE, EVERY DAY
              </Text>
            </View>

            <Text className="text-[22px] font-extrabold leading-[28px] text-white">
              Your health journey starts here.
            </Text>

            <Text className="mt-[9px] text-[12px] leading-[19px] text-[#E0E7FF]">
              Small steps today can make a difference tomorrow.
            </Text>

            <Pressable
              onPress={() => handlePress("Daily Health Check")}
              className="mt-4 flex-row items-center gap-2 self-start rounded-xl bg-white px-4 py-3"
            >
              <Text className="text-xs font-extrabold text-[#303D83]">
                Explore your health
              </Text>
              <ArrowUpRight size={15} color="#303D83" />
            </Pressable>
          </View>

          <View className="h-[58px] w-[58px] items-center justify-center rounded-[19px] bg-[#46559A]">
            <HeartPulse size={32} color="#FFFFFF" strokeWidth={1.7} />
          </View>
        </View>

        {/* Features heading */}
        <View className="mb-[18px] flex-row items-center justify-between">
          <View>
            <Text className="text-[21px] font-extrabold tracking-[-0.5px] text-[#202B42]">
              Your health tools
            </Text>
            <Text className="mt-[5px] text-[12px] text-[#7D879C]">
              Everything you need, right here.
            </Text>
          </View>

          <View className="rounded-full bg-[#E8EAFE] px-2.5 py-1.5">
            <Text className="text-[9px] font-extrabold tracking-wide text-[#4956A0]">
              04 TOOLS
            </Text>
          </View>
        </View>

        {/* Feature cards */}
        <View className="gap-[13px]">
          {FEATURES.map((feature) => {
            const Icon = feature.Icon;

            return (
              <Pressable
                key={feature.id}
                accessibilityRole="button"
                accessibilityLabel={feature.title}
                className="flex-row items-center gap-[13px] rounded-[19px] border border-[#EDF0F6] bg-white p-[15px] active:opacity-75"
                onPress={() => handlePress(feature.title)}
              >
                <View
                  className="h-[53px] w-[53px] items-center justify-center rounded-[16px]"
                  style={{ backgroundColor: feature.color }}
                >
                  <Icon size={25} color={feature.iconColor} strokeWidth={1.9} />
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

                <ChevronRight size={21} color="#A2ABC0" strokeWidth={1.8} />
              </Pressable>
            );
          })}
        </View>

        {/* Health reminder */}
        <View className="mt-[25px] flex-row items-start gap-3 rounded-[19px] border border-[#E6E7FA] bg-[#F0F0FF] p-4">
          <View className="h-9 w-9 items-center justify-center rounded-xl bg-white">
            <ShieldCheck size={20} color="#6564C9" />
          </View>

          <View className="flex-1">
            <Text className="text-[13px] font-extrabold text-[#30375E]">
              Your health, your priority
            </Text>
            <Text className="mt-1 text-[11px] leading-[18px] text-[#737E92]">
              Build healthy routines, stay organized, and take things one step
              at a time.
            </Text>
          </View>
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
    </View>
  );
}
