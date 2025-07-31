import { CreateGlobalAssetScanTaskRequestInfo } from './CreateGlobalAssetScanTaskRequestInfo';


export class CreateGlobalAssetScanTaskRequest {
    private 'enterprise_project_id'?: string;
    public category?: string;
    public body?: CreateGlobalAssetScanTaskRequestInfo;
    public constructor(category?: string) { 
        this['category'] = category;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateGlobalAssetScanTaskRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withCategory(category: string): CreateGlobalAssetScanTaskRequest {
        this['category'] = category;
        return this;
    }
    public withBody(body: CreateGlobalAssetScanTaskRequestInfo): CreateGlobalAssetScanTaskRequest {
        this['body'] = body;
        return this;
    }
}