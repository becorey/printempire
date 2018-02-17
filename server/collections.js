
// prototypical item definition
Items = new Mongo.Collection('items');
Items.schema = new SimpleSchema({
  name: {type: String}
});

// player owned instances of items are Inventory
Inventory = new Mongo.Collection('inventory');
