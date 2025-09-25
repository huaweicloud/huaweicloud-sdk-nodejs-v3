import { UpdateAlarmConfigRequestInfo } from './UpdateAlarmConfigRequestInfo';


export class UpdateAlarmConfigRequest {
    public region?: string;
    private 'enterprise_project_id'?: string;
    public body?: UpdateAlarmConfigRequestInfo;
    public constructor() { 
    }
    public withRegion(region: string): UpdateAlarmConfigRequest {
        this['region'] = region;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): UpdateAlarmConfigRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: UpdateAlarmConfigRequestInfo): UpdateAlarmConfigRequest {
        this['body'] = body;
        return this;
    }
}