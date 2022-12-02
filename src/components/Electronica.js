import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import { useNavigate } from 'react-router-dom';

const CREATE_COMPONENTE_MUTATION = gql`
  mutation ComponenteMutation(
    $name: String!
    $semestre: String!
  ) {
    createComponente(semestre: $semestre, name: $name) {
      id
      name
      semestre
    }
  }
`;

const Electronica = () => {
  const navigate = useNavigate();

  const [formState, setFormState] = useState({
    componenteElectronico: '',
    semestreDeUso: ''
  });

  const [createComponente] = useMutation(CREATE_COMPONENTE_MUTATION, {
    variables: {
      semestre: formState.semestreDeUso,
      name: formState.componenteElectronico
    },
    onCompleted: () => navigate('/')
	  
  });


  return (

    <div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
	  createComponente();
	
        }}
      >
        <div className="flex flex-column mt3">
          <input
            className="mb2"
            value={formState.componenteElectronico}
            onChange={(e) =>
              setFormState({
                ...formState,
                componenteElectronico: e.target.value
              })
            }
            type="text"
            placeholder="Ingresa el componente que ocupaste"
          />
          <input
            className="mb2"
            value={formState.semestreDeUso}
            onChange={(e) =>
              setFormState({
                ...formState,
                semestreDeUso: e.target.value
              })
            }
            type="text"
            placeholder="En que semestre los usaste"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Electronica;
