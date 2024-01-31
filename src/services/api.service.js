import ApiService from "./http-common"

export async function saveInputData(data){
    const res = await ApiService.post('/upload', data, {
        headers: {
            'Content-Type': 'multipart/form-data' 
        }
    });
    return res.data;
}

export async function getInputData(){
    const res = await ApiService.get('/upload');
    return res.data;
}