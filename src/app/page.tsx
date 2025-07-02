import { TechStack } from "@/components/stacks";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <TechStack/>
      <article className="flex justify-center  bg-gray-900 h-150 font-bold text-sky-50">
        <section className="flex-row justify-center text-3xl p-40 ">
          <h1>HI, I'm Victor Souza!</h1>
          <div className="flex gap-3">
            <h1 className=" text-red-600  text-5xl">Full Stack</h1>
            <h1 className=" flex text-5xl">Developer</h1>
          </div>
          <br />
          <p className="text-2xl">Currently studying to become a full stack developer,and <br />
          combining with my passions technology, cars and <br />
          motorsport</p>
          <article className="flex gap-20">
            <Link className="flex gap-2" href="https://github.com/VictorSouzaa0">
            <img className="size-15" src="https://img.icons8.com/?size=100&id=52539&format=png&color=000000" alt="githubIcon" />
            <p className="text-2xl py-4">VictorSouzaa0</p>
            </Link>
            <Link className="flex gap-2" href="https://www.linkedin.com/in/victor-souza-453aa3322/">
              <img className="size-15" src="https://img.icons8.com/?size=100&id=44019&format=png&color=000000" alt="linkedinIcon" />
              <p className="text-2xl py-4">Victor-Souza</p>
            </Link>
          </article>
        </section>
          <img className="w-auto h-auto hidden xl:block" src="/Victor_piloto.png" alt="victorIcon" />
      </article>
    </div>
  );
}
