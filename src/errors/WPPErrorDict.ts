export enum WPPErrorDictionary {
    // Full Errors
    "WPT-1mY" = "No title text was included with W++.",
    "WPI-2fY" = "W++ is already injected. Please refresh and then reinject.",
    "WPF-3mY" = "W++ failed to inject it's CSS. Try reinjecting.",
    "WPF-4MY" = "W++ failed to inject it's JS. Reinject W++.",
    "WPF-5fN" = "W++ failed to inject. Try reinjecting.",
    "WPA-6mN" = "W++ found W++ CSS already. Attempting to override.",
    "WPA-7mN" = "W++ found W++ JS already. Attempting to override.",
    "WPF-8MY" = "W++ failed to find JS in your theme.",
    "WPF-9MY" = "W++ failed to find CSS in your theme.",
    // Err Types
    "T" = "Title Error",
    "F" = "Failure",
    "C" = "Crash",
    "A" = "Already found",
    "I" = "Already injected",
    // Err Spec
    "f" = "Fatal",
    "M" = "Major error",
    "m" = "Minor error",
    "B" = "Potential bug",
    // Err User-fixable
    "Y" = "User fixable",
    "N" = "Internal: Not user fixable"
}
