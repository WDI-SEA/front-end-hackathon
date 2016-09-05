
var container, stats;

var camera, controls, scene, renderer;

var mesh, texture, geometry, material, treeGeo, treeMat, treeSprite, treeBillboards;

var worldWidth = 128, worldDepth = 128,
worldHalfWidth = worldWidth / 2, worldHalfDepth = worldDepth / 2;

var clock = new THREE.Clock();

init();
animate();

function init() {

  container = document.getElementById( 'container' );

  camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 20000 );
  camera.position.y = 200;

  controls = new THREE.FirstPersonControls( camera );

  controls.movementSpeed = 500;
  controls.lookSpeed = 0.1;

  scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2( 0xaaccff, 0.0003 );

  geometry = new THREE.PlaneGeometry( 20000, 20000, worldWidth - 1, worldDepth - 1 );
  geometry.rotateX( - Math.PI / 2 );

  hemiLight = new THREE.HemisphereLight( 0xffffff, 0xffffff, 0.6 );
  hemiLight.color.setHSL( 0.6, 1, 0.6 );
  hemiLight.groundColor.setHSL( 0.095, 1, 0.75 );
  hemiLight.position.set( 0, 500, 0 );
  scene.add( hemiLight );

  treeGeo = new THREE.Geometry();

  treeSprite = new THREE.TextureLoader().load( "textures/tree2.png" );

  geometry.vertices.forEach(function(vert){
    vert.y = 50 * noise.perlin2(vert.x, vert.z);
    initBillboard(treeGeo, vert);
  })

  treeMat = new THREE.PointsMaterial( { size: 200, sizeAttenuation: true, map: treeSprite, alphaTest: 0.5, transparent: true } );

  treeBillboards = new THREE.Points(treeGeo, treeMat);
  scene.add(treeBillboards);
  // for ( var i = 0, l = geometry.vertices.length; i < l; i ++ ) {

  //   geometry.vertices[ i ].y = 100 * noise.perlin2(geometry.vertices[i].x / 100, geometry.vertices[i].y / 100)

  // }

  var texture = new THREE.TextureLoader().load( "textures/groundtex.png" );
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set( 50 , 50 );

  material = new THREE.MeshBasicMaterial( { color: 0xFFFFFF, map: texture } );

  mesh = new THREE.Mesh( geometry, material );
  scene.add( mesh );

  renderer = new THREE.WebGLRenderer();
  renderer.setClearColor( 0xaaccff );
  renderer.setPixelRatio( window.devicePixelRatio );
  renderer.setSize( window.innerWidth, window.innerHeight );

  container.innerHTML = "";

  container.appendChild( renderer.domElement );

  //stats = new Stats();
  //container.appendChild( stats.dom );

  //

  window.addEventListener( 'resize', onWindowResize, false );

}

function onWindowResize() {

  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize( window.innerWidth, window.innerHeight );

  controls.handleResize();

}

//

function animate() {

  requestAnimationFrame( animate );

  render();
  //stats.update();

}

function render() {

  var delta = clock.getDelta(),
    time = clock.getElapsedTime() * 10;

  // for ( var i = 0, l = geometry.vertices.length; i < l; i ++ ) {

  //   geometry.vertices[ i ].y = 35 * Math.sin( i / 5 + ( time + i ) / 7 );

  // }

  // mesh.geometry.verticesNeedUpdate = true;

  controls.update( delta );
  renderer.render( scene, camera );

}

function initBillboard(geometry, vector3){
  var vertex = new THREE.Vector3();
  vertex.x = vector3.x + getRandomArbitrary(-50, 50);
  vertex.y = vector3.y + 50;
  vertex.z = vector3.z + getRandomArbitrary(-50, 50);

  geometry.vertices.push(vertex)
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
