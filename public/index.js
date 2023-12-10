async function main() {

    import config from './config.js';

    const apiKey = config.apiKey;


    const apiUrl = `https://api.twelvedata.com/time_series?symbol=GME,MSFT,DIS,BNTX&interval=1min&apikey=${apiKey}`;

    const timeChartCanvas = document.querySelector('#time-chart');
    const highestPriceChartCanvas = document.querySelector('#highest-price-chart');
    const averagePriceChartCanvas = document.querySelector('#average-price-chart');

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`API request failed with status ${response.status}`);
        }
        const data = await response.json();
        
        // Handle the API response data here
        console.log(data);

        // Now you can work with the API data and update your charts or perform other operations.
    } catch (error) {
        // Handle errors, e.g., display an error message
        console.error('Error:', error);
    }

}

main();
