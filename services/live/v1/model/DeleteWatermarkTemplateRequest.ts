

export class DeleteWatermarkTemplateRequest {
    public id?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): DeleteWatermarkTemplateRequest {
        this['id'] = id;
        return this;
    }
}