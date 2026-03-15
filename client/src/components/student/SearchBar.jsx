import { assets } from '@/assets/assets'
import React , {useState ,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

const SearchBar = ({data}) => {
  const navigate = useNavigate()
  const [input, setInput] = useState(data ? data : '')
  useEffect(() => {
    setInput(data ? data : '')
  }, [data])

  const onSearchHandler = (e) =>{
    e.preventDefault()
    navigate('/course-list/' + input)
  }
  return (
    <form onSubmit={onSearchHandler}className='max-w-xl w-full md:h-14 h-12 flex items-center bg-white border border-gray-500/20 rounded-2xl px-2'>
      <img src={assets.search_icon} alt="search_icon" className='md:w-auto w-10 px-3' />
      <input onChange={e => setInput(e.target.value)} value={input} type="text" placeholder='Search for courses' className='w-full h-full outline-none text-gray-500/80 rounded-full '/>
      <button type='submit' className='bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-2 rounded-2xl cursor-pointer'>Search</button>
    </form>
  )
}

export default SearchBar