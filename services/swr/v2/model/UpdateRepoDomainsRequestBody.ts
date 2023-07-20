

export class UpdateRepoDomainsRequestBody {
    public permit?: string;
    public deadline?: string;
    public description?: string;
    public constructor(permit?: string, deadline?: string) { 
        this['permit'] = permit;
        this['deadline'] = deadline;
    }
    public withPermit(permit: string): UpdateRepoDomainsRequestBody {
        this['permit'] = permit;
        return this;
    }
    public withDeadline(deadline: string): UpdateRepoDomainsRequestBody {
        this['deadline'] = deadline;
        return this;
    }
    public withDescription(description: string): UpdateRepoDomainsRequestBody {
        this['description'] = description;
        return this;
    }
}