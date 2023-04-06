

export class WorkloadResource {
    private 'resource_name': string | undefined;
    private 'resource_value': number | undefined;
    public constructor(resourceName?: any, resourceValue?: any) { 
        this['resource_name'] = resourceName;
        this['resource_value'] = resourceValue;
    }
    public withResourceName(resourceName: string): WorkloadResource {
        this['resource_name'] = resourceName;
        return this;
    }
    public set resourceName(resourceName: string | undefined) {
        this['resource_name'] = resourceName;
    }
    public get resourceName() {
        return this['resource_name'];
    }
    public withResourceValue(resourceValue: number): WorkloadResource {
        this['resource_value'] = resourceValue;
        return this;
    }
    public set resourceValue(resourceValue: number | undefined) {
        this['resource_value'] = resourceValue;
    }
    public get resourceValue() {
        return this['resource_value'];
    }
}