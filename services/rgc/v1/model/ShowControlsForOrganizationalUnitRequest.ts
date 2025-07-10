

export class ShowControlsForOrganizationalUnitRequest {
    private 'managed_organizational_unit_id'?: string;
    private 'control_id'?: string;
    public constructor(managedOrganizationalUnitId?: string, controlId?: string) { 
        this['managed_organizational_unit_id'] = managedOrganizationalUnitId;
        this['control_id'] = controlId;
    }
    public withManagedOrganizationalUnitId(managedOrganizationalUnitId: string): ShowControlsForOrganizationalUnitRequest {
        this['managed_organizational_unit_id'] = managedOrganizationalUnitId;
        return this;
    }
    public set managedOrganizationalUnitId(managedOrganizationalUnitId: string  | undefined) {
        this['managed_organizational_unit_id'] = managedOrganizationalUnitId;
    }
    public get managedOrganizationalUnitId(): string | undefined {
        return this['managed_organizational_unit_id'];
    }
    public withControlId(controlId: string): ShowControlsForOrganizationalUnitRequest {
        this['control_id'] = controlId;
        return this;
    }
    public set controlId(controlId: string  | undefined) {
        this['control_id'] = controlId;
    }
    public get controlId(): string | undefined {
        return this['control_id'];
    }
}