import React, { useEffect } from 'react';
import { Viewer } from 'cesium';
import "cesium/Source/Widgets/widgets.css"
function CesiumViewer() {

  useEffect(() => {
    const viewer = new Viewer("viewer")
    return () => {
      viewer.destroy()
    }
  }, [])

  return (
    <div>
      <div id={"viewer"} />
    </div>
  );
}

export default CesiumViewer;