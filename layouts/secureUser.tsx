import { useRouter } from "next/router";
import React, { ReactElement, useEffect, useState } from "react";

export default function SecureUser({ children }: { children: ReactElement }) {
  const router = useRouter();

  const [isDataPresent, setIsDataPresent] = useState(true);

  useEffect(() => {
    if (isDataPresent) {
      const checkData = setInterval(() => {
        const checkStore =
          localStorage.getItem("guest") &&
          localStorage.getItem("accessGuestToken") &&
          localStorage.getItem("refreshGuestToken");

        if (!checkStore) {
          setIsDataPresent(false);

          const lastPathname = router.pathname;
          localStorage.getItem("guest") && localStorage.removeItem("guest");
          localStorage.getItem("accessGuestToken") &&
            localStorage.removeItem("accessGuestToken");
          localStorage.getItem("refreshGuestToken") &&
            localStorage.removeItem("refreshGuestToken");
          router.push("/");
        }
      }, 1000);

      return () => clearInterval(checkData);
    }
  }, []);

  return isDataPresent ? children : <></>;
}
