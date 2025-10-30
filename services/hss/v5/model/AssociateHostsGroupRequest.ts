import { AssociateHostsGroupRequestInfo } from './AssociateHostsGroupRequestInfo';


export class AssociateHostsGroupRequest {
    private 'enterprise_project_id'?: string;
    public body?: AssociateHostsGroupRequestInfo;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): AssociateHostsGroupRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: AssociateHostsGroupRequestInfo): AssociateHostsGroupRequest {
        this['body'] = body;
        return this;
    }
}