

export class DeleteTemplateRequest {
    public id?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): DeleteTemplateRequest {
        this['id'] = id;
        return this;
    }
}