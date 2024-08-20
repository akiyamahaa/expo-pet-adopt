import React, { useCallback, useEffect } from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import { Link } from 'expo-router';
import { useOAuth } from '@clerk/clerk-expo';
import * as Linking from 'expo-linking';

export const useWarmUpBrowser = () => {
  useEffect(() => {
    // Warm up the android browser to improve UX
    // https://docs.expo.dev/guides/authentication/#improving-user-experience
    // eslint-disable-next-line no-void
    void WebBrowser.warmUpAsync();
    return () => {
      // eslint-disable-next-line no-void
      void WebBrowser.coolDownAsync();
    };
  }, []);
};

WebBrowser.maybeCompleteAuthSession();

const LoginPage = () => {
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: 'oauth_google' });

  const onPress = useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } = await startOAuthFlow({
        redirectUrl: Linking.createURL('/home', { scheme: 'myapp' }),
      });

      if (createdSessionId) {
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error('OAuth error', err);
    }
  }, []);
  return (
    <View className="flex-1 bg-white">
      <Image className="h-[500px] w-full" source={require('../../assets/images/login.png')} />
      <View className="flex-1 items-center justify-between p-5 py-12">
        <View>
          <Text className="text-center text-3xl font-bold">Ready to make a new friend?</Text>
          <Text className="text-gray text-center text-lg">
            Let's adopt the pet which you like and make their life happy again
          </Text>
        </View>
        <Pressable className="bg-primary w-full rounded-2xl p-4" onPress={onPress}>
          <Text className="text-center text-lg font-semibold">Get Started</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default LoginPage;
