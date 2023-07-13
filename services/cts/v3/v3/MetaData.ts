

export class MetaData {
    public count?: number;
    public marker?: string;
    public constructor() { 
    }
    public withCount(count: number): MetaData {
        this['count'] = count;
        return this;
    }
    public withMarker(marker: string): MetaData {
        this['marker'] = marker;
        return this;
    }
}