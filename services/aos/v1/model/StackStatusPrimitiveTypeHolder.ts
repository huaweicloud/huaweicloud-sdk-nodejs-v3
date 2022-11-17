

export class StackStatusPrimitiveTypeHolder {
    public status?: StackStatusPrimitiveTypeHolderStatusEnum;
    public constructor() { 
    }
    public withStatus(status: StackStatusPrimitiveTypeHolderStatusEnum): StackStatusPrimitiveTypeHolder {
        this['status'] = status;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum StackStatusPrimitiveTypeHolderStatusEnum {
    CREATION_COMPLETE = 'CREATION_COMPLETE',
    DEPLOYMENT_IN_PROGRESS = 'DEPLOYMENT_IN_PROGRESS',
    DEPLOYMENT_FAILED = 'DEPLOYMENT_FAILED',
    DEPLOYMENT_COMPLETE = 'DEPLOYMENT_COMPLETE',
    ROLLBACK_IN_PROGRESS = 'ROLLBACK_IN_PROGRESS',
    ROLLBACK_FAILED = 'ROLLBACK_FAILED',
    ROLLBACK_COMPLETE = 'ROLLBACK_COMPLETE',
    DELETION_IN_PROGRESS = 'DELETION_IN_PROGRESS',
    DELETION_FAILED = 'DELETION_FAILED'
}
