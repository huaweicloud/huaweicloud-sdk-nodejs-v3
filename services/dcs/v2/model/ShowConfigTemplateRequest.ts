

export class ShowConfigTemplateRequest {
    private 'template_id'?: string;
    public type?: ShowConfigTemplateRequestTypeEnum | string;
    public constructor(templateId?: string, type?: string) { 
        this['template_id'] = templateId;
        this['type'] = type;
    }
    public withTemplateId(templateId: string): ShowConfigTemplateRequest {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: string  | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId(): string | undefined {
        return this['template_id'];
    }
    public withType(type: ShowConfigTemplateRequestTypeEnum | string): ShowConfigTemplateRequest {
        this['type'] = type;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowConfigTemplateRequestTypeEnum {
    SYS = 'sys',
    USER = 'user'
}
