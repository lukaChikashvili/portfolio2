uniform float uHeight;
uniform float uFrequency;
varying vec2 vUv;
uniform float uTime;


void main() {

     vec3 newPosition = position;
    

     float wave = uHeight * sin(position.x * uFrequency + uTime) * uHeight * sin(position.y * uFrequency + uTime);
     newPosition.y += wave;

 gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);

vUv = uv;
}