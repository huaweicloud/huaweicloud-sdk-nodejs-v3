import { ApplyDesktopsInternetReq } from './ApplyDesktopsInternetReq';


export class ApplyDesktopsInternetRequest {
    private 'Service-Transaction-Id'?: string;
    public body?: ApplyDesktopsInternetReq;
    public constructor() { 
    }
    public withServiceTransactionId(serviceTransactionId: string): ApplyDesktopsInternetRequest {
        this['Service-Transaction-Id'] = serviceTransactionId;
        return this;
    }
    public set serviceTransactionId(serviceTransactionId: string  | undefined) {
        this['Service-Transaction-Id'] = serviceTransactionId;
    }
    public get serviceTransactionId(): string | undefined {
        return this['Service-Transaction-Id'];
    }
    public withBody(body: ApplyDesktopsInternetReq): ApplyDesktopsInternetRequest {
        this['body'] = body;
        return this;
    }
}