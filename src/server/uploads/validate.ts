import { ALLOWED_MIME_TYPES, MAX_FILE_SIZE_BYTES } from "./constants";

export function validateFileUpload(mimeType: string | undefined, sizeBytes: number): void {
  if (!mimeType || !ALLOWED_MIME_TYPES.includes(mimeType)) {
    throw new Error("Invalid file type");
  }
  if (!Number.isFinite(sizeBytes) || sizeBytes <= 0 || sizeBytes > MAX_FILE_SIZE_BYTES) {
    throw new Error("Invalid file size");
  }
}
