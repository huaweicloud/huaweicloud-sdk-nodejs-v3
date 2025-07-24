

export class ShowUserExecuteTestCaseInfoRequestBody {
    public offset?: number;
    public limit?: number;
    private 'execute_start_time'?: string;
    private 'execute_end_time'?: string;
    public constructor(offset?: number, limit?: number, executeStartTime?: string, executeEndTime?: string) { 
        this['offset'] = offset;
        this['limit'] = limit;
        this['execute_start_time'] = executeStartTime;
        this['execute_end_time'] = executeEndTime;
    }
    public withOffset(offset: number): ShowUserExecuteTestCaseInfoRequestBody {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ShowUserExecuteTestCaseInfoRequestBody {
        this['limit'] = limit;
        return this;
    }
    public withExecuteStartTime(executeStartTime: string): ShowUserExecuteTestCaseInfoRequestBody {
        this['execute_start_time'] = executeStartTime;
        return this;
    }
    public set executeStartTime(executeStartTime: string  | undefined) {
        this['execute_start_time'] = executeStartTime;
    }
    public get executeStartTime(): string | undefined {
        return this['execute_start_time'];
    }
    public withExecuteEndTime(executeEndTime: string): ShowUserExecuteTestCaseInfoRequestBody {
        this['execute_end_time'] = executeEndTime;
        return this;
    }
    public set executeEndTime(executeEndTime: string  | undefined) {
        this['execute_end_time'] = executeEndTime;
    }
    public get executeEndTime(): string | undefined {
        return this['execute_end_time'];
    }
}