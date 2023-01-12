import { React } from 'react'
import { Stack } from '@mui/system';
import { categories } from '../utils/constants';
import { Button } from '@mui/material';

const selectedCategory = 'New';

const Sidebar = () => {
  return (
    <Stack
        direction = 'row' //
        sx = {{ overflowY: 'auto',
            height: {sx: 'auto', md:'95%'},
            flexDirection: {md: 'column'},}}
    >
        {categories.map((category) => (
            <Button
                className="category-btn"
                sx={{ borderRadius:20,
                    color: 'white',
                    background: category.name === selectedCategory &&'#fc1503',
                    justifyContent: 'flex-start',
                    pl: 2}}
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
            </Button>
        ))}
    </Stack>
  )
}

export default Sidebar