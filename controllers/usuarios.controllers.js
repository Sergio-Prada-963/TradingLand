const getUsers = (req,res)=>{res.json({"messaje":"get api"})}
const postUsers = (req,res)=>{res.json({"messaje":"post api"})}
const deleteUsers = (req,res)=>{res.json({"messaje":"delete api"})}
const patchUsers = (req,res)=>{res.json({"messaje":"update api"})}
const putUsers = (req,res)=>{res.json({"messaje":"put api"})}

module.exports = {
    getUsers,
    postUsers,
    deleteUsers,
    patchUsers,
    putUsers
}