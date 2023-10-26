import { MaskSwitchRequest } from './MaskSwitchRequest';


export class ChangeDbTemplateOperationRequest {
    private 'template_id'?: string;
    public body?: MaskSwitchRequest;
    public constructor(templateId?: string) { 
        this['template_id'] = templateId;
    }
    public withTemplateId(templateId: string): ChangeDbTemplateOperationRequest {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: string  | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId(): string | undefined {
        return this['template_id'];
    }
    public withBody(body: MaskSwitchRequest): ChangeDbTemplateOperationRequest {
        this['body'] = body;
        return this;
    }
}