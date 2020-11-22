import { useState } from 'react';

export default function InteresrRateConversion() {

    const [interest, setInterest] = useState(0);
    const [period, setPeriod] = useState(0);
    const [result, setResult] = useState(0);


    function handleInterest(event) {
        const newInterest = parseFloat(event.target.value);

        setInterest(newInterest);
    }

    function handlePeriod(event) {
        const newPeriod = parseInt(event.target.value);

        setPeriod(newPeriod);
    }

    function handleFormSubmission(event) {
        event.preventDefault();

        const interestFactor = 1 + (interest / (period * 100));

        const newResult = (Math.pow(interestFactor, period) - 1) * 100;

        setResult(newResult.toFixed(2));
    }
    return (
        <>
            <h2>Interest Rate Conversion</h2>
            <p>
            <code>
                i<sub>e</sub> = (1 + (i<sub>n</sub>/p))<sup>p</sup> -1
                
            </code>
            </p>
            <form action="" onSubmit={handleFormSubmission}>
                <div>
                    <label htmlFor="">Nominal Interest Rate</label>
                    <input type="text" name="interest" placeholder="Insert the interest(%)" onChange={handleInterest} />
                </div>

                <div>
                    <label htmlFor="">How long?</label>
                    <input type="text" name="period" placeholder="Insert the period of time" onChange={handlePeriod} />
                </div>
                <div><input type="submit" /></div>
            </form>
            <div id="result">The effective interest rate is: {result}% &#129409;</div>
        </>
    )
}