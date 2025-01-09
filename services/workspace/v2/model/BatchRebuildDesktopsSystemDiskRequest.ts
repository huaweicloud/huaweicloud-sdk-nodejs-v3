import { RebuildDesktopsReq } from './RebuildDesktopsReq';


export class BatchRebuildDesktopsSystemDiskRequest {
    private 'Service-Transaction-Id'?: string;
    public body?: RebuildDesktopsReq;
    public constructor() { 
    }
    public withServiceTransactionId(serviceTransactionId: string): BatchRebuildDesktopsSystemDiskRequest {
        this['Service-Transaction-Id'] = serviceTransactionId;
        return this;
    }
    public set serviceTransactionId(serviceTransactionId: string  | undefined) {
        this['Service-Transaction-Id'] = serviceTransactionId;
    }
    public get serviceTransactionId(): string | undefined {
        return this['Service-Transaction-Id'];
    }
    public withBody(body: RebuildDesktopsReq): BatchRebuildDesktopsSystemDiskRequest {
        this['body'] = body;
        return this;
    }
}