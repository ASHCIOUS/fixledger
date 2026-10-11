export function withRetry<T>(fn: () => Promise<T>, attempts = 3, delayMs = 100): Promise<T> {
  return fn().catch((err) => {
    if (attempts <= 1) throw err;
    return new Promise((resolve) => setTimeout(resolve, delayMs)).then(() =>
      withRetry(fn, attempts - 1, delayMs)
    );
  });
}
