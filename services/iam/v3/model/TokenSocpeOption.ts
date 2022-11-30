import { ScopeDomainOption } from './ScopeDomainOption';
import { ScopeProjectOption } from './ScopeProjectOption';


export class TokenSocpeOption {
    public domain?: ScopeDomainOption;
    public project?: ScopeProjectOption;
    public constructor() { 
    }
    public withDomain(domain: ScopeDomainOption): TokenSocpeOption {
        this['domain'] = domain;
        return this;
    }
    public withProject(project: ScopeProjectOption): TokenSocpeOption {
        this['project'] = project;
        return this;
    }
}