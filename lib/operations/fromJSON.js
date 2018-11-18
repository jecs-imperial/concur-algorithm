'use strict';

var types = require('../types'),
    EmptyOperation = require('../operation/empty'),
    DeleteOperation = require('../operation/delete'),
    InsertOperation = require('../operation/insert');

var emptyType = types.emptyType,
    deleteType = types.deleteType,
    insertType = types.insertType;


function operationsFromJSON(operationsJSON) {
  var operations = operationsJSON.map(function (operationJSON) {
    var operation = void 0;

    var json = operationJSON,
        ///
    type = json["type"];

    switch (type) {
      case emptyType:
        operation = EmptyOperation.fromJSON(json);
        break;

      case deleteType:
        operation = DeleteOperation.fromJSON(json);
        break;

      case insertType:
        operation = InsertOperation.fromJSON(json);
        break;
    }

    return operation;
  });

  return operations;
}

module.exports = operationsFromJSON;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9vcGVyYXRpb25zL2Zyb21KU09OLmpzIl0sIm5hbWVzIjpbInR5cGVzIiwicmVxdWlyZSIsIkVtcHR5T3BlcmF0aW9uIiwiRGVsZXRlT3BlcmF0aW9uIiwiSW5zZXJ0T3BlcmF0aW9uIiwiZW1wdHlUeXBlIiwiZGVsZXRlVHlwZSIsImluc2VydFR5cGUiLCJvcGVyYXRpb25zRnJvbUpTT04iLCJvcGVyYXRpb25zSlNPTiIsIm9wZXJhdGlvbnMiLCJtYXAiLCJvcGVyYXRpb25KU09OIiwib3BlcmF0aW9uIiwianNvbiIsInR5cGUiLCJmcm9tSlNPTiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBLElBQU1BLFFBQVFDLFFBQVEsVUFBUixDQUFkO0FBQUEsSUFDTUMsaUJBQWlCRCxRQUFRLG9CQUFSLENBRHZCO0FBQUEsSUFFTUUsa0JBQWtCRixRQUFRLHFCQUFSLENBRnhCO0FBQUEsSUFHTUcsa0JBQWtCSCxRQUFRLHFCQUFSLENBSHhCOztJQUtRSSxTLEdBQXNDTCxLLENBQXRDSyxTO0lBQVdDLFUsR0FBMkJOLEssQ0FBM0JNLFU7SUFBWUMsVSxHQUFlUCxLLENBQWZPLFU7OztBQUUvQixTQUFTQyxrQkFBVCxDQUE0QkMsY0FBNUIsRUFBNEM7QUFDMUMsTUFBTUMsYUFBYUQsZUFBZUUsR0FBZixDQUFtQixVQUFTQyxhQUFULEVBQXdCO0FBQzVELFFBQUlDLGtCQUFKOztBQUVBLFFBQU1DLE9BQU9GLGFBQWI7QUFBQSxRQUE0QjtBQUN0QkcsV0FBT0QsS0FBSyxNQUFMLENBRGI7O0FBR0EsWUFBUUMsSUFBUjtBQUNFLFdBQUtWLFNBQUw7QUFDRVEsb0JBQVlYLGVBQWVjLFFBQWYsQ0FBd0JGLElBQXhCLENBQVo7QUFDQTs7QUFFRixXQUFLUixVQUFMO0FBQ0VPLG9CQUFZVixnQkFBZ0JhLFFBQWhCLENBQXlCRixJQUF6QixDQUFaO0FBQ0E7O0FBRUYsV0FBS1AsVUFBTDtBQUNFTSxvQkFBWVQsZ0JBQWdCWSxRQUFoQixDQUF5QkYsSUFBekIsQ0FBWjtBQUNBO0FBWEo7O0FBY0EsV0FBT0QsU0FBUDtBQUNELEdBckJrQixDQUFuQjs7QUF1QkEsU0FBT0gsVUFBUDtBQUNEOztBQUVETyxPQUFPQyxPQUFQLEdBQWlCVixrQkFBakIiLCJmaWxlIjoiZnJvbUpTT04uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG5jb25zdCB0eXBlcyA9IHJlcXVpcmUoJy4uL3R5cGVzJyksXHJcbiAgICAgIEVtcHR5T3BlcmF0aW9uID0gcmVxdWlyZSgnLi4vb3BlcmF0aW9uL2VtcHR5JyksXHJcbiAgICAgIERlbGV0ZU9wZXJhdGlvbiA9IHJlcXVpcmUoJy4uL29wZXJhdGlvbi9kZWxldGUnKSxcclxuICAgICAgSW5zZXJ0T3BlcmF0aW9uID0gcmVxdWlyZSgnLi4vb3BlcmF0aW9uL2luc2VydCcpO1xyXG5cclxuY29uc3QgeyBlbXB0eVR5cGUsIGRlbGV0ZVR5cGUsIGluc2VydFR5cGUgfSA9IHR5cGVzO1xyXG5cclxuZnVuY3Rpb24gb3BlcmF0aW9uc0Zyb21KU09OKG9wZXJhdGlvbnNKU09OKSB7XHJcbiAgY29uc3Qgb3BlcmF0aW9ucyA9IG9wZXJhdGlvbnNKU09OLm1hcChmdW5jdGlvbihvcGVyYXRpb25KU09OKSB7XHJcbiAgICBsZXQgb3BlcmF0aW9uO1xyXG5cclxuICAgIGNvbnN0IGpzb24gPSBvcGVyYXRpb25KU09OLCAvLy9cclxuICAgICAgICAgIHR5cGUgPSBqc29uW1widHlwZVwiXTtcclxuXHJcbiAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgY2FzZSBlbXB0eVR5cGU6XHJcbiAgICAgICAgb3BlcmF0aW9uID0gRW1wdHlPcGVyYXRpb24uZnJvbUpTT04oanNvbik7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlIGRlbGV0ZVR5cGU6XHJcbiAgICAgICAgb3BlcmF0aW9uID0gRGVsZXRlT3BlcmF0aW9uLmZyb21KU09OKGpzb24pO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSBpbnNlcnRUeXBlOlxyXG4gICAgICAgIG9wZXJhdGlvbiA9IEluc2VydE9wZXJhdGlvbi5mcm9tSlNPTihqc29uKTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gb3BlcmF0aW9uO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gb3BlcmF0aW9ucztcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBvcGVyYXRpb25zRnJvbUpTT047XHJcbiJdfQ==