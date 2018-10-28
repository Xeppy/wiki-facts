import React, {Fragment} from 'react'

export default function Header(props) {
	return (
		<Fragment>
			<h1>{props.children}</h1>
			<hr />
		</Fragment>
		)
}