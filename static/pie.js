// calling /piedata route in app.py
const url = "piedata";

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    Highcharts.chart("container", {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: "pie",
      },
      // title: {
      //     text: 'Variety of Wine in the Province',
      //     align: 'left'
      // },
      tooltip: {
        pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
      },
      accessibility: {
        point: {
          valueSuffix: "%",
        },
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: "pointer",
          dataLabels: {
            enabled: true,
            format: "<b>{point.name}</b>: {point.percentage:.1f} %",
          },
        },
      },
      series: [
        {
          name: "Province(State)",
          colorByPoint: true,
          data: [
            {
              // {
              //     csvURL: '...\Resources\winemag-data-130k-v2.csv'
              //     filter data to see what state was the most documented

              //     then filter the largest data to see the top wine of that province
              // }

              name: "Chrome",
              y: 70.67,
              sliced: true,
              selected: true,
            },
            {
              name: "Edge",
              y: 14.77,
            },
            {
              name: "Firefox",
              y: 4.86,
            },
            {
              name: "Safari",
              y: 2.63,
            },
            {
              name: "Internet Explorer",
              y: 1.53,
            },
            {
              name: "Opera",
              y: 1.4,
            },
            {
              name: "Sogou Explorer",
              y: 0.84,
            },
            {
              name: "QQ",
              y: 0.51,
            },
            {
              name: "Other",
              y: 2.6,
            },
          ],
        },
      ],
    });
  });