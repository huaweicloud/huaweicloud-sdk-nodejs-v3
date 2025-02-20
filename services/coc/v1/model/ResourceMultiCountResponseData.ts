

export class ResourceMultiCountResponseData {
    private 'resource_type'?: string;
    public count?: number;
    public constructor() { 
    }
    public withResourceType(resourceType: string): ResourceMultiCountResponseData {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
    public withCount(count: number): ResourceMultiCountResponseData {
        this['count'] = count;
        return this;
    }
}