

export class ShowClusterResourcesRequest {
    private 'resource_group'?: string;
    public offset?: number;
    public limit?: number;
    public constructor() { 
    }
    public withResourceGroup(resourceGroup: string): ShowClusterResourcesRequest {
        this['resource_group'] = resourceGroup;
        return this;
    }
    public set resourceGroup(resourceGroup: string  | undefined) {
        this['resource_group'] = resourceGroup;
    }
    public get resourceGroup(): string | undefined {
        return this['resource_group'];
    }
    public withOffset(offset: number): ShowClusterResourcesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ShowClusterResourcesRequest {
        this['limit'] = limit;
        return this;
    }
}