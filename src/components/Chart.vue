<template>
    <div class="chart-container">
        <canvas id="myChart"></canvas>
    </div>
</template>

<script>
    import Chart from 'chart.js';

    export default {
        mounted() {
            const ctx = "myChart";
            const myChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050],
                    datasets: [{
                        data: [86,114,106,106,107,111,133,221,783,2478],
                        label: "Africa",
                        borderColor: "#3e95cd",
                        fill: false
                    },
                    ]
                },
                options: {
                    title: {
                        display: true,
                        text: 'World population per region (in millions)'
                    }
                }
            });
        }
    }
</script>

<style scoped>
    .chart-container {
        position: relative;
        margin: auto;
        height: 70vh;
        width: 60vw;
    }
</style>
