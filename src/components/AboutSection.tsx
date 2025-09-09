export default function AboutSection() {
    return (
        <section id="about" className="min-h-screen flex items-center justify-center px-4">
            <div className="max-w-3xl text-center flex flex-col items-center">
                <h2 className=" text-4xl sm:text-5xl font-bold mb-6">About Me</h2>
                
                <p className="text-lg leading-relaxed mb-4">
                    My name is <span className="neon-text font-bold">Milan</span>, a <span className="neon-text font-bold">Software Engineer</span> from Ireland. My experience involves <span className="neon-text font-bold">Full-Stack development</span>, 
                    <span className="neon-text font-bold"> Android app</span>, and a little bit of <span className="neon-text font-bold">Neural Computing</span>. Personally, I really like <span className="neon-text font-bold">OOP</span> and <span className="neon-text font-bold">Strong Statically </span>
                    typed programming languages.
                </p>

                <p className="text-lg leading-relaxed">
                    For hobbies, I listen to  <span className="neon-text font-bold">Music</span>, watch <span className="neon-text font-bold">Movies</span> here and there, play <span className="neon-text font-bold">Video Games</span>, and enjoy breaking <span className="neon-text font-bold">Software
                    Applications</span> :P
                </p>
            </div>
        </section>
    );
}