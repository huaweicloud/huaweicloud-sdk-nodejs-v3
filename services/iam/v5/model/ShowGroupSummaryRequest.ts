

export class ShowGroupSummaryRequest {
    public limit?: number;
    public marker?: string;
    private 'user_id'?: string;
    public constructor() { 
    }
    public withLimit(limit: number): ShowGroupSummaryRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ShowGroupSummaryRequest {
        this['marker'] = marker;
        return this;
    }
    public withUserId(userId: string): ShowGroupSummaryRequest {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
}