

export class Swagger {
    public id?: string;
    public result?: string;
    public constructor() { 
    }
    public withId(id: string): Swagger {
        this['id'] = id;
        return this;
    }
    public withResult(result: string): Swagger {
        this['result'] = result;
        return this;
    }
}