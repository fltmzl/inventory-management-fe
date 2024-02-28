// "use client";

import MainLayout from "@/app/dashboard/components/Layout/MainLayout";
import React from "react";
import UserForm from "../../components/Form/UserForm";
import { api } from "@/utils/axios";
import useSWR from "swr";
import { useParams } from "next/navigation";
import { cookies } from "next/headers";
import { unstable_noStore } from "next/cache";
import UserDetail from "../../components/Main/UserDetail";

const getUserById = async (id: string) => {
  const res = await api.get<ApiSuccessResponse<User>>(`/pegawai/${id}`);
  // const res = await fetch(`http://localhost:3001/pegawai/${id}`, { cache: "no-cache" });
  // const data = await res.json();

  return res.data;
  // return data;
};

export default function EditUserPage({ params }: { params: { id: string } }) {
  // // unstable_noStore();
  // const { data } = await getUserById(params.id);
  // // const { data, isLoading } = useSWR(`/pegawai/${params.id}`);

  // console.log(data);

  // // if (isLoading) return <p>Loading brooo EDIT</p>;

  // const initialForm = {
  //   fullname: data.namaLengkap,
  //   username: data.username,
  //   email: data.email,
  //   password: "",
  //   confirmPassword: "",
  //   phoneNumber: data.telepon,
  //   address: data.alamat,
  //   role: data.role,
  // };

  return (
    <MainLayout title="Edit Data Karyawan">
      {/* <div className="bg-background px-6 py-7 rounded-md">
        <UserForm formType="EDIT" userId={data.id} initialValues={initialForm} />
      </div> */}
      <UserDetail id={params.id} />
    </MainLayout>
  );
}
