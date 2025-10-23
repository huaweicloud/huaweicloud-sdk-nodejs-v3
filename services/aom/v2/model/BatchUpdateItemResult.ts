

export class BatchUpdateItemResult {
    private 'resource_alias'?: string;
    private 'resource_name'?: string;
    private 'ret_status'?: string;
    public constructor() { 
    }
    public withResourceAlias(resourceAlias: string): BatchUpdateItemResult {
        this['resource_alias'] = resourceAlias;
        return this;
    }
    public set resourceAlias(resourceAlias: string  | undefined) {
        this['resource_alias'] = resourceAlias;
    }
    public get resourceAlias(): string | undefined {
        return this['resource_alias'];
    }
    public withResourceName(resourceName: string): BatchUpdateItemResult {
        this['resource_name'] = resourceName;
        return this;
    }
    public set resourceName(resourceName: string  | undefined) {
        this['resource_name'] = resourceName;
    }
    public get resourceName(): string | undefined {
        return this['resource_name'];
    }
    public withRetStatus(retStatus: string): BatchUpdateItemResult {
        this['ret_status'] = retStatus;
        return this;
    }
    public set retStatus(retStatus: string  | undefined) {
        this['ret_status'] = retStatus;
    }
    public get retStatus(): string | undefined {
        return this['ret_status'];
    }
}