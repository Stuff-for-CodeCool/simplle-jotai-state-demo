import state from "../state";
import { useAtom } from "jotai";

const Index = () => {
    const [text, setText] = useAtom(state.text);
    const [numar, setNumar] = useAtom(state.numar);

    return (
        <>
            <label>
                Text:
                <input
                    type="text"
                    defaultValue={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </label>
            <br />
            <label>
                Numar:
                <input
                    type="number"
                    defaultValue={numar}
                    onChange={(e) => setNumar(e.target.value)}
                />
            </label>
        </>
    );
};

export default Index;
