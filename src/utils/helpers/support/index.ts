import { Linking, Platform } from 'react-native';
import Toast from 'react-native-toast-message';
import * as Clipboard from 'expo-clipboard';

import { DEFAULT_NUMBERS } from '@/utils/constants';

import { logOnDev } from '../log';
import { type EmailContentType } from './types';

export const openWhatsAppMessage = async () => {
  const whatsappURL = `whatsapp://send?phone=${DEFAULT_NUMBERS.whatsapp}`;
  const fallbackURL = `https://api.whatsapp.com/send?phone=${DEFAULT_NUMBERS.whatsapp}`;

  try {
    const canOpen = await Linking.canOpenURL(whatsappURL);
    if (canOpen) {
      await Linking.openURL(whatsappURL);
      return;
    }
    await Linking.openURL(fallbackURL);
  } catch (error) {
    try {
      await Linking.openURL(fallbackURL);
    } catch (fallbackError) {
      // TODO: alerta para o usuário
    }
  }
};

export const openEmail = (content: EmailContentType) => {
  const {
    subject,
    to,
    cc,
    bcc,
    body,
    attachments,
    attachment,
    template,
    base64,
  } = content;

  const queryParams = [
    subject && `subject=${encodeURIComponent(subject)}`,
    to && `to=${encodeURIComponent(to)}`,
    cc && `cc=${encodeURIComponent(cc)}`,
    bcc && `bcc=${encodeURIComponent(bcc)}`,
    body && `body=${encodeURIComponent(body)}`,
    attachments && `attachments=${encodeURIComponent(attachments)}`,
    attachment && `attachment=${encodeURIComponent(attachment)}`,
    template && `template=${encodeURIComponent(template)}`,
    base64 && `base64=${encodeURIComponent(base64)}`,
  ].filter(Boolean);

  const url = `mailto:${queryParams.join('&')}`;
  Linking.openURL(url) as unknown as () => void;
};

export const openDialogNumber = async (number?: string) => {
  number = number || DEFAULT_NUMBERS.call;
  const url =
    Platform.OS === 'android' ? `tel:${number}` : `telprompt:${number}`;

  try {
    const supported = await Linking.canOpenURL(url);

    if (!supported) {
      logOnDev('Phone dialing is not supported.');
      return;
    }

    await Linking.openURL(url);
  } catch (error) {
    await Clipboard.setStringAsync(number);
    Toast.show({
      type: 'success',
      text1: 'O número foi copiado com sucesso!',
    });
  }
};

export const openAddressInMap = (address: string) => {
  let url = ``;
  if (Platform.OS === 'ios') {
    url = `https://maps.apple.com/?address=${encodeURIComponent(address)}`;
  } else {
    url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      address,
    )}`;
  }

  Linking.openURL(url) as unknown as () => void;
};

export const openWebURL = (url: string) => {
  if (!url) return;
  Linking.openURL(url) as unknown as () => void;
};
