import Link from 'next/link'

const linkStyle = {
    marginRight:15,
}

const Header =() => (
    <div>
        <Link href="/index">
            <a style={linkStyle}>Index Page</a>
        </Link>
        <Link href="/about">
            <a style={linkStyle}>About Page</a>
        </Link>
    </div>
)

export default Header