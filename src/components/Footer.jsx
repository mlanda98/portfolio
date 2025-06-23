import React from "react";
export default function Footer() {
  return (
    <footer className="py-6 bg-slate-100 text-center text-slate-500 text-sm">
      &copy; {new Date().getFullYear()} Mayra Landa. All rights reserved.
    </footer>
  );
}
