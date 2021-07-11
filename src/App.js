import "./App.css";
import { CaretLeftOutlined, CaretRightOutlined } from "@ant-design/icons";
import { useState } from "react";
import $ from "jquery";
import { notification } from "antd";
import "antd/dist/antd.css";

function App() {
  const [isMoveDirection, setIsMoveDirection] = useState("");

  const onMoveDirection = (direction) => {
    setIsMoveDirection(direction);
  };

  const onMoveStreet = (e) => {
    notification.info({
      message: "Position",
      description: `Top: ${e.pageY}, Left: ${e.pageX}`,
      placement: "bottomLeft",
    });
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
      </div>
    </div>
  );
}

export default App;
