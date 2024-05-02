import type { PieChartFactory } from '@mantine/charts';
import type { StylesApiData } from '../types';

export const PieChartStylesApi: StylesApiData<PieChartFactory> = {
  selectors: {
    root: 'Root element',
  },

  vars: {
    root: {
      '--chart-labels-color': 'Controls color of the chart labels',
      '--chart-size': 'Controls size of the chart',
      '--chart-stroke-color': 'Controls color of the chart stroke',
    },
  },

  modifiers: [],
};
