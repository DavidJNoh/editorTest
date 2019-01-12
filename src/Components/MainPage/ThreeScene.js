import React, { Component } from "react";
import * as THREE from "three";

class ThreeScene extends Component {
  state = this.props.threeJS;

  getInitState() {}

  componentDidMount() {
    this.generateWorld();
  }

  //   componentWillReceiveProps({ threeJS }) {
  //     this.setState(
  //       {
  //         ...threeJS
  //       },
  //       () => {
  //         this.handleEditProperties();
  //         console.log(this.cube, this.camera);

  //       }
  //     );
  //   }

  //   handleEditProperties = () => {
  //     this.camera.fov = this.state.cameraAngle;
  //     this.camera.updateProjectionMatrix();
  //     this.camera.position.set(-5, 3, this.state.cameraPositionZ);
  //     this.cube.scale.set(this.state.cubeX, this.state.cubeY, this.state.cubeZ);
  //     this.cube.material.color.setHex("0x" + this.state.cubeColor);
  //   };

  componentWillUnmount() {
    this.stop();
    this.mount.removeChild(this.renderer.domElement);
  }

  generateWorld = () => {
    // const {
    //   cameraAngle,
    //   cameraPositionZ,
    //   cubeX,
    //   cubeY,
    //   cubeZ,
    //   cubeColor
    // } = this.state;
    const width = this.mount.clientWidth;
    const height = this.mount.clientHeight;
    //ADD SCENE
    this.scene = new THREE.Scene();
    //ADD CAMERA, what happens exactly when I change the width/height?
    this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    this.camera.position.x = -5;
    this.camera.position.y = 3;
    this.camera.position.z = 10;
    this.camera.lookAt(this.scene.position);
    //ADD RENDERER
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(width, height);
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.mount.appendChild(this.renderer.domElement);

    //Add Plane
    const planeGeo = new THREE.PlaneBufferGeometry(10, 10);
    const planeMaterial = new THREE.MeshPhongMaterial({
      color: "#CC0000",
      side: THREE.DoubleSide
    });

    this.plane = new THREE.Mesh(planeGeo, planeMaterial);
    this.plane.rotation.x = 90 * (Math.PI / 180);
    // this.plane.position.x = 15;
    this.plane.position.y = -1;
    // this.plane.position.z = 2;
    this.plane.receiveShadow = true;
    this.scene.add(this.plane);

    //Add Light
    this.spotLight = new THREE.SpotLight(0xffffff);
    this.spotLight.position.set(5, 3, -5);
    this.spotLight.castShadow = true;
    this.scene.add(this.spotLight);

    this.spotLight1 = new THREE.SpotLight(0xffffff);
    this.spotLight1.position.set(-30, 50, -10);
    this.spotLight1.castShadow = true;
    this.scene.add(this.spotLight1);

    //Axes Helper
    this.axes = new THREE.AxesHelper(20);
    this.scene.add(this.axes);

    //ADD CUBE
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshPhongMaterial({ color: "#FFFFFF" });
    this.cube = new THREE.Mesh(geometry, material);
    this.cube.castShadow = true;
    this.scene.add(this.cube);

    //Silly Cube
    //Texture
    // this.texture = new THREE.TextureLoader().load("./Textures/P-51.jpg");
    // this.textureObjects[
    //   TextureCacheIDs.LevelTest0
    // ] = THREE.ImageUtils.loadTexture(levelTest0);
    // console.log(this.textureObjects);

    // const sillyMat = new THREE.MeshBasicMaterial({ map: this.texture });
    // this.sillyCube = new THREE.Mesh(geometry, sillyMat);
    // this.sillyCube.position.x = -3;
    // this.scene.add(this.sillyCube);

    //start
    this.start();
  };

  start = () => {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate);
    }
  };
  stop = () => {
    cancelAnimationFrame(this.frameId);
  };
  animate = () => {
    // const { cubeRotationX, cubeRotationY } = this.props.threeJS;
    this.cube.rotation.x += 0.1;
    this.cube.rotation.y += 0.1;
    this.cube.rotation.z += 0.1;

    this.renderScene();
    this.frameId = window.requestAnimationFrame(this.animate);
  };
  renderScene = () => {
    this.renderer.render(this.scene, this.camera);
  };
  render() {
    return (
      <div
        style={{ width: "100%", height: "800px" }}
        ref={mount => {
          this.mount = mount;
        }}
      />
    );
  }
}

export default ThreeScene;
