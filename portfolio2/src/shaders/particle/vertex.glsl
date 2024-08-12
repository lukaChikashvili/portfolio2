uniform sampler2D uPictureTexture;
varying vec3 vColor;
void main()
{


    // Final position
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;

    float pictureIntensity = texture(uPictureTexture, uv).r;

    gl_Position = projectedPosition;
    gl_PointSize = pictureIntensity * 10.0;

    // varyings
    vColor = vec3(pow(pictureIntensity, 2.0));

}