import { AuthScopeDomain } from './AuthScopeDomain';
import { AuthScopeProject } from './AuthScopeProject';


export class AuthScope {
    public domain?: AuthScopeDomain;
    public project?: AuthScopeProject;
    public constructor() { 
    }
    public withDomain(domain: AuthScopeDomain): AuthScope {
        this['domain'] = domain;
        return this;
    }
    public withProject(project: AuthScopeProject): AuthScope {
        this['project'] = project;
        return this;
    }
}