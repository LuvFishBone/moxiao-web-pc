import query from '../utils/query'
import escape from '../utils/escape'
class Partners {
    async add (name, address, tel, email) {
        return await query(
            escape`INSERT INTO Partners 
                    SET name=${name}, address=${address}, tel=${tel}, email=${email}`
        )
    }

    async delete (id) {
        return await query(escape`DELETE FROM Partners WHERE id=${id}`);
    }

    async update (id, {name, address, tel, email}) {
        return await query(escape`UPDATE Partners SET name=${name}, address=${address}, tel=${tel}, email=${email} WHERE id=${id}`);
    }

    async list () {
        return await query(escape`SELECT * FROM Partners ORDER BY id DESC`)
    }

}

export default new Partners();
