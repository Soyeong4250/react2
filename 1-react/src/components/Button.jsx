const Button = ({ styleType, block, children }) => {
  let className = "Button";
  if (styleType) className += ` ${styleType}`;
  if (block) className += ` block`;

  return <button className={className}>{children}</button>;
};

export default Button;
