

export class ExecutionPlanStatusPrimitiveTypeHolder {
    public status?: ExecutionPlanStatusPrimitiveTypeHolderStatusEnum;
    public constructor() { 
    }
    public withStatus(status: ExecutionPlanStatusPrimitiveTypeHolderStatusEnum): ExecutionPlanStatusPrimitiveTypeHolder {
        this['status'] = status;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ExecutionPlanStatusPrimitiveTypeHolderStatusEnum {
    CREATION_IN_PROGRESS = 'CREATION_IN_PROGRESS',
    CREATION_FAILED = 'CREATION_FAILED',
    AVAILABLE = 'AVAILABLE',
    APPLY_IN_PROGRESS = 'APPLY_IN_PROGRESS',
    APPLIED = 'APPLIED'
}
