// data.js - Multi-Exercise Physics Hints Data

const exercisesData = {
  "Exercise O-I": {
    totalQuestions: 26,
    hints: {
      // Add this entry inside your exercise hints object (replace question number as needed):

      1: {
        text: `Use the fundamental definition of angular velocity:
        $$\\omega = \\frac{\\Delta\\theta}{\\Delta t}$$
One complete rotation corresponds to $$\\Delta\\theta = 2\\pi$$ RPM= revolution per minute`,
        image: "",
        audio: ""
},
      2: {
        text: `Use 3rd equation of motion for circular kinematics. Take care to convert the angle in radian. One
        rotation is $2\\pi$ radian`,
        image: "",
        audio: ""
      },
      3: {
        text: `Angular velocity for a rigid body is same at all the points. Linear velocity is different for 
        different radial distances`,
        image: "",
        audio: ""
      },
      5: {
        text: `Use differentiation of angle wrt time. Note that the given function is in terms of theta instead of 
        time. Hence take care to apply variable change or chain rule`,
        image: "",
        audio: ""
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
