

export class ListManagedAccountsForParentRequest {
    private 'managed_organizational_unit_id'?: string;
    public limit?: number;
    public marker?: string;
    public constructor(managedOrganizationalUnitId?: string) { 
        this['managed_organizational_unit_id'] = managedOrganizationalUnitId;
    }
    public withManagedOrganizationalUnitId(managedOrganizationalUnitId: string): ListManagedAccountsForParentRequest {
        this['managed_organizational_unit_id'] = managedOrganizationalUnitId;
        return this;
    }
    public set managedOrganizationalUnitId(managedOrganizationalUnitId: string  | undefined) {
        this['managed_organizational_unit_id'] = managedOrganizationalUnitId;
    }
    public get managedOrganizationalUnitId(): string | undefined {
        return this['managed_organizational_unit_id'];
    }
    public withLimit(limit: number): ListManagedAccountsForParentRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListManagedAccountsForParentRequest {
        this['marker'] = marker;
        return this;
    }
}