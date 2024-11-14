

export class ListHpcCacheTasksRequest {
    private 'share_id'?: string;
    public type?: string;
    public status?: string;
    public offset?: number;
    public limit?: number;
    private 'start_time'?: string;
    private 'end_time'?: string;
    public constructor(shareId?: string) { 
        this['share_id'] = shareId;
    }
    public withShareId(shareId: string): ListHpcCacheTasksRequest {
        this['share_id'] = shareId;
        return this;
    }
    public set shareId(shareId: string  | undefined) {
        this['share_id'] = shareId;
    }
    public get shareId(): string | undefined {
        return this['share_id'];
    }
    public withType(type: string): ListHpcCacheTasksRequest {
        this['type'] = type;
        return this;
    }
    public withStatus(status: string): ListHpcCacheTasksRequest {
        this['status'] = status;
        return this;
    }
    public withOffset(offset: number): ListHpcCacheTasksRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListHpcCacheTasksRequest {
        this['limit'] = limit;
        return this;
    }
    public withStartTime(startTime: string): ListHpcCacheTasksRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ListHpcCacheTasksRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
}