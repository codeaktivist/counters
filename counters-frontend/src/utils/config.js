import axios from 'axios';

const getBackendEnv = async () => {
  const response = await axios
    .get('/api/env')
    .then(res => res);
  return response.data;
};

const ENV_BACKEND = getBackendEnv();

const configs = {
  ENV_BACKEND
};

export default configs;