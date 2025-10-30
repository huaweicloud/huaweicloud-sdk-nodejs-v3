

export class ZoneDetail {
    public code?: string;
    public name?: string;
    public constructor() { 
    }
    public withCode(code: string): ZoneDetail {
        this['code'] = code;
        return this;
    }
    public withName(name: string): ZoneDetail {
        this['name'] = name;
        return this;
    }
}