import * as yup from 'yup';

import { FormProvider, useForm } from 'react-hook-form';
import React, { useMemo } from 'react';

import { ControlledInput } from '@/shared/hook-form/ControlledInput';
import { ValidationContainer } from '@/shared/styles/pages/validation';
import { yupResolver } from '@hookform/resolvers/yup';

const Validation = (): React.ReactElement => {
  const validationSchema = useMemo(() => {
    return yup.object().shape({
      name: yup.string().min(3, '최소 3글자').max(5, '최대 5글자').required('필수'),
      id: yup.string().min(3, '최소 8글자').max(5, '최대 10글자').required('필수'),
    });
  }, []);
  const method = useForm({
    defaultValues: { name: '', id: '' },
    resolver: yupResolver(validationSchema),
    mode: 'onChange',
  });

  const {
    register,
    control,
    formState: { errors },
  } = method;

  return (
    <FormProvider {...method}>
      <ValidationContainer>
        <div className="form-control-wrapper">
          <div className="discription">Register</div>
          <input type="text" {...register('name')} placeholder="name" />
          <span className="error">{errors.name ? errors.name.message : ''}</span>
        </div>
        <ControlledInput type="text" name="id" control={control} discription="Coltrol" />
      </ValidationContainer>
    </FormProvider>
  );
};

export default Validation;
