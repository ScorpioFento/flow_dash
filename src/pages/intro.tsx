import { useNavigate } from "react-router-dom";

export default function Intro() {
    const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 overflow-hidden relative">
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 bg-[length:200%_200%] animate-[gradient-x_6s_ease_infinite] opacity-70"></div>

      <div className="backdrop-blur-md bg-white/10 p-8 rounded-2xl shadow-2xl border border-white/20 max-w-2xl text-center">
        <h1 className="text-5xl font-bold text-white mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
            Workflow, Reimagined.
          </span>
        </h1>

        <p className="text-xl text-white mb-8">
          The smartest way to manage projects, tasks, and teams. Fast, flexible,
          and fun.
        </p>

        <button onClick={() => navigate("/register")} className="px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-600 text-white font-semibold rounded-full shadow-lg hover:shadow-cyan-500/30 transition-all hover:scale-105 transform duration-300 animate-pulse">
          Register Now
        </button>

        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {[
            { icon: "🚀", text: "AI-Powered Tasks" },
            { icon: "📊", text: "Real-Time Dashboards" },
            { icon: "🤖", text: "Automation" },
            { icon: "🌐", text: "100+ Integrations" },
          ].map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all cursor-pointer group"
            >
              <span className="text-2xl mb-2 group-hover:scale-110 transition-transform">
                {feature.icon}
              </span>
              <span className="text-white">{feature.text}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute w-full h-full overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/20"
            style={{
              width: `${Math.random() * 10 + 8}px`,
              height: `${Math.random() * 10 + 8}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${
                Math.random() * 10 + 5
              }s infinite ease-in-out`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
