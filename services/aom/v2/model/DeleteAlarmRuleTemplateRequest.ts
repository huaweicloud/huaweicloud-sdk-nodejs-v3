import { DeleteAlarmRuleTemplateRequestBody } from './DeleteAlarmRuleTemplateRequestBody';


export class DeleteAlarmRuleTemplateRequest {
    private 'Enterprise-Project-Id'?: string;
    public body?: DeleteAlarmRuleTemplateRequestBody;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): DeleteAlarmRuleTemplateRequest {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['Enterprise-Project-Id'];
    }
    public withBody(body: DeleteAlarmRuleTemplateRequestBody): DeleteAlarmRuleTemplateRequest {
        this['body'] = body;
        return this;
    }
}