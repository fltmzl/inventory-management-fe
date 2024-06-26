import { api } from "@/utils/axios";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const from = searchParams.get("from");
  const to = searchParams.get("to");

  try {
    const res = await api.get(`/transaksi-barang-keluar/report?from=${from}&to=${to}`);
    console.log(res.data);

    console.log(from, to);

    return Response.json({ message: "Berhasil test" });
  } catch (err) {
    return Response.json({
      message: err.message,
    });
  }
}
