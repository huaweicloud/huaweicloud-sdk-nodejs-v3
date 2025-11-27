import { UpgradeFederationRequestBody } from './UpgradeFederationRequestBody';


export class UpgradeFederationRequest {
    public clustergroupid?: string;
    public body?: UpgradeFederationRequestBody;
    public constructor(clustergroupid?: string) { 
        this['clustergroupid'] = clustergroupid;
    }
    public withClustergroupid(clustergroupid: string): UpgradeFederationRequest {
        this['clustergroupid'] = clustergroupid;
        return this;
    }
    public withBody(body: UpgradeFederationRequestBody): UpgradeFederationRequest {
        this['body'] = body;
        return this;
    }
}