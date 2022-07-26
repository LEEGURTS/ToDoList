import React, { useState } from "react";
import Checked from "../ICON/Checked.png";
import UnChecked from "../ICON/UnChecked.png";
import Trash from "../ICON/Trash.png";

interface Props {
  text: string;
  onPlus: () => void;
  onMinus: () => void;
  onRemove: (props: number) => void;
  data_key: number;
}

const DoList: React.FC<Props> = ({
  text,
  onPlus,
  onMinus,
  onRemove,
  data_key,
}) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="flex text-[30px]">
      <button
        className="pr-[2em] py-[1em]"
        onClick={() => {
          setIsChecked(!isChecked);
          {
            isChecked ? onPlus() : onMinus();
          }
        }}
      >
        <img src={isChecked ? Checked : UnChecked} alt="" />
      </button>
      <span className="py-[1em]">{text}</span>
      <div className="flex flex-grow"></div>
      <button
        onClick={() => {
          onRemove(data_key);
          if (isChecked) {
            onPlus();
          }
        }}
      >
        <img src={Trash} />
      </button>
    </div>
  );
};

export default DoList;
