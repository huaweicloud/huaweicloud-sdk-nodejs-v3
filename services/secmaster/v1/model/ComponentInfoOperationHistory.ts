

export class ComponentInfoOperationHistory {
    private 'operation_name'?: string;
    private 'operation_time'?: string;
    public constructor() { 
    }
    public withOperationName(operationName: string): ComponentInfoOperationHistory {
        this['operation_name'] = operationName;
        return this;
    }
    public set operationName(operationName: string  | undefined) {
        this['operation_name'] = operationName;
    }
    public get operationName(): string | undefined {
        return this['operation_name'];
    }
    public withOperationTime(operationTime: string): ComponentInfoOperationHistory {
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