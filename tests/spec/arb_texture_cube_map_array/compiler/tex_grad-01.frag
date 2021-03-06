/* [config]
 * expect_result: pass
 * glsl_version: 1.30
 * require_extensions: GL_ARB_texture_cube_map_array
 * [end config]
 */
#version 130
#extension GL_ARB_texture_cube_map_array: require

uniform samplerCubeArray s;
varying vec4 coord;
varying vec3 dPdx;
varying vec3 dPdy;

void main()
{
  gl_FragColor = textureGrad(s, coord, dPdx, dPdy);
}
