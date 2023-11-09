import { UpdateTemplates } from './UpdateTemplates';


export class UpdateTemplateRequest {
    private 'template_id'?: string;
    public body?: UpdateTemplates;
    public constructor(templateId?: string) { 
        this['template_id'] = templateId;
    }
    public withTemplateId(templateId: string): UpdateTemplateRequest {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: string  | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId(): string | undefined {
        return this['template_id'];
    }
    public withBody(body: UpdateTemplates): UpdateTemplateRequest {
        this['body'] = body;
        return this;
    }
}