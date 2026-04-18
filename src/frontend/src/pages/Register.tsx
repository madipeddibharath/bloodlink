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
import { useNavigate } from "@tanstack/react-router";
import { Droplets, LogIn, UserPlus } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { ErrorMessage } from "../components/ErrorMessage";
import { useAuth } from "../hooks/useAuth";
import { useRegisterDonor } from "../hooks/useDonor";
import { BLOOD_GROUP_OPTIONS, type BloodGroup } from "../types/donor";

export default function RegisterPage() {
  const navigate = useNavigate();
  const { isAuthenticated, login, isLoggingIn } = useAuth();
  const { mutateAsync: registerDonor, isPending, error } = useRegisterDonor();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    age: "",
    bloodGroup: "" as BloodGroup | "",
  });

  function handleChange(field: keyof typeof form, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.phone || !form.age || !form.bloodGroup) return;
    const ageNum = Number.parseInt(form.age, 10);
    if (Number.isNaN(ageNum) || ageNum < 18 || ageNum > 65) {
      toast.error("Age must be between 18 and 65 to donate blood.");
      return;
    }
    try {
      await registerDonor({
        name: form.name.trim(),
        phone: form.phone.trim(),
        age: BigInt(ageNum),
        bloodGroup: form.bloodGroup as BloodGroup,
      });
      toast.success(
        "You're registered as a donor! Thank you for saving lives.",
      );
      navigate({ to: "/dashboard" });
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Registration failed");
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
            Login to Register
          </h1>
          <p className="text-muted-foreground text-sm">
            You need to log in with Internet Identity before registering as a
            blood donor.
          </p>
        </div>
        <Button
          onClick={login}
          disabled={isLoggingIn}
          data-ocid="register-login-prompt"
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
          <UserPlus className="h-6 w-6 text-primary" aria-hidden="true" />
          <h1 className="text-2xl md:text-3xl font-bold font-display text-foreground">
            Donor Registration
          </h1>
        </div>
        <p className="text-muted-foreground">
          Register your profile so others can find you when they need your blood
          type.
        </p>
      </motion.div>

      <motion.div
        className="bg-card rounded-xl border border-border shadow-sm p-6"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <form
          onSubmit={handleSubmit}
          noValidate
          className="flex flex-col gap-5"
        >
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              type="text"
              placeholder="e.g. Priya Sharma"
              value={form.name}
              onChange={(e) => handleChange("name", e.target.value)}
              required
              autoComplete="name"
              data-ocid="register-name-input"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="e.g. +91 98765 43210"
              value={form.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              required
              autoComplete="tel"
              data-ocid="register-phone-input"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <Label htmlFor="age">Age</Label>
            <Input
              id="age"
              type="number"
              placeholder="e.g. 28"
              min={18}
              max={65}
              value={form.age}
              onChange={(e) => handleChange("age", e.target.value)}
              required
              data-ocid="register-age-input"
            />
            <p className="text-xs text-muted-foreground">
              Must be 18–65 years old to donate
            </p>
          </div>

          <div className="flex flex-col gap-1.5">
            <Label htmlFor="blood-group">Blood Group</Label>
            <Select
              value={form.bloodGroup}
              onValueChange={(v) => handleChange("bloodGroup", v)}
              required
            >
              <SelectTrigger
                id="blood-group"
                data-ocid="register-blood-group-select"
              >
                <SelectValue placeholder="Select your blood group" />
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

          {error && (
            <ErrorMessage
              message={
                error instanceof Error ? error.message : "Registration failed"
              }
            />
          )}

          <Button
            type="submit"
            disabled={
              isPending ||
              !form.name ||
              !form.phone ||
              !form.age ||
              !form.bloodGroup
            }
            className="w-full"
            data-ocid="register-submit"
          >
            <Droplets className="mr-2 h-4 w-4" aria-hidden="true" />
            {isPending ? "Registering…" : "Register as Donor"}
          </Button>
        </form>
      </motion.div>
    </div>
  );
}
