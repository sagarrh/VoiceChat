import { getAccessToken } from "@/utils/getAccessToken";
import dynamic from "next/dynamic";

const Chat = dynamic(() => import("@/components/Chat"), {
  ssr: false,
});

export default async function homepage() {
  const accessToken = await getAccessToken();

  if (!accessToken) {
    throw new Error();
  }

  return (
    <div className={"grow flex flex-col"}>
      <Chat accessToken={accessToken} />
    </div>
  );
}
// This code is a Next.js component that dynamically imports a Chat component and renders it.