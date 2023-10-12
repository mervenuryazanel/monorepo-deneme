// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Button, DataTable } from "@monorepo-deneme/signum-components";
import styles from './app.module.css';

import NxWelcome from './nx-welcome';

export function App() {

  let mockData = [
    {
      "id": 1,
      "name":"mert",
      "surname": "sdfdsf",
      "age": 12
    },
    {
      "id": 2,
      "name": "omer",
      "surname": "sdfdsf",
      "age": 12
    }
  ]

  // let mockData = [
  //   {
  //     "id": 1,
  //     "name": 'mert',
  //     "surname": 'sdfdsf',
  //     "age": 12
  //   },
  //   {
  //     id: 2,
  //     name: 'omer',
  //     surname: 'sdfdsf',
  //     age: 12
  //   },
  //   {
  //     id: 3,
  //     name: 'merve',
  //     surname: 'sdfdsf',
  //     age: 12
  //   },
  // ]
  return (
    <div>
      <NxWelcome title="facility" />
      <Button
        label="sdffsdf"
        onSubmit={() =>alert('sdfdsf')}

      />

      <DataTable 
        list={mockData}
        title="sdfdsf"
      />
    </div>
  );
}

export default App;
