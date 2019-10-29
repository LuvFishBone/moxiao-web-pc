import query from '../utils/query';
import escape from '../utils/escape';

class User {
  async findUser(name) {
    return await query(escape `select name, password from User where name=${name}`);
  }
}

export default new User();