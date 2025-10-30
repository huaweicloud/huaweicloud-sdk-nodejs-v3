import { ShowVulScanTaskEstimatedTimeRequestInfo } from './ShowVulScanTaskEstimatedTimeRequestInfo';


export class ShowVulScanTaskEstimatedTimeRequest {
    private 'enterprise_project_id'?: string;
    public body?: ShowVulScanTaskEstimatedTimeRequestInfo;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ShowVulScanTaskEstimatedTimeRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: ShowVulScanTaskEstimatedTimeRequestInfo): ShowVulScanTaskEstimatedTimeRequest {
        this['body'] = body;
        return this;
    }
}