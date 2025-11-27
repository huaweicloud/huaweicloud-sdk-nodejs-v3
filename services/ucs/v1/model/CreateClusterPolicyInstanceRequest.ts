import { UCSConstraintRequest } from './UCSConstraintRequest';


export class CreateClusterPolicyInstanceRequest {
    public clusterid?: string;
    public body?: UCSConstraintRequest;
    public constructor(clusterid?: string) { 
        this['clusterid'] = clusterid;
    }
    public withClusterid(clusterid: string): CreateClusterPolicyInstanceRequest {
        this['clusterid'] = clusterid;
        return this;
    }
    public withBody(body: UCSConstraintRequest): CreateClusterPolicyInstanceRequest {
        this['body'] = body;
        return this;
    }
}