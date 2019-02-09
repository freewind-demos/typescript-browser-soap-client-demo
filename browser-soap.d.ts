declare module 'browser-soap' {
  export function createClient(url: string, callback: (err: Error, client: any) => void): void;
}
