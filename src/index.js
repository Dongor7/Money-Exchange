// PLEASE DON'T change function name
function makeExchange(currency) {

    let currencyForCalculation = currency;

    let result = {};

    if (currency > 10000) {
        result.error = 'You are rich, my friend! We don\'t have so much coins for exchange';
    } else {
        let H = ~~(currency / 50);
        if(H > 0) result.H = H;
        currencyForCalculation -= H * 50;

        let Q =  ~~(currencyForCalculation / 25);
        if(Q > 0) result.Q = Q;
        currencyForCalculation -= Q * 25;

        let D =  ~~(currencyForCalculation / 10);
        if(D > 0) result.D = D;
        currencyForCalculation -= D * 10;

        let N =  ~~(currencyForCalculation / 5);
        if(N > 0) result.N = N;
        currencyForCalculation -= N * 5;

        let P = currencyForCalculation / 1;
        if(P > 0) result.P = P;
    }

    return result;
}

module.exports = makeExchange;
