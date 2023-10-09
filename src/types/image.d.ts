declare module '*.png' {
  const value: string; // Use string or specific image-related type if available
  export default value;
}

declare module '*.jpg' {
  const value: string; // Use string or specific image-related type if available
  export default value;
}

declare module '*.jpeg' {
  const value: string; // Use string or specific image-related type if available
  export default value;
}

declare module '*.svg' {
  import type React from 'react';
  import { type SvgProps } from 'react-native-svg';
  const content: React.FC<SvgProps>;
  export default content;
}
