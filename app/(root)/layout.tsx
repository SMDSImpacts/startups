import {JSX, ReactNode} from "react";

import Navbar from "../../components/Navbar";
//import LeftSidebar from "@/components/navigation/LeftSidebar";
//import RightSidebar from "@/components/navigation/RightSidebar";

const RootLayout = ({ children }: { children: ReactNode }) :JSX.Element => {
  return (
    <main className="">
      <Navbar />

      <div className="flex">
        {/* <LeftSidebar /> */}

        <section className="flex min-h-screen flex-1 flex-col pt-2 px-6 pb-6 max-md:pb-14">
          <div className="mx-auto w-full max-w-5xl">{children}</div>
        </section>

        {/* <RightSidebar /> */}
      </div>
    </main>
  );
};

export default RootLayout;
