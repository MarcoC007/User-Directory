import axios from "axios";

//Exporting user with a "search" method.

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    search: function () {
        return axios.get('https://randomuser.me/api/?results=40&nat=us');
    }
};