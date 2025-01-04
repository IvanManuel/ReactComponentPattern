import { Formik, Form } from 'formik';
import formJson from '../data/custom-form.json'
import { MySelect, MyTextInput } from '../components';
import * as Yup from 'yup';

const initialValues: { [key: string]: string } = {};
const requiredFields: { [key: string]: Yup.StringSchema } = {};

for (const input of formJson) {
  initialValues[input.name] = input.value;

  if( !input.validations ) continue;

  let schema = Yup.string();

  for (const rule of input.validations) {
    if ( rule.type === "required" ) {
      schema = schema.required('This is a required field');
    }

    if ( rule.type === "minLength" ) {
      schema = schema.min((rule as any).value, `At least ${(rule as any).value || 2 } characters`);
    }

    if ( rule.type === "email" ) {
      schema = schema.email(`Unformatted email address`);
    }
  }

  requiredFields[input.name] = schema;
}

const validationSchema = Yup.object({...requiredFields});

export const DynamicForm = () => {
  return (
    <div>
      <h1>Dynamic Form</h1>

      <Formik
        initialValues={ initialValues }
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={ validationSchema }
      >
        {() => (
          <Form>
            { formJson.map( ({ type, name, placeholder, label, options }) => {

              if (type === "input" || type === "password" || type === "email") {
                return <MyTextInput
                            key={ name }
                            type={ (type as any)}
                            name={ name }
                            label={ label }
                            placeholder={ placeholder } />
              }

              if (type === 'select') {
                return <MySelect
                            key={ name }
                            type={ (type as any)}
                            name={ name }
                            label={ label }
                            placeholder={ placeholder }>
                              <option value="">Select an option</option>
                              {
                                options?.map( (opt) => (
                                  <option key={ opt.id } value={ opt.id }>{ opt.label }</option>
                                ))
                              }
                        </MySelect>
              }

              throw new Error(`El Type: ${type} no es soportado`)

              })}

            <button type='submit'>Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
