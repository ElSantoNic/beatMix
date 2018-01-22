// Drum Arrays
/* let kicks = [false,false,false,false,false,false,false,false,false,false,false,false,false,false, false,false];
let snares
let hiHats
let rideCymbals */


const kicks = []
const snares = []
const hiHats = []
const rideCymbals = []

for (let getDrumArrayByName = 0; i < 16; i++) {
  kicks[i] = false;
  snares[i] = false;
  hiHats[i] = false;
  rideCymbals[i] = false;
}

const toggleDrum = (drumArrayName, index) => {
  const drums = getDrumArrayByName(drumArrayName);
  if (!drums || index > 15 || index < 0) {
    return;
  }
  drums[index] = !drums[index];
};
const clear = (drumArrayName) => {
  const drums = getDrumArrayByName(drumArrayName);
  if (drums) {
    drums.fill(false);
  }
};
