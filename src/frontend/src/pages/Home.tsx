import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Droplets,
  Heart,
  Phone,
  Search,
  Users,
} from "lucide-react";
import { motion } from "motion/react";
import { DonorCard } from "../components/DonorCard";
import type { Donor } from "../types/donor";
import { BloodGroup } from "../types/donor";

const SAMPLE_DONORS: Donor[] = [
  {
    id: {
      toText: () => "1",
      toUint8Array: () => new Uint8Array(),
      compareTo: () => "eq",
      isAnonymous: () => false,
      toJSON: () => "1",
    } as unknown as import("../backend").UserId,
    name: "Riya Sharma",
    bloodGroup: BloodGroup.APos,
    phone: "+91 98765 43210",
    age: 26n,
    registeredAt: BigInt(Date.now()),
  },
  {
    id: {
      toText: () => "2",
      toUint8Array: () => new Uint8Array(),
      compareTo: () => "eq",
      isAnonymous: () => false,
      toJSON: () => "2",
    } as unknown as import("../backend").UserId,
    name: "Arjun Patel",
    bloodGroup: BloodGroup.OPos,
    phone: "+91 87654 32109",
    age: 31n,
    registeredAt: BigInt(Date.now()),
  },
  {
    id: {
      toText: () => "3",
      toUint8Array: () => new Uint8Array(),
      compareTo: () => "eq",
      isAnonymous: () => false,
      toJSON: () => "3",
    } as unknown as import("../backend").UserId,
    name: "Meera Nair",
    bloodGroup: BloodGroup.BPos,
    phone: "+91 76543 21098",
    age: 24n,
    registeredAt: BigInt(Date.now()),
  },
  {
    id: {
      toText: () => "4",
      toUint8Array: () => new Uint8Array(),
      compareTo: () => "eq",
      isAnonymous: () => false,
      toJSON: () => "4",
    } as unknown as import("../backend").UserId,
    name: "Kiran Reddy",
    bloodGroup: BloodGroup.ABPos,
    phone: "+91 65432 10987",
    age: 29n,
    registeredAt: BigInt(Date.now()),
  },
  {
    id: {
      toText: () => "5",
      toUint8Array: () => new Uint8Array(),
      compareTo: () => "eq",
      isAnonymous: () => false,
      toJSON: () => "5",
    } as unknown as import("../backend").UserId,
    name: "Sunita Desai",
    bloodGroup: BloodGroup.ANeg,
    phone: "+91 54321 09876",
    age: 33n,
    registeredAt: BigInt(Date.now()),
  },
  {
    id: {
      toText: () => "6",
      toUint8Array: () => new Uint8Array(),
      compareTo: () => "eq",
      isAnonymous: () => false,
      toJSON: () => "6",
    } as unknown as import("../backend").UserId,
    name: "Dev Malhotra",
    bloodGroup: BloodGroup.ONeg,
    phone: "+91 43210 98765",
    age: 27n,
    registeredAt: BigInt(Date.now()),
  },
];

const STATS = [
  { icon: Users, value: "2,400+", label: "Registered Donors" },
  { icon: Heart, value: "1,800+", label: "Lives Saved" },
  { icon: Droplets, value: "8", label: "Blood Groups Covered" },
  { icon: Phone, value: "24/7", label: "Contact Available" },
];

const HOW_IT_WORKS = [
  {
    step: "1",
    title: "Register as a Donor",
    desc: "Create your donor profile with your blood group, phone, and basic details.",
  },
  {
    step: "2",
    title: "Search by Blood Group",
    desc: "Find donors matching a specific blood group instantly — no account needed to search.",
  },
  {
    step: "3",
    title: "Connect Directly",
    desc: "Call the donor directly using the phone number shown in search results.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-card border-b border-border">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14 md:py-20 flex flex-col md:flex-row items-center gap-10">
          <motion.div
            className="flex-1 min-w-0"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge
              variant="outline"
              className="mb-4 border-primary/40 text-primary bg-primary/5"
            >
              <Droplets className="mr-1.5 h-3 w-3" aria-hidden="true" />
              Blood Donation Platform
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold font-display leading-tight tracking-tight mb-4 text-foreground">
              Connecting Heroes,
              <br />
              <span className="text-primary">Saving Lives</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              Find registered blood donors in your community. Search by blood
              group and connect directly — fast, simple, and free.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" asChild data-ocid="hero-search-cta">
                <Link to="/search">
                  <Search className="mr-2 h-4 w-4" aria-hidden="true" />
                  Search Donors
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                data-ocid="hero-register-cta"
              >
                <Link to="/register">
                  Become a Donor
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="shrink-0 w-full max-w-xs md:max-w-sm"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <img
              src="/assets/generated/bloodlink-hero.dim_800x600.png"
              alt="Blood donation illustration showing community support"
              className="w-full rounded-2xl shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary py-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="flex flex-col items-center text-center gap-2"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <stat.icon
                  className="h-6 w-6 text-primary-foreground/70"
                  aria-hidden="true"
                />
                <span className="text-2xl font-bold text-primary-foreground">
                  {stat.value}
                </span>
                <span className="text-sm text-primary-foreground/70">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-background py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold font-display text-foreground">
              How BloodLink Works
            </h2>
            <p className="text-muted-foreground mt-2">
              Simple steps to connect donors and recipients
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {HOW_IT_WORKS.map((item, i) => (
              <motion.div
                key={item.step}
                className="bg-card rounded-xl border border-border p-6 flex flex-col gap-3 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 text-primary font-bold text-sm">
                  {item.step}
                </div>
                <h3 className="font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Donors */}
      <section className="bg-muted/30 py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div
            className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-3"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div>
              <h2 className="text-2xl md:text-3xl font-bold font-display text-foreground">
                Recent Donors
              </h2>
              <p className="text-muted-foreground mt-1">
                Community members ready to help
              </p>
            </div>
            <Button variant="outline" asChild data-ocid="view-all-donors">
              <Link to="/search">
                View All{" "}
                <ArrowRight className="ml-1.5 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </motion.div>

          <div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
            data-ocid="donor-list"
          >
            {SAMPLE_DONORS.map((donor, i) => (
              <motion.div
                key={donor.id.toText()}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
              >
                <DonorCard donor={donor} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-card border-t border-border py-14">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Heart
              className="mx-auto h-10 w-10 text-primary mb-4"
              aria-hidden="true"
            />
            <h2 className="text-2xl md:text-3xl font-bold font-display text-foreground mb-3">
              Ready to Save a Life?
            </h2>
            <p className="text-muted-foreground mb-6">
              Register as a donor today. Your blood could be someone's lifeline.
            </p>
            <Button size="lg" asChild data-ocid="bottom-register-cta">
              <Link to="/register">Register as Donor</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
