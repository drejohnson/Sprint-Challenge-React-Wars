import axios from 'axios';

const getCharacters = (url, people, resolve, reject) => {
  axios
    .get(url, {
      crossorigin: true,
    })
    .then(response => {
      const _people_ = people.concat(response.data.results);
      if (response.data.next !== null) {
        getCharacters(response.data.next, _people_, resolve, reject);
      } else {
        resolve(_people_);
      }
    })
    .catch(error => {
      console.log(error);
    });
};

export default getCharacters;
