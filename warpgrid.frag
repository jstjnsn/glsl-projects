#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

void main() {
  vec2 coord = gl_FragCoord.xy / u_resolution;
  vec3 color = vec3(0.0);

  color += cos(coord.x * sin(u_time / 10.0) * 60.0) +
           cos(coord.y * sin(u_time / 10.0) * 60.0);

  gl_FragColor = vec4(color, 1.0);
}