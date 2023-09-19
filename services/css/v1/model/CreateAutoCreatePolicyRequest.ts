import { SetRDSBackupCnfReq } from './SetRDSBackupCnfReq';


export class CreateAutoCreatePolicyRequest {
    private 'cluster_id'?: string;
    public body?: SetRDSBackupCnfReq;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): CreateAutoCreatePolicyRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withBody(body: SetRDSBackupCnfReq): CreateAutoCreatePolicyRequest {
        this['body'] = body;
        return this;
    }
}