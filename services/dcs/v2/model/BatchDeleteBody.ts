

export class BatchDeleteBody {
    public instances?: Array<string>;
    public constructor() { 
    }
    public withInstances(instances: Array<string>): BatchDeleteBody {
        this['instances'] = instances;
        return this;
    }
}