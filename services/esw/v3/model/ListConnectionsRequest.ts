

export class ListConnectionsRequest {
    private 'instance_id'?: string;
    public id?: string;
    public name?: string;
    public limit?: number;
    public marker?: string;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ListConnectionsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withId(id: string): ListConnectionsRequest {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ListConnectionsRequest {
        this['name'] = name;
        return this;
    }
    public withLimit(limit: number): ListConnectionsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListConnectionsRequest {
        this['marker'] = marker;
        return this;
    }
}