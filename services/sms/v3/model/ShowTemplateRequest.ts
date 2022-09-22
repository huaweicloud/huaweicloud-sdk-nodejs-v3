

export class ShowTemplateRequest {
    public id: string;
    public constructor(id?: any) { 
        this['id'] = id;
    }
    public withId(id: string): ShowTemplateRequest {
        this['id'] = id;
        return this;
    }
}