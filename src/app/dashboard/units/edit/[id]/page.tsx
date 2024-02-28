import MainLayout from "@/app/dashboard/components/Layout/MainLayout";
import React from "react";
import UnitDetail from "../../components/Main/UnitDetail";

export default function EditUnitPage({ params }: { params: { id: string } }) {
  return (
    <MainLayout title="Edit Satuan">
      <UnitDetail id={params.id} />
    </MainLayout>
  );
}
