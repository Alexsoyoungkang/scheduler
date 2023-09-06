import { renderHook, act } from "@testing-library/react-hooks";

import useVisualMode from "hooks/useVisualMode";

const FIRST = "FIRST";

test("useVisualMode should initialize with default value", () => {
  const { result } = renderHook(() => useVisualMode(FIRST));
  // renders useVisualmode hook initializes it with the value of FIRST
  // It uses the renderHook function from the testing library.
  // The result of rendering the hook is stored in the result variable

  expect(result.current.mode).toBe(FIRST);
});