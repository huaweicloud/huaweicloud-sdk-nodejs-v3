

export class CreateApplicationInstanceReqBody {
    public name?: string;
    private 'template_id'?: string;
    public constructor(name?: string, templateId?: string) { 
        this['name'] = name;
        this['template_id'] = templateId;
    }
    public withName(name: string): CreateApplicationInstanceReqBody {
        this['name'] = name;
        return this;
    }
    public withTemplateId(templateId: string): CreateApplicationInstanceReqBody {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: string  | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId(): string | undefined {
        return this['template_id'];
    }
}