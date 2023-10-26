

export class ListHpcCacheTasksRequest {
    private 'share_id'?: string;
    public type?: string;
    public status?: string;
    public offset?: number;
    public limit?: number;
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
}