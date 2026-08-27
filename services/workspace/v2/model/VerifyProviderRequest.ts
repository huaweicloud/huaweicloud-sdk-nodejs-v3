import { VerifyProviderReq } from './VerifyProviderReq';


export class VerifyProviderRequest {
    public body?: VerifyProviderReq;
    public constructor() { 
    }
    public withBody(body: VerifyProviderReq): VerifyProviderRequest {
        this['body'] = body;
        return this;
    }
}