const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes/productRoutes');
const reviewRoutes = require('./routes/reviewRoutes');

const app = express();

mongoose.connect("mongodb+srv://rasika0931:rasika123@cluster0.ke5obbg.mongodb.net/?retryWrites=true&w=majority")
.then(() =>{
    console.log('connected to mongoos')
    app.listen(5000,()=>{
        console.log(`node api app is running on port ${PORT}`)
    })
    
}).catch(() =>{
    console.log(error)
})



app.use(express.json());

app.use('/api/products', productRoutes);
app.use('/api/products/:productId/reviews', reviewRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



