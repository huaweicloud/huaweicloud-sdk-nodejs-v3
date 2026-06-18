import { AssumeAgencyWithOIDCReqBody } from './AssumeAgencyWithOIDCReqBody';


export class AssumeAgencyWithOIDCRequest {
    public body?: AssumeAgencyWithOIDCReqBody;
    public constructor() { 
    }
    public withBody(body: AssumeAgencyWithOIDCReqBody): AssumeAgencyWithOIDCRequest {
        this['body'] = body;
        return this;
    }
}