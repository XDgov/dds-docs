(function() {
  var dds = dds || {};

  dds.donutChart = {
    initialize: function() {
      var chartId = "#dds-donut-chart";

      c3.generate({
        bindto: chartId,
        data: {
          colors: {
            'United States': '#0275cc', //Default Colors w/ Override?
            'Virginia': '#71be61'
          },
          columns: [
              ['United States', 300],
              ['Virginia', 98]
          ],
          type: 'donut'
        }
      });
    }
  }

  $(document).ready(function() {
    dds.donutChart.initialize();
  });
})();
