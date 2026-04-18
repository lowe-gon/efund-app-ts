import FloatingLabelInput from '@/components/floating-label-input';
import { Pressable } from '@/components/ui/pressable';
import ProgressBar from '@/features/registration/progress-bar';
import { AntDesign, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { Keyboard, Text, TouchableWithoutFeedback, View } from 'react-native';

export default function ApplyLoansScreen() {
  const [activeStep, setActiveStep] = React.useState(1);

  const onBackHandler = React.useCallback(() => {
    if (activeStep === 1) router.back();
    setActiveStep(activeStep - 1);
  }, [activeStep]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View className="bg-background flex-1">
        <View className="pt-safe relative px-4">
          {/* Background */}
          <View className="bg-primary absolute top-0 right-0 left-0 h-86 rounded-b-[7rem]"></View>
        </View>
        {/* Content */}
        <View className="gap-3 px-4">
          {/* Back Button */}
          <Pressable className="absolute left-4 z-50" onPress={onBackHandler}>
            <Feather name="arrow-left" size={24} color="#fff" />
          </Pressable>

          <Text className="font-quicksand-bold text-center text-lg text-white">Registration</Text>

          {/* Application Card */}
          <View className="bg-muted overflow-hidden rounded-3xl">
            <View className="gap-3 rounded-b-3xl border border-gray-100 bg-white p-4 shadow-lg shadow-gray-300">
              <ProgressBar
                activeStep={activeStep}
                maxStep={3}
                title={
                  activeStep === 1
                    ? 'Loan Details'
                    : activeStep === 2
                      ? 'Loan Disbursement'
                      : 'Loan Agreement'
                }
              />
              {/* Loan Details */}
              {activeStep === 1 && (
                <React.Fragment>
                  <View className="bg-muted flex flex-col items-center justify-center gap-1 rounded-2xl py-2">
                    <View className="flex flex-row items-center gap-1">
                      <Text className="font-quicksand-medium text-primary text-sm">
                        Approved limit up to
                      </Text>
                      <Feather name="trending-up" size={20} color="#002bae" />
                    </View>

                    <Text className="font-quicksand-bold text-4xl">
                      <Text className="text-primary">₱</Text> 15,000
                    </Text>
                  </View>

                  <FloatingLabelInput label="Loan amount" />
                  <FloatingLabelInput label="Loan type" />
                </React.Fragment>
              )}
              {/* Disbursement Method */}

              {activeStep === 2 && (
                <React.Fragment>
                  <FloatingLabelInput label="Choose payout method" isRequired />
                  <FloatingLabelInput label="Select bank or ewallet" isRequired />
                  <FloatingLabelInput
                    label="Account number"
                    placeholder="Enter 16-digits"
                    isRequired
                  />
                  <FloatingLabelInput
                    label="Account name"
                    placeholder="Juan Dela Cruz"
                    isRequired
                  />
                </React.Fragment>
              )}

              {activeStep === 3 && (
                <React.Fragment>
                  <Text className="font-quicksand-bold text-center text-lg">
                    Lending Patners Gcash Loan {'\n'} Private Limited
                  </Text>
                  <View className="bg-muted gap-4 rounded-2xl p-6">
                    <View className="flex w-full flex-row items-center justify-between">
                      <Text className="font-quicksand-semibold text-foreground text-sm">
                        Loan Amount
                      </Text>
                      <View className="flex flex-row items-center gap-1">
                        <Text className="font-quicksand-bold text-base">₱ 25,000</Text>
                        <MaterialCommunityIcons
                          name="hand-coin-outline"
                          size={20}
                          color={'#002bae'}
                        />
                      </View>
                    </View>
                    <View className="flex w-full flex-row items-center justify-between">
                      <Text className="font-quicksand-semibold text-foreground text-sm">
                        Amount to be credited
                      </Text>
                      <View className="flex flex-row items-center gap-1">
                        <Text className="font-quicksand-bold text-base">₱ 4,324</Text>
                        <MaterialCommunityIcons
                          name="hand-coin-outline"
                          size={20}
                          color={'#002bae'}
                        />
                      </View>
                    </View>
                    <View className="flex w-full flex-row items-center justify-between">
                      <Text className="font-quicksand-semibold text-foreground text-sm">
                        Repayment amount
                      </Text>
                      <View className="flex flex-row items-center gap-1">
                        <Text className="font-quicksand-bold text-base">₱ 4,324</Text>
                        <MaterialCommunityIcons
                          name="hand-coin-outline"
                          size={20}
                          color={'#002bae'}
                        />
                      </View>
                    </View>
                    <View className="flex w-full flex-row items-center justify-between">
                      <Text className="font-quicksand-semibold text-primary text-sm">
                        First repayment date
                      </Text>
                      <View className="flex flex-row items-center gap-1">
                        <Text className="font-quicksand-bold text-base">20-06-2026</Text>
                        <Feather name="calendar" size={20} color={'#002bae'} />
                      </View>
                    </View>
                  </View>
                  <Text className="font-quicksand-semibold text-foreground my-3 text-sm">
                    Please read the terms and conditions of the{' '}
                    <Text className="text-primary underline">Loan Agreement</Text> before availing
                    the loan.
                  </Text>

                  <View className="flex flex-row items-center gap-2">
                    <View className="flex-1">
                      <FloatingLabelInput
                        label="Enter the code"
                        placeholder="Enter 4-digits OTP code"
                        isRequired
                      />
                    </View>
                    <Pressable className="bg-primary rounded-2xl p-4.5">
                      <Text className="font-quicksand-bold text-sm text-white">GET CODE</Text>
                    </Pressable>
                  </View>
                </React.Fragment>
              )}
            </View>
            {activeStep !== 3 && (
              <View className="gap-4 p-8">
                <View className="flex w-full flex-row items-center justify-between">
                  <Text className="font-quicksand-medium text-foreground text-sm">
                    First repayment date
                  </Text>
                  <View className="flex flex-row items-center gap-1">
                    <Text className="font-quicksand-bold text-base">20-06-2026</Text>
                    <Feather name="calendar" size={20} color={'#002bae'} />
                  </View>
                </View>
                <View className="flex w-full flex-row items-center justify-between">
                  <Text className="font-quicksand-medium text-foreground text-sm">
                    Total repayment
                  </Text>
                  <View className="flex flex-row items-center gap-1">
                    <Text className="font-quicksand-bold text-base">₱ 4,324</Text>
                    <Pressable>
                      <AntDesign name="exclamation-circle" size={20} color={'#002bae'} />
                    </Pressable>
                  </View>
                </View>
                <View className="flex w-full flex-row items-center justify-between">
                  <Text className="font-quicksand-medium text-foreground text-sm">
                    Amount to be credit
                  </Text>
                  <View className="flex flex-row items-center gap-1">
                    <Text className="font-quicksand-bold text-base">₱ 4,324</Text>
                    <Pressable>
                      <AntDesign name="exclamation-circle" size={20} color={'#002bae'} />
                    </Pressable>
                  </View>
                </View>
              </View>
            )}
          </View>
        </View>
        <View className="flex-1 justify-end gap-3 px-4 pb-6">
          {activeStep === 1 && (
            <Text className="font-quicksand text-foreground text-sm">
              &quot;I have read and agree to the{' '}
              <Text className="text-primary underline">Terms & Conditions</Text> of Lender and the{' '}
              <Text className="text-primary underline">Key Fact Statement</Text> of Lender. By
              clicking the ACCEPT button below. I give my consent to avail the loan as per the
              details mentioned herein.&quot;
            </Text>
          )}
          <Pressable
            onPress={() => setActiveStep((prev) => prev + 1)}
            className="bg-secondary flex w-full flex-row items-center justify-center rounded-full py-4">
            <Text className="font-quicksand-bold text-sm text-black">
              {activeStep === 3 ? 'CONFIRM FOR DISBURSAL' : 'CONTINUE'}
            </Text>
          </Pressable>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
