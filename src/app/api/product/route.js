import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
    // Replace the uri string with your connection string.
    const uri =
        'mongodb+srv://hello:ByrNbaGzpI7LxyEz@cluster0.1aq9urs.mongodb.net/?retryWrites=true&w=majority';
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        await client.connect();

        const database = client.db('temp');
        const products = database.collection('product');

        // Assuming the request body is an array of products
        const body = req.body;

        // Insert the array of products into the collection
        const result = await products.insertMany(body);

        console.log(`Inserted ${result.insertedCount} products`);

        res.status(200).json({ success: true, message: 'Products added successfully' });
    } catch (error) {
        console.error('Error connecting to database or inserting products:', error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    } finally {
        // Ensure that the client will close when you finish/error
        await client.close();
    }
}
