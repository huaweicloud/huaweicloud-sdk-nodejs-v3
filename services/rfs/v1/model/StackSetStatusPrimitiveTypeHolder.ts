

export class StackSetStatusPrimitiveTypeHolder {
    public status?: StackSetStatusPrimitiveTypeHolderStatusEnum | string;
    public constructor() { 
    }
    public withStatus(status: StackSetStatusPrimitiveTypeHolderStatusEnum | string): StackSetStatusPrimitiveTypeHolder {
        this['status'] = status;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum StackSetStatusPrimitiveTypeHolderStatusEnum {
    IDLE = 'IDLE',
    OPERATION_IN_PROGRESS = 'OPERATION_IN_PROGRESS',
    DEACTIVATED = 'DEACTIVATED'
}
