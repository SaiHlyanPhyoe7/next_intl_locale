"use client";

import { Session } from "next-auth";
import { SessionProvider as Provider } from "next-auth/react";
import { NextIntlClientProvider, useMessages } from "next-intl";
import React from "react";

type Props = {
  children: React.ReactNode;
  session: Session | null;
};

const SessionProvider = ({ children, session }: Props) => {

  return (
   
      <Provider session={session}>{children}</Provider>
  
  );
};

export default SessionProvider;
