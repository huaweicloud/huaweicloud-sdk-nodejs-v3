import { VulBackupStatisticsRequestInfo } from './VulBackupStatisticsRequestInfo';


export class ShowVulBackupStatisticsRequest {
    private 'enterprise_project_id'?: string;
    public body?: VulBackupStatisticsRequestInfo;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ShowVulBackupStatisticsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: VulBackupStatisticsRequestInfo): ShowVulBackupStatisticsRequest {
        this['body'] = body;
        return this;
    }
}