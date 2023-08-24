import { AddHostsGroupRequestInfo } from './AddHostsGroupRequestInfo';


export class AddHostsGroupRequest {
    public region?: string;
    private 'enterprise_project_id'?: string;
    public body?: AddHostsGroupRequestInfo;
    public constructor(region?: string) { 
        this['region'] = region;
    }
    public withRegion(region: string): AddHostsGroupRequest {
        this['region'] = region;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): AddHostsGroupRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: AddHostsGroupRequestInfo): AddHostsGroupRequest {
        this['body'] = body;
        return this;
    }
}