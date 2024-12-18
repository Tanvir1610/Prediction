import { connectToDatabase } from '../../lib/mongodb';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { db } = await connectToDatabase();
    const prediction = 'Leaf Spot'; // Replace with AI prediction logic

    await db.collection('predictions').insertOne({
      image: req.body.image, // Add logic to save the image
      prediction,
      timestamp: new Date(),
    });

    return res.status(200).json({ prediction });
  }
  res.status(405).json({ error: 'Method not allowed' });
}
