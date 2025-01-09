import { LogoffDesktopsReq } from './LogoffDesktopsReq';


export class BatchLogoffDesktopsRequest {
    private 'Service-Transaction-Id'?: string;
    public body?: LogoffDesktopsReq;
    public constructor() { 
    }
    public withServiceTransactionId(serviceTransactionId: string): BatchLogoffDesktopsRequest {
        this['Service-Transaction-Id'] = serviceTransactionId;
        return this;
    }
    public set serviceTransactionId(serviceTransactionId: string  | undefined) {
        this['Service-Transaction-Id'] = serviceTransactionId;
    }
    public get serviceTransactionId(): string | undefined {
        return this['Service-Transaction-Id'];
    }
    public withBody(body: LogoffDesktopsReq): BatchLogoffDesktopsRequest {
        this['body'] = body;
        return this;
    }
}