import { NextResponse } from "next/server";

const { MongoClient } = require("mongodb");



// Replace the uri string with your connection string.
const uri = "mongodb+srv://hello:ByrNbaGzpI7LxyEz@cluster0.1aq9urs.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);
  try {
    const database = client.db('temp');
    const movies = database.collection('one');

    // Query for a movie that has the title 'Back to the Future'
    const query = {  };
    const movie = await movies.find(query).toArray();
    console.log(movie);
    // return NextResponse.json({"a": 34, movie});
  }
  // catch(error){
  //   console.log("Error connecting to database");
  // }
  finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }

  export async function GET(request){
    return NextResponse.json({"a":34})
}

export async function POST(request){
  let body = await request.json()
  console.log(body)
  const uri = "mongodb+srv://hello:ByrNbaGzpI7LxyEz@cluster0.1aq9urs.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);
  try {
    const database = client.db('temp');
    const movies = database.collection('one');

    // Query for a movie that has the title 'Back to the Future'
    const query = {  };
    const movie = await movies.find(query).toArray();
    console.log(movie);
    // return NextResponse.json({"a": 34, movie});
  }
  // catch(error){
  //   console.log("Error connecting to database");
  // }
  finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}