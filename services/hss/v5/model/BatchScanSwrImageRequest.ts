import { BatchScanPrivateImageRequestInfo } from './BatchScanPrivateImageRequestInfo';


export class BatchScanSwrImageRequest {
    public region?: string;
    private 'enterprise_project_id'?: string;
    public body?: BatchScanPrivateImageRequestInfo;
    public constructor(region?: string) { 
        this['region'] = region;
    }
    public withRegion(region: string): BatchScanSwrImageRequest {
        this['region'] = region;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): BatchScanSwrImageRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: BatchScanPrivateImageRequestInfo): BatchScanSwrImageRequest {
        this['body'] = body;
        return this;
    }
}