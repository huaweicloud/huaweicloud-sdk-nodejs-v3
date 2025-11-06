

export class MetaDataResp {
    public count?: number;
    public total?: number;
    public marker?: string;
    public constructor() { 
    }
    public withCount(count: number): MetaDataResp {
        this['count'] = count;
        return this;
    }
    public withTotal(total: number): MetaDataResp {
        this['total'] = total;
        return this;
    }
    public withMarker(marker: string): MetaDataResp {
        this['marker'] = marker;
        return this;
    }
}