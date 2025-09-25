import { CreateManualImageScanTaskReqInfo } from './CreateManualImageScanTaskReqInfo';


export class CreateManualImageScanTaskRequest {
    public region?: string;
    private 'enterprise_project_id'?: string;
    private 'global_image_type'?: string;
    public body?: CreateManualImageScanTaskReqInfo;
    public constructor() { 
    }
    public withRegion(region: string): CreateManualImageScanTaskRequest {
        this['region'] = region;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateManualImageScanTaskRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withGlobalImageType(globalImageType: string): CreateManualImageScanTaskRequest {
        this['global_image_type'] = globalImageType;
        return this;
    }
    public set globalImageType(globalImageType: string  | undefined) {
        this['global_image_type'] = globalImageType;
    }
    public get globalImageType(): string | undefined {
        return this['global_image_type'];
    }
    public withBody(body: CreateManualImageScanTaskReqInfo): CreateManualImageScanTaskRequest {
        this['body'] = body;
        return this;
    }
}