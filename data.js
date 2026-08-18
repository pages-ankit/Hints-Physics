// data.js - Multi-Exercise Physics Hints Data

const exercisesData = {
  "Exercise O-I": {
    totalQuestions: 26,
    hints: {
      1: {
        text: `Resolve forces along the coordinate axes:
$$N = mg \\cos\\theta$$
Apply Newton's second law along the incline: $mg \\sin\\theta - f_k = ma$.`,
        image: "",
        audio: ""
      },
      2: {
        text: `Conserve mechanical energy between initial and final states:
$$mgh = \\frac{1}{2}mv^2 + \\frac{1}{2}I\\omega^2$$`,
        image: "images/OI_q2.png",
        audio: ""
      },
      3: {
        text: `Take torque about the instantaneous center of zero velocity (ICOR).`,
        image: "",
        audio: "audio/OI_q3.mp3"
      }
      // Fill hints up to question 26 as needed
    }
  },

  // Future exercise template (uncomment and populate when ready)
  /*
  "Exercise S": {
    totalQuestions: 15,
    hints: {
      1: {
        text: `Subjective hint for Q1...`,
        image: "",
        audio: ""
      }
    }
  }
  */
};
