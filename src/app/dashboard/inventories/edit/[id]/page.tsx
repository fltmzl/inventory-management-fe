import MainLayout from "@/app/dashboard/components/Layout/MainLayout";
import React from "react";
import InventoryDetail from "../../components/Main/InventoryDetail";

export default function InventoryEditPage({ params }: { params: { id: string } }) {
  return (
    <MainLayout title="Edit Barang">
      <InventoryDetail id={params.id} />
    </MainLayout>
  );
}
