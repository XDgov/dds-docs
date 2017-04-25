(function() {
  var dds = dds || {};

  dds.areaChart = {
    initialize: function() {
      var chartId = "#dds-area-chart";

      c3.generate({
        bindto: chartId,
        data: {
          x: 'x',
          colors: {
            'United States': '#0275cc', //Default Colors w/ Override?
            'Virginia': '#71be61'
          },
          columns: [
              ['x', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015'],
              ['United States', 300, 350, 300, 50, 30, 12, 40, 60],
              ['Virginia', 130, 100, 140, 200, 150, 50, 100, 130]
          ],
          types: {
              'United States': 'area',
              'Virginia': 'area'
          }
        },
        axis: {
          x: {
            label: {
              text: 'Year',
              position: 'outer-center'
            },
          },
          y: {
            label: {
              text: 'Uninsured Rate',
              position: 'outer-middle'
            },
            tick: {
              count: 5,
              format: d3.format('f'),
              multiline: false,
              centered: true
            }
          }
        },
        grid: {
          y: {
            show: true
          }
        },
        padding: {
          top: 0,
          right: 30,
          bottom: 20,
          left: 50,
        },
        point: {
          r: 5
        }
      });
    }
  }

  $(document).ready(function() {
    dds.areaChart.initialize();
  });
})();
