

export class ListApplicationComponentsRequest {
    private 'application_id'?: string;
    public marker?: string;
    public limit?: number;
    public constructor(limit?: number) { 
        this['limit'] = limit;
    }
    public withApplicationId(applicationId: string): ListApplicationComponentsRequest {
        this['application_id'] = applicationId;
        return this;
    }
    public set applicationId(applicationId: string  | undefined) {
        this['application_id'] = applicationId;
    }
    public get applicationId(): string | undefined {
        return this['application_id'];
    }
    public withMarker(marker: string): ListApplicationComponentsRequest {
        this['marker'] = marker;
        return this;
    }
    public withLimit(limit: number): ListApplicationComponentsRequest {
        this['limit'] = limit;
        return this;
    }
}