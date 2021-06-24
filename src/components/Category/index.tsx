import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { SvgProps } from 'react-native-svg';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { theme } from '../../global/styles/theme';

type Props = RectButtonProps & {
  title: string;
  icon: React.FC<SvgProps>;
  hasCheckbox?: boolean;
  checked?: boolean;
}

export function Category({ title, icon: Icon, checked = false, hasCheckbox = false, ...rest }: Props) {
  const { secondary40, secondary50, secondary75 } = theme.colors;
  return (
    <RectButton {...rest}>
      <LinearGradient
        style={styles.container}
        colors={[secondary50, secondary75]}
      >
        <LinearGradient
          style={[styles.content, { opacity: checked ? 1 : 0.4 }]}
          colors={[checked ? secondary75 : secondary50, secondary40]}
        >
          {hasCheckbox &&
            <View style={
              checked ? styles.cheked : styles.check}
            />
          }
          <Icon
            width={48}
            height={48}
          />
          <Text style={styles.title}>
            {title}
          </Text>
        </LinearGradient>
      </LinearGradient>
    </RectButton>
  )
};
