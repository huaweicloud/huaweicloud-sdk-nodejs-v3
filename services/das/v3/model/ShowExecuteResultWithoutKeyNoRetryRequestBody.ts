

export class ShowExecuteResultWithoutKeyNoRetryRequestBody {
    private 'execute_id'?: string;
    public constructor(executeId?: string) { 
        this['execute_id'] = executeId;
    }
    public withExecuteId(executeId: string): ShowExecuteResultWithoutKeyNoRetryRequestBody {
        this['execute_id'] = executeId;
        return this;
    }
    public set executeId(executeId: string  | undefined) {
        this['execute_id'] = executeId;
    }
    public get executeId(): string | undefined {
        return this['execute_id'];
    }
}