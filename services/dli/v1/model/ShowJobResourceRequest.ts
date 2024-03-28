

export class ShowJobResourceRequest {
    private 'resource_name'?: string;
    public group?: string;
    public constructor(resourceName?: string) { 
        this['resource_name'] = resourceName;
    }
    public withResourceName(resourceName: string): ShowJobResourceRequest {
        this['resource_name'] = resourceName;
        return this;
    }
    public set resourceName(resourceName: string  | undefined) {
        this['resource_name'] = resourceName;
    }
    public get resourceName(): string | undefined {
        return this['resource_name'];
    }
    public withGroup(group: string): ShowJobResourceRequest {
        this['group'] = group;
        return this;
    }
}