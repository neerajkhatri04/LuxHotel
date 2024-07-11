import { auth } from "../_lib/auth";

export const metadata = {
  title: "My Account",
};

export default async function Page() {
  const session = await auth();
  return (
    <div>
      <h1>Hello, {session.user.name}</h1>
    </div>
  );
}
