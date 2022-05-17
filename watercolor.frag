#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

void main() {
  // Center coordinates
  vec2 coord = 6.0 * gl_FragCoord.xy / u_resolution;

  // Sample coordinates 90 times per frame, using time
  for (int n = 1; n < 90; n++) {
    float i = float(n);
    coord += vec2(0.7 / i * sin(i * coord.y + u_time + 0.3 * i) + 0.8,
                  0.4 / i * sin(i * coord.x + u_time + 0.3 * i) + 1.6);
  }

  // Generate color using coordinates
  vec3 color = vec3(0.5 * sin(coord.x) + 0.5, 0.5 * sin(coord.y) + 0.5,
                    sin(coord.x + coord.y));

  // Draw
  gl_FragColor = vec4(color, 1.0);
}

//   coord += vec2(0.7 / sin(coord.y + u_time + 0.3) + 0.8,
//                 0.4 / sin(coord.x + u_time + 0.3) + 1.6);