import { CreateDesktopReq } from './CreateDesktopReq';


export class CreateDesktopRequest {
    private 'Service-Transaction-Id'?: string;
    public body?: CreateDesktopReq;
    public constructor() { 
    }
    public withServiceTransactionId(serviceTransactionId: string): CreateDesktopRequest {
        this['Service-Transaction-Id'] = serviceTransactionId;
        return this;
    }
    public set serviceTransactionId(serviceTransactionId: string  | undefined) {
        this['Service-Transaction-Id'] = serviceTransactionId;
    }
    public get serviceTransactionId(): string | undefined {
        return this['Service-Transaction-Id'];
    }
    public withBody(body: CreateDesktopReq): CreateDesktopRequest {
        this['body'] = body;
        return this;
    }
}