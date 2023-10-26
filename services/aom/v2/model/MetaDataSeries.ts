

export class MetaDataSeries {
    public count?: number;
    public offset?: number;
    public total?: number;
    public nextToken?: number;
    public constructor() { 
    }
    public withCount(count: number): MetaDataSeries {
        this['count'] = count;
        return this;
    }
    public withOffset(offset: number): MetaDataSeries {
        this['offset'] = offset;
        return this;
    }
    public withTotal(total: number): MetaDataSeries {
        this['total'] = total;
        return this;
    }
    public withNextToken(nextToken: number): MetaDataSeries {
        this['nextToken'] = nextToken;
        return this;
    }
}