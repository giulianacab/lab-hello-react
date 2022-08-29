import style from "../components/Principal.module.css";

function Principal() {
  return (
    <div className="principalBlock">

        <h1>
            Say hello to ReactJS
        </h1>

        <p className="description">
            You will learn how to use the most popular frontend library, and become a super Ninja developer.
        </p>

        <button id="textButton">
            Awesome!
        </button>

    </div>
  );
}

export default Principal;