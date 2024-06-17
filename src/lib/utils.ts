import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function cedulaValidation(cedula: string) {
  if (cedula.length !== 10) {
    return false;
  }

  const cedulaArray = cedula.split("").map(Number);

  let sum = 0;
  for (let i = 0; i < 9; i++) {
    let multiplier = i % 2 === 0 ? 2 : 1;
    let result = cedulaArray[i] * multiplier;
    sum += result >= 10 ? result - 9 : result;
  }

  let lastDigit = sum % 10 === 0 ? 0 : 10 - (sum % 10);
  let valid = lastDigit === cedulaArray[9];
  return valid;
}
