

export class ShowRepoDomainsResponse {
    public namespace?: string;
    public repository?: string;
    private 'access_domain'?: string;
    public permit?: string;
    public deadline?: string;
    public description?: string;
    private 'creator_id'?: string;
    private 'creator_name'?: string;
    public created?: string;
    public updated?: string;
    public status?: boolean;
    public constructor(namespace?: string, repository?: string, accessDomain?: string, permit?: string, deadline?: string, description?: string, creatorId?: string, creatorName?: string, created?: string, updated?: string, status?: boolean) { 
        this['namespace'] = namespace;
        this['repository'] = repository;
        this['access_domain'] = accessDomain;
        this['permit'] = permit;
        this['deadline'] = deadline;
        this['description'] = description;
        this['creator_id'] = creatorId;
        this['creator_name'] = creatorName;
        this['created'] = created;
        this['updated'] = updated;
        this['status'] = status;
    }
    public withNamespace(namespace: string): ShowRepoDomainsResponse {
        this['namespace'] = namespace;
        return this;
    }
    public withRepository(repository: string): ShowRepoDomainsResponse {
        this['repository'] = repository;
        return this;
    }
    public withAccessDomain(accessDomain: string): ShowRepoDomainsResponse {
        this['access_domain'] = accessDomain;
        return this;
    }
    public set accessDomain(accessDomain: string  | undefined) {
        this['access_domain'] = accessDomain;
    }
    public get accessDomain(): string | undefined {
        return this['access_domain'];
    }
    public withPermit(permit: string): ShowRepoDomainsResponse {
        this['permit'] = permit;
        return this;
    }
    public withDeadline(deadline: string): ShowRepoDomainsResponse {
        this['deadline'] = deadline;
        return this;
    }
    public withDescription(description: string): ShowRepoDomainsResponse {
        this['description'] = description;
        return this;
    }
    public withCreatorId(creatorId: string): ShowRepoDomainsResponse {
        this['creator_id'] = creatorId;
        return this;
    }
    public set creatorId(creatorId: string  | undefined) {
        this['creator_id'] = creatorId;
    }
    public get creatorId(): string | undefined {
        return this['creator_id'];
    }
    public withCreatorName(creatorName: string): ShowRepoDomainsResponse {
        this['creator_name'] = creatorName;
        return this;
    }
    public set creatorName(creatorName: string  | undefined) {
        this['creator_name'] = creatorName;
    }
    public get creatorName(): string | undefined {
        return this['creator_name'];
    }
    public withCreated(created: string): ShowRepoDomainsResponse {
        this['created'] = created;
        return this;
    }
    public withUpdated(updated: string): ShowRepoDomainsResponse {
        this['updated'] = updated;
        return this;
    }
    public withStatus(status: boolean): ShowRepoDomainsResponse {
        this['status'] = status;
        return this;
    }
}