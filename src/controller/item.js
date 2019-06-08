
import Items from '../models/item'

const saveItems = async(files, data) => {
    let {
        accountId,
        templateId
    } = data

    try {
        for (let file of files) {
            let title = ''
            let match = file.filename.match(new RegExp(/^(\d+)-(.*?).png$/, 'i'))
    
            if (match && match.length) {
                title = match[2]
            }
    
            await Items.create({
                name: file.filename,
                title: title,
                dir: '/images/uploads/' + file.filename,
                account: accountId,
                template: templateId,
                createdAt: new Date()
            })
        }
    } catch(e) {
        throw e
    }
}

export { saveItems }