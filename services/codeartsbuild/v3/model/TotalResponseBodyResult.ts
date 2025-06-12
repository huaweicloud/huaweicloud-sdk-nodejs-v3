

export class TotalResponseBodyResult {
    public total?: number;
    public constructor() { 
    }
    public withTotal(total: number): TotalResponseBodyResult {
        this['total'] = total;
        return this;
    }
}