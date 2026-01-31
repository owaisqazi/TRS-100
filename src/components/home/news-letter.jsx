function NewsLetter() {
    return (
        <>
            <div className="news-gradient py-10 px-4 flex flex-col items-center border-b border-white/10">
                <h3 className="text-xl md:text-2xl font-bold mb-6 tracking-wide">Subscribe to Our Newsletter</h3>
                <div className="w-full max-w-2xl">
                    <label className="text-xs text-gray-300 mb-2 block">Enter your email here *</label>
                    <input 
                        type="email" 
                        className="w-full bg-transparent border-b border-white py-2 mb-4 outline-none focus:border-purple-400 transition-colors"
                    />
                    <button className="w-full bg-white text-black font-bold py-3 rounded-sm hover:bg-gray-200 transition-all uppercase tracking-widest text-sm">
                        Sign Up
                    </button>
                </div>
            </div>
        </>
    )
}

export default NewsLetter