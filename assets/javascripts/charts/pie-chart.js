(function() {
  var dds = dds || {};

  dds.pieChart = {
    initialize: function() {
      var chartId = "#dds-pie-chart";

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
          type: 'pie'
        }
      });
    }
  }

  $(document).ready(function() {
    dds.pieChart.initialize();
  });
})();
