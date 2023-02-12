const Header = () => {
    return (
      <div class="main-nav">
        <div class="container">
          <header class="group top-nav">
            <div
              class="navigation-toggle"
              data-tools="navigation-toggle"
              data-target="#navbar-1"
            >
              <span class="logo">Hurmatullah Karimi</span>
            </div>
            <nav id="navbar-1" class="navbar item-nav">
              <ul>
                <li class="active">
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#experiences">Experience</a>
                </li>
                <li>
                  <a href="#projects">Projects</a>
                </li>
                <li>
                  <a href="#skills">Skills</a>
                </li>
              </ul>
            </nav>
          </header>
        </div>
      </div>
    );
  };
  
  export default Header;
  