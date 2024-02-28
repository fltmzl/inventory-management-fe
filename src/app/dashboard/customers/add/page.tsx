"use client";

import React from "react";
import MainLayout from "../../components/Layout/MainLayout";
import CustomerForm from "../components/Form/CustomerForm";
import { api } from "@/utils/axios";
import { CustomerBody } from "../components/Form/customerBody";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useSWRConfig } from "swr";

export default function AddCustomerPage() {
  const { mutate } = useSWRConfig();
  const router = useRouter();

  const onSubmit = async (values: CustomerBody) => {
    const { id, name, email, phoneNumber, address } = values;
    try {
      const user = await api.post("/pelanggan", {
        id,
        nama: name,
        email,
        telepon: phoneNumber,
        alamat: address,
      });

      router.push("/dashboard/customers");
      mutate("/customers");
      toast.success(user.data.message);
    } catch (err) {
      console.log(err);
      toast.error("Gagal menambahkan data pelanggan");
    }
  };

  return (
    <MainLayout title="Tambah Data Pelanggan">
      <div className="bg-background px-6 py-7 rounded-md">
        <CustomerForm onSubmit={onSubmit} formType="NEW" />
      </div>
    </MainLayout>
  );
}
