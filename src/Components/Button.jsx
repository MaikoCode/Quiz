

// eslint-disable-next-line react/prop-types
export default function Button({text}) {
  return (
    <button className='bg-violet p-4 w-[300px] text-lg text-white font-bold rounded-2xl hover:opacity-50'>
        {text || 'Button idle'}
    </button>
  )
}
