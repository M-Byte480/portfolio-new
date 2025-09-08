type GoToProjectButtonProps = {
    name: string;
    href: string;
    colours?: string[];
};

export default function GoToProjectButton({ name, href, colours = ["bg-green-200", "bg-green-400", "bg-green-600"] }: GoToProjectButtonProps) {
    return (
        <div>
            {/*<!-- From Uiverse.io by Javierrocadev --> */}
            
            <button
                className="overflow-hidden relative w-full p-2 h-12 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer relative z-10 group"
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
                    className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-1/3 z-10"
                >Source Code</span
                >
            </button>


        </div>
    );
}
