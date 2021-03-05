
import './App.css';
const Names = ['abc','def','ghi','jkl',999,666,888,'bdgp'];
function person(){
  return(
    <div className="go">
    <h3>Kazi Rayhan</h3>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, impedit cupiditate.</p>
    <a href="#">Home</a>

    <Name name="Rayhan"></Name>
    <Name name="Rayhan"></Name>
    <Name name="Rayhan"></Name>
    <Product></Product>
    <Product></Product>
    <Product></Product>

<ul>
{
  Names.map(name =><li>{name}</li>)
}
</ul>

    </div>
  );
}

function Name(props) {
  return(
    <div className="color">
    <h3>Name is : {props.name}</h3>
    <p>Lorem, ipsum.</p>
    </div>
  );
};

function Product() {
  const styleForProduct ={
    border: '1px solid tomato',
    borderRadius:'10px',
    height: '320px',
    width: '300px',
    margin: '0 auto',
    overFlow: 'hidden',
    marginTop: '20px'
  }
  return(
    <div style={styleForProduct}>
    <h3>Photoshop</h3>
    <h2>Us $120 / Monthly</h2>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus, hic deleniti.</p>
    <h4>Lorem ipsum dolor sit.</h4>
    <button>Buy Now</button>
    </div>
  );
};



export default person;