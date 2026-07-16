

export class GetDevServerJobTemplateRequest {
    public id?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): GetDevServerJobTemplateRequest {
        this['id'] = id;
        return this;
    }
}