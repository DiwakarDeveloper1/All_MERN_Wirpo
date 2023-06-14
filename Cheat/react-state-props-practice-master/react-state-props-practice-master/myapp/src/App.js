import Header from "./Header/Header";
import logo from './images/name.jfif';

function App() {
  const achievements = [
    {
      title: "Summary",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit."
    },
    {
      title: "Experience",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit."
    },
    {
      title: "Contact",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit."
    }
  ];

  return (
    <div className="container">
      <div className="row one">
        <div className="col-12 col-sm-5 "><img classname="new" src={logo} alt="logo" height="250px" width="460px" /></div>
        <div className="col-12 col-sm-7 text"><h1 className="text1">Jhon Deo</h1></div>
      </div>
        {
          achievements.map(item => <Header title={item.title} description={item.description} />)
        }
    </div>

  )
}

export default App;
