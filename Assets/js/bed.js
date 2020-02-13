//----------------Camera & SCENE----------------------
let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera( 945, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.z = 200;
camera.position.y = -150;
document.addEventListener( 'keypress', onDocumentKeyPress, false );


//----------------Drawables----------------------

//Ground
const groundGeometry = new THREE.BoxBufferGeometry(300,10,300);
let groundTexture = new THREE.TextureLoader().load( 'assets/textures/tiles.jpg' );
let groundMaterial = new THREE.MeshBasicMaterial( { map: groundTexture } );
let ground = new THREE.Mesh( groundGeometry, groundMaterial);
ground.position.y = 50;
ground.position.z = -120;
scene.add( ground );

//Sky
let skyTexture = new THREE.TextureLoader().load( 'assets/textures/sun.png' );
let skyMaterial = new THREE.MeshBasicMaterial( { map: skyTexture } );
scene.background = (skyTexture);

//Sun   
let ambientLight = new THREE.AmbientLight( 0x404040 );
scene.add(ambientLight);
let spotLight = new THREE.SpotLight( 0xFFFFFF, 2);
spotLight.position.set( 300, 300, 300 );
spotLight.target.position.set( 500, -50, 0 );
spotLight.castShadow = true;
scene.add( spotLight.target );
scene.add( spotLight );
//Set up shadow properties for the spotLight
spotLight.shadow.mapSize.width = 512; 
spotLight.shadow.mapSize.height = 512; 
spotLight.shadow.camera.near = 0.5; 
spotLight.shadow.camera.far = 1500;


//Door
const doorGeometry = new THREE.BoxBufferGeometry(100,100,10);
let doorTexture = new THREE.TextureLoader().load( 'assets/textures/door.jpg' );
let doorMaterial = new THREE.MeshPhongMaterial( { map: doorTexture } );
let door = new THREE.Mesh( doorGeometry, doorMaterial);
door.position.z = 25;
scene.add( door );

//Bed
const bedGeometry = new THREE.BoxBufferGeometry(180,30,50);
let bedTexture = new THREE.TextureLoader().load( 'assets/textures/bedsheet.jpg' );
let bedMaterial = new THREE.MeshPhongMaterial( { map: bedTexture } );
let bed = new THREE.Mesh( bedGeometry, bedMaterial);
bed.position.z = -150;
bed.position.x = 50;
bed.position.y = 20;
bed.rotation.y = 26.7;
scene.add( bed );

//Cabinet
const cabinetGeometry = new THREE.BoxBufferGeometry(100,100,50);
let cabinetTexture = new THREE.TextureLoader().load( 'assets/textures/cabinet.jpg' );
let cabinetMaterial = new THREE.MeshPhongMaterial( { map: cabinetTexture } );
let cabinet = new THREE.Mesh( cabinetGeometry, cabinetMaterial);
cabinet.position.z = -150;
cabinet.position.x = -80;
cabinet.position.y = 20;
cabinet.rotation.y = 26.7;
scene.add( cabinet );

//Window
const window1Geometry = new THREE.BoxBufferGeometry(50,100,10);
let window1Texture = new THREE.TextureLoader().load( 'assets/textures/window.jpg' );
let window1Material = new THREE.MeshPhongMaterial( { map: window1Texture } );
let window1 = new THREE.Mesh( window1Geometry, window1Material);
window1.position.z = 30;
window1.position.x = -80;
window1.position.y = 0;
scene.add( window1 );
let window2 = new THREE.Mesh( window1Geometry, window1Material);
window2.position.z = 30;
window2.position.x = 80;
window2.position.y = 0;
scene.add( window2 );

//Side Whole wall
const sideGeometry = new THREE.BoxBufferGeometry(50,100,10);
let sideTexture = new THREE.TextureLoader().load( 'assets/textures/bed.jpg' );
let sideMaterial = new THREE.MeshLambertMaterial( { map: sideTexture } );
let side = new THREE.Mesh( sideGeometry, sideMaterial);
side.position.x = -80;
side.position.z = 25;
scene.add( side );
let side1 = new THREE.Mesh( sideGeometry, sideMaterial);
side1.position.x = 80;
side1.position.z = 25;
scene.add( side1 );


//Back Whole Wall
const wallGeometry = new THREE.BoxBufferGeometry(50,100,300);
let wallTexture = new THREE.TextureLoader().load( 'assets/textures/bed.jpg' );
let wallMaterial = new THREE.MeshPhongMaterial( { map: sideTexture } );
let wall = new THREE.Mesh( wallGeometry, wallMaterial);
wall.position.x = -130;
wall.position.z = -120;
scene.add( wall );
let wall1 = new THREE.Mesh( wallGeometry, wallMaterial);
wall1.position.x = 130;
wall1.position.z = -120;
scene.add( wall1 );


//Back Wall
const backGeometry = new THREE.BoxBufferGeometry(50,100,10);
let backTexture = new THREE.TextureLoader().load( 'assets/textures/bed.jpg' );
let backMaterial = new THREE.MeshLambertMaterial( { map: sideTexture } );
let back = new THREE.Mesh( wallGeometry, wallMaterial);
back.position.x = -0; 
back.position.z = -250;
back.rotation.y = 124.1; 
scene.add( back );


//----------------Renderer----------------------
let renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//----------------Functions----------------------
function animate() {
    requestAnimationFrame( animate );
    // scene.rotation.y += 0.008;
    renderer.render( scene, camera );
}
function onDocumentKeyPress (event){
    keypress = event.which;
    console.log(keypress);
    if (keypress == 97){
        camera.rotation.x += 0.1;
    }
    if (keypress == 115){
        camera.position.z += 1;
    } 
    if (keypress == 100){
        camera.rotation.x -= 0.1;
    }
    if (keypress == 119){
        camera.position.z -= 1;
    }
    if (keypress == 113){
        camera.position.y -= 1;
    }
    if (keypress == 101){
        camera.position.y += 1;
    }
}


animate();