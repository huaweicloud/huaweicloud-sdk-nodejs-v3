

export class ShowDevServerRequest {
    public id?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): ShowDevServerRequest {
        this['id'] = id;
        return this;
    }
}