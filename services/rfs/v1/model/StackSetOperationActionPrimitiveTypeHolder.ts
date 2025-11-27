

export class StackSetOperationActionPrimitiveTypeHolder {
    public action?: StackSetOperationActionPrimitiveTypeHolderActionEnum | string;
    public constructor() { 
    }
    public withAction(action: StackSetOperationActionPrimitiveTypeHolderActionEnum | string): StackSetOperationActionPrimitiveTypeHolder {
        this['action'] = action;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum StackSetOperationActionPrimitiveTypeHolderActionEnum {
    CREATE_STACK_INSTANCES = 'CREATE_STACK_INSTANCES',
    DELETE_STACK_INSTANCES = 'DELETE_STACK_INSTANCES',
    DEPLOY_STACK_SET = 'DEPLOY_STACK_SET',
    DEPLOY_STACK_INSTANCES = 'DEPLOY_STACK_INSTANCES',
    UPDATE_STACK_INSTANCES = 'UPDATE_STACK_INSTANCES'
}
