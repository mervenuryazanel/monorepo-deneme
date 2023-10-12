import styles from './data-table.module.scss';

/* eslint-disable-next-line */
export interface DataTableProps {
  list: DataNode[];
  title: string;
  style?: React.CSSProperties;
}

export interface DataNode{
  id: number;
  name: string;
  surname: string;
  age: number;
}

export function DataTable(props: DataTableProps) {
  return (
    <div className={styles['container']}>
      <h1>{props.title}</h1>
      <table className={styles['table']} style={props.style}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Ad</th>
            <th>Soyad</th>
            <th>Yaş</th>
          </tr>
        </thead>
        <tbody>
          {props.list.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.surname}</td>
              <td>{item.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
