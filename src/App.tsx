import React, { useState } from "react";
import Layout from "./Layout/Layout";
import Add from "./ICON/Add.png";
import DoList from "./ControlDoList/DoList";
import { isTemplateExpression, isTemplateSpan } from "typescript";

function App() {
  const today = new Date();

  const dateString = today.toLocaleString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const [count, setCount] = useState(0);

  const dayName = today.toLocaleString("ko-KR", { weekday: "long" });

  const [MyList, setMyList] = useState([
    {
      id: 0,
      text: "운동하기",
    },
  ]);

  const [isVisible, setIsVisible] = useState(false);

  const HandleMyList = (text: string) => {
    setMyList([...MyList, { id: MyList.length, text: text }]);
  };

  let ListComp = MyList.map((item, index) => (
    <DoList
      key={index}
      text={item.text}
      onPlus={() => {
        setCount(count - 1);
      }}
      onMinus={() => {
        setCount(count + 1);
      }}
      onRemove={() => {
        removeMyList(item.id);
      }}
      data_key={item.id}
    ></DoList>
  ));
  const removeMyList = (index: number) => {
    setMyList(MyList.filter((items) => items.id !== index));
  };

  return (
    <div className="App font-notosanskr">
      <div className="bg-slate-200 font-sans pb-[150px]">
        <Layout>
          <div className="flex flex-col text-[64px] font-semibold text-slate-700 border-b ">
            <span>{dateString}</span>
            <span className="text-[50px] text-slate-500 font-light ">
              {dayName}
            </span>
            <span className="text-[32px] mt-[3em] text-lime-600">
              할 일 {MyList.length - count}개 남음
            </span>
          </div>
          <div className="flex flex-col">
            {ListComp}
            {isVisible && (
              <input
                type="text"
                className="absolute bottom-[60px] text-[30px] left-[50%] -translate-x-[50%]"
                placeholder="할 일을 입력하세요"
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    HandleMyList(e.target.value);
                    e.target.value = "";
                  }
                }}
              ></input>
            )}
            <button
              className="absolute -bottom-5 left-[50%] -translate-x-[50%]"
              onClick={() => {
                setIsVisible(!isVisible);
              }}
            >
              <img src={Add} className={isVisible ? "rotate-45" : ""} />
            </button>
          </div>
        </Layout>
      </div>
    </div>
  );
}

export default App;
