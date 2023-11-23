

export class ShowFunctionAppRequest {
    public id?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): ShowFunctionAppRequest {
        this['id'] = id;
        return this;
    }
}