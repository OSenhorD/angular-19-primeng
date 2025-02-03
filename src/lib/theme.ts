import Theme from '@primeng/themes/nora';
import { definePreset } from '@primeng/themes';

const preset = definePreset(Theme, {
  semantic: {
    primary: {
      '50': '#d9f7ff',
      '100': '#c3f2ff',
      '200': '#abe9fe',
      '300': '#90def8',
      '400': '#69cfee',
      '500': '#00bae4',
      '600': '#01c7f2',
      '700': '#00bce6',
      '800': '#007d9f',
      '900': '#003e4f',
      '950': '#003e4f',
    },
  },
});

export default preset;
