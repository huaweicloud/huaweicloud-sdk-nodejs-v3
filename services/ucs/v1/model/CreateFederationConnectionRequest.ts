import { CreateFederationConnectionRequestBody } from './CreateFederationConnectionRequestBody';


export class CreateFederationConnectionRequest {
    public clustergroupid?: string;
    public body?: CreateFederationConnectionRequestBody;
    public constructor(clustergroupid?: string) { 
        this['clustergroupid'] = clustergroupid;
    }
    public withClustergroupid(clustergroupid: string): CreateFederationConnectionRequest {
        this['clustergroupid'] = clustergroupid;
        return this;
    }
    public withBody(body: CreateFederationConnectionRequestBody): CreateFederationConnectionRequest {
        this['body'] = body;
        return this;
    }
}