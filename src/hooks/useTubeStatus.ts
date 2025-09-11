// hooks/useTubeStatus.ts
import { useQuery } from "@tanstack/react-query";
import { TubeLine } from "../types/tube.types";
import { fetchTubeStatus } from "../services/api";

export const useTubeStatus = () => {
  return useQuery<TubeLine[], Error>({
    queryKey: ["tubeStatus"],
    queryFn: fetchTubeStatus,
    refetchInterval: 30000,
    // @ts-ignore: suspense is supported in React Query v5 but types may lag
    suspense: true,
  });
};
