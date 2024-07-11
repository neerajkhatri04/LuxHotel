"use server";

import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import {
  deleteBooking,
  getBookings,
  updateGuest,
  updateBooking,
  createBooking,
} from "./data-service";
import { redirect } from "next/navigation";

export async function signInAction() {
  await signIn("google", { redirectTo: "/account" });
}
export async function signOutAction() {
  await signOut("google", { redirectTo: "/" });
}

export async function update(formData) {
  const session = await auth();

  if (!session) throw new Error("You are not logged in");

  const nationalID = formData.get("nationalID");
  const [nationality, countryFlag] = formData.get("nationality").split("%");

  if (!/^[a-zA-Z0-9]{6,12}$/.test(nationalID)) {
    throw new Error("Invalid national ID");
  }

  const updateData = { nationality, countryFlag, nationalID };
  updateGuest(session?.user?.guestId, updateData);

  revalidatePath("/account/profile");
}

export async function deleteReservation(bookingId) {
  const session = await auth();
  if (!session) throw new Error("You are not logged in");

  const guestBookings = await getBookings(session.user.guestId);
  if (!guestBookings.find((b) => b.id === bookingId)) {
    throw new Error("This booking does not belong to you");
  }

  deleteBooking(bookingId);
  revalidatePath("/account/reservations");
}

export async function updateBook(formData) {
  const bookingId = Number(formData.get("bookingId"));
  const numGuests = formData.get("numGuests");
  const observations = formData.get("observations");

  const session = await auth();
  if (!session) throw new Error("You are not logged in");

  const guestBookings = await getBookings(session.user.guestId);

  const guestBookingIds = guestBookings.map((booking) => booking.id);

  console.log(guestBookingIds);
  console.log(bookingId);
  console.log(formData);
  if (!guestBookingIds.includes(bookingId)) {
    throw new Error("This booking does not belong to you");
  }
  updateBooking(bookingId, {
    numGuests,
    observations,
  });

  revalidatePath(`/account/reservations/edit/${bookingId}`);
  redirect("/account/reservations");
}

export async function createBook(bookingData, formData) {
  const session = await auth();
  if (!session) throw new Error("You are not logged in");

  const newBooking = {
    ...bookingData,
    guestId: session.user.guestId,
    numGuests: Number(formData.get("numGuests")),
    observations: formData.get("observations").slice(0, 1000),
    extrasPrice: 0,
    totalPrice: bookingData.cabinPrice,
    cabinId: bookingData.cabinId,
    isPaid: false,
    hasBreakfast: false,
    status: "unconfirmed",
  };
  console.log(bookingData);
  createBooking(newBooking);
  revalidatePath(`cabins/${bookingData.cabinId}`);
  redirect(`/thankyou`);
}
