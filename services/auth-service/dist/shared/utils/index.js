"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createApiResponse = createApiResponse;
exports.createSuccessResponse = createSuccessResponse;
exports.createErrorResponse = createErrorResponse;
exports.createServiceError = createServiceError;
const types_1 = require("../types");
function createApiResponse(success, data, message, error) {
    return {
        success,
        data,
        message,
        error,
    };
}
function createSuccessResponse(data, message) {
    return createApiResponse(true, data, message);
}
function createErrorResponse(error) {
    return createApiResponse(false, undefined, undefined, error);
}
function createServiceError(message, statusCode = 500, code, details) {
    return new types_1.ServiceError(message, statusCode, code, details);
}
//# sourceMappingURL=index.js.map