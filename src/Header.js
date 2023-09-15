export default function Header() {
    return (
        <>
            <header className="navbar navbar-default navbar-expand-sm text-center navbar-static-top">
                <span className="navbar-brand mx-3" href="#">
                    <a className="nav-link" target="_self" onClick={() => reload('#about')}>
                        Dylan Conklin
                    </a>
                </span>
                <div className="navbar-collapse mx-3">
                    <ul className="navbar-nav me-auto"></ul>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" target="_self" onClick={() => reload('#about')}>
                                About
                            </a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Social Media
                            </a>
                            <ul className="dropdown-menu">
                                <li>
                                    <a className="dropdown-item" href="https://github.com/dylanconklin">
                                        GitHub
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="https://www.linkedin.com/in/dylan-conklin-152a07186/">
                                        LinkedIn
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="https://forms.gle/wAZ27RB7i295UK2K7" target="_blank">
                                        Contact Form
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="https://dylanconklin.youcanbook.me" target="_blank">
                                        Schedule Meeting
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" target="_self" onClick={() => reload('#experience')}>
                                Experience
                            </a>
                        </li>
                    </ul>
                </div>
            </header>
        </>
    )
}

function reload(destination) {
    window.location.hash = destination
    window.location.reload()
}