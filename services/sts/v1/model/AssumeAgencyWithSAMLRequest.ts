import { AssumeAgencyWithSAMLReqBody } from './AssumeAgencyWithSAMLReqBody';


export class AssumeAgencyWithSAMLRequest {
    public body?: AssumeAgencyWithSAMLReqBody;
    public constructor() { 
    }
    public withBody(body: AssumeAgencyWithSAMLReqBody): AssumeAgencyWithSAMLRequest {
        this['body'] = body;
        return this;
    }
}