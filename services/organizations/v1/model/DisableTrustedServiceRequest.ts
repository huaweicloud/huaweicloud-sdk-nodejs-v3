import { TrustedServiceReqBody } from './TrustedServiceReqBody';


export class DisableTrustedServiceRequest {
    public body?: TrustedServiceReqBody;
    public constructor() { 
    }
    public withBody(body: TrustedServiceReqBody): DisableTrustedServiceRequest {
        this['body'] = body;
        return this;
    }
}