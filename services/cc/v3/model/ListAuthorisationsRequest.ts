

export class ListAuthorisationsRequest {
    public limit?: number;
    public marker?: string;
    public id?: Array<string>;
    public name?: Array<string>;
    public description?: Array<string>;
    private 'cloud_connection_id'?: Array<string>;
    private 'instance_id'?: Array<string>;
    public constructor() { 
    }
    public withLimit(limit: number): ListAuthorisationsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListAuthorisationsRequest {
        this['marker'] = marker;
        return this;
    }
    public withId(id: Array<string>): ListAuthorisationsRequest {
        this['id'] = id;
        return this;
    }
    public withName(name: Array<string>): ListAuthorisationsRequest {
        this['name'] = name;
        return this;
    }
    public withDescription(description: Array<string>): ListAuthorisationsRequest {
        this['description'] = description;
        return this;
    }
    public withCloudConnectionId(cloudConnectionId: Array<string>): ListAuthorisationsRequest {
        this['cloud_connection_id'] = cloudConnectionId;
        return this;
    }
    public set cloudConnectionId(cloudConnectionId: Array<string>  | undefined) {
        this['cloud_connection_id'] = cloudConnectionId;
    }
    public get cloudConnectionId(): Array<string> | undefined {
        return this['cloud_connection_id'];
    }
    public withInstanceId(instanceId: Array<string>): ListAuthorisationsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: Array<string>  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): Array<string> | undefined {
        return this['instance_id'];
    }
}