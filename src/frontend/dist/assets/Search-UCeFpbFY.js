import { r as reactExports, j as jsxRuntimeExports, D as Droplets, B as Button, a as LoadingSpinner } from "./index-9lu4xFl8.js";
import { u as useSearchDonors, S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem, E as ErrorMessage } from "./useDonor-DHenYLAp.js";
import { S as Search, U as Users, D as DonorCard } from "./DonorCard-BNgKHNCt.js";
import { m as motion, a as BLOOD_GROUP_OPTIONS } from "./donor-BYYeYqaa.js";
import "./badge-C4jo9piX.js";
function SearchPage() {
  const [selected, setSelected] = reactExports.useState(null);
  const [searched, setSearched] = reactExports.useState(null);
  const { data: donors, isLoading, isError, error } = useSearchDonors(searched);
  function handleSearch() {
    if (selected) setSearched(selected);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-4 sm:px-6 py-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        className: "mb-8",
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.4 },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Droplets, { className: "h-6 w-6 text-primary", "aria-hidden": "true" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl md:text-3xl font-bold font-display text-foreground", children: "Find Blood Donors" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Search by blood group to find registered donors and their contact numbers." })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        className: "bg-card rounded-xl border border-border shadow-sm p-6 mb-8",
        initial: { opacity: 0, y: 12 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.4, delay: 0.1 },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "label",
              {
                className: "block text-sm font-medium text-foreground mb-1.5",
                htmlFor: "blood-group-select",
                children: "Select Blood Group"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Select,
              {
                value: selected ?? "",
                onValueChange: (v) => setSelected(v),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    SelectTrigger,
                    {
                      id: "blood-group-select",
                      className: "w-full",
                      "data-ocid": "search-blood-group-select",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Choose a blood group…" })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: BLOOD_GROUP_OPTIONS.map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: opt.value, children: opt.label }, opt.value)) })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sm:self-end", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              onClick: handleSearch,
              disabled: !selected || isLoading,
              className: "w-full sm:w-auto",
              "data-ocid": "search-submit",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "mr-2 h-4 w-4", "aria-hidden": "true" }),
                "Search Donors"
              ]
            }
          ) })
        ] })
      }
    ),
    isLoading && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingSpinner, { size: "lg", label: "Searching donors…" }) }),
    isError && /* @__PURE__ */ jsxRuntimeExports.jsx(
      ErrorMessage,
      {
        message: error instanceof Error ? error.message : "Failed to search donors",
        className: "mb-6"
      }
    ),
    !isLoading && searched && donors && /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.3 },
        children: donors.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex flex-col items-center justify-center py-16 text-center gap-4",
            "data-ocid": "empty-state-search",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-14 w-14 items-center justify-center rounded-full bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Users,
                {
                  className: "h-7 w-7 text-muted-foreground",
                  "aria-hidden": "true"
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground", children: "No donors found" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "No registered donors for this blood group yet. Try another group or check back later." })
              ] })
            ]
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-4 text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-4 w-4", "aria-hidden": "true" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "Found",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: donors.length }),
              " ",
              donors.length === 1 ? "donor" : "donors"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-4",
              "data-ocid": "search-results",
              children: donors.map((donor, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  initial: { opacity: 0, y: 14 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: i * 0.07 },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(DonorCard, { donor })
                },
                donor.id.toText()
              ))
            }
          )
        ] })
      }
    ),
    !searched && !isLoading && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center py-16 text-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-14 w-14 items-center justify-center rounded-full bg-primary/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "h-7 w-7 text-primary", "aria-hidden": "true" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-foreground", children: "Select a blood group to search" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground max-w-xs", children: "Choose from any of the 8 blood groups above to find donors who are available in the community." })
    ] })
  ] });
}
export {
  SearchPage as default
};
