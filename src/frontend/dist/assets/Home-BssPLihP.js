import { c as createLucideIcon, j as jsxRuntimeExports, D as Droplets, B as Button, L as Link } from "./index-9lu4xFl8.js";
import { B as Badge } from "./badge-C4jo9piX.js";
import { S as Search, U as Users, P as Phone, D as DonorCard } from "./DonorCard-BNgKHNCt.js";
import { m as motion, B as BloodGroup } from "./donor-BYYeYqaa.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
];
const ArrowRight = createLucideIcon("arrow-right", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
      key: "c3ymky"
    }
  ]
];
const Heart = createLucideIcon("heart", __iconNode);
const SAMPLE_DONORS = [
  {
    id: {
      toText: () => "1",
      toUint8Array: () => new Uint8Array(),
      compareTo: () => "eq",
      isAnonymous: () => false,
      toJSON: () => "1"
    },
    name: "Riya Sharma",
    bloodGroup: BloodGroup.APos,
    phone: "+91 98765 43210",
    age: 26n,
    registeredAt: BigInt(Date.now())
  },
  {
    id: {
      toText: () => "2",
      toUint8Array: () => new Uint8Array(),
      compareTo: () => "eq",
      isAnonymous: () => false,
      toJSON: () => "2"
    },
    name: "Arjun Patel",
    bloodGroup: BloodGroup.OPos,
    phone: "+91 87654 32109",
    age: 31n,
    registeredAt: BigInt(Date.now())
  },
  {
    id: {
      toText: () => "3",
      toUint8Array: () => new Uint8Array(),
      compareTo: () => "eq",
      isAnonymous: () => false,
      toJSON: () => "3"
    },
    name: "Meera Nair",
    bloodGroup: BloodGroup.BPos,
    phone: "+91 76543 21098",
    age: 24n,
    registeredAt: BigInt(Date.now())
  },
  {
    id: {
      toText: () => "4",
      toUint8Array: () => new Uint8Array(),
      compareTo: () => "eq",
      isAnonymous: () => false,
      toJSON: () => "4"
    },
    name: "Kiran Reddy",
    bloodGroup: BloodGroup.ABPos,
    phone: "+91 65432 10987",
    age: 29n,
    registeredAt: BigInt(Date.now())
  },
  {
    id: {
      toText: () => "5",
      toUint8Array: () => new Uint8Array(),
      compareTo: () => "eq",
      isAnonymous: () => false,
      toJSON: () => "5"
    },
    name: "Sunita Desai",
    bloodGroup: BloodGroup.ANeg,
    phone: "+91 54321 09876",
    age: 33n,
    registeredAt: BigInt(Date.now())
  },
  {
    id: {
      toText: () => "6",
      toUint8Array: () => new Uint8Array(),
      compareTo: () => "eq",
      isAnonymous: () => false,
      toJSON: () => "6"
    },
    name: "Dev Malhotra",
    bloodGroup: BloodGroup.ONeg,
    phone: "+91 43210 98765",
    age: 27n,
    registeredAt: BigInt(Date.now())
  }
];
const STATS = [
  { icon: Users, value: "2,400+", label: "Registered Donors" },
  { icon: Heart, value: "1,800+", label: "Lives Saved" },
  { icon: Droplets, value: "8", label: "Blood Groups Covered" },
  { icon: Phone, value: "24/7", label: "Contact Available" }
];
const HOW_IT_WORKS = [
  {
    step: "1",
    title: "Register as a Donor",
    desc: "Create your donor profile with your blood group, phone, and basic details."
  },
  {
    step: "2",
    title: "Search by Blood Group",
    desc: "Find donors matching a specific blood group instantly — no account needed to search."
  },
  {
    step: "3",
    title: "Connect Directly",
    desc: "Call the donor directly using the phone number shown in search results."
  }
];
function Home() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-card border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-4 sm:px-6 py-14 md:py-20 flex flex-col md:flex-row items-center gap-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          className: "flex-1 min-w-0",
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Badge,
              {
                variant: "outline",
                className: "mb-4 border-primary/40 text-primary bg-primary/5",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Droplets, { className: "mr-1.5 h-3 w-3", "aria-hidden": "true" }),
                  "Blood Donation Platform"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-4xl md:text-5xl font-bold font-display leading-tight tracking-tight mb-4 text-foreground", children: [
              "Connecting Heroes,",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "Saving Lives" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground mb-8 max-w-lg", children: "Find registered blood donors in your community. Search by blood group and connect directly — fast, simple, and free." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "lg", asChild: true, "data-ocid": "hero-search-cta", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/search", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "mr-2 h-4 w-4", "aria-hidden": "true" }),
                "Search Donors"
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  size: "lg",
                  variant: "outline",
                  asChild: true,
                  "data-ocid": "hero-register-cta",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/register", children: [
                    "Become a Donor",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 h-4 w-4", "aria-hidden": "true" })
                  ] })
                }
              )
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          className: "shrink-0 w-full max-w-xs md:max-w-sm",
          initial: { opacity: 0, x: 24 },
          animate: { opacity: 1, x: 0 },
          transition: { duration: 0.5, delay: 0.15 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: "/assets/generated/bloodlink-hero.dim_800x600.png",
              alt: "Blood donation illustration showing community support",
              className: "w-full rounded-2xl shadow-lg"
            }
          )
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-primary py-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-6xl px-4 sm:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-6", children: STATS.map((stat, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        className: "flex flex-col items-center text-center gap-2",
        initial: { opacity: 0, y: 16 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { delay: i * 0.1 },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            stat.icon,
            {
              className: "h-6 w-6 text-primary-foreground/70",
              "aria-hidden": "true"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl font-bold text-primary-foreground", children: stat.value }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-primary-foreground/70", children: stat.label })
        ]
      },
      stat.label
    )) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background py-14", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-4 sm:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          className: "text-center mb-10",
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-3xl font-bold font-display text-foreground", children: "How BloodLink Works" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-2", children: "Simple steps to connect donors and recipients" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-6", children: HOW_IT_WORKS.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          className: "bg-card rounded-xl border border-border p-6 flex flex-col gap-3 shadow-sm",
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: i * 0.1 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 text-primary font-bold text-sm", children: item.step }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-foreground", children: item.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: item.desc })
          ]
        },
        item.step
      )) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-muted/30 py-14", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-4 sm:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          className: "flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-3",
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-3xl font-bold font-display text-foreground", children: "Recent Donors" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-1", children: "Community members ready to help" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", asChild: true, "data-ocid": "view-all-donors", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/search", children: [
              "View All",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-1.5 h-4 w-4", "aria-hidden": "true" })
            ] }) })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-4",
          "data-ocid": "donor-list",
          children: SAMPLE_DONORS.map((donor, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 16 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { delay: i * 0.07 },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(DonorCard, { donor })
            },
            donor.id.toText()
          ))
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-card border-t border-border py-14", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-2xl px-4 sm:px-6 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, scale: 0.96 },
        whileInView: { opacity: 1, scale: 1 },
        viewport: { once: true },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Heart,
            {
              className: "mx-auto h-10 w-10 text-primary mb-4",
              "aria-hidden": "true"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-3xl font-bold font-display text-foreground mb-3", children: "Ready to Save a Life?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-6", children: "Register as a donor today. Your blood could be someone's lifeline." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "lg", asChild: true, "data-ocid": "bottom-register-cta", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/register", children: "Register as Donor" }) })
        ]
      }
    ) }) })
  ] });
}
export {
  Home as default
};
