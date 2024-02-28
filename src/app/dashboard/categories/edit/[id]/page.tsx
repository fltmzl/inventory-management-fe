import MainLayout from "@/app/dashboard/components/Layout/MainLayout";
import React from "react";
import CategoryDetail from "../../components/Main/CategoryDetail";

export default function EditCategoryPage({ params }: { params: { id: string } }) {
  return (
    <MainLayout title="Edit Kategori">
      <CategoryDetail id={params.id} />
    </MainLayout>
  );
}
