

export class StackSetOperationStatusPrimitiveTypeHolder {
    public status?: StackSetOperationStatusPrimitiveTypeHolderStatusEnum | string;
    public constructor() { 
    }
    public withStatus(status: StackSetOperationStatusPrimitiveTypeHolderStatusEnum | string): StackSetOperationStatusPrimitiveTypeHolder {
        this['status'] = status;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum StackSetOperationStatusPrimitiveTypeHolderStatusEnum {
    QUEUE_IN_PROGRESS = 'QUEUE_IN_PROGRESS',
    OPERATION_IN_PROGRESS = 'OPERATION_IN_PROGRESS',
    OPERATION_COMPLETE = 'OPERATION_COMPLETE',
    OPERATION_FAILED = 'OPERATION_FAILED',
    STOP_IN_PROGRESS = 'STOP_IN_PROGRESS',
    STOP_COMPLETE = 'STOP_COMPLETE',
    STOP_FAILED = 'STOP_FAILED'
}
