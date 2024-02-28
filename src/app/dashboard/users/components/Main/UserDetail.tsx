"use client";

import useSWR from "swr";
import UserForm from "../Form/UserForm";
import { UserBody } from "../Form/userBody";
import { api } from "@/utils/axios";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import { Button } from "@nextui-org/react";

export default function UserDetail({ id }: { id: string }) {
  const router = useRouter();
  const { data, isLoading } = useSWR(`/pegawai/${id}`);

  if (isLoading) return <p>loading borrr EDIT.....</p>;

  const initialForm = {
    fullname: data.data.namaLengkap,
    username: data.data.username,
    email: data.data.email,
    password: "",
    confirmPassword: "",
    phoneNumber: data.data.telepon,
    address: data.data.alamat,
    role: data.data.role,
  };

  const onSubmit = async (values: UserBody) => {
    const { address, email, fullname, password, phoneNumber, role, username } = values;
    try {
      const user = await api.put(`/pegawai/${id}`, {
        namaLengkap: fullname,
        username,
        email,
        foto: "https://i.pravatar.cc/150?img=53",
        telepon: phoneNumber,
        alamat: address,
        role: role.toUpperCase(),
      });

      console.log(user);
      router.push("/dashboard/users");
      toast.success(user.data.message);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-background px-6 py-7 rounded-md">
      <UserForm formType="EDIT" initialValues={initialForm} onSubmit={onSubmit} />
    </div>
  );
}
