import { Component } from 'react';
import logo from "../img/logo.png"
import './modal-form.scss';
class SubmitForm extends Component {
  constructor(props) {
    super(props);
      this.state = {
        name: "",
        phone: "",
        email: "",
        data: [],
        classNames: "modal__inner",
        classNamesSuccess: "modal__inner hidden",
        button: "main__button hidden",
        hidden: false
      }
      this.maxId = 4;
      this.title = "Заявка отправлена!"
      this.text = "Менеджер уже звонит, посмотрите на телефон."
    }

      onValueChange = (evt) => {
        this.setState({
          [evt.target.name]: evt.target.value,         
        })
      }
 
      addItem = (name, phone, email) => {    
      const newPerson = {
         name,
         phone,
         email,
         id: this.maxId++
      }
      this.setState(({data}) => {    
        const newArray = [...data, newPerson]
        console.log(newArray)
        return {
          data: newArray
        }
      })
      
   }

   onSubmit = (evt) => {
      evt.preventDefault();
      if (this.state.name.length < 3 || !this.state.phone) return;
      this.addItem(this.state.name, this.state.phone, this.state.email);
      this.setState({
          name: "",
          phone: "",
          email: "",
          classNames:  "modal__inner hidden",
          classNamesSuccess:  "modal__inner",
          hidden: true
      })
    }

    openModal = () => {
      this.setState({
        classNames:  "modal__inner",
        button: "main__button hidden",
      })
    }

    modalCloseButtonClick = () => {
      this.setState({
        classNames:  "modal__inner hidden",
        classNamesSuccess:  "modal__inner hidden",
        button: "main__button",
        hidden: true
    })
    }

    successModalClose = () => {
      this.setState({
        classNames:  "modal__inner",
        classNamesSuccess:  "modal__inner hidden",
      })
    }

    render () {
        const {name, phone, email, classNames, classNamesSuccess, button} = this.state
        const {hidden} = this.state
                                       
        return (
          <div>
              <div className="main__inner container">
                <button className={button} onClick={this.openModal} type="button">Заказать звонок</button>
              </div>

          <div className={classNames} hidden={hidden}>
            <form className="modal__form" action="https://echo.htmlacademy.ru/" method="post"  onSubmit = {this.onSubmit}>
              <div className="modal__data">
                <button className="modal__close" type="button" aria-label="Закрыть модальное окно" onClick={this.modalCloseButtonClick}>
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd"
                d="M0.146522 0.853553C-0.04874 0.658291 -0.04874 0.341709 0.146522 0.146447C0.341784 -0.0488155 0.658367 -0.0488156 0.853629 0.146447L8.27821 7.57103L15.7028 0.14645C15.8981 -0.0488124 16.2146 -0.0488125 16.4099 0.14645C16.6052 0.341712 16.6052 0.658294 16.4099 0.853556L8.98532 8.27814L16.41 15.7028C16.6052 15.8981 16.6052 16.2146 16.41 16.4099C16.2147 16.6052 15.8981 16.6052 15.7029 16.4099L8.27821 8.98525L0.853553 16.4099C0.658291 16.6052 0.341709 16.6052 0.146447 16.4099C-0.0488155 16.2146 -0.0488156 15.8981 0.146447 15.7028L7.57111 8.27814L0.146522 0.853553Z"
                fill="black" />
                </svg>
                </button>
              <h2 className="modal__header">Закажите звонок</h2>
              <label className="modal__label"> <span className="visually-hidden">Имя</span>
                <input className="modal__name"  type="text" id="name" name="name" placeholder="Имя*" required value={name}  onChange={this.onValueChange}/>
              </label>
              <label className="modal__label"> <span className="visually-hidden">Телефон</span>
                <input className="modal__phone" type="number" name="phone" id="phone" placeholder="Номер телефона*" required value={phone}  onChange={this.onValueChange}/>
              </label>
              <label className="modal__label"> <span className="visually-hidden">Электронная почта</span>
                <input className="modal__mail" type="mail" name="email" id="email" placeholder="Электронная почта"  value={email}  onChange={this.onValueChange}/>
              </label>
              <button className="modal__button" type="submit">Начать работу</button>
              <div className="modal__information">
                <p className="modal__text">Нажимая кнопку "Отправить", я даю условие на обработку персональных данных.<a
                target="__blank" className="modal__link" href="../form__sber/test.docx" download="">Условия использования
                данных.</a></p>
              </div>
              </div>
            </form>
         </div>

         <div className={classNamesSuccess} hidden={hidden}>
            <div className="modal-success__title">
            <img className="modal-success__image" src={logo} alt="лого"/>
            <p className="modal-success__text">{this.title}</p>
            <p className="modal-success__text">{this.text}</p>
         </div>
         <button className="modal-success__close" type="button" aria-label="Закрыть модальное окно" onClick={this.successModalClose}>
           <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path fillRule="evenodd" clipRule="evenodd"
             d="M0.146522 0.853553C-0.04874 0.658291 -0.04874 0.341709 0.146522 0.146447C0.341784 -0.0488155 0.658367 -0.0488156 0.853629 0.146447L8.27821 7.57103L15.7028 0.14645C15.8981 -0.0488124 16.2146 -0.0488125 16.4099 0.14645C16.6052 0.341712 16.6052 0.658294 16.4099 0.853556L8.98532 8.27814L16.41 15.7028C16.6052 15.8981 16.6052 16.2146 16.41 16.4099C16.2147 16.6052 15.8981 16.6052 15.7029 16.4099L8.27821 8.98525L0.853553 16.4099C0.658291 16.6052 0.341709 16.6052 0.146447 16.4099C-0.0488155 16.2146 -0.0488156 15.8981 0.146447 15.7028L7.57111 8.27814L0.146522 0.853553Z"
             fill="black" />
            </svg>
          </button>
         </div>

         </div>
         
        )

    }

}

export default SubmitForm;


