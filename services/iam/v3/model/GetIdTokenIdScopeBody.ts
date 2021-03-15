import { GetIdTokenScopeDomainOrProjectBody } from './GetIdTokenScopeDomainOrProjectBody';


export class GetIdTokenIdScopeBody {
    public domain?: GetIdTokenScopeDomainOrProjectBody;
    public project?: GetIdTokenScopeDomainOrProjectBody;
    public constructor() { 
    }
    public withDomain(domain: GetIdTokenScopeDomainOrProjectBody): GetIdTokenIdScopeBody {
        this['domain'] = domain;
        return this;
    }
    public withProject(project: GetIdTokenScopeDomainOrProjectBody): GetIdTokenIdScopeBody {
        this['project'] = project;
        return this;
    }
}