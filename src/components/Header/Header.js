import React from "react";

function Header() {

  const date = new Date();


 
  

  let months =['январь','февраль','март',
  'апрель','май','июнь','июль','август','сентябрь','октябрь','ноябрь','декабрь']

let days = ['понидельник','вторник','среда','четверг','пятница','субота','воскресение']
  
return (
    <header>
      <div className="container">
        <h1 className="header__title">ToDo</h1>
        <div className="header__data">
          <p className="header__day"> {date.getDate()} {months[date.getMonth()]} {date.getFullYear()} год <span className="time"> {date.getHours()}:{date.getMinutes()}</span></p>
          <p className="header__weak">{days[date.getDay()-1]}</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
