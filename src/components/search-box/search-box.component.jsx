import './search-box.styles.css'

const SearchBox = ({ handleChange, placeholder }) => {
  return (
    <input
      className='search'
      type='search'
      onChange={handleChange}
      placeholder={placeholder}
    />
  )
}

export default SearchBox
