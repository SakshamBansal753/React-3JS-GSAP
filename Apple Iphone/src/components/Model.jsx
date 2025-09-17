import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useReducer, useRef, useState } from 'react'
import Modelview from './Modelview'
import { yellowImg } from '../utils'
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber'
import { View } from '@react-three/drei'
import { models, sizes } from '../constants'
const Model = () => {
    const [Size, setSize] = useState("small");
    const [Model, setModel] = useState({
        title:"iphone 15 Pro",
        color:["8F8A81","#FFe7B9","#6F6C64"],
        img:yellowImg,
    })

    //camera control 
    const cameraControlSmall=useRef();
    const cameraControlLarge=useRef();
    const small=useRef(new THREE.Group())
        const large=useRef(new THREE.Group())

    //rotation
   const [smallRotation, setsmallRotation] = useState(0)
   const [LargeRotation, setLargeRotation] = useState(0)



    useGSAP(()=>{
        gsap.to("#heading",{
            y:0,
            opacity:1,
            delay:1
        })
    },[])
  return (
   <section  className='sm:py-32 py-20 sm:px-10 px-5'>
<div className='scrim-max-width'>
    <h1 id="heading" className='text-gray lg:text-6xl md:text-5xl text-3xl lg:mb-0 mb-5 font-medium opacity-0 translate-y-20'>
        Take a Closer look.
    </h1>
    <div className='flex flex-col items-center  mt-5'>
    <div className='w-full h-[75vh] md:h-[90vh] overflow-hidden relative'>

<Modelview
index={1}
groupRef={small}
gsapType="view1"
controlRef={cameraControlSmall}
setRotationState={setsmallRotation}
item={Model}
size={Size}

 />
 <Canvas
 className='w-full h-full'
 style={{
    position:"fixed",
    top:0,
    bottom:0,
    left:0,
    right:0,
    overflow:"hidden"
 }}
 eventSource={document.getElementById("root")}
 >
    <View.Port/>
 </Canvas>
    </div>
    <div className='mx-auto w-full'>
        <p className='text-sm font-light text-center mb-5'>{Model.title}</p>
        <div className='flex-center'>
            <ul className=' flex items-center justify-center px-4 py-4 rounded-full bg-gray-600 backdrop-blur'>
                {models.map((item,i)=>(
                 <li key={i} className='w-6 h-6 rounded-full mx-2' style={{
                    backgroundColor:item.color[0]
                 }}
                 onClick={()=>{
                    setModel(item)
                 }}/> 
                ))}
            </ul>
                <button className=' w-10 h-10 text-sm flex justify-center items-center bg-white text-black rounded-full transition-all'>
                    {sizes.map(({label,value})=>(
                        <span key={label} className='w-10 h-10 text-sm flex justify-center items-center bg-white text-black rounded-full transition-all'
                        style={{backgroundColor:"white",color:"black"}}
                        onClick={()=>setSize(value)}>
                           
                        </span>
                    ))}
                </button>
        </div>
    </div>

    </div>

</div>
   </section>
  )
}

export default Model