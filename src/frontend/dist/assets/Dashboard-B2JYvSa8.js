import { c as createLucideIcon, j as jsxRuntimeExports, e as cn, b as useAuth, r as reactExports, B as Button, D as Droplets, L as Link, X, d as ue } from "./index-9lu4xFl8.js";
import { B as Badge } from "./badge-C4jo9piX.js";
import { L as LogIn, a as Label, I as Input } from "./label-htRzWeVA.js";
import { f as useGetMyProfile, g as useUpdateDonor, E as ErrorMessage, S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem, C as Check } from "./useDonor-DHenYLAp.js";
import { m as motion, f as formatBloodGroup, a as BLOOD_GROUP_OPTIONS } from "./donor-BYYeYqaa.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["rect", { width: "7", height: "9", x: "3", y: "3", rx: "1", key: "10lvy0" }],
  ["rect", { width: "7", height: "5", x: "14", y: "3", rx: "1", key: "16une8" }],
  ["rect", { width: "7", height: "9", x: "14", y: "12", rx: "1", key: "1hutg5" }],
  ["rect", { width: "7", height: "5", x: "3", y: "16", rx: "1", key: "ldoo1y" }]
];
const LayoutDashboard = createLucideIcon("layout-dashboard", __iconNode$1);
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
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
const Pencil = createLucideIcon("pencil", __iconNode);
function Skeleton({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "data-slot": "skeleton",
      className: cn("bg-accent animate-pulse rounded-md", className),
      ...props
    }
  );
}
function DashboardPage() {
  const { isAuthenticated, login, isLoggingIn } = useAuth();
  const { data: profile, isLoading, isError } = useGetMyProfile();
  const { mutateAsync: updateDonor, isPending } = useUpdateDonor();
  const [editing, setEditing] = reactExports.useState(false);
  const [form, setForm] = reactExports.useState({
    name: "",
    phone: "",
    age: "",
    bloodGroup: ""
  });
  function startEditing() {
    if (!profile) return;
    setForm({
      name: profile.name,
      phone: profile.phone,
      age: profile.age.toString(),
      bloodGroup: profile.bloodGroup
    });
    setEditing(true);
  }
  function cancelEdit() {
    setEditing(false);
  }
  async function handleSave(e) {
    e.preventDefault();
    if (!form.name || !form.phone || !form.age || !form.bloodGroup) return;
    const ageNum = Number.parseInt(form.age, 10);
    if (Number.isNaN(ageNum) || ageNum < 18 || ageNum > 65) {
      ue.error("Age must be between 18 and 65.");
      return;
    }
    try {
      await updateDonor({
        name: form.name.trim(),
        phone: form.phone.trim(),
        age: BigInt(ageNum),
        bloodGroup: form.bloodGroup
      });
      ue.success("Profile updated successfully!");
      setEditing(false);
    } catch (err) {
      ue.error(err instanceof Error ? err.message : "Update failed");
    }
  }
  if (!isAuthenticated) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-md px-4 sm:px-6 py-16 text-center flex flex-col items-center gap-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-14 w-14 items-center justify-center rounded-full bg-primary/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LogIn, { className: "h-7 w-7 text-primary", "aria-hidden": "true" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-bold text-foreground mb-2", children: "Login to View Dashboard" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: "Access your donor profile and manage your details by logging in." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          onClick: login,
          disabled: isLoggingIn,
          "data-ocid": "dashboard-login-prompt",
          children: isLoggingIn ? "Connecting…" : "Login / Register Account"
        }
      )
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-lg px-4 sm:px-6 py-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        className: "mb-8",
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.4 },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              LayoutDashboard,
              {
                className: "h-6 w-6 text-primary",
                "aria-hidden": "true"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl md:text-3xl font-bold font-display text-foreground", children: "My Donor Profile" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Manage your donor registration details here." })
        ]
      }
    ),
    isLoading && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card rounded-xl border border-border shadow-sm p-6 flex flex-col gap-4", children: [1, 2, 3, 4].map((n) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-20 rounded" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-10 w-full rounded-md" })
    ] }, n)) }),
    isError && /* @__PURE__ */ jsxRuntimeExports.jsx(ErrorMessage, { message: "Failed to load your profile. Please try again." }),
    !isLoading && !isError && !profile && !editing && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        className: "bg-card rounded-xl border border-border shadow-sm p-8 text-center flex flex-col items-center gap-4",
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        "data-ocid": "dashboard-empty-state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-14 w-14 items-center justify-center rounded-full bg-primary/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Droplets, { className: "h-7 w-7 text-primary", "aria-hidden": "true" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground text-lg", children: "Not registered yet" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Register as a donor so others can find you when they need your blood type." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, "data-ocid": "dashboard-register-cta", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/register", children: "Register as a Donor" }) })
        ]
      }
    ),
    !isLoading && !isError && profile && !editing && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        className: "bg-card rounded-xl border border-border shadow-sm overflow-hidden",
        initial: { opacity: 0, y: 12 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.4 },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-primary px-6 py-5 flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/20 text-primary-foreground font-bold text-sm", children: formatBloodGroup(profile.bloodGroup) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-primary-foreground text-lg leading-tight", children: profile.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "mt-0.5 text-xs", children: "Active Donor" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                size: "sm",
                variant: "secondary",
                onClick: startEditing,
                "data-ocid": "dashboard-edit-btn",
                "aria-label": "Edit profile",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { className: "h-3.5 w-3.5 mr-1.5", "aria-hidden": "true" }),
                  "Edit"
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-6 py-5 flex flex-col gap-4", children: [
            {
              label: "Blood Group",
              value: formatBloodGroup(profile.bloodGroup)
            },
            { label: "Phone Number", value: profile.phone, mono: true },
            { label: "Age", value: `${profile.age.toString()} years` }
          ].map((row) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex items-center justify-between",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: row.label }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: `text-sm font-semibold text-foreground ${row.mono ? "font-mono" : ""}`,
                    children: row.value
                  }
                )
              ]
            },
            row.label
          )) })
        ]
      }
    ),
    editing && /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        className: "bg-card rounded-xl border border-border shadow-sm p-6",
        initial: { opacity: 0, scale: 0.98 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 0.25 },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "form",
          {
            onSubmit: handleSave,
            noValidate: true,
            className: "flex flex-col gap-5",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "edit-name", children: "Full Name" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "edit-name",
                    value: form.name,
                    onChange: (e) => setForm((f) => ({ ...f, name: e.target.value })),
                    required: true,
                    "data-ocid": "dashboard-name-input"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "edit-phone", children: "Phone Number" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "edit-phone",
                    type: "tel",
                    value: form.phone,
                    onChange: (e) => setForm((f) => ({ ...f, phone: e.target.value })),
                    required: true,
                    "data-ocid": "dashboard-phone-input"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "edit-age", children: "Age" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "edit-age",
                    type: "number",
                    min: 18,
                    max: 65,
                    value: form.age,
                    onChange: (e) => setForm((f) => ({ ...f, age: e.target.value })),
                    required: true,
                    "data-ocid": "dashboard-age-input"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "edit-blood", children: "Blood Group" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Select,
                  {
                    value: form.bloodGroup,
                    onValueChange: (v) => setForm((f) => ({ ...f, bloodGroup: v })),
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        SelectTrigger,
                        {
                          id: "edit-blood",
                          "data-ocid": "dashboard-blood-group-select",
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select blood group" })
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: BLOOD_GROUP_OPTIONS.map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: opt.value, children: opt.label }, opt.value)) })
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 pt-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    type: "submit",
                    disabled: isPending,
                    className: "flex-1",
                    "data-ocid": "dashboard-save-btn",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "mr-1.5 h-4 w-4", "aria-hidden": "true" }),
                      isPending ? "Saving…" : "Save Changes"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    type: "button",
                    variant: "outline",
                    onClick: cancelEdit,
                    disabled: isPending,
                    "data-ocid": "dashboard-cancel-btn",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "mr-1.5 h-4 w-4", "aria-hidden": "true" }),
                      "Cancel"
                    ]
                  }
                )
              ] })
            ]
          }
        )
      }
    )
  ] });
}
export {
  DashboardPage as default
};
