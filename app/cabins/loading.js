import Spinner from "../_components/Spinner";

export default function Loading() {
  return (
    <div className="grid items-center justify-center">
      <Spinner />
      <p className="text-sm text-gray-500">Loading available rooms....</p>
    </div>
  );
}
