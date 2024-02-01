

export class GcbResourceType {
    private 'resource_type'?: string;
    public constructor() { 
    }
    public withResourceType(resourceType: string): GcbResourceType {
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