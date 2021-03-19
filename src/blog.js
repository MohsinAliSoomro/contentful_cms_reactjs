import React, { useEffect, useState } from 'react';
import { client } from './client';
function Blog({ id }) {
    const [post, setPost] = useState({ title: "", description: "", img: "" });
	useEffect(
		() => {
			client
				.getEntry(id)
				.then((entry) => {
                    setPost({
                        title: entry.fields.title,
                        description: entry.fields.description,
                        img:entry.fields.featureImage.fields.file.url
                    });
				})
				.catch((er) => console.log(er));
		},
		[ id ]
	);
	if (post.title === "") {
		return<div style={{ border: '1px solid #cfcfcf', padding: '15px', backgroundColor: 'white',margin:"5px" }}>Please select the blog to preview</div>
	}
	return (
		<div style={{ border: '1px solid #cfcfcf', padding: '15px', backgroundColor: 'white',margin:"5px" }}>
			 <h1>{post.title && post.title}</h1> 
			<img
				style={{width:"100%", border: '1px solid #cfcfcf' }}
				
				src={post.img && post.img}
				alt={post.img && post.img}
			/>
			<p style={{ fontSize: '20px', color: 'gray' }}>{post.description && post.description}</p> 
		</div>
	);
}

export default Blog;
