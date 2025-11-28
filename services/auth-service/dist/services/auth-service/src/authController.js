"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.register = void 0;
const middleware_1 = require("@shared/middleware");
const authService_1 = require("./authService");
const utils_1 = require("@shared/utils");
const authService = new authService_1.AuthService();
exports.register = (0, middleware_1.asyncHandler)(async (req, res) => {
    const { email, password } = req.body;
    const tokens = await authService.register(email, password);
    res.status(201).json((0, utils_1.createSuccessResponse)(tokens, "User registered successfully"));
});
exports.login = (0, middleware_1.asyncHandler)(async (req, res) => {
    const { email, password } = req.body;
    const tokens = await authService.login(email, password);
    res.status(200).json((0, utils_1.createSuccessResponse)(tokens, "User logged in successfully"));
});
//# sourceMappingURL=authController.js.map