import { SetRemindersConfigRequestInfo } from './SetRemindersConfigRequestInfo';


export class SetRemindersConfigRequest {
    public region?: string;
    private 'enterprise_project_id'?: string;
    public body?: SetRemindersConfigRequestInfo;
    public constructor() { 
    }
    public withRegion(region: string): SetRemindersConfigRequest {
        this['region'] = region;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): SetRemindersConfigRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: SetRemindersConfigRequestInfo): SetRemindersConfigRequest {
        this['body'] = body;
        return this;
    }
}