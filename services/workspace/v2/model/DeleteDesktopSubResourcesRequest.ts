import { DeleteDesktopSubResourcesReq } from './DeleteDesktopSubResourcesReq';


export class DeleteDesktopSubResourcesRequest {
    private 'Service-Transaction-Id'?: string;
    public body?: DeleteDesktopSubResourcesReq;
    public constructor() { 
    }
    public withServiceTransactionId(serviceTransactionId: string): DeleteDesktopSubResourcesRequest {
        this['Service-Transaction-Id'] = serviceTransactionId;
        return this;
    }
    public set serviceTransactionId(serviceTransactionId: string  | undefined) {
        this['Service-Transaction-Id'] = serviceTransactionId;
    }
    public get serviceTransactionId(): string | undefined {
        return this['Service-Transaction-Id'];
    }
    public withBody(body: DeleteDesktopSubResourcesReq): DeleteDesktopSubResourcesRequest {
        this['body'] = body;
        return this;
    }
}