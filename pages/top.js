function Top() {
    return (
        <div>
            <div className="app-header app-header-add navbar">
                <a className="navbar-brand" href="#" />
                        <ul className="nav navbar-nav d-md-down-none">
                            <li className="nav-item px-3">
                                <a className="nav-link" href="#">Home</a>
                            </li>
                            <li className="nav-item px-3">
                                <a className="nav-link" href="#">Card</a>
                            </li>
                            <li className="nav-item px-3">
                                <a className="nav-link" href="#">Loan</a>
                            </li>
                        </ul>
                        <ul className="nav navbar-nav ml-auto">
                            <li><a className="nav-link" href="#">Logout</a></li>
                            <li>&nbsp;&nbsp;</li>
                        </ul>


</div>
            <style jsx>{`
                .app-header {
                    position: fixed;
                    top: 0;
                    width: 100%;
                }
                `}
            </style>
        </div>
    )
}

export default Top;