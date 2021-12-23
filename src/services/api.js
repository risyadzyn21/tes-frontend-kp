import axios from 'axios'

const token = 'wTPb3I47TnooWoJijkUw65YIhp72X3YrE5fA+c27mZcJzEka6Uxp2jTV3qMabKESnxpFnARAWFE8NN79qcf3Dw=='

export const getProfileAPI = () => {
  return axios({
    method: "GET",
    url: "https://staging-satrio.kelaspintar.co.id/lpt-api/api/file",
    headers: {
      Authorization: `${token}`,
      "Content-Type": "application/json",
    },
  });
};