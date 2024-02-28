"use client";

import React from "react";
import MainLayout from "../../components/Layout/MainLayout";
import UserForm from "../components/Form/UserForm";
import { api } from "@/utils/axios";
import { UserBody } from "../components/Form/userBody";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useSWRConfig } from "swr";

export default function AddUserPage() {
  const { mutate } = useSWRConfig();
  const router = useRouter();

  const onSubmit = async (values: UserBody) => {
    const { address, email, fullname, password, phoneNumber, role, username } = values;
    try {
      const user = await api.post("/pegawai", {
        namaLengkap: fullname,
        username,
        email,
        foto: "https://i.pravatar.cc/150?img=53",
        telepon: phoneNumber,
        password,
        alamat: address,
        role: role.toUpperCase(),
      });

      router.push("/dashboard/users");
      mutate("/pegawai");
      toast.success(user.data.message);
    } catch (err) {
      console.log(err);
      toast.error("Gagal menambahkan data keryawan");
    }
  };

  return (
    <MainLayout title="Tambah Data Karyawan">
      <div className="bg-background px-6 py-7 rounded-md">
        <UserForm onSubmit={onSubmit} formType="NEW" />
      </div>
    </MainLayout>
  );
}
