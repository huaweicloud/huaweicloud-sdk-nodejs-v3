

export class DeploymentTargetsPrimitiveTypeHolderDeploymentTargets {
    public regions?: Array<string>;
    private 'domain_ids'?: Array<string>;
    private 'domain_ids_uri'?: string;
    public constructor(regions?: Array<string>) { 
        this['regions'] = regions;
    }
    public withRegions(regions: Array<string>): DeploymentTargetsPrimitiveTypeHolderDeploymentTargets {
        this['regions'] = regions;
        return this;
    }
    public withDomainIds(domainIds: Array<string>): DeploymentTargetsPrimitiveTypeHolderDeploymentTargets {
        this['domain_ids'] = domainIds;
        return this;
    }
    public set domainIds(domainIds: Array<string>  | undefined) {
        this['domain_ids'] = domainIds;
    }
    public get domainIds(): Array<string> | undefined {
        return this['domain_ids'];
    }
    public withDomainIdsUri(domainIdsUri: string): DeploymentTargetsPrimitiveTypeHolderDeploymentTargets {
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