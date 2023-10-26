

export class MetaData {
    public count?: number;
    public start?: number;
    public total?: number;
    public constructor() { 
    }
    public withCount(count: number): MetaData {
        this['count'] = count;
        return this;
    }
    public withStart(start: number): MetaData {
        this['start'] = start;
        return this;
    }
    public withTotal(total: number): MetaData {
        this['total'] = total;
        return this;
    }
}