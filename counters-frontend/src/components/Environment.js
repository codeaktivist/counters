import { getFrontend, getBackend, getIp } from '../reducers/envReducer';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

const Environment = () => {
  const dispatch = useDispatch();
  const env = useSelector(n => n.env);

  useEffect(() => {
    dispatch(getFrontend());
    dispatch(getBackend());
    dispatch(getIp());
  },[]);

  return (
    <>
      <div>&nbsp;</div>
      <div>Frontend Environment: {env.frontend}</div>
      <div>Backend Environment: {env.backend}</div>
      <div>Backend IP address: {env.ip}</div>
      <div>Version: 5</div>
    </>
  );
};

export default Environment;