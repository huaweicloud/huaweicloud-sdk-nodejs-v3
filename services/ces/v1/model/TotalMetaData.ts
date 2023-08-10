

export class TotalMetaData {
    public total?: number;
    public constructor() { 
    }
    public withTotal(total: number): TotalMetaData {
        this['total'] = total;
        return this;
    }
}