import { UpdateAlarmWhiteListRequestInfo } from './UpdateAlarmWhiteListRequestInfo';


export class UpdateAlarmWhiteListHostRequest {
    public region?: string;
    private 'enterprise_project_id'?: string;
    public body?: UpdateAlarmWhiteListRequestInfo;
    public constructor() { 
    }
    public withRegion(region: string): UpdateAlarmWhiteListHostRequest {
        this['region'] = region;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): UpdateAlarmWhiteListHostRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: UpdateAlarmWhiteListRequestInfo): UpdateAlarmWhiteListHostRequest {
        this['body'] = body;
        return this;
    }
}