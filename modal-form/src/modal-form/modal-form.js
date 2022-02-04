import { Component } from 'react';
import './modal-form.scss';
import "../index.scss";

class EmployeesAddForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
        name: "",
        salary: ""
      }
    }

    onValueChange = (evt) => {
      this.setState({
        [evt.target.name]: evt.target.value,          
      })
    }

    onSubmit = (evt) => {
      evt.preventDefault();
      if (this.state.name.length < 3 || !this.state.salary) return;
      this.props.addItem(this.state.name, this.state.salary);
      this.setState({
          name: '',
          salary: ''
      })
  }

  static test = () => {              
    console.log("Hello")
  }

  static logged = "on"

    render () {
        const {name,salary} = this.state
        return (
        <div className="app-employees-add-form">
            <h3>Добавьте нового сотрудника</h3>
            <form
         
                className="add-form d-flex">
                <input type="text"
                    className="form-control new-post-label"
                    placeholder="Как его зовут?" 
                    name="name"
                    value={name}                              
                    />
                <input type="number"
                    className="form-control new-post-label"
                    placeholder="З/П в $?"
                    name="salary"
                    value={salary}
                     />

                <button type="submit"
                        className="btn btn-outline-light"
                        >Добавить</button>
            </form>
        </div>
        )
    }
    
}


export default EmployeesAddForm;

