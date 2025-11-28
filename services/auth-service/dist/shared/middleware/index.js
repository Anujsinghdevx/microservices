"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncHandler = asyncHandler;
exports.validateRequest = validateRequest;
function asyncHandler(fn) {
    return (req, res, next) => {
        Promise.resolve(fn(req, res, next)).catch(next);
    };
}
function validateRequest(schema) {
    return (req, res, next) => {
        const { error } = schema.validate(req.body);
        if (error) {
            const errors = {};
            error.details.forEach((detail) => {
                const field = detail.path.join(".");
                if (!error[field]) {
                    errors[field] = [];
                }
                errors[field].push(detail.message);
            });
            return res.status(400).json({
                success: false,
                message: "Validation error",
                errors,
            });
        }
        next();
    };
}
//# sourceMappingURL=index.js.map