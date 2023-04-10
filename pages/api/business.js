
import data from './data';
//api/bussiness
export default function handler(req,res) {
    const {Business}= data;
    if(Business)return res.status(200).json(Business);
    return res.status(404).json({error:"Data not Found"})
}
