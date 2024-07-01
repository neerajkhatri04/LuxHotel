import SignInButton from "../_components/SignInButton";

export const metadata = {
  title: "My Account",
};

export default function Page() {
  return (
    <div className="flex flex-col gap-10 mt-10 items-center">
      <h2 className="text-3xl font-semibold">Sign in to your account</h2>
      <SignInButton />
    </div>
  );
}
