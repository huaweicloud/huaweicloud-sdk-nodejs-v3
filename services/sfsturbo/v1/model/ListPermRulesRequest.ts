

export class ListPermRulesRequest {
    private 'share_id'?: string;
    public limit?: number;
    public offset?: number;
    public constructor(shareId?: string) { 
        this['share_id'] = shareId;
    }
    public withShareId(shareId: string): ListPermRulesRequest {
        this['share_id'] = shareId;
        return this;
    }
    public set shareId(shareId: string  | undefined) {
        this['share_id'] = shareId;
    }
    public get shareId(): string | undefined {
        return this['share_id'];
    }
    public withLimit(limit: number): ListPermRulesRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListPermRulesRequest {
        this['offset'] = offset;
        return this;
    }
}