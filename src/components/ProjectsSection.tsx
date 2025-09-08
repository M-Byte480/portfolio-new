import GoToProjectButton from "@/components/GoToProjectButton";

export default function ProjectsSection() {
    return (
        <section id="projects" className="min-h-screen flex items-center justify-center ">
            <div className="">
                <h2 className="text-4xl font-bold text-center mb-12">Highlighted Projects</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    <div className="flex flex-col gap-8">
                        <GoToProjectButton name="Old Portfolio" href="" colours={["bg-red-200", "bg-red-400", "bg-red-600"]}/>
                        <GoToProjectButton name="Restaurant Management System" href="" />
                        <GoToProjectButton name="Instagram Mock Backend Microservices" href="" colours={["bg-yellow-200", "bg-yellow-400", "bg-yellow-600"]}/>
                    </div>

                    <div className="flex flex-col gap-8">
                        <GoToProjectButton name="FYP: Website Builder" href="" colours={["bg-blue-200", "bg-pink-400", "bg-purple-600"]}/>
                        <GoToProjectButton name="CNN: Vegetable Classifier" href="" colours={["bg-gray-200", "bg-gray-400", "bg-gray-600"]}/>
                        <GoToProjectButton name="CNN: Vegetable Classifier" href="" colours={["bg-gray-200", "bg-gray-400", "bg-gray-600"]}/>
                    </div>

                    <div className="flex justify-center col-span-2">
                        {/* From Uiverse.io by S4tyendra */}
                        <button
                            className="group relative bg-slate-900 h-16 w-64 border-2 border-teal-600 text-white text-base font-bold rounded-xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:border-emerald-400 hover:text-emerald-300 p-3 text-left before:absolute before:w-10 before:h-10 before:content[''] before:right-2 before:top-2 before:z-10 before:bg-indigo-500 before:rounded-full before:blur-lg before:transition-all before:duration-500 after:absolute after:z-10 after:w-16 after:h-16 after:content[''] after:bg-teal-400 after:right-6 after:top-4 after:rounded-full after:blur-lg after:transition-all after:duration-500 hover:before:right-10 hover:before:-bottom-4 hover:before:blur hover:after:-right-6 hover:after:scale-110 hover:cursor-pointer"
                            onClick={() => {
                                window.open("https://github.com/M-Byte480")
                            }}
                        >
                            GitHub for More
                        </button>
                    </div>
                </div>
                
            </div>
        </section>
    );
}