import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { Link } from "@tanstack/react-router";
import {
  Check,
  Droplets,
  LayoutDashboard,
  LogIn,
  Pencil,
  X,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { ErrorMessage } from "../components/ErrorMessage";
import { useAuth } from "../hooks/useAuth";
import { useGetMyProfile, useUpdateDonor } from "../hooks/useDonor";
import {
  BLOOD_GROUP_OPTIONS,
  type BloodGroup,
  formatBloodGroup,
} from "../types/donor";

export default function DashboardPage() {
  const { isAuthenticated, login, isLoggingIn } = useAuth();
  const { data: profile, isLoading, isError } = useGetMyProfile();
  const { mutateAsync: updateDonor, isPending } = useUpdateDonor();

  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    age: "",
    bloodGroup: "" as BloodGroup | "",
  });

  function startEditing() {
    if (!profile) return;
    setForm({
      name: profile.name,
      phone: profile.phone,
      age: profile.age.toString(),
      bloodGroup: profile.bloodGroup,
    });
    setEditing(true);
  }

  function cancelEdit() {
    setEditing(false);
  }

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.phone || !form.age || !form.bloodGroup) return;
    const ageNum = Number.parseInt(form.age, 10);
    if (Number.isNaN(ageNum) || ageNum < 18 || ageNum > 65) {
      toast.error("Age must be between 18 and 65.");
      return;
    }
    try {
      await updateDonor({
        name: form.name.trim(),
        phone: form.phone.trim(),
        age: BigInt(ageNum),
        bloodGroup: form.bloodGroup as BloodGroup,
      });
      toast.success("Profile updated successfully!");
      setEditing(false);
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Update failed");
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="mx-auto max-w-md px-4 sm:px-6 py-16 text-center flex flex-col items-center gap-5">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
          <LogIn className="h-7 w-7 text-primary" aria-hidden="true" />
        </div>
        <div>
          <h1 className="text-xl font-bold text-foreground mb-2">
            Login to View Dashboard
          </h1>
          <p className="text-muted-foreground text-sm">
            Access your donor profile and manage your details by logging in.
          </p>
        </div>
        <Button
          onClick={login}
          disabled={isLoggingIn}
          data-ocid="dashboard-login-prompt"
        >
          {isLoggingIn ? "Connecting…" : "Login / Register Account"}
        </Button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-lg px-4 sm:px-6 py-10">
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="flex items-center gap-2 mb-2">
          <LayoutDashboard
            className="h-6 w-6 text-primary"
            aria-hidden="true"
          />
          <h1 className="text-2xl md:text-3xl font-bold font-display text-foreground">
            My Donor Profile
          </h1>
        </div>
        <p className="text-muted-foreground">
          Manage your donor registration details here.
        </p>
      </motion.div>

      {isLoading && (
        <div className="bg-card rounded-xl border border-border shadow-sm p-6 flex flex-col gap-4">
          {[1, 2, 3, 4].map((n) => (
            <div key={n} className="flex flex-col gap-1.5">
              <Skeleton className="h-4 w-20 rounded" />
              <Skeleton className="h-10 w-full rounded-md" />
            </div>
          ))}
        </div>
      )}

      {isError && (
        <ErrorMessage message="Failed to load your profile. Please try again." />
      )}

      {!isLoading && !isError && !profile && !editing && (
        <motion.div
          className="bg-card rounded-xl border border-border shadow-sm p-8 text-center flex flex-col items-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          data-ocid="dashboard-empty-state"
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
            <Droplets className="h-7 w-7 text-primary" aria-hidden="true" />
          </div>
          <div>
            <p className="font-semibold text-foreground text-lg">
              Not registered yet
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Register as a donor so others can find you when they need your
              blood type.
            </p>
          </div>
          <Button asChild data-ocid="dashboard-register-cta">
            <Link to="/register">Register as a Donor</Link>
          </Button>
        </motion.div>
      )}

      {!isLoading && !isError && profile && !editing && (
        <motion.div
          className="bg-card rounded-xl border border-border shadow-sm overflow-hidden"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* Profile header stripe */}
          <div className="bg-primary px-6 py-5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/20 text-primary-foreground font-bold text-sm">
                {formatBloodGroup(profile.bloodGroup)}
              </div>
              <div>
                <p className="font-bold text-primary-foreground text-lg leading-tight">
                  {profile.name}
                </p>
                <Badge variant="secondary" className="mt-0.5 text-xs">
                  Active Donor
                </Badge>
              </div>
            </div>
            <Button
              size="sm"
              variant="secondary"
              onClick={startEditing}
              data-ocid="dashboard-edit-btn"
              aria-label="Edit profile"
            >
              <Pencil className="h-3.5 w-3.5 mr-1.5" aria-hidden="true" />
              Edit
            </Button>
          </div>

          {/* Profile details */}
          <div className="px-6 py-5 flex flex-col gap-4">
            {[
              {
                label: "Blood Group",
                value: formatBloodGroup(profile.bloodGroup),
              },
              { label: "Phone Number", value: profile.phone, mono: true },
              { label: "Age", value: `${profile.age.toString()} years` },
            ].map((row) => (
              <div
                key={row.label}
                className="flex items-center justify-between"
              >
                <span className="text-sm text-muted-foreground">
                  {row.label}
                </span>
                <span
                  className={`text-sm font-semibold text-foreground ${row.mono ? "font-mono" : ""}`}
                >
                  {row.value}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {editing && (
        <motion.div
          className="bg-card rounded-xl border border-border shadow-sm p-6"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.25 }}
        >
          <form
            onSubmit={handleSave}
            noValidate
            className="flex flex-col gap-5"
          >
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="edit-name">Full Name</Label>
              <Input
                id="edit-name"
                value={form.name}
                onChange={(e) =>
                  setForm((f) => ({ ...f, name: e.target.value }))
                }
                required
                data-ocid="dashboard-name-input"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="edit-phone">Phone Number</Label>
              <Input
                id="edit-phone"
                type="tel"
                value={form.phone}
                onChange={(e) =>
                  setForm((f) => ({ ...f, phone: e.target.value }))
                }
                required
                data-ocid="dashboard-phone-input"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="edit-age">Age</Label>
              <Input
                id="edit-age"
                type="number"
                min={18}
                max={65}
                value={form.age}
                onChange={(e) =>
                  setForm((f) => ({ ...f, age: e.target.value }))
                }
                required
                data-ocid="dashboard-age-input"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="edit-blood">Blood Group</Label>
              <Select
                value={form.bloodGroup}
                onValueChange={(v) =>
                  setForm((f) => ({ ...f, bloodGroup: v as BloodGroup }))
                }
              >
                <SelectTrigger
                  id="edit-blood"
                  data-ocid="dashboard-blood-group-select"
                >
                  <SelectValue placeholder="Select blood group" />
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

            <div className="flex gap-3 pt-1">
              <Button
                type="submit"
                disabled={isPending}
                className="flex-1"
                data-ocid="dashboard-save-btn"
              >
                <Check className="mr-1.5 h-4 w-4" aria-hidden="true" />
                {isPending ? "Saving…" : "Save Changes"}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={cancelEdit}
                disabled={isPending}
                data-ocid="dashboard-cancel-btn"
              >
                <X className="mr-1.5 h-4 w-4" aria-hidden="true" />
                Cancel
              </Button>
            </div>
          </form>
        </motion.div>
      )}
    </div>
  );
}
