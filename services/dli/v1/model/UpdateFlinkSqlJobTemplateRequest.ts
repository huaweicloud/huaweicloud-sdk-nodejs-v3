import { UpdateFlinkSqlJobTemplateRequestBody } from './UpdateFlinkSqlJobTemplateRequestBody';


export class UpdateFlinkSqlJobTemplateRequest {
    private 'template_id'?: number;
    public body?: UpdateFlinkSqlJobTemplateRequestBody;
    public constructor(templateId?: number) { 
        this['template_id'] = templateId;
    }
    public withTemplateId(templateId: number): UpdateFlinkSqlJobTemplateRequest {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: number  | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId(): number | undefined {
        return this['template_id'];
    }
    public withBody(body: UpdateFlinkSqlJobTemplateRequestBody): UpdateFlinkSqlJobTemplateRequest {
        this['body'] = body;
        return this;
    }
}