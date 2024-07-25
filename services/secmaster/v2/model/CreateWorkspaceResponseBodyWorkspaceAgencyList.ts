

export class CreateWorkspaceResponseBodyWorkspaceAgencyList {
    private 'project_id'?: string;
    public id?: string;
    public name?: string;
    private 'region_id'?: string;
    private 'workspace_attribution'?: CreateWorkspaceResponseBodyWorkspaceAgencyListWorkspaceAttributionEnum | string;
    private 'agency_version'?: string;
    private 'domain_id'?: string;
    private 'domain_name'?: string;
    private 'iam_agency_id'?: string;
    private 'iam_agency_name'?: string;
    private 'resource_spec_code'?: Array<string>;
    public selected?: boolean;
    public constructor() { 
    }
    public withProjectId(projectId: string): CreateWorkspaceResponseBodyWorkspaceAgencyList {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withId(id: string): CreateWorkspaceResponseBodyWorkspaceAgencyList {
        this['id'] = id;
        return this;
    }
    public withName(name: string): CreateWorkspaceResponseBodyWorkspaceAgencyList {
        this['name'] = name;
        return this;
    }
    public withRegionId(regionId: string): CreateWorkspaceResponseBodyWorkspaceAgencyList {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withWorkspaceAttribution(workspaceAttribution: CreateWorkspaceResponseBodyWorkspaceAgencyListWorkspaceAttributionEnum | string): CreateWorkspaceResponseBodyWorkspaceAgencyList {
        this['workspace_attribution'] = workspaceAttribution;
        return this;
    }
    public set workspaceAttribution(workspaceAttribution: CreateWorkspaceResponseBodyWorkspaceAgencyListWorkspaceAttributionEnum | string  | undefined) {
        this['workspace_attribution'] = workspaceAttribution;
    }
    public get workspaceAttribution(): CreateWorkspaceResponseBodyWorkspaceAgencyListWorkspaceAttributionEnum | string | undefined {
        return this['workspace_attribution'];
    }
    public withAgencyVersion(agencyVersion: string): CreateWorkspaceResponseBodyWorkspaceAgencyList {
        this['agency_version'] = agencyVersion;
        return this;
    }
    public set agencyVersion(agencyVersion: string  | undefined) {
        this['agency_version'] = agencyVersion;
    }
    public get agencyVersion(): string | undefined {
        return this['agency_version'];
    }
    public withDomainId(domainId: string): CreateWorkspaceResponseBodyWorkspaceAgencyList {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withDomainName(domainName: string): CreateWorkspaceResponseBodyWorkspaceAgencyList {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string  | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName(): string | undefined {
        return this['domain_name'];
    }
    public withIamAgencyId(iamAgencyId: string): CreateWorkspaceResponseBodyWorkspaceAgencyList {
        this['iam_agency_id'] = iamAgencyId;
        return this;
    }
    public set iamAgencyId(iamAgencyId: string  | undefined) {
        this['iam_agency_id'] = iamAgencyId;
    }
    public get iamAgencyId(): string | undefined {
        return this['iam_agency_id'];
    }
    public withIamAgencyName(iamAgencyName: string): CreateWorkspaceResponseBodyWorkspaceAgencyList {
        this['iam_agency_name'] = iamAgencyName;
        return this;
    }
    public set iamAgencyName(iamAgencyName: string  | undefined) {
        this['iam_agency_name'] = iamAgencyName;
    }
    public get iamAgencyName(): string | undefined {
        return this['iam_agency_name'];
    }
    public withResourceSpecCode(resourceSpecCode: Array<string>): CreateWorkspaceResponseBodyWorkspaceAgencyList {
        this['resource_spec_code'] = resourceSpecCode;
        return this;
    }
    public set resourceSpecCode(resourceSpecCode: Array<string>  | undefined) {
        this['resource_spec_code'] = resourceSpecCode;
    }
    public get resourceSpecCode(): Array<string> | undefined {
        return this['resource_spec_code'];
    }
    public withSelected(selected: boolean): CreateWorkspaceResponseBodyWorkspaceAgencyList {
        this['selected'] = selected;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateWorkspaceResponseBodyWorkspaceAgencyListWorkspaceAttributionEnum {
    THIS_ACCOUNT = 'THIS_ACCOUNT',
    CROSS_ACCOUNT = 'CROSS_ACCOUNT'
}
