import * as yup from 'yup';

export const storyValidationSchema = yup.object().shape({
  title: yup.string().required(),
  content: yup.string().required(),
  category: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
