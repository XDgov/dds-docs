(function() {
  var dds = dds || {};

  dds.areaChartMinimal = {
    initialize: function() {
      var chartId = "#dds-area-chart-minimal";

      c3.generate({
        bindto: chartId,
        data: {
          colors: {
            'United States': '#0275cc'
          },
          columns: [
              ['United States', 257, 289, 300, 312, 400]
          ],
          types: {
            'United States': 'area-spline'
          }
        },
        axis: {
          x: {
            show: false
          },
          y: {
            show: false
          }
        },
        padding: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        },
        point: {
          show: false
        },
        legend: {
          show: false
        },
        size: {
          height: 100
        }
      });
    }
  }

  $(document).ready(function() {
    dds.areaChartMinimal.initialize();
  });
})();
