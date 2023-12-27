import { CadDomainSwitchRequest } from './CadDomainSwitchRequest';


export class ModifyDomainWebSwitchRequest {
    public body?: CadDomainSwitchRequest;
    public constructor() { 
    }
    public withBody(body: CadDomainSwitchRequest): ModifyDomainWebSwitchRequest {
        this['body'] = body;
        return this;
    }
}