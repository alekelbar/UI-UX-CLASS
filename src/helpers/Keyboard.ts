export let keyboardLayout = [
  [
    { value: "Q", pressed: false },
    { value: "W", pressed: false },
    { value: "E", pressed: false },
    { value: "R", pressed: false },
    { value: "T", pressed: false },
    { value: "Y", pressed: false },
    { value: "U", pressed: false },
    { value: "I", pressed: false },
    { value: "O", pressed: false },
    { value: "P", pressed: false },
  ],
  [
    { value: "A", pressed: false },
    { value: "S", pressed: false },
    { value: "D", pressed: false },
    { value: "F", pressed: false },
    { value: "G", pressed: false },
    { value: "H", pressed: false },
    { value: "J", pressed: false },
    { value: "K", pressed: false },
    { value: "L", pressed: false },
  ],
  [
    { value: "Z", pressed: false },
    { value: "X", pressed: false },
    { value: "C", pressed: false },
    { value: "V", pressed: false },
    { value: "B", pressed: false },
    { value: "N", pressed: false },
    { value: "M", pressed: false },
  ],
  [
    { value: "Space", pressed: false },
    { value: "Backspace", pressed: false },
  ],
];
// Backspace;

export const setPressed = (keyPressed: string, pressed: boolean) => {
  return (keyboardLayout = keyboardLayout.map((arr) => {
    return arr.map((key) => {
      if (keyPressed === key.value) return { ...key, pressed };
      return "Key" + key.value === keyPressed ? { ...key, pressed } : key;
    });
  }));
};
