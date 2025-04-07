"use client";

import { useEffect, useState } from "react";
import { getSchoolList } from ".";
import { QUERY_KEY } from "../../constant/queryKey";
import { useQuery } from "@tanstack/react-query";
import { GetSchoolListRequest } from "@/shared/types/open";

// Query

/** 학교 정보 조회 */
export function useGetSchoolList(params?: GetSchoolListRequest) {
  return useQuery({
    queryKey: QUERY_KEY.open.getSchoolList(params),
    queryFn: async () => {
      const res = await getSchoolList(params);
      return res;
    },
    enabled: Boolean(params?.searchSchulNm),
  });
}

/** 학교 정보 조회 디바운싱 */
export const useDebounceSchoolListQuery = (
  params?: GetSchoolListRequest,
  delay = 500
) => {
  const [debounceParams, setDebounceParams] = useState(params);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceParams(params);
    }, delay);

    return () => clearTimeout(timer);
  }, [params, delay]);

  return useGetSchoolList(debounceParams);
};
