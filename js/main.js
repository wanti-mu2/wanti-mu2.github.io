console.log('chart-test.js を読み込みました. ');

const labels = [
    '1994',
    '1995',
    '1996',
    '1997',
    '1998',
    '1999',
    '2000',
    '2001',
    '2002',
    '2003',
    '2004',
];

const data = {
    labels: labels,
    datasets: [{
        label: '琉球王国のグスフ及び関連遺産群',
        backgroundColor: 'rgb(40, 70, 200)',
        borderColor: 'rgb(40, 70, 200)',
        data: [1841, 1852, 1771, 1887, 1974, 2096, 2117, 2035, 2362, 2513, 2455],
    }, {
        label: '原爆ドーム',
        backgroundColor: 'rgb(500, 40, 95)',
        borderColor: 'rgb(500, 40, 95)',
        data: [1417, 1555, 1442, 1388, 1252, 1181, 1057, 1114, 1140, 1103, 1065],
    }]
};


const config = {
    type: 'line',
    data: data,
    options: {}
};

const myChart = new Chart(
    document.getElementById('myChart'),
    config
);