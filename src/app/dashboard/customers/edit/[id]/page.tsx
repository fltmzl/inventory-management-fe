// "use client";

import MainLayout from "@/app/dashboard/components/Layout/MainLayout";
import React from "react";
import CustomerDetail from "../../components/Main/CustomerDetail";

export default function EditUserPage({ params }: { params: { id: string } }) {
  return (
    <MainLayout title="Edit Data Karyawan">
      <CustomerDetail id={params.id} />
    </MainLayout>
  );
}
