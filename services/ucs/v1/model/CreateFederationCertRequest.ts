import { CreateFederationCertRequestBody } from './CreateFederationCertRequestBody';


export class CreateFederationCertRequest {
    public clustergroupid?: string;
    public body?: CreateFederationCertRequestBody;
    public constructor(clustergroupid?: string) { 
        this['clustergroupid'] = clustergroupid;
    }
    public withClustergroupid(clustergroupid: string): CreateFederationCertRequest {
        this['clustergroupid'] = clustergroupid;
        return this;
    }
    public withBody(body: CreateFederationCertRequestBody): CreateFederationCertRequest {
        this['body'] = body;
        return this;
    }
}