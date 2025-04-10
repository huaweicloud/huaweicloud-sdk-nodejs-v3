import { OperateAntiVirusResultRequestInfo } from './OperateAntiVirusResultRequestInfo';


export class HandleAntiVirusResultRequest {
    private 'enterprise_project_id'?: string;
    public body?: OperateAntiVirusResultRequestInfo;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): HandleAntiVirusResultRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: OperateAntiVirusResultRequestInfo): HandleAntiVirusResultRequest {
        this['body'] = body;
        return this;
    }
}