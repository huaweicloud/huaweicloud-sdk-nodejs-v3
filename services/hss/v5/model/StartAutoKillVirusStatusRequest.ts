import { ChangeAutoKillVirusStatusRequestInfo } from './ChangeAutoKillVirusStatusRequestInfo';


export class StartAutoKillVirusStatusRequest {
    private 'enterprise_project_id'?: string;
    public body?: ChangeAutoKillVirusStatusRequestInfo;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): StartAutoKillVirusStatusRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: ChangeAutoKillVirusStatusRequestInfo): StartAutoKillVirusStatusRequest {
        this['body'] = body;
        return this;
    }
}