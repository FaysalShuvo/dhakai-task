// styles
import "./Header.css";

const Header = () => {
  return (
    <>
      <nav className="nav-bar">
        <ul className="d-flex justify-content-around  align-items-center">
          <li>Explore - Activity</li>
          <li>
            <div class="form-group has-search">
              <span class="fa fa-search form-control-feedback"></span>
              <input type="text" class="form-control" placeholder="Search" />
            </div>
          </li>
          <li>Icons </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
