import { vi } from "vitest";
import { renderHook } from "@testing-library/react";
import { useCodemirror } from "./useCodemirror";
import { EXAMPLE_DOC } from "@/shared/constant/preview";

describe("useCodemirror", () => {
  const onChange = vi.fn();

  beforeEach(() => {
    onChange.mockClear();
  });

  it("초기 문서와 함께 정상적으로 초기화되어야 합니다", () => {
    const { result } = renderHook(() =>
      useCodemirror({ initialDoc: EXAMPLE_DOC, onChange })
    );

    expect(result.current[0]).toBeDefined();
  });

  it("ref가 null이 아니어야 합니다", () => {
    const { result } = renderHook(() =>
      useCodemirror({ initialDoc: EXAMPLE_DOC, onChange })
    );

    expect(result.current[0].current).toBe(null);
  });
});
