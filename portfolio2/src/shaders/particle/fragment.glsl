varying vec3 vColor;
uniform float uOpacity;


void main()
{

    vec2 uv = gl_PointCoord;
    float distanceToCenter = length(uv - vec2(0.5));

   if(distanceToCenter > 0.5) discard;



    gl_FragColor = vec4(vColor ,  uOpacity);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
}