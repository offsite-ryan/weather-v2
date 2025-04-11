chart_range_options = {
    series: [
        {
            type: 'rangeArea',
            name: 'Temp Range',
            data: []
        },

        {
            type: 'rangeArea',
            name: 'Gust',
            data: []
        },

        {
            type: 'line',
            name: 'Temp',
            data: []
        },
        {
            type: 'line',
            name: 'Wind',
            data: []
        },
        {
            type: 'area',
            name: 'Score',
            data: []
        }
    ],
    chart: {
        height: 350,
        type: 'rangeArea',
        background: '#000',
        animations: {
            speed: 500
        },
        toolbar: {
            show: false,
        },
        _zoom: {
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
    annotations: {
        _xaxis: [
            {
                x: 15,
                x2: 17,
                borderColor: '#000',
                opacity: 1,
                _offsetY: 40,
                label: {
                    show: true,
                    text: 'Mon',
                    position: 'top',
                    orientation: 'horizontal',
                    style: {
                        color: '#fff',
                        background: '#000',
                    }
                }
            }
        ]
    },
    _grid: {
        borderColor: '#f1f1f1',
        xaxis: {
            lines: {
                show: true
            }
        },
        yaxis: {
            lines: {
                show: false
            }
        },
    },
    tooltip: {
        // followCursor: true,
        enabled: true,
        // shared: true,
        // intersect: true,
        x: {
            format: 'MM/dd h:mm TT',
        }
    },
    theme: {
        mode: 'dark',
    },
    // colors: ['#d4526e', '#33b2df', '#d4526e', '#33b2df'],
    // colors: ['#34d5eb', '#ed6bda', '#4fd9ff', '#fff', '#7bb380'],
    colors: ['#34d5eb', '#b0b0b0', '#4fd9ff', '#00b8eb', '#7bb380'],
    dataLabels: {
        enabled: false
    },
    fill: {
        opacity: [0.24, 0.24, 1, 1]
    },
    _forecastDataPoints: {
        count: 2
    },
    stroke: {
        curve: 'stepline', // ['smooth', 'stepline', 'stepline', 'stepline', 'stepline', 'stepline'],
        width: [1, 1, 1, 1, 1]
    },
    legend: {
        show: true,
        showForSingleSeries: true,
        _customLegendItems: ['Team B', 'Team A'],
        inverseOrder: false
    },
    title: {
        text: 'Range Area with Forecast Line (Combo)'
    },
    markers: {
        hover: {
            sizeOffset: 5
        }
    },
    xaxis: {
        type: 'datetime',
        _tickAmount: 12,
        labels: {
            show: false,
        }
    },
    yaxis: {
        decimalsInFloat: 0,
        labels: {
            show: true,
        }
    }
}