import axios from "axios"

export const getPostsService = async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    return(response.data);
}

export const createPostService = (data) => {
    return axios({
        url: "https://jsonplaceholder.typicode.com/posts",
        method: "POST",
        data,
        headers: {
            "Content-Type" : "application/json; charset=UTF-8"
        }
    })
}

export const updatePostService = (data, id) => {
    return axios({
        url: `https://jsonplaceholder.typicode.com/posts/${id}`,
        method: "PUT",
        data,
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    })
}

export const deletePostService = (id) => {
    return axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
}