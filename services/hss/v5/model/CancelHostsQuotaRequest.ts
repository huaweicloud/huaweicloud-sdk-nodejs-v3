import { CancelHostsQuotaRequestInfo } from './CancelHostsQuotaRequestInfo';


export class CancelHostsQuotaRequest {
    public region?: string;
    private 'enterprise_project_id'?: string;
    public body?: CancelHostsQuotaRequestInfo;
    public constructor() { 
    }
    public withRegion(region: string): CancelHostsQuotaRequest {
        this['region'] = region;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CancelHostsQuotaRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: CancelHostsQuotaRequestInfo): CancelHostsQuotaRequest {
        this['body'] = body;
        return this;
    }
}