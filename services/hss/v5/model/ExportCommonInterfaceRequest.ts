import { ExportCommonInterfaceRequestBody } from './ExportCommonInterfaceRequestBody';


export class ExportCommonInterfaceRequest {
    private 'enterprise_project_id'?: string;
    private 'export_size'?: number;
    public body?: ExportCommonInterfaceRequestBody;
    public constructor(exportSize?: number) { 
        this['export_size'] = exportSize;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ExportCommonInterfaceRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withExportSize(exportSize: number): ExportCommonInterfaceRequest {
        this['export_size'] = exportSize;
        return this;
    }
    public set exportSize(exportSize: number  | undefined) {
        this['export_size'] = exportSize;
    }
    public get exportSize(): number | undefined {
        return this['export_size'];
    }
    public withBody(body: ExportCommonInterfaceRequestBody): ExportCommonInterfaceRequest {
        this['body'] = body;
        return this;
    }
}