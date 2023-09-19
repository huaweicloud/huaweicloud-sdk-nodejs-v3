import { StartLogAutoBackupPolicyReq } from './StartLogAutoBackupPolicyReq';


export class StartLogAutoBackupPolicyRequest {
    private 'cluster_id'?: string;
    public body?: StartLogAutoBackupPolicyReq;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): StartLogAutoBackupPolicyRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withBody(body: StartLogAutoBackupPolicyReq): StartLogAutoBackupPolicyRequest {
        this['body'] = body;
        return this;
    }
}