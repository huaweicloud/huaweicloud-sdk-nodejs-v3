

export class GetExecutionRequest {
    private 'execution_id'?: string;
    public constructor(executionId?: string) { 
        this['execution_id'] = executionId;
    }
    public withExecutionId(executionId: string): GetExecutionRequest {
        this['execution_id'] = executionId;
        return this;
    }
    public set executionId(executionId: string  | undefined) {
        this['execution_id'] = executionId;
    }
    public get executionId(): string | undefined {
        return this['execution_id'];
    }
}