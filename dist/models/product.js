'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var schema = new _mongoose2.default.Schema({
    name: {
        type: String,
        required: true
    },
    dir: {
        type: String,
        required: true
    },
    pushedToEtsy: { type: Number, default: 0 },
    createdBy: { type: String, default: 'app' },
    createdAt: Date,
    title: String,
    description: String,
    tags: Array
}, { collection: 'product' });

exports.default = _mongoose2.default.model('product', schema);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbHMvcHJvZHVjdC5qcyJdLCJuYW1lcyI6WyJzY2hlbWEiLCJtb25nb29zZSIsIlNjaGVtYSIsIm5hbWUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJkaXIiLCJwdXNoZWRUb0V0c3kiLCJOdW1iZXIiLCJkZWZhdWx0IiwiY3JlYXRlZEJ5IiwiY3JlYXRlZEF0IiwiRGF0ZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJ0YWdzIiwiQXJyYXkiLCJjb2xsZWN0aW9uIiwibW9kZWwiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7Ozs7QUFFQSxJQUFNQSxTQUFTLElBQUlDLG1CQUFTQyxNQUFiLENBQW9CO0FBQy9CQyxVQUFNO0FBQ0ZDLGNBQU1DLE1BREo7QUFFRkMsa0JBQVU7QUFGUixLQUR5QjtBQUsvQkMsU0FBSztBQUNESCxjQUFNQyxNQURMO0FBRURDLGtCQUFVO0FBRlQsS0FMMEI7QUFTL0JFLGtCQUFjLEVBQUVKLE1BQU1LLE1BQVIsRUFBZ0JDLFNBQVMsQ0FBekIsRUFUaUI7QUFVL0JDLGVBQVcsRUFBRVAsTUFBTUMsTUFBUixFQUFnQkssU0FBUyxLQUF6QixFQVZvQjtBQVcvQkUsZUFBV0MsSUFYb0I7QUFZL0JDLFdBQU9ULE1BWndCO0FBYS9CVSxpQkFBYVYsTUFia0I7QUFjL0JXLFVBQU1DO0FBZHlCLENBQXBCLEVBZVosRUFBRUMsWUFBWSxTQUFkLEVBZlksQ0FBZjs7a0JBaUJlakIsbUJBQVNrQixLQUFULENBQWUsU0FBZixFQUEwQm5CLE1BQTFCLEMiLCJmaWxlIjoicHJvZHVjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XG5cbmNvbnN0IHNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xuICAgIG5hbWU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICB9LFxuICAgIGRpcjoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG4gICAgcHVzaGVkVG9FdHN5OiB7IHR5cGU6IE51bWJlciwgZGVmYXVsdDogMCB9LFxuICAgIGNyZWF0ZWRCeTogeyB0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6ICdhcHAnIH0sXG4gICAgY3JlYXRlZEF0OiBEYXRlLFxuICAgIHRpdGxlOiBTdHJpbmcsXG4gICAgZGVzY3JpcHRpb246IFN0cmluZyxcbiAgICB0YWdzOiBBcnJheVxufSwgeyBjb2xsZWN0aW9uOiAncHJvZHVjdCcgfSk7XG5cbmV4cG9ydCBkZWZhdWx0IG1vbmdvb3NlLm1vZGVsKCdwcm9kdWN0Jywgc2NoZW1hKTtcbiJdfQ==