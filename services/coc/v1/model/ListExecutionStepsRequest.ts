

export class ListExecutionStepsRequest {
    private 'execution_id'?: string;
    public limit?: number;
    public offset?: number;
    private 'execution_step_id_list'?: Array<string>;
    public constructor(executionId?: string) { 
        this['execution_id'] = executionId;
    }
    public withExecutionId(executionId: string): ListExecutionStepsRequest {
        this['execution_id'] = executionId;
        return this;
    }
    public set executionId(executionId: string  | undefined) {
        this['execution_id'] = executionId;
    }
    public get executionId(): string | undefined {
        return this['execution_id'];
    }
    public withLimit(limit: number): ListExecutionStepsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListExecutionStepsRequest {
        this['offset'] = offset;
        return this;
    }
    public withExecutionStepIdList(executionStepIdList: Array<string>): ListExecutionStepsRequest {
        this['execution_step_id_list'] = executionStepIdList;
        return this;
    }
    public set executionStepIdList(executionStepIdList: Array<string>  | undefined) {
        this['execution_step_id_list'] = executionStepIdList;
    }
    public get executionStepIdList(): Array<string> | undefined {
        return this['execution_step_id_list'];
    }
}