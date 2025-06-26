

export class BasicDTO {
    public id?: string;
    public code?: string;
    public constructor() { 
    }
    public withId(id: string): BasicDTO {
        this['id'] = id;
        return this;
    }
    public withCode(code: string): BasicDTO {
        this['code'] = code;
        return this;
    }
}