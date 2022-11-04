import { IMutationProps } from '@/shared/types/common.types';
import QUERY_KEYS from '@/shared/apis/queryKeys/example';
import { exampleApi } from '@/shared/apis/exampleApi';
import { useMutation } from 'react-query';

export default function useMutationPosts() {
  return useMutation((data: IMutationProps) => exampleApi.mutation(data), {
    onMutate: () => ({ key: [QUERY_KEYS.EXAMPLE_POSTS] }),
  });
}
