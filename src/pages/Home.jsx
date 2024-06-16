import { useState } from "react";
import Tombol from "../components/Tombol";
import Hasil from "../components/Hasil";

const Home = () => {
    const [result, setResult] = useState("");
    let umur = 16;
    const tekan = button => {

        if (button === "=") {
            calculate()
        }

        else if (button === "C") {
            reset()
        }
        else if (button === "CE") {
            backspace()
        }

        else {
            setResult(result + button)
        }
    };

    const calculate = () => {
        try {
            setResult((eval(result) || "") + "")
        } catch (e) {
            setResult("error")
        }
    };

    const reset = () => {
        setResult("")
    };

    const backspace = () => {
        setResult(result.slice(0, -1))
    };

    return (
        <div>
            <div className="contoh">
                <Hasil result={result}></Hasil>
                <Tombol var_props={tekan}></Tombol>
            </div>
        </div>
    );
}


export default Home;