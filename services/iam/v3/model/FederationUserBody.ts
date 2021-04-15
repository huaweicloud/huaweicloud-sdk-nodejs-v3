import { DomainInfo } from './DomainInfo';
import { OsFederationInfo } from './OsFederationInfo';


export class FederationUserBody {
    private 'OS-FEDERATION': OsFederationInfo | undefined;
    public domain: DomainInfo;
    public id?: string;
    public name?: string;
    public constructor(osFederation?: any, domain?: any) { 
        this['OS-FEDERATION'] = osFederation;
        this['domain'] = domain;
    }
    public withOsFederation(osFederation: OsFederationInfo): FederationUserBody {
        this['OS-FEDERATION'] = osFederation;
        return this;
    }
    public set osFederation(osFederation: OsFederationInfo | undefined) {
        this['OS-FEDERATION'] = osFederation;
    }
    public get osFederation() {
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