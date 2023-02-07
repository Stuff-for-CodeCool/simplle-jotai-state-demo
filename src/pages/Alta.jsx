import { useAtom } from "jotai";
import state from "../state";

const Alta = () => {
    const [text] = useAtom(state.text);
    const [numar] = useAtom(state.numar);

    return `Textul este "${text}" si numartul este ${numar}`;
};

export default Alta;
