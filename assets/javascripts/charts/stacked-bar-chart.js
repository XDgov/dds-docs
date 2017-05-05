(function() {
  var dds = dds || {};

  dds.stackedBarChart = {
    initialize: function() {
      var chartId = "#dds-stacked-bar-chart";

      c3.generate({
        bindto: chartId,
        data: {
          colors: {
            'White alone': '#0275cc', //Default Colors w/ Override?
            'Black or African American alone': '#3b9fac',
            'Asian alone': '#62c464',
            'Some Other Race alone': '#acdd8e',
            'Two or More Races alone': '#ffcf88',
            'American Indian or Alaska Native alone': '#ff9f00',
            'Native Hawaiian and Other Pacific Islander alone': '#ff9f00'
          },
          columns: [
            ['Native Hawaiian and Other Pacific Islander alone', 0.02],
            ['American Indian or Alaska Native alone', 0.8],
            ['Two or More Races alone', 3.1],
            ['Some Other Race alone', 4.8],
            ['Asian alone', 5.4],
            ['Black or African American alone', 12.7],
            ['White alone', 73.1]
          ],
          type: 'bar',
          groups: [
              [
                'White alone',
                'Black or African American alone',
                'Asian alone',
                'Some Other Race alone',
                'Two or More Races alone',
                'American Indian or Alaska Native alone',
                'Native Hawaiian and Other Pacific Islander alone'
              ]
          ],
        },
        grid: {
        y: {
            lines: [{value:0}]
        }
        },
        axis: {
          rotated: true,
          x: {
            show: false
          },
          y: {
              max: 100,
              padding: {top: 0, bottom: 0},
              show: false
          }
        }
      });
    }
  }

  $(document).ready(function() {
    dds.stackedBarChart.initialize();
  });
})();
