import Header from './Header'

const layoutStyle = {
	margin:20,
	padding:20,
	border:'1px solid #ddd'
}

const MainLayout = (props) => (
	<div style={layoutStyle}>
		<Header />
		{props.children}
	</div>
)

export default MainLayout