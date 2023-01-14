import { React } from 'react'
import { Stack } from '@mui/system';
import { categories } from '../utils/constants';

const Sidebar = ({selectedCategory, setSelectedCategory}) => {
  return (
    <Stack
        direction = 'row' //
        sx = {{ overflowY: 'auto',
            height: {sx: 'auto', md:'95%'},
            flexDirection: {md: 'column'},}}
    >
        {categories.map((category) => (
            <button //if u r adding css props, using default html components is better.
                onClick={() => {setSelectedCategory(category.name)}}
                className="category-btn"
                style={{ borderRadius:20,
                    color: 'white',
                    margin: {sx: 2, md: 0},
                    background: category.name === selectedCategory && '#fc1503',
                    justifyContent: 'flex-start',
                    pl: 2, mb: 1}}
                key={category.name}
            >
                <span style = {{ color: category.name === selectedCategory ? 'white': 'red', 
                                marginRight:'15px',
                                paddingTop: '5px' }}
                >
                    {category.icon}
                </span>
                <span style = {{ opacity: category.name === selectedCategory ? '1' : '0.6'

                }}>{category.name}</span>
            </button>
        ))}
    </Stack>
  )
}

export default Sidebar