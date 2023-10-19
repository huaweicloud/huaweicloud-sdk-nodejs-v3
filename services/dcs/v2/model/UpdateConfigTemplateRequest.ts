import { UpdateCustomTemplateBody } from './UpdateCustomTemplateBody';


export class UpdateConfigTemplateRequest {
    private 'template_id'?: string;
    public body?: UpdateCustomTemplateBody;
    public constructor(templateId?: string) { 
        this['template_id'] = templateId;
    }
    public withTemplateId(templateId: string): UpdateConfigTemplateRequest {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: string  | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId(): string | undefined {
        return this['template_id'];
    }
    public withBody(body: UpdateCustomTemplateBody): UpdateConfigTemplateRequest {
        this['body'] = body;
        return this;
    }
}