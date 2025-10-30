import { BatchExportLocalVulInfoRequestInfo } from './BatchExportLocalVulInfoRequestInfo';


export class BatchExportLocalVulTaskRequest {
    public region?: string;
    private 'enterprise_project_id'?: string;
    private 'export_size'?: number;
    public body?: BatchExportLocalVulInfoRequestInfo;
    public constructor(region?: string, exportSize?: number) { 
        this['region'] = region;
        this['export_size'] = exportSize;
    }
    public withRegion(region: string): BatchExportLocalVulTaskRequest {
        this['region'] = region;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): BatchExportLocalVulTaskRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withExportSize(exportSize: number): BatchExportLocalVulTaskRequest {
        this['export_size'] = exportSize;
        return this;
    }
    public set exportSize(exportSize: number  | undefined) {
        this['export_size'] = exportSize;
    }
    public get exportSize(): number | undefined {
        return this['export_size'];
    }
    public withBody(body: BatchExportLocalVulInfoRequestInfo): BatchExportLocalVulTaskRequest {
        this['body'] = body;
        return this;
    }
}