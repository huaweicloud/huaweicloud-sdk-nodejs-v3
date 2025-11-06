import { UpdateNotificationTemplate } from './UpdateNotificationTemplate';


export class UpdateNotificationTemplateRequest {
    private 'Enterprise-Project-Id'?: string;
    public body?: UpdateNotificationTemplate;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): UpdateNotificationTemplateRequest {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['Enterprise-Project-Id'];
    }
    public withBody(body: UpdateNotificationTemplate): UpdateNotificationTemplateRequest {
        this['body'] = body;
        return this;
    }
}