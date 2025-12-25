

export class ShowShipperDelegateAuthRequest {
    private 'workspace_id'?: string;
    private 'domain_id'?: string;
    private 'agency_name'?: string;
    public constructor(workspaceId?: string, domainId?: string, agencyName?: string) { 
        this['workspace_id'] = workspaceId;
        this['domain_id'] = domainId;
        this['agency_name'] = agencyName;
    }
    public withWorkspaceId(workspaceId: string): ShowShipperDelegateAuthRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withDomainId(domainId: string): ShowShipperDelegateAuthRequest {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withAgencyName(agencyName: string): ShowShipperDelegateAuthRequest {
        this['agency_name'] = agencyName;
        return this;
    }
    public set agencyName(agencyName: string  | undefined) {
        this['agency_name'] = agencyName;
    }
    public get agencyName(): string | undefined {
        return this['agency_name'];
    }
}