

export class BatchRestartOrDeleteInstanceRespResults {
    public result?: string;
    public instance?: string;
    public constructor() { 
    }
    public withResult(result: string): BatchRestartOrDeleteInstanceRespResults {
        this['result'] = result;
        return this;
    }
    public withInstance(instance: string): BatchRestartOrDeleteInstanceRespResults {
        this['instance'] = instance;
        return this;
    }
}