import { useState } from "react";

interface Props {
    onClickAdd : (text: string) => void;
}

export default function Editor(props: Props) {

    const [text, setText] = useState("");

    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    };

    const onClickButton = () => {
        props.onClickAdd(text);
        setText("");
    }

    return (
    <div>
        <input value={text} onChange={onChangeInput} />
      <button onClick={onClickButton}>추가</button>
    </div>
    );
}