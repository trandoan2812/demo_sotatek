import "./App.css";
import { CaretLeftOutlined, CaretRightOutlined, PushpinFilled } from "@ant-design/icons";
import { useState } from "react";
import $ from "jquery";
import "antd/dist/antd.css";

function App() {
  const [isMoveDirection, setIsMoveDirection] = useState("");
  const [positionPin, setPositionPin] = useState(null);

  const onMoveDirection = (direction) => {
    setIsMoveDirection(direction);
  };

  const onMoveStreet = (e) => {
    const top = e.pageY;
    const left = e.pageX;
    setPositionPin({
      top,
      left
    })
  };

  return (
    <div className="App">
      <div
        onClick={onMoveStreet}
        className={`bg-image ${isMoveDirection === "left" && "bg-move-left"} ${
          isMoveDirection === "right" && "bg-move-right"
        }`}
      >
        <CaretLeftOutlined
          onClick={() => onMoveDirection("left")}
          className="icon-direction"
        />
        <CaretRightOutlined
          onClick={() => onMoveDirection("right")}
          className="icon-direction icon-direction--right"
        />
        <PushpinFilled style={{ display: positionPin ? 'block' : 'none', top: positionPin ? positionPin.top : '0', left: positionPin ? positionPin.left : '0'}} className="icon-pin" />
      </div>
    </div>
  );
}

export default App;
