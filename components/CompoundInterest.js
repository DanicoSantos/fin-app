import { useState } from 'react';

export default function CompoundInterest() {
    const [capital, setCapital] = useState(0);
    const [interest, setInterest] = useState(0);
    const [period, setPeriod] = useState(0);
    const [result, setResult] = useState(0);

    function handleCapital(event) {
        const newCapital = parseInt(event.target.value);

        setCapital(newCapital);
    }

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

        const interestPlusOne = 1 + (interest / 100);

        const newResult = capital * (Math.pow(interestPlusOne, period));

        setResult(newResult);
    }
    return (
        <>
            <h2>Compound Interest</h2>
            <form action="" onSubmit={handleFormSubmission}>
                <div>
                    <label htmlFor="">Capital</label>
                    <input type="text" name="capital" placeholder="Insert the initial value" onChange={handleCapital} />
                </div>

                <div>
                    <label htmlFor="">Interest</label>
                    <input type="text" name="interest" placeholder="Insert the interest(%)" onChange={handleInterest} />
                </div>

                <div>
                    <label htmlFor="">How long?</label>
                    <input type="text" name="period" placeholder="Insert the period of time" onChange={handlePeriod} />
                </div>
                <div><input type="submit" /></div>
            </form>
            <div id="result">{result}</div>
        </>
    )
}