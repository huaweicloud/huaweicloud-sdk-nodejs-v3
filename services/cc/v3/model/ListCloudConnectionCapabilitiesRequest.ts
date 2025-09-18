

export class ListCloudConnectionCapabilitiesRequest {
    public limit?: number;
    public marker?: string;
    private 'resource_type'?: string;
    public constructor() { 
    }
    public withLimit(limit: number): ListCloudConnectionCapabilitiesRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListCloudConnectionCapabilitiesRequest {
        this['marker'] = marker;
        return this;
    }
    public withResourceType(resourceType: string): ListCloudConnectionCapabilitiesRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
}