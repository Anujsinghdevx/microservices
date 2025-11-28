import { Request, Response, NextFunction } from "express";
export declare function asyncHandler(fn: (req: Request, res: Response, next: NextFunction) => Promise<any>): (req: Request, res: Response, next: NextFunction) => void;
export declare function validateRequest(schema: any): (req: Request, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
//# sourceMappingURL=index.d.ts.map