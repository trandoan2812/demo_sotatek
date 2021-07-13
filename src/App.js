import "./App.css";
import {
  CaretLeftOutlined,
  CaretRightOutlined,
  PushpinFilled,
} from "@ant-design/icons";
import { useState } from "react";
import $ from "jquery";
import imageBg from "./assets/images/1.jpg";

function App() {
  const [positionPin, setPositionPin] = useState(null);
  const onMoveDirectionLeft = (e) => {
    e.stopPropagation();
    $("html").animate({ scrollLeft: "0" }, 1000);
  };

  const onMoveDirectionRight = (e) => {
    e.stopPropagation();
    $("html").animate({ scrollLeft: $(".image-map").width() }, 1000);
  };

  const onMoveStreet = (e) => {
    const top = e.pageY;
    const left = e.pageX;
    setPositionPin({
      top,
      left,
    });
  };
  return (
    <div className="app">
      <div onClick={onMoveStreet} className={`bg-image`}>
        <img className="image-map" src={imageBg} />
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
                top: positionPin.top,
                left: positionPin.left,
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
