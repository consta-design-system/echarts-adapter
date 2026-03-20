import { Example } from '@consta/stand';
import * as echarts from 'echarts/core';
import ReactECharts from 'echarts-for-react';
import * as ecStat from 'echarts-stat';
import React from 'react';

import { useEChartsTheme } from '##/adapters/useTheme/useEChartsTheme';

// @ts-ignore
echarts.registerTransform(ecStat.transform.clustering);

const LineChart = () => {
  const theme = useEChartsTheme();

  const lineChartOptions = {
    grid: { top: 8, right: 8, bottom: 24, left: 36 },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        smooth: true,
      },
    ],
    tooltip: {
      trigger: 'axis',
    },
  };
  return <ReactECharts option={lineChartOptions} theme={theme} />;
};

const StackedBarChart = () => {
  const theme = useEChartsTheme();
  const stackedChartOptions = {
    title: {
      text: 'Stacked Area Chart',
    },
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine'],
    },
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
    ],
    yAxis: [
      {
        type: 'value',
      },
    ],
    series: [
      {
        name: 'Email',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series',
        },
        data: [120, 132, 101, 134, 90, 230, 210],
      },
      {
        name: 'Union Ads',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series',
        },
        data: [220, 182, 191, 234, 290, 330, 310],
      },
      {
        name: 'Video Ads',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series',
        },
        data: [150, 232, 201, 154, 190, 330, 410],
      },
      {
        name: 'Direct',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series',
        },
        data: [320, 332, 301, 334, 390, 330, 320],
      },
      {
        name: 'Search Engine',
        type: 'line',
        stack: 'Total',
        label: {
          show: true,
          position: 'top',
        },
        areaStyle: {},
        emphasis: {
          focus: 'series',
        },
        data: [820, 932, 901, 934, 1290, 1330, 1320],
      },
    ],
  };
  return <ReactECharts option={stackedChartOptions} theme={theme} />;
};

const StackedHorizontalBar = () => {
  const theme = useEChartsTheme();
  const stackedHorizontalBarOptions = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        // Use axis to trigger tooltip
        type: 'shadow', // 'shadow' as default; can also be 'line' or 'shadow'
      },
    },
    legend: {},
    xAxis: {
      type: 'value',
    },
    yAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    series: [
      {
        name: 'Direct',
        type: 'bar',
        stack: 'total',
        label: {
          show: true,
        },
        emphasis: {
          focus: 'series',
        },
        data: [320, 302, 301, 334, 390, 330, 320],
      },
      {
        name: 'Mail Ad',
        type: 'bar',
        stack: 'total',
        label: {
          show: true,
        },
        emphasis: {
          focus: 'series',
        },
        data: [120, 132, 101, 134, 90, 230, 210],
      },
      {
        name: 'Affiliate Ad',
        type: 'bar',
        stack: 'total',
        label: {
          show: true,
        },
        emphasis: {
          focus: 'series',
        },
        data: [220, 182, 191, 234, 290, 330, 310],
      },
      {
        name: 'Video Ad',
        type: 'bar',
        stack: 'total',
        label: {
          show: true,
        },
        emphasis: {
          focus: 'series',
        },
        data: [150, 212, 201, 154, 190, 330, 410],
      },
      {
        name: 'Search Engine',
        type: 'bar',
        stack: 'total',
        label: {
          show: true,
        },
        emphasis: {
          focus: 'series',
        },
        data: [820, 832, 901, 934, 1290, 1330, 1320],
      },
    ],
  };
  return <ReactECharts option={stackedHorizontalBarOptions} theme={theme} />;
};

const DoughnutChart = () => {
  const theme = useEChartsTheme();

  const doughnutChartOptions = {
    tooltip: {
      trigger: 'item',
    },
    legend: {
      top: '5%',
      left: 'center',
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          // borderColor: '#fff',
          borderWidth: 2,
        },
        label: {
          show: false,
          position: 'center',
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: 'bold',
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Union Ads' },
          { value: 300, name: 'Video Ads' },
        ],
      },
    ],
  };
  return <ReactECharts option={doughnutChartOptions} theme={theme} />;
};

const BarStackNormalization = () => {
  const theme = useEChartsTheme();

  const rawData = [
    [100, 302, 301, 334, 390, 330, 320],
    [320, 132, 101, 134, 90, 230, 210],
    [220, 182, 191, 234, 290, 330, 310],
    [150, 212, 201, 154, 190, 330, 410],
    [820, 832, 901, 934, 1290, 1330, 1320],
  ];
  const totalData: number[] = [];
  for (let i = 0; i < rawData[0].length; ++i) {
    let sum = 0;
    for (let j = 0; j < rawData.length; ++j) {
      sum += rawData[j][i];
    }
    totalData.push(sum);
  }
  const series = [
    'Direct',
    'Mail Ad',
    'Affiliate Ad',
    'Video Ad',
    'Search Engine',
  ].map((name, sid) => {
    return {
      name,
      type: 'bar',
      stack: 'total',
      barWidth: '60%',
      label: {
        show: true,
        formatter: ((params) =>
          `${Math.round(params.value * 1000) / 10}%`) as (params: {
          value: number;
        }) => string,
      },
      data: rawData[sid].map((d, did) =>
        totalData[did] <= 0 ? 0 : d / totalData[did],
      ),
    };
  });
  const option = {
    legend: {
      selectedMode: false,
    },
    yAxis: {
      type: 'value',
    },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    series,
  };

  return <ReactECharts option={option} theme={theme} />;
};

const PieSimple = () => {
  const theme = useEChartsTheme();

  const option = {
    title: {
      text: 'Referer of a Website',
      subtext: 'Fake Data',
      left: 'center',
    },
    tooltip: {
      trigger: 'item',
    },
    legend: {
      orient: 'vertical',
      left: 'left',
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '50%',
        data: [
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Union Ads' },
          { value: 300, name: 'Video Ads' },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
      },
    ],
  };

  return <ReactECharts option={option} theme={theme} />;
};

const ScatterClustering = () => {
  const theme = useEChartsTheme();

  const data = [
    [3.275154, 2.957587],
    [-3.344465, 2.603513],
    [0.355083, -3.376585],
    [1.852435, 3.547351],
    [-2.078973, 2.552013],
    [-0.993756, -0.884433],
    [2.682252, 4.007573],
    [-3.087776, 2.878713],
    [-1.565978, -1.256985],
    [2.441611, 0.444826],
    [-0.659487, 3.111284],
    [-0.459601, -2.618005],
    [2.17768, 2.387793],
    [-2.920969, 2.917485],
    [-0.028814, -4.168078],
    [3.625746, 2.119041],
    [-3.912363, 1.325108],
    [-0.551694, -2.814223],
    [2.855808, 3.483301],
    [-3.594448, 2.856651],
    [0.421993, -2.372646],
    [1.650821, 3.407572],
    [-2.082902, 3.384412],
    [-0.718809, -2.492514],
    [4.513623, 3.841029],
    [-4.822011, 4.607049],
    [-0.656297, -1.449872],
    [1.919901, 4.439368],
    [-3.287749, 3.918836],
    [-1.576936, -2.977622],
    [3.598143, 1.97597],
    [-3.977329, 4.900932],
    [-1.79108, -2.184517],
    [3.914654, 3.559303],
    [-1.910108, 4.166946],
    [-1.226597, -3.317889],
    [1.148946, 3.345138],
    [-2.113864, 3.548172],
    [0.845762, -3.589788],
    [2.629062, 3.535831],
    [-1.640717, 2.990517],
    [-1.881012, -2.485405],
    [4.606999, 3.510312],
    [-4.366462, 4.023316],
    [0.765015, -3.00127],
    [3.121904, 2.173988],
    [-4.025139, 4.65231],
    [-0.559558, -3.840539],
    [4.376754, 4.863579],
    [-1.874308, 4.032237],
    [-0.089337, -3.026809],
    [3.997787, 2.518662],
    [-3.082978, 2.884822],
    [0.845235, -3.454465],
    [1.327224, 3.358778],
    [-2.889949, 3.596178],
    [-0.966018, -2.839827],
    [2.960769, 3.079555],
    [-3.275518, 1.577068],
    [0.639276, -3.41284],
  ];
  const CLUSTER_COUNT = 6;
  const DIENSIION_CLUSTER_INDEX = 2;
  const COLOR_ALL = [
    '#5070dd',
    '#b6d634',
    '#505372',
    '#ff994d',
    '#0ca8df',
    '#ffd10a',
    '#fb628b',
    '#785db0',
    '#3fbe95',
  ];
  const pieces = [];
  for (let i = 0; i < CLUSTER_COUNT; i++) {
    pieces.push({
      value: i,
      label: `cluster ${i}`,
      color: COLOR_ALL[i],
    });
  }
  const option = {
    dataset: [
      {
        source: data,
      },
      {
        transform: {
          type: 'ecStat:clustering',
          // print: true,
          config: {
            clusterCount: CLUSTER_COUNT,
            outputType: 'single',
            outputClusterIndexDimension: DIENSIION_CLUSTER_INDEX,
          },
        },
      },
    ],
    tooltip: {
      position: 'top',
    },
    visualMap: {
      type: 'piecewise',
      top: 'middle',
      min: 0,
      max: CLUSTER_COUNT,
      left: 10,
      splitNumber: CLUSTER_COUNT,
      dimension: DIENSIION_CLUSTER_INDEX,
      pieces,
    },
    grid: {
      left: 120,
    },
    xAxis: {},
    yAxis: {},
    series: {
      type: 'scatter',
      encode: { tooltip: [0, 1] },
      symbolSize: 15,
      itemStyle: {
        borderColor: '#555',
      },
      datasetIndex: 1,
    },
  };

  return <ReactECharts option={option} theme={theme} />;
};

const RadarMultiple = () => {
  const theme = useEChartsTheme();
  const option = {
    title: {
      text: 'Multiple Radar',
    },
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      left: 'center',
      data: [
        'A Software',
        'A Phone',
        'Another Phone',
        'Precipitation',
        'Evaporation',
      ],
    },
    radar: [
      {
        indicator: [
          { text: 'Brand', max: 100 },
          { text: 'Content', max: 100 },
          { text: 'Usability', max: 100 },
          { text: 'Function', max: 100 },
        ],
        center: ['25%', '40%'],
        radius: 80,
      },
      {
        indicator: [
          { text: 'Look', max: 100 },
          { text: 'Photo', max: 100 },
          { text: 'System', max: 100 },
          { text: 'Performance', max: 100 },
          { text: 'Screen', max: 100 },
        ],
        radius: 80,
        center: ['50%', '60%'],
      },
      {
        indicator: (function () {
          const res = [];
          for (let i = 1; i <= 12; i++) {
            res.push({ text: `${i}月`, max: 100 });
          }
          return res;
        })(),
        center: ['75%', '40%'],
        radius: 80,
      },
    ],
    series: [
      {
        type: 'radar',
        tooltip: {
          trigger: 'item',
        },
        areaStyle: {},
        data: [
          {
            value: [60, 73, 85, 40],
            name: 'A Software',
          },
        ],
      },
      {
        type: 'radar',
        radarIndex: 1,
        areaStyle: {},
        data: [
          {
            value: [85, 90, 90, 95, 95],
            name: 'A Phone',
          },
          {
            value: [95, 80, 95, 90, 93],
            name: 'Another Phone',
          },
        ],
      },
      {
        type: 'radar',
        radarIndex: 2,
        areaStyle: {},
        data: [
          {
            name: 'Precipitation',
            value: [
              2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 75.6, 82.2, 48.7, 18.8, 6.0, 2.3,
            ],
          },
          {
            name: 'Evaporation',
            value: [
              2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 35.6, 62.2, 32.6, 20.0, 6.4, 3.3,
            ],
          },
        ],
      },
    ],
  };
  return <ReactECharts option={option} theme={theme} />;
};

const RadarCustom = () => {
  const theme = useEChartsTheme();
  const option = {
    color: ['#67F9D8', '#FFE434', '#56A3F1', '#FF917C'],
    title: {
      text: 'Customized Radar Chart',
    },
    legend: {},
    radar: [
      {
        indicator: [
          { text: 'Indicator1' },
          { text: 'Indicator2' },
          { text: 'Indicator3' },
          { text: 'Indicator4' },
          { text: 'Indicator5' },
        ],
        center: ['25%', '50%'],
        radius: 120,
        startAngle: 90,
        splitNumber: 4,
        shape: 'circle',
        axisName: {
          formatter: '【{value}】',
          color: '#428BD4',
        },
        splitArea: {
          areaStyle: {
            color: ['#77EADF', '#26C3BE', '#64AFE9', '#428BD4'],
            shadowColor: 'rgba(0, 0, 0, 0.2)',
            shadowBlur: 10,
          },
        },
        axisLine: {
          lineStyle: {
            color: 'rgba(211, 253, 250, 0.8)',
          },
        },
        splitLine: {
          lineStyle: {
            color: 'rgba(211, 253, 250, 0.8)',
          },
        },
      },
      {
        indicator: [
          { text: 'Indicator1', max: 150 },
          { text: 'Indicator2', max: 150 },
          { text: 'Indicator3', max: 150 },
          { text: 'Indicator4', max: 120 },
          { text: 'Indicator5', max: 108 },
          { text: 'Indicator6', max: 72 },
        ],
        center: ['75%', '50%'],
        radius: 120,
        axisName: {
          color: '#fff',
          backgroundColor: '#666',
          borderRadius: 3,
          padding: [3, 5],
        },
      },
    ],
    series: [
      {
        type: 'radar',
        emphasis: {
          lineStyle: {
            width: 4,
          },
        },
        data: [
          {
            value: [100, 8, 0.4, -80, 2000],
            name: 'Data A',
          },
          {
            value: [60, 5, 0.3, -100, 1500],
            name: 'Data B',
            areaStyle: {
              color: 'rgba(255, 228, 52, 0.6)',
            },
          },
        ],
      },
      {
        type: 'radar',
        radarIndex: 1,
        data: [
          {
            value: [120, 118, 130, 100, 99, 70],
            name: 'Data C',
            symbol: 'rect',
            symbolSize: 12,
            lineStyle: {
              type: 'dashed',
            },
            label: {
              show: true,
              formatter: ((params) => `${params.value}`) as (params: {
                value: number;
              }) => string,
            },
          },
          {
            value: [100, 93, 50, 90, 70, 60],
            name: 'Data D',
            areaStyle: {
              color: new echarts.graphic.RadialGradient(0.1, 0.6, 1, [
                {
                  color: 'rgba(255, 145, 124, 0.1)',
                  offset: 0,
                },
                {
                  color: 'rgba(255, 145, 124, 0.9)',
                  offset: 1,
                },
              ]),
            },
          },
        ],
      },
    ],
  };

  return <ReactECharts option={option} theme={theme} />;
};

const GaugeGrade = () => {
  const theme = useEChartsTheme();
  const option = {
    series: [
      {
        type: 'gauge',
        startAngle: 180,
        endAngle: 0,
        center: ['50%', '75%'],
        radius: '90%',
        min: 0,
        max: 1,
        splitNumber: 8,
        axisLine: {
          lineStyle: {
            width: 6,
            color: [
              [0.25, '#FF6E76'],
              [0.5, '#FDDD60'],
              [0.75, '#58D9F9'],
              [1, '#7CFFB2'],
            ],
          },
        },
        pointer: {
          icon: 'path://M12.8,0.7l12,40.1H0.7L12.8,0.7z',
          length: '12%',
          width: 20,
          offsetCenter: [0, '-60%'],
          itemStyle: {
            color: 'auto',
          },
        },
        axisTick: {
          length: 12,
          lineStyle: {
            color: 'auto',
            width: 2,
          },
        },
        splitLine: {
          length: 20,
          lineStyle: {
            color: 'auto',
            width: 5,
          },
        },
        axisLabel: {
          color: '#464646',
          fontSize: 20,
          distance: -60,
          rotate: 'tangential',
          formatter: ((value) => {
            if (value === 0.875) {
              return 'Grade A';
            }
            if (value === 0.625) {
              return 'Grade B';
            }
            if (value === 0.375) {
              return 'Grade C';
            }
            if (value === 0.125) {
              return 'Grade D';
            }
            return '';
          }) as (value: number) => string,
        },
        title: {
          offsetCenter: [0, '-10%'],
          fontSize: 20,
        },
        detail: {
          fontSize: 30,
          offsetCenter: [0, '-35%'],
          valueAnimation: true,
          formatter: ((value) => `${Math.round(value * 100)}`) as (
            value: number,
          ) => string,
          color: 'inherit',
        },
        data: [
          {
            value: 0.7,
            name: 'Grade Rating',
          },
        ],
      },
    ],
  };

  return <ReactECharts option={option} theme={theme} />;
};

export const ThemeMainExample = () => {
  return (
    <Example col={1}>
      <LineChart />
      <StackedBarChart />
      <StackedHorizontalBar />
      <DoughnutChart />
      <BarStackNormalization />
      <PieSimple />
      <ScatterClustering />
      <RadarMultiple />
      <RadarCustom />
      <GaugeGrade />
    </Example>
  );
};
