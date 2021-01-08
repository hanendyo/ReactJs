const { func } = require("prop-types");

const e = React.createElement;

function LikeButton(){
    //cara biasa
    return e(
        'button',
        { onClick: () => alert('Button Works') },  //-->this.setState({ liked: true })
        'Like'
      );

    // cara jsx
    return (
        <button onClick={() => alert('Button Works')}>
          Like
        </button>
      );
}


const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);