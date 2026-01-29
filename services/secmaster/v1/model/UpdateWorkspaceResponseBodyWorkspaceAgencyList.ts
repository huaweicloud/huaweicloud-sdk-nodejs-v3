

export class UpdateWorkspaceResponseBodyWorkspaceAgencyList {
    private 'project_id'?: string;
    public id?: string;
    public name?: string;
    private 'region_id'?: string;
    private 'workspace_attribution'?: UpdateWorkspaceResponseBodyWorkspaceAgencyListWorkspaceAttributionEnum | string;
    private 'agency_version'?: string;
    private 'domain_id'?: string;
    private 'domain_name'?: string;
    private 'iam_agency_id'?: string;
    private 'iam_agency_name'?: string;
    private 'resource_spec_code'?: Array<string>;
    public selected?: boolean;
    public constructor() { 
    }
    public withProjectId(projectId: string): UpdateWorkspaceResponseBodyWorkspaceAgencyList {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withId(id: string): UpdateWorkspaceResponseBodyWorkspaceAgencyList {
        this['id'] = id;
        return this;
    }
    public withName(name: string): UpdateWorkspaceResponseBodyWorkspaceAgencyList {
        this['name'] = name;
        return this;
    }
    public withRegionId(regionId: string): UpdateWorkspaceResponseBodyWorkspaceAgencyList {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withWorkspaceAttribution(workspaceAttribution: UpdateWorkspaceResponseBodyWorkspaceAgencyListWorkspaceAttributionEnum | string): UpdateWorkspaceResponseBodyWorkspaceAgencyList {
        this['workspace_attribution'] = workspaceAttribution;
        return this;
    }
    public set workspaceAttribution(workspaceAttribution: UpdateWorkspaceResponseBodyWorkspaceAgencyListWorkspaceAttributionEnum | string  | undefined) {
        this['workspace_attribution'] = workspaceAttribution;
    }
    public get workspaceAttribution(): UpdateWorkspaceResponseBodyWorkspaceAgencyListWorkspaceAttributionEnum | string | undefined {
        return this['workspace_attribution'];
    }
    public withAgencyVersion(agencyVersion: string): UpdateWorkspaceResponseBodyWorkspaceAgencyList {
        this['agency_version'] = agencyVersion;
        return this;
    }
    public set agencyVersion(agencyVersion: string  | undefined) {
        this['agency_version'] = agencyVersion;
    }
    public get agencyVersion(): string | undefined {
        return this['agency_version'];
    }
    public withDomainId(domainId: string): UpdateWorkspaceResponseBodyWorkspaceAgencyList {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withDomainName(domainName: string): UpdateWorkspaceResponseBodyWorkspaceAgencyList {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string  | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName(): string | undefined {
        return this['domain_name'];
    }
    public withIamAgencyId(iamAgencyId: string): UpdateWorkspaceResponseBodyWorkspaceAgencyList {
        this['iam_agency_id'] = iamAgencyId;
        return this;
    }
    public set iamAgencyId(iamAgencyId: string  | undefined) {
        this['iam_agency_id'] = iamAgencyId;
    }
    public get iamAgencyId(): string | undefined {
        return this['iam_agency_id'];
    }
    public withIamAgencyName(iamAgencyName: string): UpdateWorkspaceResponseBodyWorkspaceAgencyList {
        this['iam_agency_name'] = iamAgencyName;
        return this;
    }
    public set iamAgencyName(iamAgencyName: string  | undefined) {
        this['iam_agency_name'] = iamAgencyName;
    }
    public get iamAgencyName(): string | undefined {
        return this['iam_agency_name'];
    }
    public withResourceSpecCode(resourceSpecCode: Array<string>): UpdateWorkspaceResponseBodyWorkspaceAgencyList {
        this['resource_spec_code'] = resourceSpecCode;
        return this;
    }
    public set resourceSpecCode(resourceSpecCode: Array<string>  | undefined) {
        this['resource_spec_code'] = resourceSpecCode;
    }
    public get resourceSpecCode(): Array<string> | undefined {
        return this['resource_spec_code'];
    }
    public withSelected(selected: boolean): UpdateWorkspaceResponseBodyWorkspaceAgencyList {
        this['selected'] = selected;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateWorkspaceResponseBodyWorkspaceAgencyListWorkspaceAttributionEnum {
    THIS_ACCOUNT = 'THIS_ACCOUNT',
    CROSS_ACCOUNT = 'CROSS_ACCOUNT'
}
