import { ExportVo } from './ExportVo';


export class ExportStatsOpenRequest {
    private 'enterprise_project_id'?: string;
    public body?: ExportVo;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ExportStatsOpenRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: ExportVo): ExportStatsOpenRequest {
        this['body'] = body;
        return this;
    }
}