import { UpdateAlarmTemplateRequestBody } from './UpdateAlarmTemplateRequestBody';


export class UpdateAlarmTemplateRequest {
    private 'template_id'?: string;
    public body?: UpdateAlarmTemplateRequestBody;
    public constructor(templateId?: string) { 
        this['template_id'] = templateId;
    }
    public withTemplateId(templateId: string): UpdateAlarmTemplateRequest {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: string  | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId(): string | undefined {
        return this['template_id'];
    }
    public withBody(body: UpdateAlarmTemplateRequestBody): UpdateAlarmTemplateRequest {
        this['body'] = body;
        return this;
    }
}