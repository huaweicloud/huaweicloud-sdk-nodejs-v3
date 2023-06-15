import { DomainIpv6SwitchReq } from './DomainIpv6SwitchReq';


export class UpdateDomainIp6SwitchRequest {
    public body?: DomainIpv6SwitchReq;
    public constructor() { 
    }
    public withBody(body: DomainIpv6SwitchReq): UpdateDomainIp6SwitchRequest {
        this['body'] = body;
        return this;
    }
}