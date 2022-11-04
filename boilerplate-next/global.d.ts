declare global {
  interface Window {
    Document: any;
    document: any;
  }
}
export const Document = global.Document;
export const document = global.document;
