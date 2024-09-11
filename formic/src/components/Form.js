import { useFormik } from "formik";
import validationSchema from './Validation'; 

function Form() {
  const { handleChange, values, handleSubmit, errors, touched, handleBlur } = useFormik({
    initialValues: {
      email: "",
      password: "",
      passwordConfirm: ""
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    }
  });

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <br />
        <label htmlFor="email">Email</label>
        <input
          name="email"
          placeholder="jane@acme.com"
          type="email"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.email && errors.email ? <div>{errors.email}</div> : null}
        <br />
        <label>Password</label>
        <input 
          type="password"
          onChange={handleChange}
          name="password" 
          onBlur={handleBlur}
        />
        {touched.password && errors.password ? <div>{errors.password}</div> : null}
        <br />
        <label>Password Confirm</label>
        <input 
          type="password"
          onChange={handleChange}
          name="passwordConfirm" 
          onBlur={handleBlur}
        />
        {touched.passwordConfirm && errors.passwordConfirm ? <div>{errors.passwordConfirm}</div> : null}
        <br />
        <button type="submit">Submit</button>
        <br />
        <br />
        <code>
          {JSON.stringify(values)}
        </code>
      </form>
    </div>
  );
}

export default Form;
