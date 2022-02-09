import { ChatbubbleEllipses, Notifications } from "react-ionicons";
// styles
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="header">
        <nav className="nav-bar">
          <ul className="d-flex justify-content-around  align-items-center">
            <li className="d-flex  rounded-pill explore-act">
              <p className="explore rounded-pill px-2 py-1">Explore</p>
              <p className="px-2 py-1">Activity</p>
            </li>
            <li>
              <div className="form-group has-search">
                <span className="fa fa-search form-control-feedback"></span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search by type,group and other..."
                />
              </div>
            </li>
            <li className="d-flex">
              <div className="icons">
                <ChatbubbleEllipses color={"#fff"} height="24px" width="24px" />
              </div>
              <div className="icons">
                <Notifications color={"#fff"} height="24px" width="24px" />
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
