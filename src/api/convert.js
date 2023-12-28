import axios from 'axios';

export async function markdownConvert(data){
    return await axios.post('/',{content: data}).then(res=> res.data)
}