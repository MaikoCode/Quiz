// eslint-disable-next-line react/prop-types


export default function MultiSelectElement({ img, text, context }) {
  return (
    <button className="flex items-center w-full  p-2 bg-white shadow-md rounded-xl multiSelect dark:dark:bg-dark-blue-gray my-2">
      {context ? (
        <div className="bg-salmon bg-opacity-10 mr-6 rounded-lg">
          <img src={img} alt="icon" className="p-1 w-10 h-10" />
        </div>
      ) : (
        <div className="bg-gray dark:bg-white bg-opacity-10 mr-6 rounded-lg iconnic">
          <span className="font-bold text-gray dark:text-gray hover:text-violet uppercase block h-10 w-10 py-1.5">a</span>
        </div>

      )}
      <span className="text-dark-gray dark:text-white font-bold block py-3">{text}</span>
    </button>
  );
}
