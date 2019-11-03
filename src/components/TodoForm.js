import React, { Component } from 'react';

class TodoForm extends Component {
  constructor () {
    super();
    this.state = {
      carnet: '',
      schedule: 'Lunes de 9:00 a 11.00'
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onAddTodo(this.state);
    this.setState({
      carnet: '',
      schedule: 'Lunes de 9:00 a 11.00'
    });
  }

  handleInputChange(e) {
    const {value, name} = e.target;
    console.log(value, name);
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className="card">
        <form onSubmit={this.handleSubmit} className="card-body">
          <div className="form-group">
            <input
              type="text"
              name="carnet"
              label="Ingrese el Carnet"
              className="form-control"
              value={this.state.carnet}
              onChange={this.handleInputChange}
              placeholder="Ingrese Carnet"
              />
          </div>
          <div className="form-group">
            <select
                name="schedule"
                label="Seleccione un horario"
                className="form-control"
                value={this.state.schedule}
                onChange={this.handleInputChange}
              >
              <option>Lunes de 9:00 a 11.00</option>
              <option>Martes de 13:30 a 15:30</option>
              <option>Miércoles de 9:00 a 11.00</option>
              <option>Jueves de 13:30 a 15:30</option>
              <option>Viernes de 9:00 a 11.00</option>
              <option>Viernes de 15:30 a 17:30</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Ingresar
          </button>
        </form>
      </div>
    )
  }

}

export default TodoForm;
