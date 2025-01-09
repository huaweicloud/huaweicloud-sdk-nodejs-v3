import { ExpandDesktopsVolumesReq } from './ExpandDesktopsVolumesReq';


export class ExpandVolumesRequest {
    private 'Service-Transaction-Id'?: string;
    public body?: ExpandDesktopsVolumesReq;
    public constructor() { 
    }
    public withServiceTransactionId(serviceTransactionId: string): ExpandVolumesRequest {
        this['Service-Transaction-Id'] = serviceTransactionId;
        return this;
    }
    public set serviceTransactionId(serviceTransactionId: string  | undefined) {
        this['Service-Transaction-Id'] = serviceTransactionId;
    }
    public get serviceTransactionId(): string | undefined {
        return this['Service-Transaction-Id'];
    }
    public withBody(body: ExpandDesktopsVolumesReq): ExpandVolumesRequest {
        this['body'] = body;
        return this;
    }
}