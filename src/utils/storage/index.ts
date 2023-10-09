/* eslint-disable @typescript-eslint/no-explicit-any */
import { MMKVLoader, useMMKVStorage } from 'react-native-mmkv-storage';

const storage = new MMKVLoader().initialize();
const encryptedStorage = new MMKVLoader().withEncryption().initialize();

const keys = {
  storage: {
    ['ONBOARDING_DONE']: 'onboardingDone',
    [`DEVICE_ID`]: 'deviceId',
  },
};

const useEncryptedStorage = (key: string, data?: unknown) => {
  return useMMKVStorage(key, encryptedStorage, data);
};

const useStorage = (key: string, data?: any) => {
  return useMMKVStorage(key, storage, data);
};

export function getItem<T>(key: string): T | null {
  const value = storage.getString(key);

  return value ? JSON.parse(value) : null;
}

export async function setItem<T>(key: string, value: T) {
  await storage.setItem(key, JSON.stringify(value));
}

export const removeItem = (key: string) => {
  storage.removeItem(key);
};

export { storage, encryptedStorage, useEncryptedStorage, useStorage, keys };
