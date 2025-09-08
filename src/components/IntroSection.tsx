
import Card from "@/components/Terminal";

export default function IntroSection() {
    return (
        <section id="introduction" className="min-h-screen flex items-center justify-center ">
            <div className="flex-col">
                <h2 className="text-4xl font-bold m-2">Welcome</h2>
                <Card/>
            </div>

        </section>
    );
}