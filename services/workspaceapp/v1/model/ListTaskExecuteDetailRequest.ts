

export class ListTaskExecuteDetailRequest {
    private 'execute_history_id'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(executeHistoryId?: string) { 
        this['execute_history_id'] = executeHistoryId;
    }
    public withExecuteHistoryId(executeHistoryId: string): ListTaskExecuteDetailRequest {
        this['execute_history_id'] = executeHistoryId;
        return this;
    }
    public set executeHistoryId(executeHistoryId: string  | undefined) {
        this['execute_history_id'] = executeHistoryId;
    }
    public get executeHistoryId(): string | undefined {
        return this['execute_history_id'];
    }
    public withOffset(offset: number): ListTaskExecuteDetailRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListTaskExecuteDetailRequest {
        this['limit'] = limit;
        return this;
    }
}