import { c as createLucideIcon, u as useNavigate, b as useAuth, r as reactExports, j as jsxRuntimeExports, B as Button, D as Droplets, d as ue } from "./index-9lu4xFl8.js";
import { L as LogIn, a as Label, I as Input } from "./label-htRzWeVA.js";
import { e as useRegisterDonor, S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem, E as ErrorMessage } from "./useDonor-DHenYLAp.js";
import { m as motion, a as BLOOD_GROUP_OPTIONS } from "./donor-BYYeYqaa.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["line", { x1: "19", x2: "19", y1: "8", y2: "14", key: "1bvyxn" }],
  ["line", { x1: "22", x2: "16", y1: "11", y2: "11", key: "1shjgl" }]
];
const UserPlus = createLucideIcon("user-plus", __iconNode);
function RegisterPage() {
  const navigate = useNavigate();
  const { isAuthenticated, login, isLoggingIn } = useAuth();
  const { mutateAsync: registerDonor, isPending, error } = useRegisterDonor();
  const [form, setForm] = reactExports.useState({
    name: "",
    phone: "",
    age: "",
    bloodGroup: ""
  });
  function handleChange(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }
  async function handleSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.phone || !form.age || !form.bloodGroup) return;
    const ageNum = Number.parseInt(form.age, 10);
    if (Number.isNaN(ageNum) || ageNum < 18 || ageNum > 65) {
      ue.error("Age must be between 18 and 65 to donate blood.");
      return;
    }
    try {
      await registerDonor({
        name: form.name.trim(),
        phone: form.phone.trim(),
        age: BigInt(ageNum),
        bloodGroup: form.bloodGroup
      });
      ue.success(
        "You're registered as a donor! Thank you for saving lives."
      );
      navigate({ to: "/dashboard" });
    } catch (err) {
      ue.error(err instanceof Error ? err.message : "Registration failed");
    }
  }
  if (!isAuthenticated) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-md px-4 sm:px-6 py-16 text-center flex flex-col items-center gap-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-14 w-14 items-center justify-center rounded-full bg-primary/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LogIn, { className: "h-7 w-7 text-primary", "aria-hidden": "true" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-bold text-foreground mb-2", children: "Login to Register" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: "You need to log in with Internet Identity before registering as a blood donor." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          onClick: login,
          disabled: isLoggingIn,
          "data-ocid": "register-login-prompt",
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
            /* @__PURE__ */ jsxRuntimeExports.jsx(UserPlus, { className: "h-6 w-6 text-primary", "aria-hidden": "true" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl md:text-3xl font-bold font-display text-foreground", children: "Donor Registration" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Register your profile so others can find you when they need your blood type." })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        className: "bg-card rounded-xl border border-border shadow-sm p-6",
        initial: { opacity: 0, y: 12 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.4, delay: 0.1 },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "form",
          {
            onSubmit: handleSubmit,
            noValidate: true,
            className: "flex flex-col gap-5",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "name", children: "Full Name" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "name",
                    type: "text",
                    placeholder: "e.g. Priya Sharma",
                    value: form.name,
                    onChange: (e) => handleChange("name", e.target.value),
                    required: true,
                    autoComplete: "name",
                    "data-ocid": "register-name-input"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "phone", children: "Phone Number" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "phone",
                    type: "tel",
                    placeholder: "e.g. +91 98765 43210",
                    value: form.phone,
                    onChange: (e) => handleChange("phone", e.target.value),
                    required: true,
                    autoComplete: "tel",
                    "data-ocid": "register-phone-input"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "age", children: "Age" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "age",
                    type: "number",
                    placeholder: "e.g. 28",
                    min: 18,
                    max: 65,
                    value: form.age,
                    onChange: (e) => handleChange("age", e.target.value),
                    required: true,
                    "data-ocid": "register-age-input"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Must be 18–65 years old to donate" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "blood-group", children: "Blood Group" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Select,
                  {
                    value: form.bloodGroup,
                    onValueChange: (v) => handleChange("bloodGroup", v),
                    required: true,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        SelectTrigger,
                        {
                          id: "blood-group",
                          "data-ocid": "register-blood-group-select",
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select your blood group" })
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: BLOOD_GROUP_OPTIONS.map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: opt.value, children: opt.label }, opt.value)) })
                    ]
                  }
                )
              ] }),
              error && /* @__PURE__ */ jsxRuntimeExports.jsx(
                ErrorMessage,
                {
                  message: error instanceof Error ? error.message : "Registration failed"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  type: "submit",
                  disabled: isPending || !form.name || !form.phone || !form.age || !form.bloodGroup,
                  className: "w-full",
                  "data-ocid": "register-submit",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Droplets, { className: "mr-2 h-4 w-4", "aria-hidden": "true" }),
                    isPending ? "Registering…" : "Register as Donor"
                  ]
                }
              )
            ]
          }
        )
      }
    )
  ] });
}
export {
  RegisterPage as default
};
