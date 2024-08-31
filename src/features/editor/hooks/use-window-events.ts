import { useEvent } from "react-use";

export const useWindowEvents = () => {
  useEvent("beforeunload", (event) => {
    (event || window.event).returnValue = "Are You Sure You Want To Leave?";
  });
};
