import {Canvas, useFrame} from "@react-three/fiber";
import {Icosahedron, OrbitControls, PerspectiveCamera} from "@react-three/drei";
import React, {FC, useRef, useState} from "react";
import * as THREE from "three";
import style from "./TargetOfBrush.module.scss"
import {useDrop} from "react-dnd";
import {ItemType} from "../../../types/dnd.types";
import {IBrushItem} from "../Brush/Brush";
import clsx from "clsx";

const Model: FC<{ color: string }> = ({color}) => {
    const ref = useRef<THREE.Mesh>(null!)
    useFrame((state, delta) => {
        ref.current.rotation.x += -0.005
        ref.current.rotation.z += 0.005
    })
    return (
        <Icosahedron args={[1]} ref={ref}>
            <meshStandardMaterial color={color}
                                  opacity={0.9}
                                    //wireframe={true}
                                  transparent={true}
                                  side={THREE.DoubleSide}
            />
        </Icosahedron>
    )
}

export const TargetOfBrush = () => {
    const [color, setColor] = useState("grey");

    const [{ canDrop, isOver }, dropTargetRef] = useDrop<IBrushItem, any, any>(() => ({
        accept: ItemType.Brush,
        drop: (item, monitor) => {
            setColor(item.color)
            return ({result: "result"})
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    }))

    return (
        <div className={clsx({
            [style.targetOfBrush]: true,
            [style.targetOfBrush_canDrop]: canDrop,
            [style.targetOfBrush_isOver]: isOver,
        })}
             ref={dropTargetRef}

        >
            <Canvas>
                <ambientLight intensity={0.5}/>
                <directionalLight position={[-1, 2, 4]} intensity={2}/>

                <Model color={color}/>

                <PerspectiveCamera makeDefault
                                   position={[1.5, 1.5, 1.5]}
                                   rotation={new THREE.Euler(0, 0, 0)}
                />

                <OrbitControls enableRotate={true}
                               enableZoom={true}

                />
            </Canvas>
        </div>


    )
}
