

export class KeystoneListPermissionsRequest {
    public name?: string;
    private 'domain_id'?: string;
    public page?: number;
    private 'per_page'?: number;
    private 'permission_type'?: string;
    private 'display_name'?: string;
    public type?: string;
    public catalog?: string;
    public constructor() { 
    }
    public withName(name: string): KeystoneListPermissionsRequest {
        this['name'] = name;
        return this;
    }
    public withDomainId(domainId: string): KeystoneListPermissionsRequest {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withPage(page: number): KeystoneListPermissionsRequest {
        this['page'] = page;
        return this;
    }
    public withPerPage(perPage: number): KeystoneListPermissionsRequest {
        this['per_page'] = perPage;
        return this;
    }
    public set perPage(perPage: number  | undefined) {
        this['per_page'] = perPage;
    }
    public get perPage(): number | undefined {
        return this['per_page'];
    }
    public withPermissionType(permissionType: string): KeystoneListPermissionsRequest {
        this['permission_type'] = permissionType;
        return this;
    }
    public set permissionType(permissionType: string  | undefined) {
        this['permission_type'] = permissionType;
    }
    public get permissionType(): string | undefined {
        return this['permission_type'];
    }
    public withDisplayName(displayName: string): KeystoneListPermissionsRequest {
        this['display_name'] = displayName;
        return this;
    }
    public set displayName(displayName: string  | undefined) {
        this['display_name'] = displayName;
    }
    public get displayName(): string | undefined {
        return this['display_name'];
    }
    public withType(type: string): KeystoneListPermissionsRequest {
        this['type'] = type;
        return this;
    }
    public withCatalog(catalog: string): KeystoneListPermissionsRequest {
        this['catalog'] = catalog;
        return this;
    }
}