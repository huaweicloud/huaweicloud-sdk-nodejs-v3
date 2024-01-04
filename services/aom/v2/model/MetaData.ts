

export class MetaData {
    public count?: number;
    public start?: string;
    public total?: number;
    public constructor() { 
    }
    public withCount(count: number): MetaData {
        this['count'] = count;
        return this;
    }
    public withStart(start: string): MetaData {
        this['start'] = start;
        return this;
    }
    public withTotal(total: number): MetaData {
        this['total'] = total;
        return this;
    }
}