# Unexpected Behavior with Negative Zero in JavaScript Comparison

This repository demonstrates a common JavaScript bug related to the handling of negative zero (-0) during comparisons.  The loose comparison (`===`) does not distinguish between 0 and -0, leading to potential unexpected results and errors in calculations.

The `bug.js` file contains the buggy code.  The `bugSolution.js` file provides the corrected version, demonstrating how to handle negative zero appropriately.

## How to Reproduce

1. Clone this repository.
2. Open `bug.js` and run the `myFunction` with different inputs, including negative zero.
3. Observe the unexpected behavior when negative zero is involved.
4. Compare the results with the corrected version in `bugSolution.js`.