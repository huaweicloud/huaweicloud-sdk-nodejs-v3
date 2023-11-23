

export class ShowAppTemplateRequest {
    public id?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): ShowAppTemplateRequest {
        this['id'] = id;
        return this;
    }
}