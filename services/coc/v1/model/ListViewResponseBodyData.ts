

export class ListViewResponseBodyData {
    public id?: string;
    public name?: string;
    private 'manager_domain_id'?: string;
    private 'organization_id'?: string;
    private 'organization_unit_ids'?: Array<string>;
    private 'domain_ids'?: Array<string>;
    private 'resource_types'?: Array<string>;
    private 'view_type'?: string;
    public constructor() { 
    }
    public withId(id: string): ListViewResponseBodyData {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ListViewResponseBodyData {
        this['name'] = name;
        return this;
    }
    public withManagerDomainId(managerDomainId: string): ListViewResponseBodyData {
        this['manager_domain_id'] = managerDomainId;
        return this;
    }
    public set managerDomainId(managerDomainId: string  | undefined) {
        this['manager_domain_id'] = managerDomainId;
    }
    public get managerDomainId(): string | undefined {
        return this['manager_domain_id'];
    }
    public withOrganizationId(organizationId: string): ListViewResponseBodyData {
        this['organization_id'] = organizationId;
        return this;
    }
    public set organizationId(organizationId: string  | undefined) {
        this['organization_id'] = organizationId;
    }
    public get organizationId(): string | undefined {
        return this['organization_id'];
    }
    public withOrganizationUnitIds(organizationUnitIds: Array<string>): ListViewResponseBodyData {
        this['organization_unit_ids'] = organizationUnitIds;
        return this;
    }
    public set organizationUnitIds(organizationUnitIds: Array<string>  | undefined) {
        this['organization_unit_ids'] = organizationUnitIds;
    }
    public get organizationUnitIds(): Array<string> | undefined {
        return this['organization_unit_ids'];
    }
    public withDomainIds(domainIds: Array<string>): ListViewResponseBodyData {
        this['domain_ids'] = domainIds;
        return this;
    }
    public set domainIds(domainIds: Array<string>  | undefined) {
        this['domain_ids'] = domainIds;
    }
    public get domainIds(): Array<string> | undefined {
        return this['domain_ids'];
    }
    public withResourceTypes(resourceTypes: Array<string>): ListViewResponseBodyData {
        this['resource_types'] = resourceTypes;
        return this;
    }
    public set resourceTypes(resourceTypes: Array<string>  | undefined) {
        this['resource_types'] = resourceTypes;
    }
    public get resourceTypes(): Array<string> | undefined {
        return this['resource_types'];
    }
    public withViewType(viewType: string): ListViewResponseBodyData {
        this['view_type'] = viewType;
        return this;
    }
    public set viewType(viewType: string  | undefined) {
        this['view_type'] = viewType;
    }
    public get viewType(): string | undefined {
        return this['view_type'];
    }
}