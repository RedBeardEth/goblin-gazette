import type { ClassValue } from "clsx";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function padAddress(address: string) {
  if (address !== "") {
    const length = address.length;
    const neededLength = 66 - length;
    let zeros = "";
    for (let i = 0; i < neededLength; i++) {
      zeros += "0";
    }
    const newHex = address.substring(0, 2) + zeros + address.substring(2);
    return newHex;
  } else {
    return "";
  }
}

export function shortenHex(hexString: string, numDigits = 6) {
  if (hexString.length <= numDigits) {
    return hexString;
  }

  const halfDigits = Math.floor(numDigits / 2);
  const firstHalf = hexString.slice(0, halfDigits);
  const secondHalf = hexString.slice(-halfDigits);
  return `${firstHalf}...${secondHalf}`;
}

export function buildQueryString(queryObject: any) {
  const queryParams = Object.entries(queryObject)
    .map(([key, value]: any) => {
      if (typeof value === "object") {
        return Object.entries(value)
          .map(
            ([subKey, subValue]: any) =>
              `${encodeURIComponent(key)}[${encodeURIComponent(
                subKey,
              )}]=${encodeURIComponent(subValue)}`,
          )
          .join("&");
      }
      return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
    })
    .join("&")
    .replace(/%2B/g, "+");

  return `${queryParams}`;
}