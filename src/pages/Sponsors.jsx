import { TopNavOverlay } from "../components/TopNavOverlay";

export function Sponsors() {
  return (
    <div className="min-h-screen bg-black text-pink-400">
      <TopNavOverlay />
      <div className="pt-32 px-8">
        <h1 
          className="text-5xl font-gothic mb-8 text-center"
          style={{
            textShadow: '0 0 20px rgba(236, 72, 153, 0.8), 0 0 40px rgba(236, 72, 153, 0.5)',
          }}
        >
          Sponsors
        </h1>
        <div className="max-w-4xl mx-auto">
          <p className="text-xl text-pink-300/80 text-center">
            Our sponsors coming soon...
          </p>
        </div>
      </div>
    </div>
  );
}

