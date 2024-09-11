import { object, string, ref } from 'yup';

const Validation = object({
  email: string().email("geçerli bir email girin").required("zorunlu alan"),
  password: string().min(5, "en az 5 karekter").required("zorunlu alan"),
  passwordConfirm: string()
    .oneOf([ref('password')], 'parola eşleşmiyor')
    .required("zorunlu alan")
});

export default Validation;
