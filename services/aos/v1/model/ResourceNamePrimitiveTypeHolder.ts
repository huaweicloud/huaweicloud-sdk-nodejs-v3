

export class ResourceNamePrimitiveTypeHolder {
    private 'resource_name'?: string | undefined;
    public constructor() { 
    }
    public withResourceName(resourceName: string): ResourceNamePrimitiveTypeHolder {
        this['resource_name'] = resourceName;
        return this;
    }
    public set resourceName(resourceName: string | undefined) {
        this['resource_name'] = resourceName;
    }
    public get resourceName() {
        return this['resource_name'];
    }
}