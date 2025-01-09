import { ResizeDesktopReq } from './ResizeDesktopReq';


export class ResizeDesktopRequest {
    private 'Service-Transaction-Id'?: string;
    public body?: ResizeDesktopReq;
    public constructor() { 
    }
    public withServiceTransactionId(serviceTransactionId: string): ResizeDesktopRequest {
        this['Service-Transaction-Id'] = serviceTransactionId;
        return this;
    }
    public set serviceTransactionId(serviceTransactionId: string  | undefined) {
        this['Service-Transaction-Id'] = serviceTransactionId;
    }
    public get serviceTransactionId(): string | undefined {
        return this['Service-Transaction-Id'];
    }
    public withBody(body: ResizeDesktopReq): ResizeDesktopRequest {
        this['body'] = body;
        return this;
    }
}