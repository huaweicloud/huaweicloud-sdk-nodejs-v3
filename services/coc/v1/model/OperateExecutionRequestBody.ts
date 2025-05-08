

export class OperateExecutionRequestBody {
    private 'execution_id'?: string;
    private 'operate_type'?: string;
    public constructor(executionId?: string, operateType?: string) { 
        this['execution_id'] = executionId;
        this['operate_type'] = operateType;
    }
    public withExecutionId(executionId: string): OperateExecutionRequestBody {
        this['execution_id'] = executionId;
        return this;
    }
    public set executionId(executionId: string  | undefined) {
        this['execution_id'] = executionId;
    }
    public get executionId(): string | undefined {
        return this['execution_id'];
    }
    public withOperateType(operateType: string): OperateExecutionRequestBody {
        this['operate_type'] = operateType;
        return this;
    }
    public set operateType(operateType: string  | undefined) {
        this['operate_type'] = operateType;
    }
    public get operateType(): string | undefined {
        return this['operate_type'];
    }
}