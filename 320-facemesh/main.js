//MAIN FACE FILTER EXAMPLE
import {loadGLTF, loadTexture} from "../../libs/loader.js";
const THREE = window.MINDAR.FACE.THREE;

document.addEventListener('DOMContentLoaded', () => {
  const start = async() => {
    const mindarThree = new window.MINDAR.FACE.MindARThree({
      container: document.body,
    });
    const {renderer, scene, camera} = mindarThree;

    const light = new THREE.HemisphereLight( 0xffffff, 0xbbbbff, 1 );
    scene.add(light);

    document.querySelector("#switch").addEventListener("click", () => {
      mindarThree.switchCamera();
    });

    //facemesh variable ; different from anchor; returned face mesh 
    const faceMesh = mindarThree.addFaceMesh();
    // const texture = await loadTexture("../../assets/facemesh/face-mask-template/Face_Mask_Template.png");
    const texture = await loadTexture("../../assets/facemesh/face-mask-template/makeup.PNG");

    faceMesh.material.map = texture;
    faceMesh.material.transparent = true;
    faceMesh.material.needsUpdate = true;

    scene.add(faceMesh);

    await mindarThree.start();
    renderer.setAnimationLoop(() => {
      renderer.render(scene, camera);
    });
  }
  start();
});
