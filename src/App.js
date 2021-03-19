import { useEffect, useState } from 'react';
import './App.css';
import Blog from './blog';
import { client } from './client';
function App() {
  const [posts, setPosts] = useState([]);
  const [entryId,setEntryId] = useState('')
	useEffect(() => {
		client
			.getEntries()
			.then((entry) => {
				setPosts(entry);
			})
			.catch((er) => console.log(er));
	}, []);
	return (
		<div >
			<h1 style={{ textAlign:'center',border: '1px solid #cfcfcf', padding: '15px', backgroundColor: 'white',margin:"5px" }}>Contentful API Integration</h1>
			<div style={{ display: 'flex' }}>
        <div style={{ width: '50%' }}>
          <h2 style={{ border: '1px solid #cfcfcf', padding: '15px', backgroundColor: 'white',margin:"5px" }}>List of posts</h2>
					{posts.items &&
						posts.items.map((post) => {
							return (
                <div key={post.sys.id} style={{ border: '1px solid #cfcfcf', padding: '15px', backgroundColor: 'white',margin:"5px" }}>
                  <div style={{ display: 'flex',justifyContent:"space-between" }}>
                  <h3>{post.fields.title}</h3>
                    <button style={{
                      backgroundColor: "white",
                      borderRadius: "4px",
                      border: '1px solid #cfcfcf',
                      width: "100px",
                      height:"20px"
                    }} onClick={() => setEntryId(post.sys.id)}>View  Blog</button>
                  </div>
                 
									<img
										width="100%"
										src={post.fields.featureImage.fields.file.url}
										alt={post.fields.featureImage.fields.file.fileName}
                  />
                  
								</div>
							);
						})}
				</div>
        <div style={{ width: '50%' }}> <Blog id={entryId} /></div>
			</div>
		</div>
	);
}

export default App;
