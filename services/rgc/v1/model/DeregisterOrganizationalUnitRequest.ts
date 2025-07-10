

export class DeregisterOrganizationalUnitRequest {
    private 'managed_organizational_unit_id'?: string;
    public constructor(managedOrganizationalUnitId?: string) { 
        this['managed_organizational_unit_id'] = managedOrganizationalUnitId;
    }
    public withManagedOrganizationalUnitId(managedOrganizationalUnitId: string): DeregisterOrganizationalUnitRequest {
        this['managed_organizational_unit_id'] = managedOrganizationalUnitId;
        return this;
    }
    public set managedOrganizationalUnitId(managedOrganizationalUnitId: string  | undefined) {
        this['managed_organizational_unit_id'] = managedOrganizationalUnitId;
    }
    public get managedOrganizationalUnitId(): string | undefined {
        return this['managed_organizational_unit_id'];
    }
}