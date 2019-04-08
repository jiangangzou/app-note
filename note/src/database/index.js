import Loki from 'lokijs'  

export const db = new Loki('notes', {
    autoload: true,
    autoloadCallback: databaseIntialize,
    autosave: true,
    autosaveInterval: 3000,
    persistenceMethod: 'localStorage'
})

function databaseIntialize() {
    const notes = db.getCollection('notes') 
    if(notes === null) {
        db.addCollection('notes')
    }
}

export function loadCollection (collection) {
    return new Promise(resolve => {
        db.loadDatabase({}, () => {  //调用loadDatabas方法来从localStrorage获取内容
            const _collection = db.getCollection(collection) || db.addCollection(collection) 
            resolve(_collection)
        })
    })
}