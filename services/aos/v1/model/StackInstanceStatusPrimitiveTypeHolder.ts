

export class StackInstanceStatusPrimitiveTypeHolder {
    public status?: StackInstanceStatusPrimitiveTypeHolderStatusEnum | string;
    public constructor() { 
    }
    public withStatus(status: StackInstanceStatusPrimitiveTypeHolderStatusEnum | string): StackInstanceStatusPrimitiveTypeHolder {
        this['status'] = status;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum StackInstanceStatusPrimitiveTypeHolderStatusEnum {
    WAIT_IN_PROGRESS = 'WAIT_IN_PROGRESS',
    CANCEL_COMPLETE = 'CANCEL_COMPLETE',
    OPERATION_IN_PROGRESS = 'OPERATION_IN_PROGRESS',
    OPERATION_FAILED = 'OPERATION_FAILED',
    INOPERABLE = 'INOPERABLE',
    OPERATION_COMPLETE = 'OPERATION_COMPLETE'
}
