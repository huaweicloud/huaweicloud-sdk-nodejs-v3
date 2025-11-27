import { UCSConstraintRequest } from './UCSConstraintRequest';


export class CreateClusterGroupPolicyInstanceRequest {
    public clustergroupid?: string;
    public body?: UCSConstraintRequest;
    public constructor(clustergroupid?: string) { 
        this['clustergroupid'] = clustergroupid;
    }
    public withClustergroupid(clustergroupid: string): CreateClusterGroupPolicyInstanceRequest {
        this['clustergroupid'] = clustergroupid;
        return this;
    }
    public withBody(body: UCSConstraintRequest): CreateClusterGroupPolicyInstanceRequest {
        this['body'] = body;
        return this;
    }
}