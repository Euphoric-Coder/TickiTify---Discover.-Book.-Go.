"use client";

import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import {
  CalendarDays,
  MapPin,
  Ticket,
  Check,
  CircleArrowRight,
  LoaderCircle,
  XCircle,
  PencilIcon,
  StarIcon,
} from "lucide-react";
import { useUser } from "@clerk/nextjs";
// import PurchaseTicket from "./PurchaseTicket";
import { useRouter } from "next/navigation";
// import { useStorageUrl } from "@/lib/utils";
import Image from "next/image";

const EventCard = ({ eventId }) => {
  const { user } = useUser();
  const router = useRouter();
  const event = useQuery(api.events.getById, { eventId });
  const availability = useQuery(api.events.getEventAvailability, { eventId });
  const userTicket = useQuery(api.tickets.getUserTicketForEvent, {
    eventId,
    userId: user?.id ?? "",
  });
  const queuePosition = useQuery(api.waitingList.getQueuePosition, {
    eventId,
    userId: user?.id ?? "",
  });
  return <div>Event ID: {eventId}</div>;
};

export default EventCard;
