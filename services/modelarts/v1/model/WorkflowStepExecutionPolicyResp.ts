

export class WorkflowStepExecutionPolicyResp {
    private 'execution_policy'?: string;
    private 'use_cache'?: boolean;
    public constructor() { 
    }
    public withExecutionPolicy(executionPolicy: string): WorkflowStepExecutionPolicyResp {
        this['execution_policy'] = executionPolicy;
        return this;
    }
    public set executionPolicy(executionPolicy: string  | undefined) {
        this['execution_policy'] = executionPolicy;
    }
    public get executionPolicy(): string | undefined {
        return this['execution_policy'];
    }
    public withUseCache(useCache: boolean): WorkflowStepExecutionPolicyResp {
        this['use_cache'] = useCache;
        return this;
    }
    public set useCache(useCache: boolean  | undefined) {
        this['use_cache'] = useCache;
    }
    public get useCache(): boolean | undefined {
        return this['use_cache'];
    }
}