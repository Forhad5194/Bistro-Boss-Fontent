
export const axiosSceure = axios.create({
    baseURL: 'http://localhost:5000'
})
const useAxios = () => {
    return axiosSceure
};

export default useAxios;