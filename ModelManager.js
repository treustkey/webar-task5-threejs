import * as THREE from 'three';
export class ModelManager{
 constructor(scene){this.root=new THREE.Group();scene.add(this.root);this.material=new THREE.MeshStandardMaterial({color:'#e8a660',metalness:.7,roughness:.22});this.setModel('knot');}
 setModel(name){if(this.mesh){this.root.remove(this.mesh);this.mesh.geometry.dispose();}const geometry=name==='cube'?new THREE.BoxGeometry(.32,.32,.32):name==='sphere'?new THREE.SphereGeometry(.22,48,32):new THREE.TorusKnotGeometry(.16,.055,128,24);this.mesh=new THREE.Mesh(geometry,this.material);this.root.add(this.mesh);}
 reset(){this.root.rotation.set(0,0,0);this.material.color.set('#e8a660');this.material.metalness=.7;this.material.roughness=.22;this.setModel('knot');}
}
