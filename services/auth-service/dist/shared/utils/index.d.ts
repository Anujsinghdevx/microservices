import { APIResponse, ServiceError } from "../types";
export declare function createApiResponse<T>(success: boolean, data?: T, message?: string, error?: string): APIResponse<T>;
export declare function createSuccessResponse<T>(data?: T, message?: string): APIResponse<T>;
export declare function createErrorResponse(error: string): APIResponse;
export declare function createServiceError(message: string, statusCode?: number, code?: string, details?: any): ServiceError;
//# sourceMappingURL=index.d.ts.map