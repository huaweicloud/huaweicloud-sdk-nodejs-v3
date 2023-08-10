

export class MetaData {
    public count?: number;
    public total?: number;
    public marker?: string;
    public constructor(count?: number, total?: number, marker?: string) { 
        this['count'] = count;
        this['total'] = total;
        this['marker'] = marker;
    }
    public withCount(count: number): MetaData {
        this['count'] = count;
        return this;
    }
    public withTotal(total: number): MetaData {
        this['total'] = total;
        return this;
    }
    public withMarker(marker: string): MetaData {
        this['marker'] = marker;
        return this;
    }
}