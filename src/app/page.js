// src/app/page.js
import { connectDB } from '../lib/db';

export default async function Home() {
  await connectDB();
  return (
    <div className="min-h-screen flex items-center justify-center">
      <h1 className="text-3xl font-bold">مرحبًا بيك في المتجر!</h1>
    </div>
  );
}