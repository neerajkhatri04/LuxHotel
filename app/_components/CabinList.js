import React from "react";
import CabinCard from "../_components/CabinCard";
import { getCabin, getCabins } from "../_lib/data-service";
export default async function CabinList({ filter }) {
  // CHANGE
  const cabins = await getCabins();
  const len = cabins.length;
  let displayCabins = cabins;

  if (filter === "all") {
    displayCabins = cabins;
  }
  if (filter === "small") {
    displayCabins = cabins.filter((cabin) => cabin.maxCapacity <= 5);
  }
  if (filter === "medium") {
    displayCabins = cabins.filter(
      (cabin) => cabin.maxCapacity > 5 && cabin.maxCapacity <= 10
    );
  }
  if (filter === "large") {
    displayCabins = cabins.filter((cabin) => cabin.maxCapacity > 10);
  }

  return len > 0 ? (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
      {displayCabins.map((cabin) => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  ) : null;
}
