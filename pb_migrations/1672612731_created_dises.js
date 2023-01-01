migrate((db) => {
  const collection = new Collection({
    "id": "2lchpbbbi5sk6at",
    "created": "2023-01-01 22:38:51.687Z",
    "updated": "2023-01-01 22:38:51.687Z",
    "name": "dises",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "zl79jenw",
        "name": "name",
        "type": "text",
        "required": true,
        "unique": true,
        "options": {
          "min": 2,
          "max": 64,
          "pattern": ""
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("2lchpbbbi5sk6at");

  return dao.deleteCollection(collection);
})
