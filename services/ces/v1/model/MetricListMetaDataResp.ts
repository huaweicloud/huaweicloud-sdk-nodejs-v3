

export class MetricListMetaDataResp {
    public count?: number;
    public total?: number;
    public marker?: string;
    public constructor(count?: number, total?: number, marker?: string) { 
        this['count'] = count;
        this['total'] = total;
        this['marker'] = marker;
    }
    public withCount(count: number): MetricListMetaDataResp {
        this['count'] = count;
        return this;
    }
    public withTotal(total: number): MetricListMetaDataResp {
        this['total'] = total;
        return this;
    }
    public withMarker(marker: string): MetricListMetaDataResp {
        this['marker'] = marker;
        return this;
    }
}