import type { Preview } from '@storybook/react';

/** .storybook/preview.ts
 * 컴포넌트를 어떻게 표시할지를 관리하는 설정 파일
 * 여기에서는 스토리북에서 사용하는 전역 매개변수, 전역 코드, 그리고 데코레이터 관리 가능
 *
 * 데코레이터 - 하나의 컴포넌트가 화면에 표시될 때에 추가적으로 화면에 표시될 기능들을 제공하는 역할
 * 스토리북은 컴포넌트의 특정 props를 변경할 수 있는 기능을 제공하는데, controls의 matcher 옵션을 설정해서
 * 특정 props에 추가적인 기능을 표시할 수 있다.
 * e.g) background, color가 있으면 color picker를 표시하고, date가 있으면 달력 표시해서 날짜 변경 기능
 */

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
