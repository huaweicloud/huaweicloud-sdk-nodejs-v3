

export class ListNotificationTemplateByNameRequest {
    public name?: string;
    private 'Enterprise-Project-Id'?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): ListNotificationTemplateByNameRequest {
        this['name'] = name;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListNotificationTemplateByNameRequest {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['Enterprise-Project-Id'];
    }
}