

export class Page {
    public count?: number;
    public marker?: string;
    public constructor() { 
    }
    public withCount(count: number): Page {
        this['count'] = count;
        return this;
    }
    public withMarker(marker: string): Page {
        this['marker'] = marker;
        return this;
    }
}