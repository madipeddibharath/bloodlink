import { Badge } from "@/components/ui/badge";
import { Calendar, Phone, User } from "lucide-react";
import { formatBloodGroup } from "../types/donor";
import type { Donor } from "../types/donor";

interface DonorCardProps {
  donor: Donor;
}

export function DonorCard({ donor }: DonorCardProps) {
  const bloodLabel = formatBloodGroup(donor.bloodGroup);

  return (
    <div
      className="donor-card-accent bg-card rounded-lg shadow-sm hover:shadow-md transition-smooth group flex flex-col gap-0 overflow-hidden"
      data-ocid="donor-card"
    >
      {/* Top section: name + blood badge */}
      <div className="flex items-start justify-between px-4 pt-4 pb-3">
        <div className="flex items-center gap-2 min-w-0">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-muted-foreground shrink-0">
            <User className="h-4 w-4" aria-hidden="true" />
          </div>
          <p
            className="font-semibold text-foreground text-sm leading-tight truncate"
            title={donor.name}
          >
            {donor.name}
          </p>
        </div>
        <span
          className="ml-2 shrink-0 inline-flex items-center justify-center h-9 w-9 rounded-full bg-primary text-primary-foreground font-bold text-sm font-mono shadow-sm"
          aria-label={`Blood group ${bloodLabel}`}
        >
          {bloodLabel}
        </span>
      </div>

      {/* Divider */}
      <div className="mx-4 border-t border-border" />

      {/* Details */}
      <div className="flex flex-col gap-2 px-4 py-3">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Phone
            className="h-3.5 w-3.5 shrink-0 text-primary"
            aria-hidden="true"
          />
          <a
            href={`tel:${donor.phone}`}
            className="font-mono text-sm text-foreground hover:text-primary transition-colors duration-200 focus-visible:outline-none focus-visible:underline"
            data-ocid="donor-phone"
            aria-label={`Call ${donor.name} at ${donor.phone}`}
          >
            {donor.phone}
          </a>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <Calendar className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
          <span className="text-sm">
            Age{" "}
            <strong className="text-foreground font-semibold">
              {donor.age.toString()}
            </strong>
          </span>
        </div>
      </div>

      {/* Badge row */}
      <div className="px-4 pb-4 pt-1">
        <Badge
          variant="secondary"
          className="text-xs"
          aria-label="Available to donate"
        >
          ✦ Available
        </Badge>
      </div>
    </div>
  );
}
