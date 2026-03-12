

export class ShowCsrRequest {
    public id?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): ShowCsrRequest {
        this['id'] = id;
        return this;
    }
}