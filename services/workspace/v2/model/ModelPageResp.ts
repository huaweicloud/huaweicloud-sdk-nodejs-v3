

export class ModelPageResp {
    public total?: number;
    public constructor() { 
    }
    public withTotal(total: number): ModelPageResp {
        this['total'] = total;
        return this;
    }
}