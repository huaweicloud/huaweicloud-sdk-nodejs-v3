

export class ListManagedOrganizationalUnitsRequest {
    private 'control_id'?: string;
    public limit?: number;
    public marker?: string;
    public constructor() { 
    }
    public withControlId(controlId: string): ListManagedOrganizationalUnitsRequest {
        this['control_id'] = controlId;
        return this;
    }
    public set controlId(controlId: string  | undefined) {
        this['control_id'] = controlId;
    }
    public get controlId(): string | undefined {
        return this['control_id'];
    }
    public withLimit(limit: number): ListManagedOrganizationalUnitsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListManagedOrganizationalUnitsRequest {
        this['marker'] = marker;
        return this;
    }
}