

export class ListArchiveRulesRequest {
    private 'analyzer_id'?: string;
    public limit?: number;
    public marker?: string;
    public constructor(analyzerId?: string) { 
        this['analyzer_id'] = analyzerId;
    }
    public withAnalyzerId(analyzerId: string): ListArchiveRulesRequest {
        this['analyzer_id'] = analyzerId;
        return this;
    }
    public set analyzerId(analyzerId: string  | undefined) {
        this['analyzer_id'] = analyzerId;
    }
    public get analyzerId(): string | undefined {
        return this['analyzer_id'];
    }
    public withLimit(limit: number): ListArchiveRulesRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListArchiveRulesRequest {
        this['marker'] = marker;
        return this;
    }
}