

export class ExecutionPlanSummary {
    private 'resource_add'?: number;
    private 'resource_update'?: number;
    private 'resource_delete'?: number;
    private 'resource_import'?: number;
    public constructor() { 
    }
    public withResourceAdd(resourceAdd: number): ExecutionPlanSummary {
        this['resource_add'] = resourceAdd;
        return this;
    }
    public set resourceAdd(resourceAdd: number  | undefined) {
        this['resource_add'] = resourceAdd;
    }
    public get resourceAdd(): number | undefined {
        return this['resource_add'];
    }
    public withResourceUpdate(resourceUpdate: number): ExecutionPlanSummary {
        this['resource_update'] = resourceUpdate;
        return this;
    }
    public set resourceUpdate(resourceUpdate: number  | undefined) {
        this['resource_update'] = resourceUpdate;
    }
    public get resourceUpdate(): number | undefined {
        return this['resource_update'];
    }
    public withResourceDelete(resourceDelete: number): ExecutionPlanSummary {
        this['resource_delete'] = resourceDelete;
        return this;
    }
    public set resourceDelete(resourceDelete: number  | undefined) {
        this['resource_delete'] = resourceDelete;
    }
    public get resourceDelete(): number | undefined {
        return this['resource_delete'];
    }
    public withResourceImport(resourceImport: number): ExecutionPlanSummary {
        this['resource_import'] = resourceImport;
        return this;
    }
    public set resourceImport(resourceImport: number  | undefined) {
        this['resource_import'] = resourceImport;
    }
    public get resourceImport(): number | undefined {
        return this['resource_import'];
    }
}