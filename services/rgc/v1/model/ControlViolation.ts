

export class ControlViolation {
    private 'account_id'?: string;
    private 'account_name'?: string;
    private 'display_name'?: string;
    public name?: string;
    private 'control_id'?: string;
    private 'parent_organizational_unit_id'?: string;
    private 'parent_organizational_unit_name'?: string;
    public region?: string;
    public resource?: string;
    private 'resource_name'?: string;
    private 'resource_type'?: string;
    public service?: string;
    public constructor() { 
    }
    public withAccountId(accountId: string): ControlViolation {
        this['account_id'] = accountId;
        return this;
    }
    public set accountId(accountId: string  | undefined) {
        this['account_id'] = accountId;
    }
    public get accountId(): string | undefined {
        return this['account_id'];
    }
    public withAccountName(accountName: string): ControlViolation {
        this['account_name'] = accountName;
        return this;
    }
    public set accountName(accountName: string  | undefined) {
        this['account_name'] = accountName;
    }
    public get accountName(): string | undefined {
        return this['account_name'];
    }
    public withDisplayName(displayName: string): ControlViolation {
        this['display_name'] = displayName;
        return this;
    }
    public set displayName(displayName: string  | undefined) {
        this['display_name'] = displayName;
    }
    public get displayName(): string | undefined {
        return this['display_name'];
    }
    public withName(name: string): ControlViolation {
        this['name'] = name;
        return this;
    }
    public withControlId(controlId: string): ControlViolation {
        this['control_id'] = controlId;
        return this;
    }
    public set controlId(controlId: string  | undefined) {
        this['control_id'] = controlId;
    }
    public get controlId(): string | undefined {
        return this['control_id'];
    }
    public withParentOrganizationalUnitId(parentOrganizationalUnitId: string): ControlViolation {
        this['parent_organizational_unit_id'] = parentOrganizationalUnitId;
        return this;
    }
    public set parentOrganizationalUnitId(parentOrganizationalUnitId: string  | undefined) {
        this['parent_organizational_unit_id'] = parentOrganizationalUnitId;
    }
    public get parentOrganizationalUnitId(): string | undefined {
        return this['parent_organizational_unit_id'];
    }
    public withParentOrganizationalUnitName(parentOrganizationalUnitName: string): ControlViolation {
        this['parent_organizational_unit_name'] = parentOrganizationalUnitName;
        return this;
    }
    public set parentOrganizationalUnitName(parentOrganizationalUnitName: string  | undefined) {
        this['parent_organizational_unit_name'] = parentOrganizationalUnitName;
    }
    public get parentOrganizationalUnitName(): string | undefined {
        return this['parent_organizational_unit_name'];
    }
    public withRegion(region: string): ControlViolation {
        this['region'] = region;
        return this;
    }
    public withResource(resource: string): ControlViolation {
        this['resource'] = resource;
        return this;
    }
    public withResourceName(resourceName: string): ControlViolation {
        this['resource_name'] = resourceName;
        return this;
    }
    public set resourceName(resourceName: string  | undefined) {
        this['resource_name'] = resourceName;
    }
    public get resourceName(): string | undefined {
        return this['resource_name'];
    }
    public withResourceType(resourceType: string): ControlViolation {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
    public withService(service: string): ControlViolation {
        this['service'] = service;
        return this;
    }
}