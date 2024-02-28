import { Button, Link } from "@nextui-org/react";
import React from "react";
import { IoIosAdd } from "react-icons/io";
import MainLayout from "../components/Layout/MainLayout";
import UserTable from "./components/Table/UserTable";
import Users from "./components/Main/Users";
import { Suspense } from "react";

export default function UsersPage() {
  return (
    <MainLayout title="Data Karyawan">
      {/* <Button as={Link} href="/dashboard/users/add" color="primary" className="font-semibold" startContent={<IoIosAdd size={25} />}>
        Tambah User
      </Button> */}
      {/* <Suspense fallback={<p>Loading.......</p>}> */}
      <Users />
      {/* </Suspense> */}
    </MainLayout>
  );
}
