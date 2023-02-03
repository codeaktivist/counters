import { getFrontend, getBackend } from '../reducers/envReducer';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

const Environment = () => {
  const dispatch = useDispatch();
  const env = useSelector(n => n.env);

  useEffect(() => {
    dispatch(getFrontend());
    dispatch(getBackend());
  },[]);

  return (
    <>
      <div>Frontend Environment: {env.frontend}</div>
      <div>Backend Environment: {env.backend}</div>
      <div>Version: 1</div>
    </>
  );
};

export default Environment;