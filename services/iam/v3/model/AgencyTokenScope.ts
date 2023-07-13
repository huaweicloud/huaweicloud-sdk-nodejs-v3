import { AgencyTokenScopeDomain } from './AgencyTokenScopeDomain';
import { AgencyTokenScopeProject } from './AgencyTokenScopeProject';


export class AgencyTokenScope {
    public domain?: AgencyTokenScopeDomain;
    public project?: AgencyTokenScopeProject;
    public constructor() { 
    }
    public withDomain(domain: AgencyTokenScopeDomain): AgencyTokenScope {
        this['domain'] = domain;
        return this;
    }
    public withProject(project: AgencyTokenScopeProject): AgencyTokenScope {
        this['project'] = project;
        return this;
    }
}