

export class ListWatermarkTemplateRequest {
    private 'template_id'?: Array<number>;
    public page?: number;
    public size?: number;
    public constructor() { 
    }
    public withTemplateId(templateId: Array<number>): ListWatermarkTemplateRequest {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: Array<number>  | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId(): Array<number> | undefined {
        return this['template_id'];
    }
    public withPage(page: number): ListWatermarkTemplateRequest {
        this['page'] = page;
        return this;
    }
    public withSize(size: number): ListWatermarkTemplateRequest {
        this['size'] = size;
        return this;
    }
}