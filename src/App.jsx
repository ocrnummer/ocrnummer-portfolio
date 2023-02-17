import React, { useState, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls } from '@react-three/drei'
import { Physics } from '@react-three/cannon'

import "./assets/style/style.css";

const black = '#000000'

const Torus = () => {
	const myTorus = useRef()
	useFrame(() => {
		myTorus.current.rotation.x += 0.006;
		myTorus.current.rotation.y += 0.001;
		myTorus.current.rotation.z += 0.003;
	})
	return (
		<mesh
			ref={myTorus}
			position={[15, 2, 10]}
		>
			<torusGeometry attach="geometry" args={[10, 3, 20, 100]}/>
			<meshStandardMaterial attach="material" color={black}/>
		</mesh>
	)
}


function App() {
	return (
		<Canvas>
			<OrbitControls />
			<ambientLight intensity={0.5} />
			<Physics>
				<Torus />
			</Physics>
		</Canvas>
	)
}

export default App;