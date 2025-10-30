import { BatchExportSWRBaselineInfoRequestInfo } from './BatchExportSWRBaselineInfoRequestInfo';


export class BatchExportBaselineTaskRequest {
    public region?: string;
    private 'enterprise_project_id'?: string;
    private 'export_size'?: number;
    public body?: BatchExportSWRBaselineInfoRequestInfo;
    public constructor(exportSize?: number) { 
        this['export_size'] = exportSize;
    }
    public withRegion(region: string): BatchExportBaselineTaskRequest {
        this['region'] = region;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): BatchExportBaselineTaskRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withExportSize(exportSize: number): BatchExportBaselineTaskRequest {
        this['export_size'] = exportSize;
        return this;
    }
    public set exportSize(exportSize: number  | undefined) {
        this['export_size'] = exportSize;
    }
    public get exportSize(): number | undefined {
        return this['export_size'];
    }
    public withBody(body: BatchExportSWRBaselineInfoRequestInfo): BatchExportBaselineTaskRequest {
        this['body'] = body;
        return this;
    }
}