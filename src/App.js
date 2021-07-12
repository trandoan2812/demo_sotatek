import "./App.css";
import {
  CaretLeftOutlined,
  CaretRightOutlined,
  PushpinFilled,
} from "@ant-design/icons";
import { useState } from "react";
import $ from "jquery";
import "antd/dist/antd.css";

function App() {
  const [isMoveDirection, setIsMoveDirection] = useState("");
  const [positionPin, setPositionPin] = useState(null);

  const onMoveDirectionLeft = (e) => {
    e.stopPropagation();
    setIsMoveDirection("left");
  };

  const onMoveDirectionRight = (e) => {
    e.stopPropagation();
    setIsMoveDirection("right");
  };

  const onMoveStreet = (e) => {
    const top = e.pageY;
    const left = e.pageX;
    setPositionPin({
      top,
      left,
    });
  };

  console.log("positionPin: ", positionPin);
  return (
    <div className="App">
      <div
        onClick={onMoveStreet}
        className={`bg-image ${isMoveDirection === "left" && "bg-move-left"} ${
          isMoveDirection === "right" && "bg-move-right"
        }`}
      >
        <CaretLeftOutlined
          onClick={onMoveDirectionLeft}
          className="icon-direction"
        />
        <CaretRightOutlined
          onClick={onMoveDirectionRight}
          className="icon-direction icon-direction--right"
        />

        {positionPin && (
          <>
            <PushpinFilled
              style={{
                display: positionPin ? "block" : "none",
                top: positionPin ? positionPin.top : "0",
                left: positionPin ? positionPin.left : "0",
              }}
              className="icon-pin"
            />
            <div className="pin-information">
              <div>position: </div>
              <div>top: {positionPin.top}</div>
              <div>left: {positionPin.left}</div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
