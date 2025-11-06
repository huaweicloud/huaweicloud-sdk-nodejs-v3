import { DeleteNotificationRequestBody } from './DeleteNotificationRequestBody';


export class DeleteNotificationTemplateRequest {
    private 'Enterprise-Project-Id'?: string;
    public body?: DeleteNotificationRequestBody;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): DeleteNotificationTemplateRequest {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['Enterprise-Project-Id'];
    }
    public withBody(body: DeleteNotificationRequestBody): DeleteNotificationTemplateRequest {
        this['body'] = body;
        return this;
    }
}