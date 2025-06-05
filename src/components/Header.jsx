
function Header (){
    const handleDownloadCV = () => {
        const link = document.createElement('a')
        link.href = '/cv_2025_angie_vela.pdf'
        link.download = 'cv_2025_angie_vela.pdf'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    return (
        <div className="header-container">
            <div className="header-content">
                <h1 className="header-h1">
                    <a href="https://gt.linkedin.com/">
                        Linkedin
                    </a>
                </h1>
                <h1 className="header-h1">
                    <a href="https://github.com/nadissa1508">
                        GitHub
                    </a>
                </h1>
                <button className="btn-cv" onClick={handleDownloadCV}>
                    Download CV
                </button>
            </div>
        </div>
    )
}

export default Header