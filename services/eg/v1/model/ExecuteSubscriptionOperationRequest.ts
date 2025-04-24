import { SubscriptionOperateReq } from './SubscriptionOperateReq';


export class ExecuteSubscriptionOperationRequest {
    private 'enterprise_project_id'?: string;
    public body?: SubscriptionOperateReq;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ExecuteSubscriptionOperationRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: SubscriptionOperateReq): ExecuteSubscriptionOperationRequest {
        this['body'] = body;
        return this;
    }
}