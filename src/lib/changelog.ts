export type ChangeKind = "new" | "improved" | "fixed";

export type ChangeGroup = {
  title: string;
  items: { kind: ChangeKind; text: string }[];
};

export type Release = {
  date: string;
  title: string;
  groups: ChangeGroup[];
  planned?: string[];
};

export const releases: Release[] = [
  {
    date: "17 November 2026",
    title: "New camera, real filters and PDF tools",
    groups: [
      {
        title: "Camera",
        items: [
          { kind: "new", text: "A new document camera with close, flash, HD and grid controls, a 3:4 preview and a teal shutter." },
          { kind: "new", text: "Mode tabs in the camera: Extract Text, Single, Batch, ID Card and QR Code." },
          { kind: "new", text: "Single mode opens the editor as soon as you take the photo." },
          { kind: "new", text: "Batch mode: shoot page after page, see the count on the thumbnail, undo the last shot, and tap the thumbnail to edit." },
          { kind: "new", text: "Import Images and Import Files (PDF) straight from the camera." },
          { kind: "improved", text: "The camera button on Home now opens the new camera." },
        ],
      },
      {
        title: "Filters and editor",
        items: [
          { kind: "new", text: "New filters: Original, Lighten, Enhance, No Shadow, B&W, Eco, Grayscale and Invert." },
          { kind: "improved", text: "Filters now process the real pixels: shadows are reduced, paper turns white and B&W text is cleaner." },
          { kind: "improved", text: "Each filter tile shows a live preview of the current page." },
          { kind: "new", text: "Tap the selected filter again to adjust Contrast, Brightness and Details (0 to 100)." },
          { kind: "improved", text: "The preview, the saved image and the PDF now look the same." },
          { kind: "improved", text: "Redesigned editor: default name, delete icon on the page, page navigation, Compare and a scrolling toolbar." },
          { kind: "new", text: "Add Page → Scan adds a new page from the camera inside the editor." },
        ],
      },
      {
        title: "Re-edit saved documents",
        items: [
          { kind: "new", text: "Edit on a saved document reopens it with its earlier filter, adjustments, rotation and crop." },
          { kind: "new", text: "Crop starts from the full original photo and the previous corners, so you can widen a crop later." },
          { kind: "new", text: "Edit a single page straight from the page viewer." },
        ],
      },
      {
        title: "PDF",
        items: [
          { kind: "new", text: "Import PDF opens the PDF's pages in the editor." },
          { kind: "new", text: "Merge PDF joins two or more PDFs into one document." },
          { kind: "new", text: "Split PDF saves chosen pages as a new document, and can remove them from the original." },
          { kind: "new", text: "Import a PDF into Sign and Watermark." },
          { kind: "new", text: "Split / extract pages from the document menu." },
          { kind: "new", text: "Compress PDF in Share: choose Balanced or Smallest, see how much smaller it got, then share or save to Downloads." },
        ],
      },
      {
        title: "App Lock",
        items: [
          { kind: "improved", text: "The PIN is asked again after you leave the app for more than 3 seconds, not only after a full restart." },
          { kind: "fixed", text: "Coming back from the camera, gallery or share sheet no longer locks the app." },
          { kind: "fixed", text: "Fingerprint and face unlock work, with a message when none is set up on the phone." },
          { kind: "improved", text: "Setting a PIN opens the keyboard and asks for the PIN twice." },
          { kind: "improved", text: "Turning the lock off or changing the PIN needs the current PIN." },
        ],
      },
      {
        title: "Bug fixes",
        items: [
          { kind: "fixed", text: "Saving with the Lighten or No Shadow filter no longer shows a database error." },
          { kind: "fixed", text: "Merged documents keep each page's original, uncropped photo." },
        ],
      },
    ],
    planned: [
      "Live page-edge detection in the camera preview",
      "AI clean-up filters (remove watermark, remove handwriting)",
      "Opening password-protected PDFs",
      "Compressing an outside PDF without importing it first",
    ],
  },
];
