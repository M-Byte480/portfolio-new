type GoToProjectButtonProps = {
    name: string;
    href: string;
    revealText?: string;
    colours?: string[];
};

export default function GoToProjectButton({ name, href, revealText="Source Code", colours = ["bg-green-200", "bg-green-400", "bg-green-600"] }: GoToProjectButtonProps) {
    return (
        <div className="inline-block">
            {/*<!-- From Uiverse.io by Javierrocadev --> */}
            
            <button
                className="overflow-hidden relative w-full p-2 h-12 bg-slate-900 text-white 
                border-2 border-teal-600 rounded-md text-xl font-bold cursor-pointer z-10 group 
                hover:scale-105 hover:border-emerald-400 transition duration-300 ease-in-out"
                onClick={() => window.open(href, "_blank")}
            >

                {colours.map((colour, index) => (
                    <span
                        key={index}
                        className={`absolute w-full h-32 -top-8 -left-2 ${colour} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform origin-bottom
              ${index === 0 ? "group-hover:duration-500 duration-1000" : ""}
              ${index === 1 ? "group-hover:duration-700 duration-700" : ""}
              ${index === 2 ? "group-hover:duration-1000 duration-500" : ""}`}
                    ></span>
                ))}

                {name}
                <span
                    className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-1/2 -translate-x-1/2 z-10"
                >{revealText}</span
                >
            </button>


        </div>
    );
}
