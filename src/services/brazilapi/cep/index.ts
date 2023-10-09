import { useMutation, type UseMutationOptions } from '@tanstack/react-query';

import { BrazilAPI } from '..';
import { type CepType } from './types';

export function useCep(
  options?: UseMutationOptions<
    CepType,
    undefined,
    {
      cep: string;
    }
  >,
) {
  return useMutation({
    mutationKey: ['syncScanChapter'],
    mutationFn: (data) =>
      BrazilAPI.get(`cep/v1/${data.cep}`).then(
        (res: { data: CepType }) => res.data,
      ),
    ...options,
  });
}
