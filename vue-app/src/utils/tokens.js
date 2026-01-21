import { definePreset } from '@primeuix/themes'
import Aura from '@primeuix/themes/aura'

/* Works because highlight tokens are defined under colorScheme */
const customPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '{indigo.50}',
      100: '{indigo.100}',
      200: '{indigo.200}',
      300: '{indigo.300}',
      400: '#F3F5F6',
      500: '#1C3C70',
      600: '#009BD4',
      700: '{indigo.700}',
      800: '{indigo.800}',
      900: '{indigo.900}',
      950: '{indigo.950}',
    },
    // colorScheme: {
    //     light: {

    //     },
    //     dark: {

    //     }
    // }
    // colorScheme: {
    //   light: {
    //     semantic: {
    //       highlight: {
    //         background: '{primary.50}',
    //         color: '{primary.700}',
    //       },
    //     },
    //   },
    //   //   dark: {
    //   //     semantic: {
    //   //       highlight: {
    //   //         background: '{primary.200}',
    //   //         color: '{primary.900}',
    //   //       },
    //   //     },
    //   //   },
    // },
  },
  //   semantic: {
  //     colorScheme: {
  //       light: {
  //         //...
  //       },
  //       dark: {
  //         //...
  //       },
  //     },
  //   },
})

export default customPreset
