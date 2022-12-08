

export class ExecutionPlanSummary {
    private 'resource_add'?: number | undefined;
    private 'resource_update'?: number | undefined;
    private 'resource_delete'?: number | undefined;
    public constructor() { 
    }
    public withResourceAdd(resourceAdd: number): ExecutionPlanSummary {
        this['resource_add'] = resourceAdd;
        return this;
    }
    public set resourceAdd(resourceAdd: number | undefined) {
        this['resource_add'] = resourceAdd;
    }
    public get resourceAdd() {
        return this['resource_add'];
    }
    public withResourceUpdate(resourceUpdate: number): ExecutionPlanSummary {
        this['resource_update'] = resourceUpdate;
        return this;
    }
    public set resourceUpdate(resourceUpdate: number | undefined) {
        this['resource_update'] = resourceUpdate;
    }
    public get resourceUpdate() {
        return this['resource_update'];
    }
    public withResourceDelete(resourceDelete: number): ExecutionPlanSummary {
        this['resource_delete'] = resourceDelete;
        return this;
    }
    public set resourceDelete(resourceDelete: number | undefined) {
        this['resource_delete'] = resourceDelete;
    }
    public get resourceDelete() {
        return this['resource_delete'];
    }
}