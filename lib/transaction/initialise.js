"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _session = _interopRequireDefault(require("../session"));
var _initialise = _interopRequireDefault(require("../response/initialise"));
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var InitialiseTransaction = /*#__PURE__*/ function() {
    function InitialiseTransaction(initialiseResponse) {
        _classCallCheck(this, InitialiseTransaction);
        this.initialiseResponse = initialiseResponse;
    }
    _createClass(InitialiseTransaction, [
        {
            key: "toJSON",
            value: function toJSON() {
                return this.initialiseResponse.toJSON();
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json) {
                var content = _session.default.getContent(), userIdentifier = _session.default.createUser(), sessionIdentifier = _session.default.getIdentifier(), initialiseResponse = _initialise.default.fromContentUserIdentifierAndSessionIdentifier(content, userIdentifier, sessionIdentifier), initialiseTransaction = new InitialiseTransaction(initialiseResponse);
                return initialiseTransaction;
            }
        }
    ]);
    return InitialiseTransaction;
}();
exports.default = InitialiseTransaction;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc2FjdGlvbi9pbml0aWFsaXNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgc2Vzc2lvbiBmcm9tIFwiLi4vc2Vzc2lvblwiO1xuaW1wb3J0IEluaXRpYWxpc2VSZXNwb25zZSBmcm9tIFwiLi4vcmVzcG9uc2UvaW5pdGlhbGlzZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbml0aWFsaXNlVHJhbnNhY3Rpb24ge1xuICBjb25zdHJ1Y3Rvcihpbml0aWFsaXNlUmVzcG9uc2UpIHtcbiAgICB0aGlzLmluaXRpYWxpc2VSZXNwb25zZSA9IGluaXRpYWxpc2VSZXNwb25zZTtcbiAgfVxuXG4gIHRvSlNPTigpIHsgcmV0dXJuIHRoaXMuaW5pdGlhbGlzZVJlc3BvbnNlLnRvSlNPTigpOyB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24pIHtcbiAgICBjb25zdCBjb250ZW50ID0gc2Vzc2lvbi5nZXRDb250ZW50KCksXG4gICAgICAgICAgdXNlcklkZW50aWZpZXIgPSBzZXNzaW9uLmNyZWF0ZVVzZXIoKSxcblx0XHRcdFx0XHRzZXNzaW9uSWRlbnRpZmllciA9IHNlc3Npb24uZ2V0SWRlbnRpZmllcigpLFxuICAgICAgICAgIGluaXRpYWxpc2VSZXNwb25zZSA9IEluaXRpYWxpc2VSZXNwb25zZS5mcm9tQ29udGVudFVzZXJJZGVudGlmaWVyQW5kU2Vzc2lvbklkZW50aWZpZXIoY29udGVudCwgdXNlcklkZW50aWZpZXIsIHNlc3Npb25JZGVudGlmaWVyKSxcbiAgICAgICAgICBpbml0aWFsaXNlVHJhbnNhY3Rpb24gPSBuZXcgSW5pdGlhbGlzZVRyYW5zYWN0aW9uKGluaXRpYWxpc2VSZXNwb25zZSk7XG5cbiAgICByZXR1cm4gaW5pdGlhbGlzZVRyYW5zYWN0aW9uO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFUSxHQUFZLENBQVosUUFBWTtBQUNELEdBQXdCLENBQXhCLFdBQXdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRWxDLHFCQUFxQjthQUFyQixxQkFBcUIsQ0FDNUIsa0JBQWtCOzhCQURYLHFCQUFxQjthQUVqQyxrQkFBa0IsR0FBRyxrQkFBa0I7O2lCQUYzQixxQkFBcUI7O1lBS3hDLEdBQU0sR0FBTixNQUFNOzRCQUFOLE1BQU0sR0FBRyxDQUFDOzRCQUFhLGtCQUFrQixDQUFDLE1BQU07WUFBSSxDQUFDOzs7O1lBRTlDLEdBQVEsR0FBUixRQUFROzRCQUFSLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDckIsR0FBSyxDQUFDLE9BQU8sR0FYRyxRQUFZLFNBV0osVUFBVSxJQUM1QixjQUFjLEdBWkosUUFBWSxTQVlHLFVBQVUsSUFDeEMsaUJBQWlCLEdBYkYsUUFBWSxTQWFDLGFBQWEsSUFDcEMsa0JBQWtCLEdBYkcsV0FBd0IsU0FhTCw2Q0FBNkMsQ0FBQyxPQUFPLEVBQUUsY0FBYyxFQUFFLGlCQUFpQixHQUNoSSxxQkFBcUIsR0FBRyxHQUFHLENBQUMscUJBQXFCLENBQUMsa0JBQWtCO3VCQUVuRSxxQkFBcUI7WUFDOUIsQ0FBQzs7O1dBZmtCLHFCQUFxQjs7a0JBQXJCLHFCQUFxQiJ9