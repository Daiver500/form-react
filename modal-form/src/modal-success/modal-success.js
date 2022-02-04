import { Component } from 'react';
import './modal-success.scss';

class SubmitSuccess extends Component {
  constructor(props) {
    super(props);
    this.state = {
        hidden: "false",
        classNames: "modal-success__inner"
      }
       this.title = "Заявка отправлена!";
       this.text = "Менеджер уже звонит, посмотрите на телефон."
    }
        
    render () {
        const {classNames} = this.state
                        
        return (
          <div className={classNames}>
            <div className="modal-success__title">
            <img className="modal-success__image" src="img/logo.png" alt="лого"/>
            <p className="modal-success__text">{this.title}</p>
            <p className="modal-success__text">{this.text}</p>
         </div>
         <button className="modal-success__close" type="button" aria-label="Закрыть модальное окно">
           <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path fillRule="evenodd" clipRule="evenodd"
             d="M0.146522 0.853553C-0.04874 0.658291 -0.04874 0.341709 0.146522 0.146447C0.341784 -0.0488155 0.658367 -0.0488156 0.853629 0.146447L8.27821 7.57103L15.7028 0.14645C15.8981 -0.0488124 16.2146 -0.0488125 16.4099 0.14645C16.6052 0.341712 16.6052 0.658294 16.4099 0.853556L8.98532 8.27814L16.41 15.7028C16.6052 15.8981 16.6052 16.2146 16.41 16.4099C16.2147 16.6052 15.8981 16.6052 15.7029 16.4099L8.27821 8.98525L0.853553 16.4099C0.658291 16.6052 0.341709 16.6052 0.146447 16.4099C-0.0488155 16.2146 -0.0488156 15.8981 0.146447 15.7028L7.57111 8.27814L0.146522 0.853553Z"
             fill="black" />
            </svg>
          </button>
         </div>
        )
    }
    
}

export default SubmitSuccess;