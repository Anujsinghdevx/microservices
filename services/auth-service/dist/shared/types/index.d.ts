export interface User {
    id: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
}
export interface APIResponse<T = any> {
    success: boolean;
    data?: T;
    message?: string;
    error?: string;
    errors?: Record<string, string[]>;
}
export interface AuthTokens {
    accessToken: string;
    refreshToken: string;
}
export interface JWTPayload {
    userId: string;
    email: string;
    iat: number;
    exp: number;
}
export declare class ServiceError extends Error {
    statusCode: number;
    code?: string;
    details?: any;
    constructor(message: string, statusCode?: number, code?: string, details?: any);
}
//# sourceMappingURL=index.d.ts.map