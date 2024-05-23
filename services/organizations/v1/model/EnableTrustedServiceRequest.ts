import { TrustedServiceReqBody } from './TrustedServiceReqBody';


export class EnableTrustedServiceRequest {
    public body?: TrustedServiceReqBody;
    public constructor() { 
    }
    public withBody(body: TrustedServiceReqBody): EnableTrustedServiceRequest {
        this['body'] = body;
        return this;
    }
}