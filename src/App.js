import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";

function Model(props) {
  const { scene } = useGLTF("/bmw.glb");
  return <primitive object={scene} {...props} />
}

function App() {
  return (
    <>
    <Canvas dpr={[1,2]} shadows camera={{ fov: 45 }} style={{"position": "absolute",left:'0',right:'0',top:'20%',borderRadius:'20px',textAlign:'center',width:'500px',height:'50%',marginLeft:'auto',marginRight:'auto'}}>
      <color attach="background" args={["#101010"]} />
      <PresentationControls speed={1.5} global zoom={.5} polar={[-0.1, Math.PI / 4]}>
        <Stage environment={"sunset"}>
          <Model scale={0.01} />
        </Stage>
      </PresentationControls>
    </Canvas>
    <div style={{display:'flex',alignItems:'center',justifyContent:'center',height:'200px'}}>
    <span>The BMW 3D Model </span>
    <span>- Nima Mohammadi</span>
    </div>
    </>
  );
}

export default App;
