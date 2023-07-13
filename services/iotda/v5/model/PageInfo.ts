

export class PageInfo {
    public count?: number;
    public marker?: string;
    public constructor() { 
    }
    public withCount(count: number): PageInfo {
        this['count'] = count;
        return this;
    }
    public withMarker(marker: string): PageInfo {
        this['marker'] = marker;
        return this;
    }
}