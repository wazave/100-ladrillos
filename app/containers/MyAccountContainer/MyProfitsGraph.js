import React, { Component } from 'react';
import Chart from 'chart.js';
import PropTypes from 'prop-types';
import { DateTime } from 'luxon';
import numeral from 'numeral';
import styled from 'styled-components';

const GraphWrapper = styled.div`
  min-height: 100%;
  width: 100%;
  flex-grow: 1;
  z-index: 10;
`;

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const graphColors = {
  blue: '#0477c0',
  gray: '#82919e',
  green: '#48b83b',
  red: '#ff5a60',
  white: '#fff',
};

const defaultOptions = {
  animation: {
    duration: 0,
  },
  hover: {
    mode: 'index',
    intersect: false,
  },
  responsive: true,
  legend: false,
  maintainAspectRatio: false,
  layout: {
    padding: {
      top: 36,
      bottom: 4,
    },
  },
  scales: {
    xAxes: [
      {
        afterBuildTicks(axis) {
          /* eslint-disable no-param-reassign */
          axis.margins.left = '-5px';
          axis.margins.right = '-5px';
          /* eslint-enable no-param-reassign */
        },
        ticks: {
          padding: 24,
          fontColor: graphColors.white,
          callback(value, index, values) {
            const lastValue = values.length - 1;
            if (index !== 0 && index !== lastValue) {
              return capitalizeFirstLetter(
                DateTime.fromFormat(value, 'yyyy-L', {
                  locale: 'es-mx',
                }).toFormat('MMM'),
              );
            }
            return '';
          },
        },
        gridLines: {
          display: false,
          drawTicks: false,
        },
      },
    ],
    yAxes: [
      {
        display: true,
        gridLines: {
          tickMarkLength: 0,
          display: true,
          drawBorder: false,
          offsetGridLines: true,
        },
        ticks: {
          mirror: true,
          padding: -8,
          fontColor: graphColors.gray,
          callback(value) {
            return numeral(value).format('$ 0,0');
          },
        },
      },
    ],
  },
  tooltips: {
    mode: 'index',
    intersect: false,
    displayColors: false,
    xPadding: 8,
    yPadding: 8,
    bodySpacing: 8,
    titleMarginBottom: 16,
    position: 'custom',
    callbacks: {
      title(toolTipItems, data) {
        return capitalizeFirstLetter(
          DateTime.fromFormat(data.labels[toolTipItems[0].index], 'yyyy-L', {
            locale: 'es-mx',
          }).toFormat('MMM dd, yyyy'),
        );
      },
      label({ datasetIndex, index }, { datasets }) {
        const { label } = datasets[datasetIndex];
        const value = numeral(datasets[datasetIndex].data[index]).format(
          '$0,0',
        );
        return `${label}: ${value}`;
      },
    },
  },
};

const datasetStyles = {
  cubicInterpolationMode: 'monotone',
  pointRadius: 0,
  borderWidth: 1,
  fill: false,
};

class Graph extends Component {
  static configured = false;

  static configChart() {
    Chart.Tooltip.positioners.custom = function custom(elements, position) {
      if (!elements.length) {
        return false;
      }
      const y = Math.max(position.y - 25, 0);
      return { x: position.x, y };
    };

    Chart.defaults.LineWithLine = Chart.defaults.line;
    Chart.controllers.LineWithLine = Chart.controllers.line.extend({
      draw(ease) {
        /* eslint-disable */
        if (this.chart.tooltip._active && this.chart.tooltip._active.length) {
          const { x } = this.chart.tooltip._active[0].tooltipPosition();
          const { top, bottom } = this.chart.scales['y-axis-0'];
          const { ctx } = this.chart;
          /* eslint-enable */

          ctx.save();
          ctx.beginPath();
          ctx.moveTo(x, top);
          ctx.lineTo(x, bottom);
          ctx.setLineDash([2, 4]);
          ctx.strokeStyle = '#82919e';
          ctx.stroke();
          ctx.restore();
        }
        Chart.controllers.line.prototype.draw.call(this, ease);
      },
    });
    Graph.configured = true;
  }

  componentDidMount() {
    if (!Graph.configured) Graph.configChart();
    const data = this.getFormattedData();
    const options = Object.assign({}, defaultOptions);
    this.graph = new Chart(this.graphRef, {
      type: 'LineWithLine',
      data,
      options,
    });
    this.refreshGraph();
  }

  componentDidUpdate() {
    this.refreshGraph();
  }

  setGraphRef = element => {
    this.graphRef = element;
  };

  getFormattedData = () => {
    const { dates, sales, rents, others } = this.props.data;
    const datasets = [
      {
        label: 'Utilidad de Ventas',
        data: sales,
        ...datasetStyles,
        borderColor: graphColors.green,
      },
      {
        label: 'Rentas recibidas',
        data: rents,
        ...datasetStyles,
        borderColor: graphColors.blue,
      },
      {
        label: 'Otros',
        data: others,
        ...datasetStyles,
        borderColor: graphColors.red,
      },
    ];
    return { labels: dates, datasets };
  };

  refreshGraph = () => {
    this.graph.data = this.getFormattedData();
    this.graph.update();
  };

  graph = null;

  graphRef = null;

  render() {
    return (
      <GraphWrapper>
        <canvas ref={this.setGraphRef} />
      </GraphWrapper>
    );
  }
}

export default Graph;

Graph.propTypes = {
  data: PropTypes.shape({
    dates: PropTypes.arrayOf(PropTypes.string),
    sales: PropTypes.arrayOf(PropTypes.number),
    rents: PropTypes.arrayOf(PropTypes.number),
    others: PropTypes.arrayOf(PropTypes.number),
  }),
};
