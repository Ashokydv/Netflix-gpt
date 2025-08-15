const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video  pt-[20%] px-24 absolute text-white bg-gradiant-to-r from-black '>
        <h1 className='text-6xl font-bold'>{title}</h1>
        <p className='py-6 text-large w-1/4'>{overview}</p>
        <div className=''>
            <button className='bg-gray-500 text-black p-4 w-10 px-16 text-lx  rounded-lg hover-bg-opacity-80'>Play</button>
            <button className=' mx-2 bg-gray-500 text-black p-4 w-10 px-16 text-lx  rounded-lg'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle;