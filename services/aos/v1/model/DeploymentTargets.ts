

export class DeploymentTargets {
    public regions?: Array<string>;
    private 'domain_ids'?: Array<string>;
    private 'domain_ids_uri'?: string;
    public constructor(regions?: Array<string>) { 
        this['regions'] = regions;
    }
    public withRegions(regions: Array<string>): DeploymentTargets {
        this['regions'] = regions;
        return this;
    }
    public withDomainIds(domainIds: Array<string>): DeploymentTargets {
        this['domain_ids'] = domainIds;
        return this;
    }
    public set domainIds(domainIds: Array<string>  | undefined) {
        this['domain_ids'] = domainIds;
    }
    public get domainIds(): Array<string> | undefined {
        return this['domain_ids'];
    }
    public withDomainIdsUri(domainIdsUri: string): DeploymentTargets {
        this['domain_ids_uri'] = domainIdsUri;
        return this;
    }
    public set domainIdsUri(domainIdsUri: string  | undefined) {
        this['domain_ids_uri'] = domainIdsUri;
    }
    public get domainIdsUri(): string | undefined {
        return this['domain_ids_uri'];
    }
}