"use client";

import React from "react";
import MainLayout from "../../components/Layout/MainLayout";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useSWRConfig } from "swr";
import { api } from "@/utils/axios";
import ItemRequestsForm from "../components/Form/ItemRequestsForm";
import { ItemRequestsBody } from "../components/Form/itemRequestsBody";

type AddItemRequestsProps = {
  inventoryItems: Inventory[];
  customerItems: Customer[];
  userItems: User[];
};

export type ItemsProps = {
  id: string;
  total: number;
};

export default function AddItemRequest({ inventoryItems, customerItems, userItems }: AddItemRequestsProps) {
  const { mutate } = useSWRConfig();
  const router = useRouter();

  const onSubmit = async (values: ItemRequestsBody, items: ItemsProps[]) => {
    const { id, customer_id, user_id, date } = values;

    try {
      const permintaanBarang = await api.post("/permintaan-barang", {
        id,
        pelanggan_id: customer_id,
        pegawai_id: user_id,
        tanggal: new Date(date).toISOString(),
        barang: items.map((item) => ({
          ...item,
          jumlah: item.total,
        })),
      });

      router.push("/dashboard/item-requests");
      mutate("/permintaan-barang");
      toast.success(permintaanBarang.data.message);
    } catch (err) {
      console.log(err);
      toast.error("Gagal menambahkan permintaan barang");
    }
  };

  return (
    <MainLayout title="Tambah Permintaan Barang">
      <div className="bg-background px-6 py-7 rounded-md">
        <ItemRequestsForm
          formType="NEW"
          onSubmit={onSubmit}
          initialValueOptions={{
            inventoryItems,
            customerItems,
            userItems,
          }}
        />
      </div>
    </MainLayout>
  );
}
