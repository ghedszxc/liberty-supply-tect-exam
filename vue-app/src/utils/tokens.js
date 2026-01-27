import { definePreset } from '@primeuix/themes'
import Aura from '@primeuix/themes/aura'

/* Works because highlight tokens are defined under colorScheme */
const customPreset = definePreset(Aura, {
  primitive: {
    white: {
      0: '#FFFFFF',
    },
    blue: {
      300: '#009BD4',
      500: '#1C3C70',
    },
  },
  semantic: {
    primary: {
      50: '{sky.50}',
      100: '{sky.100}',
      200: '{sky.200}',
      300: '{sky.300}',
      400: '{sky.400}',
      500: '{sky.500}',
      600: '{sky.600}',
      700: '{sky.700}',
      800: '{sky.800}',
      900: '{sky.900}',
      950: '{sky.950}',
    },
    typography: {
      h1: '24px',
      h2: '20px',
      span: '14px',
    },
  },
  components: {
    button: {
      root: {
        primary: {
          borderColor: 'none !important',
        },
      },
    },
  },
})

export default customPreset
