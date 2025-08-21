import { TemplateApplyRequestBody } from './TemplateApplyRequestBody';


export class ApplyDomainTemplateRequest {
    private 'tml_id'?: string;
    public body?: TemplateApplyRequestBody;
    public constructor(tmlId?: string) { 
        this['tml_id'] = tmlId;
    }
    public withTmlId(tmlId: string): ApplyDomainTemplateRequest {
        this['tml_id'] = tmlId;
        return this;
    }
    public set tmlId(tmlId: string  | undefined) {
        this['tml_id'] = tmlId;
    }
    public get tmlId(): string | undefined {
        return this['tml_id'];
    }
    public withBody(body: TemplateApplyRequestBody): ApplyDomainTemplateRequest {
        this['body'] = body;
        return this;
    }
}