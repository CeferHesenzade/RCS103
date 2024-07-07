const router = require("express").Router()
const fs = require("fs");

const readData = ()=>{
    return JSON.parse(fs.readFileSync("./data/favorites.json"));
}
const writeData = (data)=>{
    fs.writeFileSync("./data/favorites.json", JSON.stringify(data));
}


router.get("/", (req, res)=>{
    const products = readData();
    res.render("favorites", {products})
})

router.delete("/:id", (req, res)=>{
    const products = readData();
    const index = products.findIndex(p => p.id == req.params.id)
    if(index !== -1){
        const deletedProduct = products.splice(index, 1)
        writeData(products)
        res.json(deletedProduct);
    }
    else{
        res.status(404).json({message: "Product not found"})
    }
})

module.exports = router;