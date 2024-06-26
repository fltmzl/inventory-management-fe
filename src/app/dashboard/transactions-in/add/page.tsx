import { api } from "@/utils/axios";
import AddTransactionIn from "./AddTransactionIn";

const getInventoryItems = async () => {
  const { data } = await api.get<ApiSuccessResponse<Inventory[]>>("/barang");
  return data.data;
};

export default async function AddTransactionInPage() {
  const inventoryItems = await getInventoryItems();

  return <AddTransactionIn inventoryItems={inventoryItems} />;
}
