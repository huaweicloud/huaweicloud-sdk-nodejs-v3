import { AttachOrDetachDomainInfo } from './AttachOrDetachDomainInfo';


export class AttachOrDetachDomainsReqBody {
    public domains?: Array<AttachOrDetachDomainInfo>;
    public constructor(domains?: Array<AttachOrDetachDomainInfo>) { 
        this['domains'] = domains;
    }
    public withDomains(domains: Array<AttachOrDetachDomainInfo>): AttachOrDetachDomainsReqBody {
        this['domains'] = domains;
        return this;
    }
}