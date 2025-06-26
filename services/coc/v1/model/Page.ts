

export class Page {
    public total?: number;
    public constructor() { 
    }
    public withTotal(total: number): Page {
        this['total'] = total;
        return this;
    }
}