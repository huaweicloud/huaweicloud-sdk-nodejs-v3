

export class BaseLineVO {
    public baseline?: string;
    public constructor() { 
    }
    public withBaseline(baseline: string): BaseLineVO {
        this['baseline'] = baseline;
        return this;
    }
}