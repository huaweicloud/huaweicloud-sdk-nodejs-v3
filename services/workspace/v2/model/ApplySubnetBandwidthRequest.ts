import { ApplySubnetBandwidthReq } from './ApplySubnetBandwidthReq';


export class ApplySubnetBandwidthRequest {
    private 'Service-Transaction-Id'?: string;
    public body?: ApplySubnetBandwidthReq;
    public constructor() { 
    }
    public withServiceTransactionId(serviceTransactionId: string): ApplySubnetBandwidthRequest {
        this['Service-Transaction-Id'] = serviceTransactionId;
        return this;
    }
    public set serviceTransactionId(serviceTransactionId: string  | undefined) {
        this['Service-Transaction-Id'] = serviceTransactionId;
    }
    public get serviceTransactionId(): string | undefined {
        return this['Service-Transaction-Id'];
    }
    public withBody(body: ApplySubnetBandwidthReq): ApplySubnetBandwidthRequest {
        this['body'] = body;
        return this;
    }
}