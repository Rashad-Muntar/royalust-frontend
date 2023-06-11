import fetchData from "../utils/fetchData"

const getUserInfo = (id: number) => {
    const url = `http://localhost:4000/api/user/${id}`;
    try {
        const data = fetchData(url, {}, "GET");
        return data;
    }catch(error: any) {
        return error.message;
    }

}

export {getUserInfo};