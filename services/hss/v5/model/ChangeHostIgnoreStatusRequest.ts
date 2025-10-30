import { OperateHostRequestInfo } from './OperateHostRequestInfo';


export class ChangeHostIgnoreStatusRequest {
    private 'enterprise_project_id'?: string;
    public body?: OperateHostRequestInfo;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ChangeHostIgnoreStatusRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: OperateHostRequestInfo): ChangeHostIgnoreStatusRequest {
        this['body'] = body;
        return this;
    }
}