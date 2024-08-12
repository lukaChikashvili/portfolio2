uniform sampler2D uPictureTexture;
varying vec3 vColor;
uniform sampler2D uDisplacementTexture;
attribute float aIntensity;
attribute float aAngle;

void main()
{

// displacement
vec3 newPosition = position;

float displacementIntensity = texture(uDisplacementTexture, uv).r; 
displacementIntensity = smoothstep(0.1, 0.3, displacementIntensity);

vec3 displacement = vec3(
    cos(aAngle) * 0.2,
    sin(aAngle) * 0.2,
    1.0
);

displacement = normalize(displacement);

displacement *= displacementIntensity;
displacement *= 2.0;
displacement *= aIntensity;
newPosition += displacement; 

    // Final position
    vec4 modelPosition = modelMatrix * vec4(newPosition, 1.0);
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;

    float pictureIntensity = texture(uPictureTexture, uv).r;

    gl_Position = projectedPosition;
    gl_PointSize = pictureIntensity * 14.0;

    // varyings
    vColor = vec3(pow(pictureIntensity, 2.0));

}