

export class ListManagedAccountsRequest {
    private 'control_id'?: string;
    public limit?: number;
    public marker?: string;
    public constructor() { 
    }
    public withControlId(controlId: string): ListManagedAccountsRequest {
        this['control_id'] = controlId;
        return this;
    }
    public set controlId(controlId: string  | undefined) {
        this['control_id'] = controlId;
    }
    public get controlId(): string | undefined {
        return this['control_id'];
    }
    public withLimit(limit: number): ListManagedAccountsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListManagedAccountsRequest {
        this['marker'] = marker;
        return this;
    }
}