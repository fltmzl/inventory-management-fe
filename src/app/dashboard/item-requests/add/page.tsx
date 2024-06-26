import { api } from "@/utils/axios";
import AddItemRequest from "./AddItemRequest";

const getInitialData = async () => {
  const inventory = api.get<ApiSuccessResponse<Inventory[]>>("/barang");
  const customer = api.get<ApiSuccessResponse<Customer[]>>("/pelanggan");
  const user = api.get<ApiSuccessResponse<User[]>>("/pegawai");

  const [inventoryData, customerData, userData] = await Promise.all([inventory, customer, user]);

  return {
    inventoryItems: inventoryData.data.data,
    customerItems: customerData.data.data,
    userItems: userData.data.data,
  };
};

export default async function AddTransactionInPage() {
  const initialData = await getInitialData();

  return <AddItemRequest inventoryItems={initialData.inventoryItems} customerItems={initialData.customerItems} userItems={initialData.userItems} />;
}
