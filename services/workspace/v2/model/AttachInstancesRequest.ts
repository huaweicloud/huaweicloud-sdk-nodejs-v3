import { AttachInstancesReq } from './AttachInstancesReq';


export class AttachInstancesRequest {
    private 'Service-Transaction-Id'?: string;
    public body?: AttachInstancesReq;
    public constructor() { 
    }
    public withServiceTransactionId(serviceTransactionId: string): AttachInstancesRequest {
        this['Service-Transaction-Id'] = serviceTransactionId;
        return this;
    }
    public set serviceTransactionId(serviceTransactionId: string  | undefined) {
        this['Service-Transaction-Id'] = serviceTransactionId;
    }
    public get serviceTransactionId(): string | undefined {
        return this['Service-Transaction-Id'];
    }
    public withBody(body: AttachInstancesReq): AttachInstancesRequest {
        this['body'] = body;
        return this;
    }
}