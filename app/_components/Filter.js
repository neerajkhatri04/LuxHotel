"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";

export default function Filter() {
  const searchParam = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();
  function handleFilter(filter) {
    const params = new URLSearchParams(searchParam);
    params.set("capacity", filter);
    router.replace(`${pathName}?${params.toString()}`, { scroll: false });
  }
  const activeFilter = searchParam.get("capacity") ?? "all";
  return (
    <div className="border border-primary-800 flex">
      <Button
        filter="all"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      />
      <Button
        filter="small"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      />
      <Button
        filter="medium"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      />
      <Button
        filter="large"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      />
    </div>
  );
}

function Button({ filter, handleFilter, activeFilter }) {
  return (
    <button
      className={`px-5 py-2 hover:bg-primary-700 ${
        filter === activeFilter ? "bg-primary-700" : ""
      }`}
      onClick={() => handleFilter(filter)}
    >
      {filter}
    </button>
  );
}
