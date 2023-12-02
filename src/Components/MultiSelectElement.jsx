// eslint-disable-next-line react/prop-types
export default function MultiSelectElement({ img, text, context }) {
  return (
    <button className="flex items-center w-[300px] p-2 bg-white shadow-md rounded-xl multiSelect">
      {context ? (
        <div className="bg-salmon bg-opacity-10 mr-6 rounded-lg">
          <img src={img} alt="icon" className="p-1 w-10 h-10" />
        </div>
      ) : (
        <div className="bg-gray bg-opacity-10 mr-6 rounded-lg iconnic">
          <span className="font-bold text-gray uppercase block h-10 w-10 py-1.5">a</span>
        </div>
      )}
      <span className="text-dark-gray font-bold block py-3">{text}</span>
    </button>
  );
}
