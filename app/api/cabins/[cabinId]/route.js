import { getBookedDatesByCabinId, getCabin } from "@/app/_lib/data-service";

export async function GET(request, { params }) {
  const { cabinId } = params;
  console.log("PARAMS", params);
  try {
    const [cabin, bookedDate] = await Promise.all([
      getCabin(cabinId),
      getBookedDatesByCabinId(cabinId),
    ]);
    console.log("CABIN", cabin);
    console.log("CABIN------", bookedDate);
    return Response.json({
      cabin,
      bookedDate,
    });
  } catch (error) {
    console.error(error);
    return Response.json({ message: "Invalid Cabin" });
  }
}
