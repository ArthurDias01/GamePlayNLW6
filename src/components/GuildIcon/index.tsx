import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import { Image } from 'react-native';
import { styles } from './styles';


export function GuildIcon() {
  const uri = 'https://logodownload.org/wp-content/uploads/2017/11/discord-logo-0-1536x1536.png';
  return (
    <Image
      source={{ uri }}
      style={styles.image}
      resizeMode="contain"
    />

  )
}
