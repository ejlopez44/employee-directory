// going to put API axios get function here
import axios from "axios";

// consider supplying some params to this function to get it to return data in different ways. maybe?

export default {
    getEmployees: function () {
        return axios.get(
            "https://randomuser.me/api/?results=200"
        ).then(res => {
            const employees = res.data.results;
            return employees.map(employee => {
                return {
                    image: employee.picture.thumbnail,
                    name: `${employee.name.first} ${employee.name.last}`,
                    phone: employee.phone,
                    email: employee.email,
                    dob: employee.dob.date,
                }
            })
        });
    }
};
