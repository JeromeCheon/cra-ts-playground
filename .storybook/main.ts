import type { StorybookConfig } from '@storybook/react-webpack5';

/** .storybook/main.ts
 *  스토리북의 메인 설정 파일이다. 스토리북은 컴포넌트를 표시하기 위해 자체 개발 서버를 사용하는데,
 *  이 해당 서버에 관한 설정 파일이 main.ts
 *
 * 각 옵션 설명:
 * stories - 파일명에 붙은 특정 키워드로 화면에 표시될 코드 인지
 * addon - 사용자가 특정 기능을 추가할 수 있도록 하는 확장부
 * framework - react 뿐만 아니라 vue 등 다른 FE framework 가능
 *
 * 이 파일을 수정하는 경우 스토리북을 재실행해야 함
 */

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  staticDirs: ['../public'],
};
export default config;
