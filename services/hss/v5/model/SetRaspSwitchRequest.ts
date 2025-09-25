import { SetRaspSwitchRequestInfo } from './SetRaspSwitchRequestInfo';


export class SetRaspSwitchRequest {
    private 'enterprise_project_id'?: string;
    public region?: string;
    public body?: SetRaspSwitchRequestInfo;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): SetRaspSwitchRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withRegion(region: string): SetRaspSwitchRequest {
        this['region'] = region;
        return this;
    }
    public withBody(body: SetRaspSwitchRequestInfo): SetRaspSwitchRequest {
        this['body'] = body;
        return this;
    }
}