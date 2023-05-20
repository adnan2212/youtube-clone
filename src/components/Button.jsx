const Button = ({ name }) => {
  return (
    <div>
      <button className="m-4 rounded-lg bg-gray-200 px-5 py-2 hover:bg-slate-300">
        {name}
      </button>
    </div>
  );
};

export default Button;
