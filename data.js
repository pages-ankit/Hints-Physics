// data.js - Physics Exercise Hints Data Store

const hintsData = {
  1: {
    text: `Resolve components of acceleration along the incline:
$$a_x = g \\sin\\theta - \\mu g \\cos\\theta$$
Use the kinematic relation $v^2 = u^2 + 2as$ with initial velocity $u = 0$.`,
    image: "",
    audio: ""
  },

  2: {
    text: `Draw the Free Body Diagram (FBD) at the lowest point. The tension must balance both gravity and provide the necessary centripetal acceleration:
$$T - mg = \\frac{mv^2}{R}$$`,
    image: "images/q2_fbd.png",
    audio: ""
  },

  3: {
    text: `Take torque about the instantaneous axis of rotation (hinge point) to avoid calculating hinge reaction forces:
$$\\tau_O = I_O \\alpha$$`,
    image: "",
    audio: "audio/q3_hint.mp3"
  },

  4: {
    text: `For a variable force $F(x) = kx^2$, the work done is given by integration:
$$W = \\int_{x_1}^{x_2} F(x) \\, dx$$
Check the sign of displacement relative to the direction of force.`,
    image: "images/q4_graph.png",
    audio: "audio/q4_explanation.mp3"
  },

  5: {
    text: `Conserve momentum along the common tangent and use the coefficient of restitution along the line of impact:
$$e = \\frac{v_{2\\perp} - v_{1\\perp}}{u_{1\\perp} - u_{2\\perp}}$$`,
    image: "",
    audio: ""
  }

  // To add more questions, follow the template:
  /*
  6: {
    text: `Your hint text here using LaTeX like $F = ma$ or $$\\int x dx$$.`,
    image: "images/q6.png",  // leave as "" if none
    audio: "audio/q6.mp3"     // leave as "" if none
  },
  */
};
