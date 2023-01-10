export const fetchData = async param => {
    return await axios.get(param)
    .then(response => response?.data)
    .catch(error => {});
}
