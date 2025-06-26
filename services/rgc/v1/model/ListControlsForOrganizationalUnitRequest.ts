

export class ListControlsForOrganizationalUnitRequest {
    private 'managed_organizational_unit_id'?: string;
    public limit?: number;
    public marker?: string;
    public constructor(managedOrganizationalUnitId?: string) { 
        this['managed_organizational_unit_id'] = managedOrganizationalUnitId;
    }
    public withManagedOrganizationalUnitId(managedOrganizationalUnitId: string): ListControlsForOrganizationalUnitRequest {
        this['managed_organizational_unit_id'] = managedOrganizationalUnitId;
        return this;
    }
    public set managedOrganizationalUnitId(managedOrganizationalUnitId: string  | undefined) {
        this['managed_organizational_unit_id'] = managedOrganizationalUnitId;
    }
    public get managedOrganizationalUnitId(): string | undefined {
        return this['managed_organizational_unit_id'];
    }
    public withLimit(limit: number): ListControlsForOrganizationalUnitRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListControlsForOrganizationalUnitRequest {
        this['marker'] = marker;
        return this;
    }
}