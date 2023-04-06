

export class BatchDeleteCn {
    public instances?: Array<string>;
    public constructor() { 
    }
    public withInstances(instances: Array<string>): BatchDeleteCn {
        this['instances'] = instances;
        return this;
    }
}