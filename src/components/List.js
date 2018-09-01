import React from 'react';

export default function List ({
	list=[],
	onClickItem,
}){
	return(
		<div className = "librariesList">
			{  }
			<ul>
				{
					list.length > 0 ?
						Object.keys(list).map( i => {
		                    return(
			                    <li data-index={i} key = {i} onClick = {onClickItem.bind(null, parseInt(i, 10))}>
			                    	{ list[i].name }
			                    </li>
			                )
		                })
		                	: 
		                	  'No libraries found!'
				}
			</ul>
		</div>
	)
}