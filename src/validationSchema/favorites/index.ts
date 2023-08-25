import * as yup from 'yup';

export const favoriteValidationSchema = yup.object().shape({
  user_id: yup.string().nullable().required(),
  story_id: yup.string().nullable().required(),
});
