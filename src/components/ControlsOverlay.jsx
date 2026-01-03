export function ControlsOverlay() {
  return (
    <div 
      className="fixed bottom-8 left-8 z-50 pointer-events-none"
    >
      <div 
        className="bg-black/40 backdrop-blur-sm rounded-2xl border-2 border-pink-500/50 p-6 shadow-2xl"
        style={{
          boxShadow: '0 0 20px rgba(236, 72, 153, 0.5), inset 0 0 20px rgba(236, 72, 153, 0.1)',
        }}
      >
        {/* Arrow Keys Movement */}
        <div className="flex items-center gap-4 mb-4">
          <div className="flex flex-col items-center gap-1">
            {/* Up arrow */}
            <div className="w-12 h-12 border-2 border-pink-500 rounded-lg flex items-center justify-center bg-black/30">
              <span className="text-pink-400 text-xl font-bold">W</span>
            </div>
            {/* Left Down Right arrows */}
            <div className="flex gap-1">
              <div className="w-12 h-12 border-2 border-pink-500 rounded-lg flex items-center justify-center bg-black/30">
                <span className="text-pink-400 text-xl font-bold">A</span>
              </div>
              <div className="w-12 h-12 border-2 border-pink-500 rounded-lg flex items-center justify-center bg-black/30">
                <span className="text-pink-400 text-xl font-bold">S</span>
              </div>
              <div className="w-12 h-12 border-2 border-pink-500 rounded-lg flex items-center justify-center bg-black/30">
                <span className="text-pink-400 text-xl font-bold">D</span>
              </div>
            </div>
          </div>
          <span 
            className="text-pink-400 text-2xl font-gothic"
            style={{
              textShadow: '0 0 10px rgba(236, 72, 153, 0.8), 0 0 20px rgba(236, 72, 153, 0.5)',
            }}
          >
            To Move
          </span>
        </div>

        

        {/* Press Space to Jump */}
        <div className="flex items-center gap-4">
          <span 
            className="text-pink-400 text-xl font-gothic"
            style={{
              textShadow: '0 0 10px rgba(236, 72, 153, 0.8), 0 0 20px rgba(236, 72, 153, 0.5)',
            }}
          >
            Press
          </span>
          <div className="w-32 h-14 border-2 border-pink-500 rounded-lg flex items-center justify-center bg-black/30">
            <span 
              className="text-pink-400 text-lg font-bold"
              style={{
                textShadow: '0 0 10px rgba(236, 72, 153, 0.8)',
              }}
            >
              Space
            </span>
          </div>
          <span 
            className="text-pink-400 text-xl font-gothic"
            style={{
              textShadow: '0 0 10px rgba(236, 72, 153, 0.8), 0 0 20px rgba(236, 72, 153, 0.5)',
            }}
          >
            To Jump
          </span>
        </div>
      </div>
    </div>
  );
}

