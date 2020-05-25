import React from 'react'

export default function Cocktails({ image, title }) {
	return (
		<div className="cocktailContainer">
			<h1 className="title">{title}</h1>
				<img src={image} alt="" width="100%"/>
		</div>
	)
}