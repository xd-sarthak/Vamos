export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 transition-colors duration-300">
      {/* Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-zinc-900/70 border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center">
              <span className="text-white font-bold text-lg">V</span>
            </div>
            <span className="text-xl font-bold tracking-tight">Vamos</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600 dark:text-zinc-400">
            <a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Features</a>
            <a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Testimonials</a>
            <a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Pricing</a>
          </nav>
          <div className="flex items-center gap-4">
            <button className="hidden md:block text-sm font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Sign In</button>
            <button className="bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-4 py-2 rounded-full text-sm font-medium hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-24 pb-32 overflow-hidden">
          <div className="absolute inset-0 -z-10">
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-indigo-500/20 dark:bg-indigo-500/10 rounded-full blur-3xl opacity-50 animate-pulse" />
             <div className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-violet-500/10 dark:bg-violet-500/5 rounded-full blur-3xl opacity-40" />
             <div className="absolute bottom-0 right-1/4 w-[800px] h-[800px] bg-pink-500/10 dark:bg-pink-500/5 rounded-full blur-3xl opacity-30" />
          </div>
          
          <div className="max-w-7xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300 text-xs font-semibold mb-8 border border-indigo-100 dark:border-indigo-800/50">
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
              v2.1 is now live
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight animate-[fadeIn_0.6s_ease-out]">
              Build faster with <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 animate-[gradient_3s_ease-in-out_infinite] bg-[length:200%_auto]">
                Intuitive simplicity.
              </span>
            </h1>
            <style jsx>{`
              @keyframes gradient {
                0%, 100% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
              }
              @keyframes fadeIn {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
              }
            `}</style>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-zinc-600 dark:text-zinc-400 mb-10 leading-relaxed">
              Vamos allows you to create stunning web experiences without the hassle. Focus on your ideas, while we handle the complexity.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-full font-semibold text-lg transition-all shadow-lg shadow-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/60 hover:scale-105 active:scale-95">
                Start Building Free
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm border border-zinc-200 dark:border-zinc-700 hover:bg-white dark:hover:bg-zinc-700 rounded-full font-semibold text-lg transition-all hover:scale-105 active:scale-95 shadow-sm">
                View Documentation
              </button>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-24 bg-white dark:bg-zinc-900/50 border-t border-zinc-200 dark:border-zinc-800">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="group p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 hover:from-blue-100 hover:to-indigo-100 dark:hover:from-blue-900/30 dark:hover:to-indigo-900/30 border border-blue-200/50 dark:border-blue-800/50 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-blue-500/20 hover:-translate-y-1 cursor-pointer">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-blue-500/30">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">Lightning Fast</h3>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Optimized for speed. Experience near-instant load times and smooth interactions out of the box.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="group p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 hover:from-purple-100 hover:to-pink-100 dark:hover:from-purple-900/30 dark:hover:to-pink-900/30 border border-purple-200/50 dark:border-purple-800/50 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-purple-500/20 hover:-translate-y-1 cursor-pointer">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-purple-500/30">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">Fully Customizable</h3>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Tailor every aspect of the design to match your brand. Flexible components that adapt to your needs.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="group p-8 rounded-2xl bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 hover:from-pink-100 hover:to-rose-100 dark:hover:from-pink-900/30 dark:hover:to-rose-900/30 border border-pink-200/50 dark:border-pink-800/50 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-pink-500/20 hover:-translate-y-1 cursor-pointer">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-pink-500/30">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">Secure by Default</h3>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Enterprise-grade security baked in. Your data and your users' privacy are our top priority.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white dark:bg-zinc-900 py-12 border-t border-zinc-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
             <div className="w-6 h-6 rounded bg-indigo-600 flex items-center justify-center">
              <span className="text-white font-bold text-xs">V</span>
            </div>
            <span className="text-lg font-bold tracking-tight">Vamos</span>
          </div>
          <p className="text-sm text-zinc-500 dark:text-zinc-500">
            © {new Date().getFullYear()} Vamos Inc. All rights reserved.
          </p>
          <div className="flex gap-6">
             <a href="#" className="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors">
               <span className="sr-only">Twitter</span>
               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
             </a>
             <a href="#" className="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors">
               <span className="sr-only">GitHub</span>
               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
             </a>
          </div>
        </div>
      </footer>
    </div>
  );
}