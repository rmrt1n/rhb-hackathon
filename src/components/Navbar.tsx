import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="h-16 border-b shadow-md border bg-[#5bc2e7]">
      <div className="max-w-5xl m-auto h-full flex justify-between items-center">
        <div className="relative">
          <Link href="/">
            {/* //put a beuatiful logo text instead */}
            <div
              className="text-white font-bold text-xl"
              style={{
                position: "relative",
                top: "50%",
                right: "50%",
                fontSize: "2rem",
              }}
            >
              <span className="text-[#0368b2]">BizBoost</span>
              <span className="text-black">.</span>
              <span className="text-[#ee3e42]">AI</span>
            </div>
          </Link>
        </div>
        <nav className="flex items-center gap-4 text-white leading-1">
          <Link
            href="/sme"
            className="px-4 py-2 min-w-[4rem] bg-[#5bc2e7] text-white font-medium border-2 border-white rounded-lg"
          >
            For SMEs
          </Link>
          <Link
            href="/bank"
            className="px-4 py-2 min-w-[4rem] bg-[#0067b1] text-white font-medium border-2 border-[#0067b1] rounded-lg"
          >
            For Banks
          </Link>
        </nav>
      </div>
    </header>
  );
}
