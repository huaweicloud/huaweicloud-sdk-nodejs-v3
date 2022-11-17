

export class BatchOpsResult {
    public result?: string;
    public instance?: string;
    public constructor() { 
    }
    public withResult(result: string): BatchOpsResult {
        this['result'] = result;
        return this;
    }
    public withInstance(instance: string): BatchOpsResult {
        this['instance'] = instance;
        return this;
    }
}