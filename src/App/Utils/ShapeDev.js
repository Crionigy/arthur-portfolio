import * as THREE from 'three';

export default class ShapeDev {
    constructor() {
        this.extrudeSettings = { depth: 8, bevelEnabled: true, bevelSegments: 2, steps: 2, bevelSize: 1, bevelThickness: 1 };
      
        this.group = new THREE.Group();
        this.group.position.y = 60;
    }

    createTriangleShape() {
        return new THREE.Shape()
		        .moveTo( 80, 20 )
			    .lineTo( 40, 80 )
			    .lineTo( 120, 80 )
			    .lineTo( 80, 20 );
    }

    createHeartShape() {
        const x = 0, y = 0;

        return new THREE.Shape()
				.moveTo( x + 25, y + 25 )
				.bezierCurveTo( x + 25, y + 25, x + 20, y, x, y )
				.bezierCurveTo( x - 30, y, x - 30, y + 35, x - 30, y + 35 )
				.bezierCurveTo( x - 30, y + 55, x - 10, y + 77, x + 25, y + 95 )
				.bezierCurveTo( x + 60, y + 77, x + 80, y + 55, x + 80, y + 35 )
				.bezierCurveTo( x + 80, y + 35, x + 80, y, x + 50, y )
				.bezierCurveTo( x + 35, y, x + 25, y + 25, x + 25, y + 25 );
    }

    addShape( shape, extrudeSettings, color, x, y, z, rx, ry, rz, s ) {
        let geometry = new THREE.ExtrudeGeometry( shape, extrudeSettings );
        let material = new THREE.MeshBasicMaterial( { color: color } );
        let mesh = new THREE.Mesh(geometry, material);
        mesh.position.set( x, y, z );
        // mesh.rotation.set( rx, ry, rz );
        mesh.rotateX(rx);
        mesh.scale.set( s, s, s );
        // this.group.add( mesh );
        return mesh;
    }
}
