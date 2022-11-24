import React, { useState } from "react";

const [keyword,setKeyword] = useState('');
const Search = (props) => {
    return <form>
        <>
<p style={{color:"red"}}><em>{keyword && 'Keywords Typed: ' + keyword}</em></p>
<input type="text" value={keyword} onChange={(e)=>setKeyword(e.target.value)} />
<button onClick={this.handleButtonClicked.bind(this)}>
  Submit
</button>
</>
    </form>
}
export default Search;