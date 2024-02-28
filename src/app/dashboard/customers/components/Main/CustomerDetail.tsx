"use client";

import useSWR from "swr";
import CustomerForm from "../Form/CustomerForm";
import { api } from "@/utils/axios";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import { Button } from "@nextui-org/react";
import { CustomerBody } from "../Form/customerBody";

export default function CustomerDetail({ id }: { id: string }) {
  const router = useRouter();
  const { data, isLoading } = useSWR<ApiSuccessResponse<Customer>>(`/pelanggan/${id}`);

  if (isLoading) return <p>loading borrr EDIT.....</p>;

  const customer = data!.data;

  const initialForm: CustomerBody = {
    id: customer.id,
    name: customer.nama,
    email: customer.email,
    phoneNumber: customer.telepon,
    address: customer.alamat,
  };

  const onSubmit = async (values: CustomerBody) => {
    const { id, name, address, email, phoneNumber } = values;
    try {
      const customer = await api.put(`/pelanggan/${id}`, {
        id,
        nama: name,
        telepon: phoneNumber,
        email,
        alamat: address,
      });

      router.push("/dashboard/customers");
      toast.success(customer.data.message);
    } catch (err) {
      console.log(err);
      toast.error("Gagal mengedit data pelanggan");
    }
  };

  return (
    <div className="bg-background px-6 py-7 rounded-md">
      <CustomerForm formType="EDIT" initialValues={initialForm} onSubmit={onSubmit} />
    </div>
  );
}
