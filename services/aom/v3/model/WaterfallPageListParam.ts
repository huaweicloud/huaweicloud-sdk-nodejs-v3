

export class WaterfallPageListParam {
    public marker?: string;
    public limit?: number;
    public constructor() { 
    }
    public withMarker(marker: string): WaterfallPageListParam {
        this['marker'] = marker;
        return this;
    }
    public withLimit(limit: number): WaterfallPageListParam {
        this['limit'] = limit;
        return this;
    }
}