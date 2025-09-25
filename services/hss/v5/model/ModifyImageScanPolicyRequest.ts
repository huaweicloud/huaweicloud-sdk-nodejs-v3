import { CycleImageScanPolicyReqInfo } from './CycleImageScanPolicyReqInfo';


export class ModifyImageScanPolicyRequest {
    public region?: string;
    private 'enterprise_project_id'?: string;
    public body?: CycleImageScanPolicyReqInfo;
    public constructor() { 
    }
    public withRegion(region: string): ModifyImageScanPolicyRequest {
        this['region'] = region;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ModifyImageScanPolicyRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: CycleImageScanPolicyReqInfo): ModifyImageScanPolicyRequest {
        this['body'] = body;
        return this;
    }
}