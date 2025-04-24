import { SubscriptionCreateReq } from './SubscriptionCreateReq';


export class CreateSubscriptionRequest {
    private 'enterprise_project_id'?: string;
    public body?: SubscriptionCreateReq;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateSubscriptionRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: SubscriptionCreateReq): CreateSubscriptionRequest {
        this['body'] = body;
        return this;
    }
}