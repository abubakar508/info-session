import React from 'react'

const BackgroundAnimation = ({ children} : {
    children: React.ReactNode
}) => {
  return (
    <div className="area">
			<ul className="circles">
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</ul>
            {children}
		</div>
  )
}

export default BackgroundAnimation
