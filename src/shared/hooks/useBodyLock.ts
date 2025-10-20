import { useEffect } from "react";

export function useBodyLock(isLocked: boolean) {
  useEffect(() => {
    if (isLocked) {
      document.body.classList.add("_lock");
    } else {
      document.body.classList.remove("_lock");
    }
  }, [isLocked]);
}
