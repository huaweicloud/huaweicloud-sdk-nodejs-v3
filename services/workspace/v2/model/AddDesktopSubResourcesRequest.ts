import { AddDesktopSubResourcesReq } from './AddDesktopSubResourcesReq';


export class AddDesktopSubResourcesRequest {
    private 'Service-Transaction-Id'?: string;
    public body?: AddDesktopSubResourcesReq;
    public constructor() { 
    }
    public withServiceTransactionId(serviceTransactionId: string): AddDesktopSubResourcesRequest {
        this['Service-Transaction-Id'] = serviceTransactionId;
        return this;
    }
    public set serviceTransactionId(serviceTransactionId: string  | undefined) {
        this['Service-Transaction-Id'] = serviceTransactionId;
    }
    public get serviceTransactionId(): string | undefined {
        return this['Service-Transaction-Id'];
    }
    public withBody(body: AddDesktopSubResourcesReq): AddDesktopSubResourcesRequest {
        this['body'] = body;
        return this;
    }
}