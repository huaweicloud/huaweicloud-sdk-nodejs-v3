import { CreateDesktopPoolReq } from './CreateDesktopPoolReq';


export class CreateDesktopPoolRequest {
    private 'Service-Transaction-Id'?: string;
    public body?: CreateDesktopPoolReq;
    public constructor() { 
    }
    public withServiceTransactionId(serviceTransactionId: string): CreateDesktopPoolRequest {
        this['Service-Transaction-Id'] = serviceTransactionId;
        return this;
    }
    public set serviceTransactionId(serviceTransactionId: string  | undefined) {
        this['Service-Transaction-Id'] = serviceTransactionId;
    }
    public get serviceTransactionId(): string | undefined {
        return this['Service-Transaction-Id'];
    }
    public withBody(body: CreateDesktopPoolReq): CreateDesktopPoolRequest {
        this['body'] = body;
        return this;
    }
}