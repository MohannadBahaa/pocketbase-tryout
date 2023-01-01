migrate((db) => {
  const collection = new Collection({
    "id": "b7i53437m46pbul",
    "created": "2023-01-01 23:02:24.602Z",
    "updated": "2023-01-01 23:02:24.602Z",
    "name": "questons",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "aiak2g55",
        "name": "title",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": 2,
          "max": 400,
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
  const collection = dao.findCollectionByNameOrId("b7i53437m46pbul");

  return dao.deleteCollection(collection);
})
