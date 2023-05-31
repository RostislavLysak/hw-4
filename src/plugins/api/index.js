const API = `https://jsonplaceholder.typicode.com`;

export const controller = async (path, method = "GET", obj) => {

    const options = {
        method: method,
        headers: {
            "content-type": "application/json"
        }
    }

    if (obj) {
        options.body = JSON.stringify(obj);
    }

    try {
        let request = await fetch(API + path, options),
            response = await request.json();

        return response;
    } catch (err) {
        console.log(err);
        return [];
    }
}


export const createUser = (obj) => { return controller(`/users`, 'POST', obj) }
