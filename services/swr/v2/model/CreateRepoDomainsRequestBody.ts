

export class CreateRepoDomainsRequestBody {
    private 'access_domain'?: string;
    public permit?: string;
    public deadline?: string;
    public description?: string;
    public constructor(accessDomain?: string, permit?: string, deadline?: string) { 
        this['access_domain'] = accessDomain;
        this['permit'] = permit;
        this['deadline'] = deadline;
    }
    public withAccessDomain(accessDomain: string): CreateRepoDomainsRequestBody {
        this['access_domain'] = accessDomain;
        return this;
    }
    public set accessDomain(accessDomain: string  | undefined) {
        this['access_domain'] = accessDomain;
    }
    public get accessDomain(): string | undefined {
        return this['access_domain'];
    }
    public withPermit(permit: string): CreateRepoDomainsRequestBody {
        this['permit'] = permit;
        return this;
    }
    public withDeadline(deadline: string): CreateRepoDomainsRequestBody {
        this['deadline'] = deadline;
        return this;
    }
    public withDescription(description: string): CreateRepoDomainsRequestBody {
        this['description'] = description;
        return this;
    }
}