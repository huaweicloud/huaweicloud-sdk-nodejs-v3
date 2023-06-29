

export class ListTemplateRequest {
    private 'template_id'?: Array<number> | undefined;
    public page?: number;
    public size?: number;
    public constructor() { 
    }
    public withTemplateId(templateId: Array<number>): ListTemplateRequest {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: Array<number> | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId() {
        return this['template_id'];
    }
    public withPage(page: number): ListTemplateRequest {
        this['page'] = page;
        return this;
    }
    public withSize(size: number): ListTemplateRequest {
        this['size'] = size;
        return this;
    }
}