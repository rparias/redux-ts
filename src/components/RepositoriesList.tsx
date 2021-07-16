import { useState } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState('');
  
  // es una forma mas elegante de llamar a mi actionCreator sin usar el dispatch aqui
  const { searchRepositories } = useActions();

  // obtiene el state usando un Typed selector
  const { data, error, loading } = useTypedSelector((state) => state.repositories);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    searchRepositories(term);
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" value={term} onChange={e => setTerm(e.target.value)} />
        <button>Search</button>
      </form>
    </div>
  );
}

export default RepositoriesList;