migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2lchpbbbi5sk6at")

  collection.name = "disease"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2lchpbbbi5sk6at")

  collection.name = "dises"

  return dao.saveCollection(collection)
})
