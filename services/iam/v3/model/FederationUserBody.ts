import { DomainInfo } from './DomainInfo';
import { OsFederationInfo } from './OsFederationInfo';


export class FederationUserBody {
    private 'OS-FEDERATION'?: OsFederationInfo;
    public domain?: DomainInfo;
    public id?: string;
    public name?: string;
    public constructor(osFederation?: OsFederationInfo, domain?: DomainInfo) { 
        this['OS-FEDERATION'] = osFederation;
        this['domain'] = domain;
    }
    public withOsFederation(osFederation: OsFederationInfo): FederationUserBody {
        this['OS-FEDERATION'] = osFederation;
        return this;
    }
    public set osFederation(osFederation: OsFederationInfo  | undefined) {
        this['OS-FEDERATION'] = osFederation;
    }
    public get osFederation(): OsFederationInfo | undefined {
        return this['OS-FEDERATION'];
    }
    public withDomain(domain: DomainInfo): FederationUserBody {
        this['domain'] = domain;
        return this;
    }
    public withId(id: string): FederationUserBody {
        this['id'] = id;
        return this;
    }
    public withName(name: string): FederationUserBody {
        this['name'] = name;
        return this;
    }
}