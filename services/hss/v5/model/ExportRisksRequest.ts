import { ExportRisksRequestBody } from './ExportRisksRequestBody';


export class ExportRisksRequest {
    private 'enterprise_project_id'?: string;
    private 'risk_type'?: string;
    private 'export_size'?: number;
    public body?: ExportRisksRequestBody;
    public constructor(riskType?: string, exportSize?: number) { 
        this['risk_type'] = riskType;
        this['export_size'] = exportSize;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ExportRisksRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withRiskType(riskType: string): ExportRisksRequest {
        this['risk_type'] = riskType;
        return this;
    }
    public set riskType(riskType: string  | undefined) {
        this['risk_type'] = riskType;
    }
    public get riskType(): string | undefined {
        return this['risk_type'];
    }
    public withExportSize(exportSize: number): ExportRisksRequest {
        this['export_size'] = exportSize;
        return this;
    }
    public set exportSize(exportSize: number  | undefined) {
        this['export_size'] = exportSize;
    }
    public get exportSize(): number | undefined {
        return this['export_size'];
    }
    public withBody(body: ExportRisksRequestBody): ExportRisksRequest {
        this['body'] = body;
        return this;
    }
}