import { Check, FileText, Printer } from "lucide-react";
/** Illustrative interface, not an actual product screenshot or financial record. */
export function CheckPrinterPreview() {
  return (
    <div
      role="img"
      aria-label="Illustrative check printing interface"
      className="mx-auto flex h-full w-full max-w-lg flex-col justify-center p-2 sm:p-5"
    >
      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="flex items-center gap-2 border-b border-slate-100 bg-slate-50 px-3 py-2 sm:px-4 sm:py-3 text-xs font-bold text-blue-950">
          <Printer className="h-4 w-4" /> Check Printer{" "}
          <span className="ml-auto text-[9px] font-medium uppercase tracking-wider text-slate-500">
            Illustration
          </span>
        </div>
        <div className="space-y-2 p-2 sm:space-y-4 sm:p-4">
          <div className="flex justify-between text-[10px] font-semibold text-slate-500">
            <span>Select template</span>
            <span className="text-emerald-700">Preview layout</span>
            <span>Print</span>
          </div>
          <div className="rounded-lg border border-blue-200 bg-blue-50/60 p-2 sm:p-4">
            <div className="flex justify-between text-xs font-bold text-blue-950">
              <span>Business check</span>
              <FileText className="h-4 w-4" />
            </div>
            <div className="mt-2 sm:mt-4 h-2 w-3/5 rounded bg-slate-300" />
            <div className="mt-2 sm:mt-3 h-2 w-4/5 rounded bg-slate-200" />
            <div className="mt-2 sm:mt-4 border-t border-dashed border-blue-200 pt-2 text-[9px] tracking-widest text-slate-500">
              SAMPLE / PRINT PREVIEW
            </div>
          </div>
          <div className="hidden items-center justify-between text-[10px] sm:flex">
            <span className="flex items-center gap-1 text-emerald-700">
              <Check className="h-3 w-3" /> Printer-friendly layout
            </span>
            <span className="rounded-md bg-blue-950 px-3 py-2 font-semibold text-white">
              Print preview
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
