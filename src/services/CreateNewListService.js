import react from 'react';
import {useDispatch} from 'react-redux';
import {addtab} from '../redux/modules/Lists/Lists.actions';

const CreateNewListService = (payload) => {
  const dispatch = useDispatch();
  return dispatch(addtab(payload));
};

export default CreateNewListService;
// w contencie ma byc tablica
// ['Nazwa Tabilcy',
//   {id: 1, title: 'mleko'},
//   {id: 2, title: 'magulo'},
// ];
