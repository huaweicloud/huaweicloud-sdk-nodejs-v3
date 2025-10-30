

export class ShowWatermarkTemplateRequest {
    public id?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): ShowWatermarkTemplateRequest {
        this['id'] = id;
        return this;
    }
}