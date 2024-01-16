import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/options";
import SessionProvider from "@/app/SessionProvider";
import Login from "@/app/[locale]/login/page";

const SesionWrapper = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession(authOptions);

  return (
    <SessionProvider session={session}>
      {!session ? <Login /> : <div>{children}</div>}
    </SessionProvider>
  );
};

export default SesionWrapper;
