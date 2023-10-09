import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";

import { HelpModalProvider } from "./helpModal";
import { styles } from "./styles";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <GestureHandlerRootView style={styles.flex}>
      <HelpModalProvider>{children}</HelpModalProvider>
    </GestureHandlerRootView>
  );
};
