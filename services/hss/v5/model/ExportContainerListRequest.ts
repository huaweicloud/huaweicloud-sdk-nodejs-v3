import { ExportContainerListRequestBody } from './ExportContainerListRequestBody';


export class ExportContainerListRequest {
    private 'enterprise_project_id'?: string;
    private 'export_size'?: number;
    public body?: ExportContainerListRequestBody;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ExportContainerListRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withExportSize(exportSize: number): ExportContainerListRequest {
        this['export_size'] = exportSize;
        return this;
    }
    public set exportSize(exportSize: number  | undefined) {
        this['export_size'] = exportSize;
    }
    public get exportSize(): number | undefined {
        return this['export_size'];
    }
    public withBody(body: ExportContainerListRequestBody): ExportContainerListRequest {
        this['body'] = body;
        return this;
    }
}