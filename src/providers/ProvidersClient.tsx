"use client";

import { store } from "@/redux/store";
import SwrConfigClient from "@/swr/SwrConfigClient";
import React from "react";
import { Provider } from "react-redux";

export default function ProvidersClient({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <SwrConfigClient>{children}</SwrConfigClient>
    </Provider>
  );
}
