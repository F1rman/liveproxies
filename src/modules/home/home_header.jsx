import Link from "next/link";

export default function HomeHeader() {
  return (
    <section>
        <div className="hero_img text-center">
          <div className="hero_img_text_con">
            <h2>OFTEN IMITATED | NEVER DUPLICATED</h2>
            <h3>
              Enjoy the reassurance of entirely private, unique, and dedicated
              proxies.
            </h3>
            <Link href="/sign-up">Create your account</Link>
          </div>
        </div>
      </section>
  );
}
