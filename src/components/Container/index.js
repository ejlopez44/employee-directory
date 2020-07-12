import React, { Component } from "react";
import API from '../../utils/API';
import SearchHeader from '../SearchHeader';
import TableHeader from '../TableHeader';
import TableResults from '../TableResults';
import './style.css'

class Container extends Component {
  // temporary idea for state of table
  state = {
    employees: [],
    search: "",
    sort: true,
    filtered: [],
  };

  componentDidMount() {
    // make it immediately get all the employees
    this.setEmployees()
  }

  setEmployees = async () => {
    await API.getEmployees()
      .then(employees => {
        this.setState({ employees, filtered: employees })
      })
      .catch(err => console.log(err));
    console.log(this.state.employees)
  }

  // Need a function to handle search filtering
  handleInputChange = event => {
    event.preventDefault();
    this.setState({ search: event.target.value.toLowerCase() }, (set) => {
      let criteria = this.state.search
      let searchResults = this.state.employees.filter(employee => employee.firstName.toLowerCase().startsWith(criteria) || employee.lastName.toLowerCase().startsWith(criteria))
      return this.setState({ filtered: searchResults })
    });
  };

  // Prevent searchbar from allowing refresh
  ignoreSubmit = event => {
    event.preventDefault();
    return
  }

  sortTable = async (sortBy) => {
    const criteria = sortBy
    // comparison function because basic sort didn't allow parameters, though it might now that criteria is defined
    const compare = (a, b) => {
      const employeeA = a[criteria].toUpperCase();
      const employeeB = b[criteria].toUpperCase();
      let comparison = 0;
      if (this.state.sort) {
        if (employeeA > employeeB) {
          comparison = 1;
        } else if (employeeA < employeeB) {
          comparison = -1;
        }
        return comparison;
      } else {
        if (employeeA > employeeB) {
          comparison = -1;
        } else if (employeeA < employeeB) {
          comparison = 1;
        }
        return comparison;
      }
    }
    const sortedUsers = this.state.filtered.sort(compare);
    this.setState({ sort: !this.state.sort, filtered: sortedUsers })
  }

  // Need a function that can be attached to each table header name, sorts the array DESC, if clicked again, sorts in reverse

  render() {
    return (
      <div className="container">
        <SearchHeader handleInputChange={this.handleInputChange} ignoreSubmit={this.ignoreSubmit} />
        <table className="table" >
          <TableHeader sortTable={this.sortTable} />
          <TableResults results={this.state.filtered} />
        </table>
      </div >
    );
  }
}
export default Container;
