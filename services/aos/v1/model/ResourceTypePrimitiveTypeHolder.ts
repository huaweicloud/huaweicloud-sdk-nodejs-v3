

export class ResourceTypePrimitiveTypeHolder {
    private 'resource_type'?: string | undefined;
    public constructor() { 
    }
    public withResourceType(resourceType: string): ResourceTypePrimitiveTypeHolder {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType() {
        return this['resource_type'];
    }
}