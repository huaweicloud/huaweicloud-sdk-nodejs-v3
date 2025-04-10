import { RemoveAlarmWhiteListRequestInfo } from './RemoveAlarmWhiteListRequestInfo';


export class RemoveAlarmWhiteListRequest {
    private 'enterprise_project_id'?: string;
    public body?: RemoveAlarmWhiteListRequestInfo;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): RemoveAlarmWhiteListRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: RemoveAlarmWhiteListRequestInfo): RemoveAlarmWhiteListRequest {
        this['body'] = body;
        return this;
    }
}