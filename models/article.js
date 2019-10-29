import query from '../utils/query'
import escape from '../utils/escape'
class Article {
    async add (title, intro, thumbUrl, content) {
        return await query(
            escape`INSERT INTO Article 
                    SET title=${title}, intro=${intro}, thumbUrl=${thumbUrl}, content=${content}, isPublished=1, createTime=NOW(), updateTime=NOW()`
        )
    }

    async remove (id) {
        return await query(escape`DELETE FROM ARTICLE WHERE id=${id}`);
    }

    async update (id, {title, intro, thumbUrl, content}) {
        return await query(escape`UPDATE Article SET title=${title}, intro=${intro}, thumbUrl=${thumbUrl}, content=${content}, updateTime=NOW() WHERE id=${id}`);
    }

    async list () {
        return await query(escape`SELECT * FROM Article ORDER BY createTime DESC`)
    }

    async listSimple () {
        return await query(escape`SELECT id, title, intro, thumbUrl, createTime FROM Article ORDER BY createTime DESC`)
    }

    async queryById (id) {
        return await query(escape`SELECT * FROM Article WHERE id=${id}`);
    }

    async total () {
        return await query(escape`SELECT COUNT(*) AS 'total' FROM Article`);
    }

    async paging (offset, limit) {
        return await query(
            escape`SELECT * FROM Article 
                    WHERE 
                    isPublished=1 
                    ORDER BY 
                    publishTime DESC LIMIT ${parseInt(offset, 10)},${parseInt(limit, 10)}`
        )
    }

    // async getPublishedArticleTotal () {
    //     return await query(`SELECT COUNT(*) as total FROM Article WHERE isPublished=1`)
    // }

    // async getLimitAllArticles (offset, limit) {
    //     return await query(
    //         escape`SELECT * FROM Article 
    //                 ORDER BY 
    //                 publishTime DESC 
    //                 LIMIT ${parseInt(offset, 10)},${parseInt(limit, 10)}`);
    // }


}

export default new Article()
