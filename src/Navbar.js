function reload(destination) {
    window.location.hash = destination
    window.location.reload()
}

function SocialMediaLink({ icon, link }) {
    return (
        <>
            <div className="col">
                <a className="m-4" aria-hidden="true" href={link} target="_blank" rel="noreferrer">
                    <i className={icon}></i>
                </a>
            </div>
        </>
    )
}

function Header() {
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
                        <li className="nav-item">
                            <a className="nav-link" target="_self" onClick={() => reload('#experience')}>
                                Experience
                            </a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Social Media
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end">
                                <li>
                                    <a className="dropdown-item" href="https://github.com/dylanconklin" target="_blank">
                                        GitHub
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="https://www.linkedin.com/in/dylan-conklin-152a07186/" target="_blank">
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
                    </ul>
                </div>
            </header>
        </>
    )
}

function Footer() {
    return (
        <>
            <footer className="navbar navbar-default navbar-expand-md text-center justify-content-center mt-0 p-0">
                <div className="row px-5 py-3">
                    <SocialMediaLink
                        icon="fa-brands fa-github fa-2x"
                        link="https://github.com/dylanconklin"
                    />
                    <SocialMediaLink
                        icon="fa-brands fa-linkedin-in fa-2x"
                        link="https://www.linkedin.com/in/dylan-conklin-152a07186/"
                    />
                    <SocialMediaLink
                        icon="fa-regular fa-envelope fa-2x"
                        link="https://forms.gle/wAZ27RB7i295UK2K7"
                    />
                    <SocialMediaLink
                        icon="fa-regular fa-calendar fa-2x"
                        link="https://dylanconklin.youcanbook.me/"
                    />
                </div>
            </footer>
        </>
    )
}

export { Footer };
export { Header };
export { SocialMediaLink };