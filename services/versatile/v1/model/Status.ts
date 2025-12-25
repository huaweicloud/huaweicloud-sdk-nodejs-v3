

export class Status {
    public code?: number;
    public desc?: string;
    public constructor(code?: number, desc?: string) { 
        this['code'] = code;
        this['desc'] = desc;
    }
    public withCode(code: number): Status {
        this['code'] = code;
        return this;
    }
    public withDesc(desc: string): Status {
        this['desc'] = desc;
        return this;
    }
}