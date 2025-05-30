const chart_boxplot_options = {
    series: [
        {
            name: 'Temperature',
            type: 'boxPlot',
            data: [
                {
                    x: 'Alice',
                    y: [54, 66, 69, 75, 88],
                    goals: [
                        {
                            value: 32,
                            strokeWidth: 0,
                            strokeHeight: 13,
                            strokeLineCap: 'round',
                            strokeColor: '#FEB019',
                        },
                    ],
                },
            ],
        },
    ],
    chart: {
        type: 'boxPlot',
        height: 350,
        background: '#000',
        toolbar: {
            show: false,
        },
        zoom: {
            enabled: false,
        },
        toolbar: {
            show: false,
            offsetX: 0,
            offsetY: 0,
            tools: {
                download: false,
                selection: false,
                zoom: false,
                zoomin: true,
                zoomout: true,
                pan: false,
                //   reset: true | '<img src="/static/icons/reset.png" width="20">',
                // customIcons: []
            },
        }
    },
    theme: {
        mode: 'dark',
    },
    // colors: ['#008FFB', '#FEB019', '#008FFB', '#FEB019', '#008FFB'],
    dataLabels: {
        enabled: true,
        enabledOnSeries:[0, 1],
        offsetY: -10,
        style: {
            fontSize: '12px',
            colors: ['#008FFB', '#FEB019', '#008FFB', '#FEB019', '#008FFB'],
        },
    },
    markers: {
        colors: ['#fff', '#fff', '#fff', '#fff', '#fff'],
        strokeColors: ['#008FFB', '#FEB019', '#008FFB', '#FEB019', '#008FFB'],
        // strokeColors: ['#fff', '#fff', '#fff', '#fff', '#fff'],
        strokeWidth: 2,
        size:[0, 2, 0, 0, ],
    },
    plotOptions: {
        boxPlot: {
            colors: {
                _upper: '#008FFB',
                _lower: '#FEB019',
            },
            dataLabels: {
                enabled: true,
                formatter: function (val) {
                    return val[0] + ' - ' + val[1];
                },
            },
        },
    },
    title: {
        text: 'Forecast Overview',
        align: 'left',
    },
    xaxis: {
        type: 'category',
    },
    yaxis: {
        min: 0,
        max: 100
    }
}