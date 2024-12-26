import { SwitchEipStatusDto } from './SwitchEipStatusDto';


export class SwitchAutoProtectStatusRequest {
    private 'project_id'?: string;
    private 'enterprise_project_id'?: string;
    public body?: SwitchEipStatusDto;
    public constructor(projectId?: string) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): SwitchAutoProtectStatusRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): SwitchAutoProtectStatusRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: SwitchEipStatusDto): SwitchAutoProtectStatusRequest {
        this['body'] = body;
        return this;
    }
}