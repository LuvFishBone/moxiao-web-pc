import query from '../utils/query'
import escape from '../utils/escape'
class Cooperation {
    async add (name, cellphone, address, msg) {
        return await query(
            escape`INSERT INTO apply_for_cooperation 
            SET name=${name}, cellphone=${cellphone}, address=${address}, msg=${msg}, createTime=NOW()`
        )
    }
}

export default new Cooperation()
