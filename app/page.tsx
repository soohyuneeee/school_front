import Head from 'next/head';
import TodoList from '../components/TodoList';

export default function Page() {
  return (
    <div>
      <Head>
        <title>ToDo List App</title>
      </Head>
      <main>
        <h1>ToDo List</h1>
        <TodoList />
      </main>
    </div>
  );
}
