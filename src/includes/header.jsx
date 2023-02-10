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
              <span class="logo">Карими Хурматулла</span>
            </div>
            <nav id="navbar-1" class="navbar item-nav">
              <ul>
                <li class="active">
                  <a href="#about">O</a>
                </li>
                <li>
                  <a href="#experiences">Опыт</a>
                </li>
                <li>
                  <a href="#projects">Проекты</a>
                </li>
                <li>
                  <a href="#skills">Навыки</a>
                </li>
              </ul>
            </nav>
          </header>
        </div>
      </div>
    );
  };
  
  export default Header;
  