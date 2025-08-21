export function trimString(val, totalLen = 18) {
  if (val.length <= totalLen) return val;

  // Take initials from words (e.g., "International Business Machines" → "IBM...")
  const words = val.split(" ");
  if (words.length > 1) {
    const initials = words.map((w) => w[0]).join("");
    return initials.length <= totalLen
      ? initials + "..."
      : initials.slice(0, totalLen) + "...";
  }

  // If single long word, slice it
  return val.slice(0, totalLen) + "...";
}
