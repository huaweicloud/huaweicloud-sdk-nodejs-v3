

export class ListBridgesRequest {
    private 'Instance-Id'?: string;
    public limit?: number;
    public marker?: string;
    public offset?: number;
    public constructor() { 
    }
    public withInstanceId(instanceId: string): ListBridgesRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['Instance-Id'];
    }
    public withLimit(limit: number): ListBridgesRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListBridgesRequest {
        this['marker'] = marker;
        return this;
    }
    public withOffset(offset: number): ListBridgesRequest {
        this['offset'] = offset;
        return this;
    }
}