import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

interface FormValues {
  amount: number | '';
  date: string;
  description: string;
  type: 'entrada' | 'saida';
  category: string;
}

const categories = ['Alimentação', 'Transporte', 'Lazer', 'Salário', 'Outros'];

const validationSchema = Yup.object({
  amount: Yup.number()
    .typeError('Informe um número')
    .required('Obrigatório')
    .positive('Deve ser positivo'),
  date: Yup.string().required('Obrigatório'),
  description: Yup.string().required('Obrigatório'),
  type: Yup.string().oneOf(['entrada', 'saida']).required('Obrigatório'),
  category: Yup.string().required('Obrigatório'),
});

export default function RegisterLaunch() {
  const initialValues: FormValues = {
    amount: '',
    date: '',
    description: '',
    type: 'saida',
    category: '',
  };

  const handleSubmit = (values: FormValues) => {
    console.log('Valores enviados:', values);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded">
      <h2 className="text-xl font-bold mb-4">Cadastro de Lançamento</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-medium">Valor:</label>
            <Field type="number" name="amount" className="w-full border rounded px-2 py-1" />
            <ErrorMessage name="amount" component="div" className="text-red-500 text-sm" />
          </div>

          <div>
            <label className="block text-sm font-medium">Data:</label>
            <Field type="date" name="date" className="w-full border rounded px-2 py-1" />
            <ErrorMessage name="date" component="div" className="text-red-500 text-sm" />
          </div>

          <div>
            <label className="block text-sm font-medium">Descrição:</label>
            <Field type="text" name="description" className="w-full border rounded px-2 py-1" />
            <ErrorMessage name="description" component="div" className="text-red-500 text-sm" />
          </div>

          <div>
            <label className="block text-sm font-medium">Tipo:</label>
            <Field as="select" name="type" className="w-full border rounded px-2 py-1">
              <option value="entrada">Entrada</option>
              <option value="saida">Saída</option>
            </Field>
            <ErrorMessage name="type" component="div" className="text-red-500 text-sm" />
          </div>

          <div>
            <label className="block text-sm font-medium">Categoria:</label>
            <Field as="select" name="category" className="w-full border rounded px-2 py-1">
              <option value="">Selecione</option>
              {categories.map((category) => (
                <option key={category} value={category}>{category}</option>
              ))}
            </Field>
            <ErrorMessage name="category" component="div" className="text-red-500 text-sm" />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Cadastrar
          </button>
        </Form>
      </Formik>
    </div>
  );
}
