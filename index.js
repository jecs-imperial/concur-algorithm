'use strict';

module.exports = {
  EmptyOperation: require('./lib/operation/empty'),
  InsertOperation: require('./lib/operation/insert'),
  DeleteOperation: require('./lib/operation/delete'),
  transformContent: require('./lib/content/transform'),
  operationsToJSON: require('./lib/operations/toJSON'),
  operationsFromJSON: require('./lib/operations/fromJSON'),
  generateOperations: require('./lib/operations/generate'),
  transformOperations: require('./lib/operations/transform')
};
