import { UpdateAccessPolicyObjectsReq } from './UpdateAccessPolicyObjectsReq';


export class UpdateAccessPolicyObjectsRequest {
    private 'access_policy_id'?: string;
    public body?: UpdateAccessPolicyObjectsReq;
    public constructor(accessPolicyId?: string) { 
        this['access_policy_id'] = accessPolicyId;
    }
    public withAccessPolicyId(accessPolicyId: string): UpdateAccessPolicyObjectsRequest {
        this['access_policy_id'] = accessPolicyId;
        return this;
    }
    public set accessPolicyId(accessPolicyId: string  | undefined) {
        this['access_policy_id'] = accessPolicyId;
    }
    public get accessPolicyId(): string | undefined {
        return this['access_policy_id'];
    }
    public withBody(body: UpdateAccessPolicyObjectsReq): UpdateAccessPolicyObjectsRequest {
        this['body'] = body;
        return this;
    }
}