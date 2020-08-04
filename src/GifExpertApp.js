import React, { useState } from 'react';
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';


const GifExpertApp =() => {

    const [categories, setcategories] = useState(['One Punch']);



    return (<>

        <h2>GifExpertApp</h2>
        <AddCategory setCategories={setcategories}/>
        <hr />

        <ul>
            {
                categories.map(category =>
                <GifGrid 
                key={category}
                category={category} />
                )
            }
        </ul> 

    </>)
}
export default GifExpertApp;