

export class ListInstanceOperationsRequest {
    private 'instance_id'?: string;
    public operation?: ListInstanceOperationsRequestOperationEnum | string;
    public constructor(instanceId?: string, operation?: string) { 
        this['instance_id'] = instanceId;
        this['operation'] = operation;
    }
    public withInstanceId(instanceId: string): ListInstanceOperationsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withOperation(operation: ListInstanceOperationsRequestOperationEnum | string): ListInstanceOperationsRequest {
        this['operation'] = operation;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListInstanceOperationsRequestOperationEnum {
    EXTEND = 'extend'
}
