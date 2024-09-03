export const Text = ({ text, fontSize, textAlign }) => {
  return <p style={{ fontSize: fontSize + "px", textAlign }}>{text}</p>;
};
