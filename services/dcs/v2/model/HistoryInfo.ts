

export class HistoryInfo {
    private 'history_id'?: string | undefined;
    public type?: string;
    private 'created_at'?: string | undefined;
    public status?: string;
    public constructor() { 
    }
    public withHistoryId(historyId: string): HistoryInfo {
        this['history_id'] = historyId;
        return this;
    }
    public set historyId(historyId: string | undefined) {
        this['history_id'] = historyId;
    }
    public get historyId() {
        return this['history_id'];
    }
    public withType(type: string): HistoryInfo {
        this['type'] = type;
        return this;
    }
    public withCreatedAt(createdAt: string): HistoryInfo {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt() {
        return this['created_at'];
    }
    public withStatus(status: string): HistoryInfo {
        this['status'] = status;
        return this;
    }
}