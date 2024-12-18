import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <header>
        <h1>AI-Driven Crop Disease Prediction</h1>
        <nav>
          <Link href="/predict">Predict Disease</Link>
          <Link href="/dashboard">Dashboard</Link>
        </nav>
      </header>
      <main>
        <h2>Welcome to the Crop Health Management System</h2>
        <p>Upload crop images to get disease predictions and management tips.</p>
      </main>
    </div>
  );
}
