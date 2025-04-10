import { CreateAntiVirusTaskRequestInfo } from './CreateAntiVirusTaskRequestInfo';


export class CreateAntiVirusTaskRequest {
    private 'enterprise_project_id'?: string;
    public body?: CreateAntiVirusTaskRequestInfo;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateAntiVirusTaskRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: CreateAntiVirusTaskRequestInfo): CreateAntiVirusTaskRequest {
        this['body'] = body;
        return this;
    }
}