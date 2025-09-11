

export class RestoreHbaInfoRequestBody {
    private 'hba_history_id'?: string;
    public constructor() { 
    }
    public withHbaHistoryId(hbaHistoryId: string): RestoreHbaInfoRequestBody {
        this['hba_history_id'] = hbaHistoryId;
        return this;
    }
    public set hbaHistoryId(hbaHistoryId: string  | undefined) {
        this['hba_history_id'] = hbaHistoryId;
    }
    public get hbaHistoryId(): string | undefined {
        return this['hba_history_id'];
    }
}