import { AddDesktopsVolumesReq } from './AddDesktopsVolumesReq';


export class AddVolumesRequest {
    private 'Service-Transaction-Id'?: string;
    public body?: AddDesktopsVolumesReq;
    public constructor() { 
    }
    public withServiceTransactionId(serviceTransactionId: string): AddVolumesRequest {
        this['Service-Transaction-Id'] = serviceTransactionId;
        return this;
    }
    public set serviceTransactionId(serviceTransactionId: string  | undefined) {
        this['Service-Transaction-Id'] = serviceTransactionId;
    }
    public get serviceTransactionId(): string | undefined {
        return this['Service-Transaction-Id'];
    }
    public withBody(body: AddDesktopsVolumesReq): AddVolumesRequest {
        this['body'] = body;
        return this;
    }
}