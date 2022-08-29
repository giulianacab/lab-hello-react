import firstIcon from "../images/icon1.png";
import secondIcon from "../images/icon2.png";
import thirdIcon from "../images/icon3.png";
import fourthIcon from "../images/icon4.png";
import style from "../components/Items.module.css"

export default function Items() {
  return (

    <div className="content">

      <div>
        <img
            className="icon"
            src={firstIcon}
            alt="First Icon"
        />

        <h3>
            Declarative
        </h3>

        <p className="text">
            React makes it painless to create interactive UIs.
        </p>
      </div>




      <div>
        <img
            className="icon"
            src={secondIcon}
            alt="Second Icon"
        />

        <h3>
            Components
        </h3>

        <p className="text">
            Build encapsulated components that manage their state
        </p>
      </div>





      <div>
        <img
            className="icon"
            src={thirdIcon}
            alt="Third Icon"
        />
        
        <h3>
            Single-Way
        </h3>

        <p className="text">
            A set of immutable values are passed to the components
        </p>
      </div>





      <div>
        <img
            className="icon"
            src={fourthIcon}
            alt="Fourth Icon"
        />

        <h3>
            JSX
        </h3>

        <p className="text">
            Statically-typed, designed to run on modern browsers
        </p>
      </div>




    </div>
  );
}