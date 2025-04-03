import { getAccessToken } from "@/utils/getAccessToken";
import dynamic from "next/dynamic";

const Chat = dynamic(() => import("@/components/Chat"), {
  ssr: false,
});

export default async function HomePage() {
  try {
    const accessToken = await getAccessToken();

    if (!accessToken) {
      return (
        <div className="grow flex flex-col items-center justify-center">
          <p>Unable to initialize chat. Please try again later.</p>
        </div>
      );
    }

    return (
      <div className="grow flex flex-col">
        <Chat accessToken={accessToken} />
      </div>
    );
  } catch (error) {
    return (
      <div className="grow flex flex-col items-center justify-center">
        <p>An error occurred while initializing the chat.</p>
      </div>
    );
  }
}
  