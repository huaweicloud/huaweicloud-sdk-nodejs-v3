

export class UpdateResourceViewsRequestBody {
    private 'organization_unit_ids'?: Array<string>;
    private 'resource_types'?: Array<string>;
    private 'organization_id'?: string;
    private 'view_type'?: string;
    public name?: string;
    private 'domain_ids'?: Array<string>;
    public constructor(organizationUnitIds?: Array<string>, resourceTypes?: Array<string>, viewType?: string, name?: string) { 
        this['organization_unit_ids'] = organizationUnitIds;
        this['resource_types'] = resourceTypes;
        this['view_type'] = viewType;
        this['name'] = name;
    }
    public withOrganizationUnitIds(organizationUnitIds: Array<string>): UpdateResourceViewsRequestBody {
        this['organization_unit_ids'] = organizationUnitIds;
        return this;
    }
    public set organizationUnitIds(organizationUnitIds: Array<string>  | undefined) {
        this['organization_unit_ids'] = organizationUnitIds;
    }
    public get organizationUnitIds(): Array<string> | undefined {
        return this['organization_unit_ids'];
    }
    public withResourceTypes(resourceTypes: Array<string>): UpdateResourceViewsRequestBody {
        this['resource_types'] = resourceTypes;
        return this;
    }
    public set resourceTypes(resourceTypes: Array<string>  | undefined) {
        this['resource_types'] = resourceTypes;
    }
    public get resourceTypes(): Array<string> | undefined {
        return this['resource_types'];
    }
    public withOrganizationId(organizationId: string): UpdateResourceViewsRequestBody {
        this['organization_id'] = organizationId;
        return this;
    }
    public set organizationId(organizationId: string  | undefined) {
        this['organization_id'] = organizationId;
    }
    public get organizationId(): string | undefined {
        return this['organization_id'];
    }
    public withViewType(viewType: string): UpdateResourceViewsRequestBody {
        this['view_type'] = viewType;
        return this;
    }
    public set viewType(viewType: string  | undefined) {
        this['view_type'] = viewType;
    }
    public get viewType(): string | undefined {
        return this['view_type'];
    }
    public withName(name: string): UpdateResourceViewsRequestBody {
        this['name'] = name;
        return this;
    }
    public withDomainIds(domainIds: Array<string>): UpdateResourceViewsRequestBody {
        this['domain_ids'] = domainIds;
        return this;
    }
    public set domainIds(domainIds: Array<string>  | undefined) {
        this['domain_ids'] = domainIds;
    }
    public get domainIds(): Array<string> | undefined {
        return this['domain_ids'];
    }
}