import { ExportTaskInfoRequestBody } from './ExportTaskInfoRequestBody';


export class ExportTaskInfoRequest {
    private 'enterprise_project_id'?: string;
    public body?: ExportTaskInfoRequestBody;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ExportTaskInfoRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: ExportTaskInfoRequestBody): ExportTaskInfoRequest {
        this['body'] = body;
        return this;
    }
}