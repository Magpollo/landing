const Close = ({ fill, className, onClick }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
      width="50px"
      height="50px"
      fill={fill || 'currentColor'}
      className={className}
      onClick={onClick}
    >
      {' '}
      <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M34.71,33.29l-1.42,1.42 L25,26.42l-8.29,8.29l-1.42-1.42L23.58,25l-8.29-8.29l1.42-1.42L25,23.58l8.29-8.29l1.42,1.42L26.42,25L34.71,33.29z" />
    </svg>
  );
};

export default Close;
