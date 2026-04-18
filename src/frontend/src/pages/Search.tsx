import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Droplets, Search, Users } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { DonorCard } from "../components/DonorCard";
import { ErrorMessage } from "../components/ErrorMessage";
import { LoadingSpinner } from "../components/LoadingSpinner";
import { useSearchDonors } from "../hooks/useDonor";
import { BLOOD_GROUP_OPTIONS, type BloodGroup } from "../types/donor";

export default function SearchPage() {
  const [selected, setSelected] = useState<BloodGroup | null>(null);
  const [searched, setSearched] = useState<BloodGroup | null>(null);

  const { data: donors, isLoading, isError, error } = useSearchDonors(searched);

  function handleSearch() {
    if (selected) setSearched(selected);
  }

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
      {/* Page header */}
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="flex items-center gap-2 mb-2">
          <Droplets className="h-6 w-6 text-primary" aria-hidden="true" />
          <h1 className="text-2xl md:text-3xl font-bold font-display text-foreground">
            Find Blood Donors
          </h1>
        </div>
        <p className="text-muted-foreground">
          Search by blood group to find registered donors and their contact
          numbers.
        </p>
      </motion.div>

      {/* Search form */}
      <motion.div
        className="bg-card rounded-xl border border-border shadow-sm p-6 mb-8"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex-1">
            <label
              className="block text-sm font-medium text-foreground mb-1.5"
              htmlFor="blood-group-select"
            >
              Select Blood Group
            </label>
            <Select
              value={selected ?? ""}
              onValueChange={(v) => setSelected(v as BloodGroup)}
            >
              <SelectTrigger
                id="blood-group-select"
                className="w-full"
                data-ocid="search-blood-group-select"
              >
                <SelectValue placeholder="Choose a blood group…" />
              </SelectTrigger>
              <SelectContent>
                {BLOOD_GROUP_OPTIONS.map((opt) => (
                  <SelectItem key={opt.value} value={opt.value}>
                    {opt.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="sm:self-end">
            <Button
              onClick={handleSearch}
              disabled={!selected || isLoading}
              className="w-full sm:w-auto"
              data-ocid="search-submit"
            >
              <Search className="mr-2 h-4 w-4" aria-hidden="true" />
              Search Donors
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Results */}
      {isLoading && (
        <div className="flex justify-center py-16">
          <LoadingSpinner size="lg" label="Searching donors…" />
        </div>
      )}

      {isError && (
        <ErrorMessage
          message={
            error instanceof Error ? error.message : "Failed to search donors"
          }
          className="mb-6"
        />
      )}

      {!isLoading && searched && donors && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {donors.length === 0 ? (
            <div
              className="flex flex-col items-center justify-center py-16 text-center gap-4"
              data-ocid="empty-state-search"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-muted">
                <Users
                  className="h-7 w-7 text-muted-foreground"
                  aria-hidden="true"
                />
              </div>
              <div>
                <p className="font-semibold text-foreground">No donors found</p>
                <p className="text-sm text-muted-foreground mt-1">
                  No registered donors for this blood group yet. Try another
                  group or check back later.
                </p>
              </div>
            </div>
          ) : (
            <>
              <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
                <Users className="h-4 w-4" aria-hidden="true" />
                <span>
                  Found{" "}
                  <strong className="text-foreground">{donors.length}</strong>{" "}
                  {donors.length === 1 ? "donor" : "donors"}
                </span>
              </div>
              <div
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
                data-ocid="search-results"
              >
                {donors.map((donor, i) => (
                  <motion.div
                    key={donor.id.toText()}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.07 }}
                  >
                    <DonorCard donor={donor} />
                  </motion.div>
                ))}
              </div>
            </>
          )}
        </motion.div>
      )}

      {!searched && !isLoading && (
        <div className="flex flex-col items-center justify-center py-16 text-center gap-3">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
            <Search className="h-7 w-7 text-primary" aria-hidden="true" />
          </div>
          <p className="font-medium text-foreground">
            Select a blood group to search
          </p>
          <p className="text-sm text-muted-foreground max-w-xs">
            Choose from any of the 8 blood groups above to find donors who are
            available in the community.
          </p>
        </div>
      )}
    </div>
  );
}
