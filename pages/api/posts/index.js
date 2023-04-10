
import data from "../data";

export default function handler(req,res){
    const {Posts}= data;
    // muestra toda la data del post
    if(Posts)return res.status(200).json(Posts);
    
    return res.status(404).json({error:"Data not Found"})
}