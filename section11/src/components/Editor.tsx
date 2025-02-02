import { useState } from "react";
import { TodoDispatchontext, useTodoDispatch } from "../App";

interface Props {
}

export default function Editor(props: Props) {
    const dispatch = useTodoDispatch();

    const [text, setText] = useState("");

    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    };

    const onClickButton = () => {
        dispatch.onClickAdd(text);
        setText("");
    }

    return (
    <div>
        <input value={text} onChange={onChangeInput} />
      <button onClick={onClickButton}>추가</button>
    </div>
    );
}