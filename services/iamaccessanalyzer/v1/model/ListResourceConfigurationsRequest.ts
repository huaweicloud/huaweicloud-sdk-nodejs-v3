

export class ListResourceConfigurationsRequest {
    private 'analyzer_id'?: string;
    public limit?: number;
    public marker?: string;
    public constructor(analyzerId?: string) { 
        this['analyzer_id'] = analyzerId;
    }
    public withAnalyzerId(analyzerId: string): ListResourceConfigurationsRequest {
        this['analyzer_id'] = analyzerId;
        return this;
    }
    public set analyzerId(analyzerId: string  | undefined) {
        this['analyzer_id'] = analyzerId;
    }
    public get analyzerId(): string | undefined {
        return this['analyzer_id'];
    }
    public withLimit(limit: number): ListResourceConfigurationsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListResourceConfigurationsRequest {
        this['marker'] = marker;
        return this;
    }
}