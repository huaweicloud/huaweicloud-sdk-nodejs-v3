import { UpdateSparseBackupPolicyReq } from './UpdateSparseBackupPolicyReq';


export class UpdateSparseBackupPolicyRequest {
    private 'instance_id'?: string;
    public body?: UpdateSparseBackupPolicyReq;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): UpdateSparseBackupPolicyRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: UpdateSparseBackupPolicyReq): UpdateSparseBackupPolicyRequest {
        this['body'] = body;
        return this;
    }
}