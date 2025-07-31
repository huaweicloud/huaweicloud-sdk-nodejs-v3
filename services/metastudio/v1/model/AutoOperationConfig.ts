

export class AutoOperationConfig {
    public operation?: AutoOperationConfigOperationEnum | string;
    private 'operation_time'?: string;
    public constructor() { 
    }
    public withOperation(operation: AutoOperationConfigOperationEnum | string): AutoOperationConfig {
        this['operation'] = operation;
        return this;
    }
    public withOperationTime(operationTime: string): AutoOperationConfig {
        this['operation_time'] = operationTime;
        return this;
    }
    public set operationTime(operationTime: string  | undefined) {
        this['operation_time'] = operationTime;
    }
    public get operationTime(): string | undefined {
        return this['operation_time'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AutoOperationConfigOperationEnum {
    BLOCK = 'BLOCK',
    DELETE = 'DELETE'
}
