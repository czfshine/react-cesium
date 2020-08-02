import React, {useEffect, useRef} from 'react';
import Cesium from 'cesium';

function CesiumViewer() {

  useEffect(() => {
    const viewer = new Cesium.Viewer("viewer")
    return () => {
      viewer.destroy()
    }
  }, [])

  return (
      <div>
        <canvas id={"viewer"}/>
      </div>
  );
}

export default CesiumViewer;