//----------------Camera & SCENE----------------------
let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera( 945, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.z = 200;
camera.position.y = -150;
document.addEventListener( 'keypress', onDocumentKeyPress, false );


//----------------Drawables----------------------
//Sky
let skyTexture = new THREE.TextureLoader().load( 'assets/textures/high-clouds.jpg' );
let skyMaterial = new THREE.MeshBasicMaterial( { map: skyTexture } );
scene.background = (skyTexture);

//Water
const waterGeometry = new THREE.BoxBufferGeometry(10000,10,10000);
let waterTexture = new THREE.TextureLoader().load( 'assets/textures/ground.jpg' );
let waterMaterial = new THREE.MeshBasicMaterial( { map: waterTexture } );
let water = new THREE.Mesh( waterGeometry, waterMaterial);
water.position.y = 50;
scene.add( water );


//Ground
const groundGeometry = new THREE.BoxBufferGeometry(1000,50,1000);
let groundTexture = new THREE.TextureLoader().load( 'assets/textures/water.jpg' );
let groundMaterial = new THREE.MeshBasicMaterial( { map: groundTexture } );
let ground = new THREE.Mesh( groundGeometry, groundMaterial);
ground.position.y = 50;
scene.add( ground );




//Center Building
const centerGeometry = new THREE.BoxBufferGeometry(100,100,80);
let centerTexture = new THREE.TextureLoader().load( 'assets/textures/Brick Wall Windows 1.png' );
let centerMaterial = new THREE.MeshBasicMaterial( { map: centerTexture } );
let center = new THREE.Mesh( centerGeometry, centerMaterial);
scene.add( center );

//Side Building
const sideGeometry = new THREE.BoxBufferGeometry(50,100,40);
let sideTexture = new THREE.TextureLoader().load( 'assets/textures/pexels-photo-207142.jpeg' );
let sideMaterial = new THREE.MeshBasicMaterial( { map: sideTexture } );
let side = new THREE.Mesh( sideGeometry, sideMaterial);
side.position.x = -80;
side.position.z = 10;
scene.add( side );
let side1 = new THREE.Mesh( sideGeometry, sideMaterial);
side1.position.x = 80;
side1.position.z = 10;
scene.add( side1 );

//Side Wall
const wallGeometry = new THREE.BoxBufferGeometry(50,100,250);
let wallTexture = new THREE.TextureLoader().load( 'assets/textures/pexels-photo-207142.jpeg' );
let wallMaterial = new THREE.MeshBasicMaterial( { map: sideTexture } );
let wall = new THREE.Mesh( wallGeometry, wallMaterial);
wall.position.x = -130;
wall.position.z = -120;
scene.add( wall );
let wall1 = new THREE.Mesh( wallGeometry, wallMaterial);
wall1.position.x = 130;
wall1.position.z = -120;
scene.add( wall1 );


//Back Wall
const backGeometry = new THREE.BoxBufferGeometry(50,100,100);
let backTexture = new THREE.TextureLoader().load( 'assets/textures/pexels-photo-207142.jpeg' );
let backMaterial = new THREE.MeshBasicMaterial( { map: sideTexture } );
let back = new THREE.Mesh( wallGeometry, wallMaterial);
back.position.x = -0; 
back.position.z = -250;
back.rotation.y = 124.1; 
scene.add( back );


//Bridge
const bridgeGeometry = new THREE.BoxBufferGeometry(10,300,50);
let bridgeTexture = new THREE.TextureLoader().load( 'assets/textures/bridge.jpg' );
let bridgeMaterial = new THREE.MeshBasicMaterial( { map: sideTexture } );
let bridge = new THREE.Mesh( bridgeGeometry,bridgeMaterial);
bridge.position.x = -0;
bridge.position.z = 190;
bridge.rotation.y = 30; 
bridge.rotation.x = 1.55;
bridge.position.y = 30;
scene.add( bridge );


//Side Pillar
const pillarGeometry = new THREE.CylinderBufferGeometry(25, 25, 100, 250);
let pillarTexture = new THREE.TextureLoader().load( 'assets/textures/Brick Wall Windows 1.png' );
let pillarMaterial = new THREE.MeshBasicMaterial( { map: pillarTexture } );
let pillar = new THREE.Mesh( pillarGeometry, pillarMaterial);
pillar.position.x = -130;
pillar.position.z = 10;
scene.add( pillar );
let pillar1 = new THREE.Mesh( pillarGeometry, pillarMaterial);
pillar1.position.x = 130;
pillar1.position.z = 10;
scene.add( pillar1 );
let pillar2 = new THREE.Mesh( pillarGeometry, pillarMaterial);
pillar2.position.x = 130;
pillar2.position.z = -250;
scene.add( pillar2 );
let pillar3 = new THREE.Mesh( pillarGeometry, pillarMaterial);
pillar3.position.x = -130;
pillar3.position.z = -250;
scene.add( pillar3 );


//Roof Pillar
const roofGeometry = new THREE.ConeBufferGeometry(29,100,200);
let roofTexture = new THREE.TextureLoader().load( 'assets/textures/Brick Wall Windows 1.png' );
let roofMaterial = new THREE.MeshBasicMaterial( { map: roofTexture } );
let roofRight = new THREE.Mesh( roofGeometry, roofMaterial);
roofRight.rotation.y = 2;
roofRight.rotation.x = 3;
roofRight.position.y = -80;
roofRight.position.x = -130;
roofRight.position.z =  15;
scene.add( roofRight );
let roofLeft = new THREE.Mesh( roofGeometry, roofMaterial);
roofLeft.rotation.y = 2;
roofLeft.rotation.x = 3;
roofLeft.position.y = -80;
roofLeft.position.x = 130;
roofLeft.position.z =  15;
scene.add( roofLeft )
let roofRight1 = new THREE.Mesh( roofGeometry, roofMaterial);
roofRight1.rotation.y = 2;
roofRight1.rotation.x = 3;
roofRight1.position.y = -80;
roofRight1.position.x = -130;
roofRight1.position.z =  -250;
scene.add( roofRight1 );
let roofLeft1 = new THREE.Mesh( roofGeometry, roofMaterial);
roofLeft1.rotation.y = 2;
roofLeft1.rotation.x = 3;
roofLeft1.position.y = -80;
roofLeft1.position.x = 130;
roofLeft1.position.z =  -250;
scene.add( roofLeft1 );


//Roof Center
const roofCenterGeometry = new THREE.ConeBufferGeometry(45,100,200);
let roofCenterMaterial = new THREE.MeshBasicMaterial( { map: roofTexture } );
let roofCenter = new THREE.Mesh( roofCenterGeometry, roofCenterMaterial);
roofCenter.rotation.y = 1.5;
roofCenter.rotation.x = 3.15;
roofCenter.position.y = -100;
roofCenter.position.x = -1;
roofCenter.position.z =  -2;
scene.add(roofCenter);



//----------------Renderer----------------------
let renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//----------------Functions----------------------
function animate() {
    requestAnimationFrame( animate );
        scene.rotation.y += 0.008;
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