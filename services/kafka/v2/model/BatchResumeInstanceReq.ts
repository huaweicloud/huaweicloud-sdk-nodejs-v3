

export class BatchResumeInstanceReq {
    public instances?: Array<string>;
    public constructor() { 
    }
    public withInstances(instances: Array<string>): BatchResumeInstanceReq {
        this['instances'] = instances;
        return this;
    }
}